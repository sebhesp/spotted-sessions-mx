# Brand Implementation

## Tokens

Los tokens viven en `app/globals.css`:

- `--color-black: #000000`
- `--color-charcoal: #0F0F0E`
- `--color-green-deep: #0F2F28`
- `--color-green-bottle: #183A33`
- `--color-cream: #F2EDE2`
- `--color-tobacco: #5A3A2A`
- `--color-burnt-orange: #D35A21`

El naranja se usa como acento para CTAs, foco y pequenos estados.

## Tipografia

- Display editorial: stack serif del sistema.
- Interfaz: stack sans del sistema.
- Creditos: stack mono del sistema.

No se usa Google Fonts para mantener build deterministico y evitar fetch externo durante compilacion.

## Logo

Placeholders:

- `public/brand/spotted-isotype.svg`
- `public/brand/spotted-wordmark.svg`
- `public/brand/spotted-lockup.svg`

Rutas centralizadas en `lib/brand.ts`.

Cuando llegue el SVG final, reemplazar los archivos sin editar componentes.

## Imagen

`public/images/back-room-hero.webp` es un placeholder generado para representar El Cuarto de Atras. Debe reemplazarse por fotografia real o asset aprobado cuando exista produccion.
