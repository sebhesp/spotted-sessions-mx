# Audit and Complete Preview

## Current Location

- Path: `C:\Users\Us\Documents\spotted-sessions-mx`
- Branch: `preview-ready-spotted`
- Remote: `origin` -> `https://github.com/sebhesp/spotted-sessions-mx.git`
- Initial state for this pass: clean working tree, branch tracking `origin/preview-ready-spotted`.

## Pre-edit Commands

```bash
pwd
git status
git branch --show-current
git remote -v
ls
npm install
```

## What Is Working

- App Router architecture is clean and modular.
- Required landing sections exist.
- The site has a warm visual foundation with charcoal, aged cream, bottle green, amber, and editorial photography.
- Artist, collaborator, and brand forms exist with frontend validation and simulated submission.
- SEO metadata, Open Graph, Twitter card, manifest, and favicon placeholder exist.
- `npm install` completes.

## What Is Incomplete

- Future session cards need the exact names, states, and focus copy requested for a presentable first preview.
- The hero secondary CTA should use the exact user-facing label "Unirme al equipo".
- Open role badges should use allowed status language, especially "Abierto".

## What Feels Generic

- The future session cards still read too much like placeholders.
- Some role card microcopy can be more elegant without hiding the role status.

## What Is Broken

- No critical runtime, TypeScript, or build issue was detected before editing.
- `npm audit` still reports 2 moderate transitive vulnerabilities. No forced upgrade is planned for preview because it may introduce unrelated breaking changes.

## Changes Planned

1. Align CTAs, collaborator copy, role statuses, and session cards with the final brief.
2. Improve session cards so they look like an intentional future archive, not generic placeholders.
3. Re-run lint and build, verify local preview content, and push the preview branch.
