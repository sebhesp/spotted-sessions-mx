# SPOTTED Sessions

SPOTTED Sessions es una plataforma audiovisual de sesiones musicales intimas en Mexico. El concepto central es **El Cuarto de Atras**: un espacio privado que normalmente permanece cerrado y que, durante cada sesion, se vuelve escenario.

Tagline: **When no one's watching... Spotted.**

SPOTTED acompana, escucha, amplifica, eleva, se adapta, documenta y crea junto con el artista. No comunica que descubre artistas ni promete fama futura.

## Stack

- Next.js 15, App Router, React 19 y TypeScript.
- Tailwind CSS con tokens de marca.
- Framer Motion usado de forma puntual y con `prefers-reduced-motion`.
- lucide-react para iconografia funcional.
- Formularios via route handler y Supabase REST.
- Contenido local tipado listo para migrar a CMS.

## Rutas

- `/` Home editorial con hero, ultima sesion, valores, sesiones, artistas, colaboradores, hospitalidad, equipo y marcas.
- `/sessions` Archivo de sesiones con estados `published`, `upcoming` y `draft`.
- `/sessions/[slug]` Ficha individual con video placeholder, fotos, creditos, musicos, audio, marcas y metadata dinamica.
- `/about` Manifiesto, El Cuarto de Atras, valores y equipo.
- `/join` Formularios para artistas y colaboradores.
- `/brands` Propuesta y formulario para marcas.
- `/events` Redirige a `/sessions` por compatibilidad con la ruta legacy.

## Desarrollo

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

La app local corre en `http://localhost:3000`.

## Variables

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

`SUPABASE_SERVICE_ROLE_KEY` no es necesaria para el MVP porque los inserts se hacen desde un route handler usando anon key y RLS con politicas de insert.

## Supabase

1. Crear un proyecto en Supabase.
2. Ejecutar `supabase/schema.sql` en el SQL editor.
3. Copiar `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Agregar esas variables en `.env.local` y en Vercel.
5. Probar un formulario desde `/join` o `/brands`.

Si las variables no existen, los formularios validan campos pero devuelven un mensaje claro de configuracion en desarrollo. No se simula guardado.

## Contenido

- Las sesiones viven en `content/sessions.json`.
- Los valores, equipo y roles viven en `content/site.ts`.
- Los tipos viven en `lib/types.ts`.

Para agregar una sesion:

1. Duplicar un objeto en `content/sessions.json`.
2. Asignar `id`, `slug`, `status`, `date`, artista, track, imagen y creditos.
3. Usar `placeholder: true` hasta que el contenido sea real.
4. Reemplazar imagenes por assets autorizados en `public/images`.
5. Ejecutar `npm run typecheck && npm run test && npm run build`.

## Equipo y roles

- Equipo actual: editar `teamMembers` en `content/site.ts`.
- Roles de colaboracion: editar `collaborationRoles` en `content/site.ts`.
- Los roles ocupados no se presentan como cerrados permanentemente; solo como cubiertos ahora.

## Branding

Los placeholders viven en:

- `public/brand/spotted-isotype.svg`
- `public/brand/spotted-wordmark.svg`
- `public/brand/spotted-lockup.svg`

Las rutas estan centralizadas en `lib/brand.ts`. Cuando llegue el logo final, reemplazar esos SVG sin cambiar componentes.

## Deploy

El objetivo de despliegue es Vercel. Este proyecto no depende de GitHub Pages; `sebhesp.github.io/spotted-sessions-mx/` puede seguir en 404 si Pages no esta configurado como sitio estatico.

Ver `docs/vercel-deployment.md` para pasos exactos.

## Limitaciones conocidas

- Sesiones, artistas, fotos, videos y marcas son placeholder.
- Supabase requiere variables reales para guardar formularios.
- No hay CMS todavia; el modelo local esta preparado para migracion.
- No hay remote Git configurado en este checkout local, por lo que el PR requiere conectar `origin`.
