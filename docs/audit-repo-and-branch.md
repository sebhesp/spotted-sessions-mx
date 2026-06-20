# Audit Repo and Branch

## Location and Git State

- Repository: `C:\Users\Us\Documents\spotted-sessions-mx`
- Working branch: `preview-ready-spotted`
- Base branch: `main`
- Remote: `origin` -> `https://github.com/sebhesp/spotted-sessions-mx.git`
- Initial state before changes: clean working tree on `main`, then branch created for preview work.

## Commands Run Before Editing

```bash
pwd
git status
git branch --show-current
git remote -v
ls
npm install
npm run lint
npm run typecheck
npm run build
```

## Audit Notes

### What is working

- Next.js 15 App Router app with TypeScript, Tailwind CSS, Framer Motion, and modular components.
- Required landing sections exist: hero, manifesto, what we do, artists, collaborators, brands, team, future sessions, philosophy, and footer.
- Forms are separated by audience and share a typed reusable component.
- SEO metadata, Open Graph, Twitter card, icon, and manifest are present.
- Vercel configuration exists and build passes.

### What needs refinement

- The preview branch should carry its own audit record and checklist.
- Some copy and cards can feel more like a listing than an intimate invitation into a creative home.
- Mobile form labels and helper text can be made more resilient.
- README can better explain branch-based preview and production handoff.

### What is not broken

- `npm install` completes.
- `npm run lint` passes.
- `npm run typecheck` passes.
- `npm run build` passes.
- No dead CTA anchors were found in the current section map.

### Planned changes

1. Strengthen the editorial/cinematic landing experience.
2. Tighten form UX, validation, and Supabase handoff structure.
3. Update README and Vercel preview docs.
4. Validate build and push the preview branch without force-pushing.
