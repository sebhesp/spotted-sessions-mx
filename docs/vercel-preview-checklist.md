# Vercel Preview Checklist

## Ready now

- `npm install` installs the app dependencies.
- `npm run lint` passes.
- `npm run typecheck` passes.
- `npm run build` passes.
- The app has SEO metadata, Open Graph image, manifest, and icon.
- Forms submit through a simulated frontend handler and are prepared for Supabase integration.
- The repository is connected to GitHub on `main`.

## Vercel setup

1. Import `sebhesp/spotted-sessions-mx` in Vercel.
2. Use the Next.js preset.
3. Keep the default output settings.
4. Use Node.js 22 if prompted.
5. Build command: `npm run build`.
6. Install command: `npm install`.

## Before production

- Replace `metadataBase` with the final domain.
- Connect Supabase tables and server-side insert logic.
- Add analytics only after deciding what should be measured.
- Replace placeholder future-session content with real artists, credits, photos, and video.
- Add privacy/contact language if the forms collect real submissions.
