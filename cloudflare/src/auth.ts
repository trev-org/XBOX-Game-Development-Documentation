import { importPKCS8, SignJWT } from "jose";
import {
	DOCS_HOST,
	DOCS_ORIGIN,
	JWT_TTL_SECONDS,
	SESSION_TTL_SECONDS,
} from "./config";

const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f]/;

export function sanitizeRedirect(value: unknown): string {
	if (
		typeof value !== "string" ||
		!value.startsWith("/") ||
		value.startsWith("//") ||
		value.includes("\\") ||
		CONTROL_CHARACTERS.test(value)
	) {
		return "/";
	}

	try {
		const parsed = new URL(value, DOCS_ORIGIN);
		return parsed.origin === DOCS_ORIGIN ? value : "/";
	} catch {
		return "/";
	}
}

export function isConfiguredPrivateKey(privateKey: string): boolean {
	return (
		privateKey.includes("-----BEGIN PRIVATE KEY-----") &&
		privateKey.includes("-----END PRIVATE KEY-----") &&
		!privateKey.includes("REPLACE_WITH_MINTLIFY_GENERATED_KEY")
	);
}

export async function signMintlifyJwt(
	privateKey: string,
	email: string,
	nowInSeconds = Math.floor(Date.now() / 1000),
): Promise<string> {
	if (!isConfiguredPrivateKey(privateKey)) {
		throw new Error("Mintlify JWT private key is not configured");
	}

	const signingKey = await importPKCS8(privateKey, "EdDSA");

	return new SignJWT({
		host: DOCS_HOST,
		expiresAt: nowInSeconds + SESSION_TTL_SECONDS,
		groups: ["nda"],
		content: {
			email,
			displayName: "NDA Partner",
		},
	})
		.setProtectedHeader({ alg: "EdDSA", typ: "JWT" })
		.setIssuedAt(nowInSeconds)
		.setExpirationTime(nowInSeconds + JWT_TTL_SECONDS)
		.sign(signingKey);
}

export function buildMintlifyCallbackUrl(
	jwt: string,
	redirect: string,
): string {
	const callback = new URL("/login/jwt-callback", DOCS_ORIGIN);
	callback.searchParams.set("redirect", sanitizeRedirect(redirect));
	callback.hash = jwt;
	return callback.toString();
}
