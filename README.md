# SPOTTED Sessions MX

Landing/app para presentar SPOTTED Sessions MX a artistas emergentes, colaboradores creativos, chefs, equipos de hospitalidad, marcas y patrocinadores.

SPOTTED Sessions MX es un hogar creativo para artistas emergentes: sesiones musicales en vivo con dirección creativa, video, iluminación, audio, styling, gastronomía, hospitalidad y comunidad.

> No perseguimos la viralidad vacía. Perseguimos la conexión.

## Stack

- Next.js 15
- TypeScript
- App Router
- Tailwind CSS
- Framer Motion
- lucide-react
- Formularios frontend con validación básica
- Estructura lista para conectar Supabase después

## Correr localmente

```bash
npm install
npm run dev
```

La app corre en:

```txt
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Estructura

```txt
app/
  layout.tsx
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
lib/
  constants.ts
  submissions.ts
  types.ts
public/
  spotted-session-hero.png
styles/
  globals.css
```

## Secciones

- Hero
- Manifiesto
- Qué hacemos
- Para artistas
- Para colaboradores
- Para marcas y patrocinadores
- Core Team
- Sesiones
- Filosofía final

## Formularios

Hay tres formularios separados:

- Artistas
- Colaboradores
- Marcas

El componente reutilizable vive en `components/application-form.tsx`. Las configuraciones de campos viven en `lib/constants.ts`.

El envío mock está en `lib/submissions.ts`. Para conectar Supabase después, ese archivo es el punto natural para sustituir la simulación por un `insert` a una tabla como:

- `artist_applications`
- `collaborator_applications`
- `brand_inquiries`

Variables preparadas en `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## SEO

La metadata base vive en `app/layout.tsx` e incluye:

- title
- description
- Open Graph
- Twitter card
- imagen principal

Antes de producción, actualiza `metadataBase` con el dominio real.

## Deploy en Vercel

Este proyecto está listo para Vercel con la configuración estándar de Next.js.

1. Sube el repo a GitHub.
2. Importa el repo en Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output: automático.

Cuando se conecte Supabase, agrega las variables de entorno en Vercel.

## Dirección visual

La identidad usa carbón, crema envejecido, verde botella y ámbar quemado. La intención visual mezcla calidez editorial, fotografía documental, casa creativa, hospitalidad y sesión musical íntima.
