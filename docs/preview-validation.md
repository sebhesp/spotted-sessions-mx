# Preview Validation

## Branch

- `preview-ready-spotted`

## Local checks

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

## Preview checks

- Hero renders with one H1.
- Navigation anchors target existing sections.
- Required sections are present.
- Artist, collaborator, and brand forms are present with typed field configs.
- Forms have simulated submit state and success copy.
- Metadata includes the requested title and description.
- Manifest and icon routes are generated.
- Vercel config uses the standard Next.js build path.

## Latest local preview result

Validated on `preview-ready-spotted` against `http://127.0.0.1:3002`.

- HTTP status for `/`: `200`
- HTTP status for `/manifest.webmanifest`: `200`
- HTTP status for `/icon.svg`: `200`
- H1 count: `1`
- Required sections found in rendered HTML.
- Future session cards found: Casa Abierta, Mesa Compartida, Archivo Vivo.
- Artist, collaborator, and brand forms found in rendered HTML.
- Requested title and description found in rendered HTML.

## Known non-blockers

- `npm audit` reports 2 moderate transitive vulnerabilities. No forced dependency upgrade was applied because it may introduce breaking changes unrelated to the preview goal.
- Real form storage is intentionally mocked until Supabase is connected.
