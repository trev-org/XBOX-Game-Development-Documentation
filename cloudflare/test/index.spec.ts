import {
	env,
	createExecutionContext,
	waitOnExecutionContext,
	SELF,
} from "cloudflare:test";
import {
	exportPKCS8,
	generateKeyPair,
	jwtVerify,
} from "jose";
import {
	beforeAll,
	describe,
	expect,
	it,
} from "vitest";
import {
	buildMintlifyCallbackUrl,
	sanitizeRedirect,
	signMintlifyJwt,
} from "../src/auth";
import {
	DOCS_HOST,
	DOCS_ORIGIN,
	JWT_TTL_SECONDS,
	SESSION_TTL_SECONDS,
} from "../src/config";
import worker, { createWorker } from "../src/index";

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

let privateKeyPem: string;
let publicKey: Awaited<
	ReturnType<typeof generateKeyPair>
>["publicKey"];

beforeAll(async () => {
	const keys = await generateKeyPair("EdDSA", {
		extractable: true,
	});
	privateKeyPem = await exportPKCS8(keys.privateKey);
	publicKey = keys.publicKey;
});

describe("redirect validation", () => {
	it.each([
		"/tools/device-portal",
		"/tools/device-portal?mode=advanced",
		"/",
	])("accepts same-site path %s", (redirect) => {
		expect(sanitizeRedirect(redirect)).toBe(redirect);
	});

	it.each([
		"https://evil.example/path",
		"//evil.example/path",
		"/\\evil.example/path",
		"tools/device-portal",
		"/tools/\nlocation",
		null,
	])("replaces unsafe redirect %s", (redirect) => {
		expect(sanitizeRedirect(redirect)).toBe("/");
	});

	it("places the token in the callback fragment", () => {
		const callback = new URL(
			buildMintlifyCallbackUrl(
				"header.payload.signature",
				"/tools/device-portal",
			),
		);

		expect(callback.origin).toBe(DOCS_ORIGIN);
		expect(callback.pathname).toBe("/login/jwt-callback");
		expect(callback.searchParams.get("redirect")).toBe(
			"/tools/device-portal",
		);
		expect(callback.hash).toBe("#header.payload.signature");
	});
});

describe("Mintlify token", () => {
	const now = 1_800_000_000;

	it("signs the required short-lived NDA claims with EdDSA", async () => {
		const token = await signMintlifyJwt(
			privateKeyPem,
			"partner@example.com",
			now,
		);
		const { payload, protectedHeader } = await jwtVerify(
			token,
			publicKey,
			{
				algorithms: ["EdDSA"],
				currentDate: new Date(now * 1000),
			},
		);

		expect(protectedHeader).toMatchObject({
			alg: "EdDSA",
			typ: "JWT",
		});
		expect(payload).toMatchObject({
			host: DOCS_HOST,
			iat: now,
			exp: now + JWT_TTL_SECONDS,
			expiresAt: now + SESSION_TTL_SECONDS,
			groups: ["nda"],
			content: {
				email: "partner@example.com",
				displayName: "NDA Partner",
			},
		});
	});

	it("is rejected after the ten-second handoff window", async () => {
		const token = await signMintlifyJwt(
			privateKeyPem,
			"partner@example.com",
			now,
		);

		await expect(
			jwtVerify(token, publicKey, {
				algorithms: ["EdDSA"],
				currentDate: new Date(
					(now + JWT_TTL_SECONDS + 1) * 1000,
				),
			}),
		).rejects.toThrow(/timestamp check failed/i);
	});
});

describe("Xbox auth mock Worker", () => {
	it("renders the mock sign-in and preserves a safe destination", async () => {
		const request = new IncomingRequest(
			"https://auth.example/login?redirect=%2Ftools%2Fdevice-portal%3Ftab%3Da%26mode%3Db",
		);
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		await waitOnExecutionContext(ctx);

		expect(response.status).toBe(200);
		expect(response.headers.get("cache-control")).toBe("no-store");
		expect(await response.text()).toContain(
			'value="/tools/device-portal?tab=a&amp;mode=b"',
		);
	});

	it("does not reflect an external destination into the form", async () => {
		const response = await SELF.fetch(
			"https://auth.example/login?redirect=https%3A%2F%2Fevil.example",
		);

		expect(await response.text()).toContain('name="redirect" value="/"');
	});

	it("signs in the mock user and redirects to Mintlify", async () => {
		const configuredWorker = createWorker(privateKeyPem);
		const request = new IncomingRequest(
			"https://auth.example/login",
			{
				method: "POST",
				headers: {
					"Content-Type":
						"application/x-www-form-urlencoded",
				},
				body: new URLSearchParams({
					email: "partner@example.com",
					redirect: "/tools/device-portal",
				}).toString(),
			},
		);
		const ctx = createExecutionContext();
		const response = await configuredWorker.fetch(
			request,
			env,
			ctx,
		);
		await waitOnExecutionContext(ctx);

		expect(response.status).toBe(302);
		const location = new URL(
			response.headers.get("location") ?? "",
		);
		expect(location.origin).toBe(DOCS_ORIGIN);
		expect(location.pathname).toBe("/login/jwt-callback");
		expect(location.searchParams.get("redirect")).toBe(
			"/tools/device-portal",
		);

		const token = location.hash.slice(1);
		const { payload } = await jwtVerify(token, publicKey, {
			algorithms: ["EdDSA"],
		});
		expect(payload.host).toBe(DOCS_HOST);
		expect(payload.groups).toEqual(["nda"]);
	});

	it("fails closed until the Mintlify private key is supplied", async () => {
		const response = await SELF.fetch(
			"https://auth.example/login",
			{
				method: "POST",
				headers: {
					"Content-Type":
						"application/x-www-form-urlencoded",
				},
				body: "email=partner%40example.com&redirect=%2F",
			},
		);

		expect(response.status).toBe(503);
		expect(await response.text()).toContain(
			"not configured with its Mintlify signing key",
		);
	});
});
