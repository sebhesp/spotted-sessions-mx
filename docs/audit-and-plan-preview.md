# Audit and Preview Plan

## What is working

- The project is a clean Next.js 15 App Router app with TypeScript, Tailwind CSS, Framer Motion, and reusable section components.
- The landing already covers the core audience: artists, collaborators, hospitality roles, brands, current team, future sessions, and final philosophy.
- Forms are centralized through `ApplicationForm`, with typed field config, validation, simulated submission, and a natural future handoff point in `lib/submissions.ts`.
- The visual direction has a strong starting point: charcoal, aged cream, bottle green, amber, editorial photography, and a warm live-session mood.
- GitHub is connected, `main` is published, and the app has already built successfully.

## What feels generic or unfinished

- A few section labels and card treatments can feel closer to a role board than an invitation into a creative home.
- The collaborator section needs stronger "Join SPOTTED" framing and more warmth around paid, session-based collaboration.
- The hero and final CTA need more editorial texture and clearer paths for the three audiences.
- The artist form needs to match the final requested field list: "Mensaje" instead of a longer why prompt.
- SEO should use the exact requested title and description, and the project needs a minimal favicon/manifest layer before Vercel preview.

## What is incomplete or risky

- No `public` favicon metadata is configured yet.
- README needs a deployment-ready pass with local, build, Vercel, Supabase, and production notes.
- Forms work, but validation and success state can be made clearer for keyboard and screen-reader users.
- There is no explicit Vercel config, although the project uses the standard Next.js preset.

## Implementation plan

1. Polish the landing experience, copy, role framing, CTAs, and editorial UI details.
2. Finalize form field labels, validation feedback, success behavior, and Supabase-ready submission typing.
3. Update metadata, favicon/manifest, semantic anchors, README, and Vercel deploy notes.
4. Re-run lint, typecheck, build, browser preview checks, commit the requested milestones, and push `main`.
