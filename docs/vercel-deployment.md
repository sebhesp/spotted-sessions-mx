# Vercel Deployment

1. Importa el repo `sebhesp/spotted-sessions-mx` en Vercel y selecciona framework Next.js.
2. Usa branch `feature/spotted-platform-refresh` para preview o `main` cuando el PR sea mergeado.
3. Configura `NEXT_PUBLIC_SITE_URL` con la URL final o preview.
4. Agrega `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` si los formularios deben guardar.
5. Confirma comandos: install `npm install`, build `npm run build`.
6. Deploy y verifica `/`, `/sessions`, `/join`, `/brands`, `/sitemap.xml` y un envio de formulario.

GitHub Pages no es el destino principal. `sebhesp.github.io/spotted-sessions-mx/` puede seguir mostrando 404 porque este proyecto no se publica ahi como export estatico.
