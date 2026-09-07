# Seki Smile

Coming soon page for **Seki Smile** (関スマイル) — new-generation toothbrush.

Next.js 16 (App Router, Tailwind CSS v4), deployed as a Docker container on Coolify.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Checks

```bash
pnpm lint
npx tsc --noEmit
```

## Deployment

Coolify builds the repo with the root `Dockerfile` (multi-stage, Next.js
standalone output, non-root, listening on port 3000) and health-checks
`GET /api/health`. Pushing to `main` is what ships.

To reproduce the production image locally:

```bash
docker build -t sekismile .
docker run --rm -p 3000:3000 sekismile
```

### Environment

| Variable | Where | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | build + runtime | Absolute origin used for `metadataBase`, so the generated OG image resolves for crawlers. Falls back to `http://localhost:3000`. |

Set it to the real origin whenever the domain changes — the OG image URL is
baked in at build time, so the site needs a rebuild after a domain change.

## Notes

- The brand logo is the only image and is served unoptimized; `sharp` is
  deliberately not built in this project.
- `AGENTS.md` is written by `next dev` — leave it in place.
