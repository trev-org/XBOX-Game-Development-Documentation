# Xbox Mintlify JWT auth mock

A Cloudflare Worker that presents a mock Microsoft sign-in and hands an
EdDSA-signed user session to the Xbox Game Development Mintlify site.

## Configuration

1. In the Mintlify dashboard, open **Authentication**, choose
   **Private → Custom → JWT**, and set the login URL to:

   ```text
   https://xbox-auth-mock.mintli.fyi/login
   ```

2. Generate a JWT signing key and copy the complete PKCS#8 private key.
3. Replace `REPLACE_WITH_MINTLIFY_GENERATED_KEY` in `src/config.ts` with the
   copied key, preserving the `BEGIN PRIVATE KEY` and `END PRIVATE KEY` lines.
4. Confirm `DOCS_HOST` in `src/config.ts` exactly matches the deployed
   documentation hostname.

The signing key is intentionally stored in source for this disposable mock.
Anyone who can read that source can mint an `nda` session. Do not commit the
configured key or reuse this pattern for production authentication.

## Run

```sh
npm install
npm run test:run
npm run dev
```

Open `http://localhost:8787/login?redirect=/tools/device-portal`.

## Deploy

Authenticate Wrangler with the Cloudflare account that owns `mintli.fyi`,
then deploy:

```sh
npx wrangler login
npm run deploy
```

The custom-domain route is defined in `wrangler.jsonc`.
