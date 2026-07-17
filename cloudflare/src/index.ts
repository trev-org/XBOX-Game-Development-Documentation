import {
	buildMintlifyCallbackUrl,
	isConfiguredPrivateKey,
	sanitizeRedirect,
	signMintlifyJwt,
} from "./auth";
import {
	DOCS_HOST,
	MINTLIFY_PRIVATE_KEY,
} from "./config";
import { renderLoginPage } from "./login-page";

const SECURITY_HEADERS = {
	"Cache-Control": "no-store",
	"Content-Security-Policy":
		"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
	"Referrer-Policy": "no-referrer",
	"X-Content-Type-Options": "nosniff",
	"X-Frame-Options": "DENY",
} as const;

function html(body: string, status = 200): Response {
	return new Response(body, {
		status,
		headers: {
			...SECURITY_HEADERS,
			"Content-Type": "text/html; charset=utf-8",
		},
	});
}

function text(body: string, status: number): Response {
	return new Response(body, {
		status,
		headers: {
			...SECURITY_HEADERS,
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}

async function handleLoginPost(
	request: Request,
	privateKey: string,
): Promise<Response> {
	const contentType = request.headers.get("content-type") ?? "";
	if (!contentType.includes("application/x-www-form-urlencoded")) {
		return text("Expected a form submission.", 415);
	}

	const form = await request.formData();
	const emailValue = form.get("email");
	const email = typeof emailValue === "string" ? emailValue.trim() : "";
	if (!email || email.length > 254) {
		return text("Enter a valid mock user email.", 400);
	}

	try {
		const jwt = await signMintlifyJwt(
			privateKey,
			email,
		);
		const callbackUrl = buildMintlifyCallbackUrl(
			jwt,
			sanitizeRedirect(form.get("redirect")),
		);

		return new Response(null, {
			status: 302,
			headers: {
				...SECURITY_HEADERS,
				Location: callbackUrl,
			},
		});
	} catch (error) {
		console.error("Unable to create Mintlify JWT", error);
		return text(
			"The mock login is not configured with its Mintlify signing key.",
			503,
		);
	}
}

export function createWorker(
	privateKey = MINTLIFY_PRIVATE_KEY,
): ExportedHandler<Env> {
	return {
		async fetch(request): Promise<Response> {
			const url = new URL(request.url);

			if (url.pathname === "/" && request.method === "GET") {
				return Response.redirect(
					new URL("/login", url).toString(),
					302,
				);
			}

			if (url.pathname === "/health" && request.method === "GET") {
				return Response.json(
					{
						status: isConfiguredPrivateKey(privateKey)
							? "ok"
							: "configuration-required",
						docsHost: DOCS_HOST,
					},
					{ headers: SECURITY_HEADERS },
				);
			}

			if (url.pathname === "/login") {
				if (request.method === "GET") {
					const redirect = sanitizeRedirect(
						url.searchParams.get("redirect"),
					);
					return html(renderLoginPage(redirect));
				}

				if (request.method === "POST") {
					return handleLoginPost(request, privateKey);
				}

				return text("Method not allowed.", 405);
			}

			return text("Not found.", 404);
		},
	};
}

export default createWorker();
