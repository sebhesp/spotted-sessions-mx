# SPOTTED.

SPOTTED is a Next.js web app foundation for a music and cultural discovery platform focused on emerging talent, intimate events, audiovisual sessions, and editorial curation.

Concept line:

> Talento emergente, capturado antes del ruido.

SPOTTED Sessions documents the moment an emerging artist enters the frame.

## Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Mock data in `lib/data.ts`
- Mobile-first responsive layout

## Local Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

The app should run at `http://localhost:3000`.

## Main Structure

```txt
app/
  page.tsx
  layout.tsx
  globals.css
  about/page.tsx
  events/page.tsx
  sessions/page.tsx
  sessions/[slug]/page.tsx
components/
  ArtistCodeTag.tsx
  BrandStamp.tsx
  Button.tsx
  EventCard.tsx
  Footer.tsx
  FrameCorners.tsx
  Header.tsx
  HeroSpotlight.tsx
  MarqueeText.tsx
  NoiseOverlay.tsx
  SectionLabel.tsx
  SessionCard.tsx
lib/
  data.ts
  utils.ts
```

## Routes

- `/` - SPOTTED home with hero, featured sessions, upcoming events, and manifesto block.
- `/sessions` - SPOTTED Sessions archive with visual filters and session cards.
- `/sessions/[slug]` - Session detail with cinematic placeholder, technical sheet, artist profile, and gallery.
- `/events` - Event listings with ticket/poster visual language.
- `/about` - Brand DNA, Sessions definition, manifesto, keywords, and future vision.

## Brand System

Initial CSS variables live in `app/globals.css`:

```css
--background: #050505;
--foreground: #F2F2F0;
--muted: #7A7A7A;
--border: #242424;
--red: #FF2D2D;
--acid: #A6FF00;
--card: #0B0B0B;
```

The current visual direction uses high contrast, subtle noise, camera frame marks, technical labels, session codes, and documentary-style placeholders.

## GitHub Setup

Git is already initialized locally. GitHub CLI was not available in this environment, so create and connect the remote manually:

```bash
gh repo create spotted-app --private --source=. --remote=origin --push
```

Or create an empty repository named `spotted-app` in GitHub, then run:

```bash
git remote add origin https://github.com/YOUR_USER/spotted-app.git
git branch -M main
git push -u origin main
```

## Recommended Next Steps

- Replace visual placeholders with real stills, session photography, or generated editorial assets.
- Add persistent filters for Sessions and Events.
- Add artist profile pages and event detail pages.
- Connect a CMS or content layer for sessions, events, and editorial notes.
- Add ticketing/newsletter capture once the first event flow is defined.
