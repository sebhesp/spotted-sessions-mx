# Content Model

## Tipos principales

Los tipos viven en `lib/types.ts`:

- `Artist`
- `Session`
- `Track`
- `Credit`
- `TeamMember`
- `Role`
- `BrandPartner`

## Sesiones

Fuente actual: `content/sessions.json`.

Campos clave:

- `id`: codigo editorial, por ejemplo `SS-001`.
- `slug`: URL unica.
- `status`: `published`, `upcoming` o `draft`.
- `featured`: controla la sesion destacada en home.
- `artist`: nombre, ciudad, bio y links.
- `track`: titulo, duracion opcional y descripcion.
- `video`: `embedUrl` futuro, poster y caption.
- `photos`: galeria.
- `credits`: direccion creativa, audio, video, iluminacion, styling, maquillaje, hospitalidad.
- `brandPartners`: integraciones reales o placeholders.
- `placeholder`: debe ser `true` hasta tener contenido real.

## Migracion futura a CMS

El CMS debe mapear estos modelos sin mezclar contenido dentro de componentes. Mantener slugs estables, estados editoriales y campos de metadata social por sesion.
