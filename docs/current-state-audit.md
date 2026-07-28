# Current State Audit

Fecha: 2026-07-08

## Estado inicial

- Rama inicial: `main`.
- Historial local: `a157a00 Prepare app for local runs`, `efaccda Initial SPOTTED app foundation`.
- No habia remote Git configurado en el checkout local.
- Habia archivos sin trackear previos: `.gh-auth-new.err.log` y `.gh-auth-new.log`; se dejaron intactos.
- No existia `public/` aunque el brief mencionaba una imagen hero.
- No existia `vercel.json`.
- No existian variables `.env*`.
- El README describia una direccion anterior de descubrimiento, eventos y "before the noise".

## Comandos iniciales

- `npm install`: fallo porque `npm` no estaba disponible en el PATH de esta terminal.
- `npm run typecheck`: no existia script `typecheck` en `package.json`.
- Primer intento con pnpm: fallo por `UNABLE_TO_VERIFY_LEAF_SIGNATURE`.
- Se reparo el entorno local usando el Node bundled de Codex y pnpm con SSL permisivo para poder validar.
- Tras reparar dependencias, `eslint .`, `tsc --noEmit` y `next build` pasaban antes de la reestructura.

## Problemas encontrados

- Contenido y posicionamiento contrarios al brief: claims de descubrimiento y eventos.
- Rutas requeridas `/join` y `/brands` no existian.
- Formularios reales no existian.
- No habia schema Supabase.
- No habia sitemap, robots ni manifest dinamico.
- Metadata era minima.
- No habia capa de contenido preparada para CMS.
- GitHub Pages no era una solucion viable para el objetivo del producto.

## Riesgos

- Las credenciales Supabase y Vercel no estan disponibles en el repo.
- Sin remote Git local no se puede publicar rama ni abrir PR desde este entorno.
- Los datos actuales son placeholder y deben reemplazarse antes de produccion editorial.
- El asset visual es generado como placeholder, no fotografia real de produccion.

## Prioridades ejecutadas

1. Mantener el proyecto en Next.js existente.
2. Crear la rama `feature/spotted-platform-refresh`.
3. Rehacer direccion visual y contenido con tokens.
4. Crear rutas requeridas.
5. Implementar formularios con validacion y route handler.
6. Preparar Supabase y Vercel.
7. Agregar SEO, metadata y docs.
8. Validar lint, TypeScript, tests, build y navegador local.

## Decisiones tecnicas

- No se agregaron dependencias nuevas para evitar desalinear `package-lock.json`.
- La integracion Supabase usa REST desde route handlers con anon key y RLS.
- `SUPABASE_SERVICE_ROLE_KEY` no se usa en el MVP.
- El contenido vive en `content/` con tipos en `lib/types.ts`.
- `/events` redirige a `/sessions` para no sostener una ruta legacy inconsistente.
- GitHub Pages se documenta como no principal; Vercel es el destino.
