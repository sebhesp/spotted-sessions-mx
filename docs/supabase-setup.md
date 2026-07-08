# Supabase Setup

## Tablas

El archivo `supabase/schema.sql` crea:

- `artist_applications`
- `collaborator_applications`
- `brand_inquiries`

Incluye timestamps, indices por fecha/email, RLS y politicas de insert para `anon`.

## Variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

No se requiere `SUPABASE_SERVICE_ROLE_KEY` para esta version.

## Seguridad

- Los inserts se hacen desde `app/api/applications/route.ts`.
- Hay validacion, sanitizacion basica, honeypot y rate limit en memoria.
- RLS no permite lectura publica.
- La policy de insert exige `privacy_consent = true`.

## Prueba local

1. Agrega variables a `.env.local`.
2. Ejecuta `npm run dev`.
3. Envia `/join` o `/brands`.
4. Verifica el registro en Supabase Table Editor.

Sin variables, el endpoint responde `503` en desarrollo y no finge guardado.
