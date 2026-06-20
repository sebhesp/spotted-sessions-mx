# SPOTTED Sessions MX

**SPOTTED Sessions MX** is a landing/app for presenting SPOTTED to emerging artists, creative collaborators, chefs, hospitality teams, brands, and sponsors.

SPOTTED is a creative home for emerging artists. We create live music sessions with intention, community, hospitality, and care for the details around the performance.

> No perseguimos la viralidad vacía. Perseguimos la conexión.

## Stack

- Next.js 15
- TypeScript
- App Router
- Tailwind CSS
- Framer Motion
- lucide-react
- Frontend forms with basic validation
- Supabase-ready submission layer
- Vercel-ready configuration

## Local Development

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

Current preview work is on:

```bash
git switch preview-ready-spotted
```

## Scripts

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Project Structure

```txt
app/
  icon.svg
  layout.tsx
  manifest.ts
  page.tsx
components/
  application-form.tsx
  artists-section.tsx
  brands-section.tsx
  collaborators-section.tsx
  fade-in.tsx
  footer.tsx
  header.tsx
  hero.tsx
  manifesto.tsx
  philosophy-section.tsx
  role-card.tsx
  section-heading.tsx
  sessions-section.tsx
  team-section.tsx
  what-we-do.tsx
docs/
  audit-and-plan-preview.md
  vercel-preview-checklist.md
lib/
  constants.ts
  submissions.ts
  types.ts
public/
  spotted-session-hero.png
styles/
  globals.css
```

## Landing Sections

- Hero
- Manifiesto
- Qué hacemos
- Para artistas
- Join SPOTTED / colaboradores
- Marcas y patrocinadores
- Equipo actual
- Sesiones futuras
- Filosofía final
- Footer

## Future Sessions Included

- `Session 001 — Casa Abierta`: primera sesión piloto con artista emergente.
- `Session 002 — Mesa Compartida`: sesión con hospitalidad, cocina y comunidad.
- `Session 003 — Archivo Vivo`: documentación visual y musical de artistas emergentes.

Each card is prepared to later include artist, date, credits, participating team, allied brands, photos, video, and description.

## Forms

The app includes three separate frontend forms:

- Artist applications
- Collaborator applications
- Brand inquiries

The reusable form component lives in `components/application-form.tsx`. Field configuration lives in `lib/constants.ts`.

The current submission handler is simulated in `lib/submissions.ts`. It is structured so it can later be replaced with Supabase inserts.

Recommended Supabase tables:

- `artist_applications`
- `collaborator_applications`
- `brand_inquiries`

Environment variables are prepared in `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

When moving from mock submissions to real storage, replace `submitApplication` in `lib/submissions.ts` with a server-side route or server action that inserts into the right table based on `submissionTableByKind`.

## SEO and Sharing

Metadata is configured in `app/layout.tsx`:

- Title
- Description
- Canonical URL
- Open Graph
- Twitter card
- Manifest
- Icon

Before production, update `metadataBase` with the final domain.

## Deploy to Vercel

The repository is ready for Vercel preview.

1. Import the GitHub repo in Vercel.
2. Select the branch `preview-ready-spotted` for a preview deployment, or merge it into `main` when approved.
3. Select the Next.js preset.
4. Use Node.js 22 if prompted.
5. Build command: `npm run build`.
6. Install command: `npm install`.
7. Deploy.

The optional `vercel.json` keeps preview settings explicit.

## Production Notes

Recommended next steps before collecting real submissions:

- Connect Supabase with server-side form handling.
- Add spam protection or rate limiting for public forms.
- Add privacy/contact language near forms.
- Replace session placeholders with real artists, credits, photos, video, and partner brands.
- Add the final domain to `metadataBase`.
- Add analytics only after deciding what matters to measure.
- Run a final visual pass in Vercel preview after the domain, Supabase, and real session content are connected.
