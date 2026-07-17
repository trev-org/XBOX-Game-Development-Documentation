function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll('"', "&quot;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
}

export function renderLoginPage(redirect: string): string {
	const safeRedirect = escapeHtml(redirect);

	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Sign in | Xbox documentation</title>
		<style>
			:root {
				color-scheme: light;
				font-family: "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
				background: #f2f2f2;
				color: #1b1b1b;
			}
			* { box-sizing: border-box; }
			body {
				margin: 0;
				min-height: 100vh;
				display: grid;
				place-items: center;
				padding: 24px;
				background:
					radial-gradient(circle at 15% 15%, rgb(16 124 16 / 10%), transparent 32rem),
					#f2f2f2;
			}
			main {
				width: min(100%, 440px);
				padding: 44px;
				background: #fff;
				box-shadow: 0 2px 8px rgb(0 0 0 / 16%);
			}
			.logo {
				display: grid;
				grid-template-columns: repeat(2, 10px);
				gap: 2px;
				width: max-content;
				margin-bottom: 28px;
			}
			.logo span { width: 10px; height: 10px; }
			.logo span:nth-child(1) { background: #f25022; }
			.logo span:nth-child(2) { background: #7fba00; }
			.logo span:nth-child(3) { background: #00a4ef; }
			.logo span:nth-child(4) { background: #ffb900; }
			h1 {
				margin: 0 0 12px;
				font-size: 24px;
				font-weight: 600;
				line-height: 1.3;
			}
			p {
				margin: 0 0 24px;
				color: #4a4a4a;
				font-size: 15px;
				line-height: 1.5;
			}
			label {
				display: block;
				margin-bottom: 8px;
				font-size: 14px;
				font-weight: 600;
			}
			input[type="email"] {
				width: 100%;
				padding: 10px 2px;
				border: 0;
				border-bottom: 1px solid #666;
				border-radius: 0;
				font: inherit;
				outline: none;
			}
			input[type="email"]:focus { border-bottom: 2px solid #0067b8; }
			button {
				display: block;
				min-width: 132px;
				margin: 28px 0 0 auto;
				padding: 10px 18px;
				border: 0;
				background: #0067b8;
				color: #fff;
				font: inherit;
				font-weight: 600;
				cursor: pointer;
			}
			button:hover { background: #005da6; }
			.notice {
				margin: 28px 0 0;
				padding-top: 18px;
				border-top: 1px solid #ddd;
				color: #666;
				font-size: 12px;
			}
		</style>
	</head>
	<body>
		<main>
			<div class="logo" aria-label="Microsoft">
				<span></span><span></span><span></span><span></span>
			</div>
			<h1>Sign in</h1>
			<p>Continue to the Xbox Game Development documentation.</p>
			<form method="post" action="/login">
				<input type="hidden" name="redirect" value="${safeRedirect}" />
				<label for="email">Email, phone, or Skype</label>
				<input
					id="email"
					name="email"
					type="email"
					value="nda.partner@example.com"
					autocomplete="username"
					maxlength="254"
					required
				/>
				<button type="submit">Next</button>
			</form>
			<p class="notice">
				Demo sign-in only. No Microsoft credentials are validated or stored.
				Continuing grants the mock <strong>nda</strong> documentation group.
			</p>
		</main>
	</body>
</html>`;
}
