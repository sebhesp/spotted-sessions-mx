# QA Checklist

## Comandos

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`

## Navegador

- Home abre en `http://localhost:3000`.
- No hay overflow horizontal en 390, 768 y 1440 px.
- Hay un solo H1 por pagina revisada.
- Header y footer tienen links funcionales.
- `/sessions` muestra archivo y estados.
- `/sessions/[slug]` muestra ficha, metadata, fotos y creditos.
- `/join` muestra dos formularios con labels y errores.
- `/brands` muestra criterios y formulario.
- El endpoint invalido devuelve `422`.
- El endpoint sin Supabase devuelve `503` en desarrollo.

## Accesibilidad

- Skip link presente.
- Focus visible global.
- Labels asociados a inputs.
- `aria-live` para estado de formulario.
- Touch targets de navegacion y CTA de al menos 44 px.
- Motion respeta `prefers-reduced-motion`.

## Pendiente con contenido real

- Reemplazar imagen placeholder.
- Agregar embed real de video.
- Agregar creditos definitivos.
- Validar texto legal de privacidad si aplica.
