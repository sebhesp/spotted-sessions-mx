-- SPOTTED Sessions Supabase schema
-- Run this in the Supabase SQL editor for the target project.
-- Required environment variables in Vercel/local:
-- NEXT_PUBLIC_SUPABASE_URL
-- NEXT_PUBLIC_SUPABASE_ANON_KEY

create extension if not exists pgcrypto;

create table if not exists public.artist_applications (
  id uuid primary key default gen_random_uuid(),
  artist_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  city text not null,
  music_description text not null,
  music_links text,
  instagram text,
  tiktok text,
  youtube text,
  proposed_song text not null,
  approximate_musicians text,
  initial_technical_needs text,
  message text,
  privacy_consent boolean not null default false,
  source text not null default 'spotted-sessions-web',
  created_at timestamptz not null default now()
);

create table if not exists public.collaborator_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  city text not null,
  role text not null,
  portfolio text,
  instagram text,
  experience text not null,
  availability text,
  rate_range text,
  own_equipment text,
  message text,
  privacy_consent boolean not null default false,
  source text not null default 'spotted-sessions-web',
  created_at timestamptz not null default now()
);

create table if not exists public.brand_inquiries (
  id uuid primary key default gen_random_uuid(),
  contact_name text not null,
  company text not null,
  position text,
  email text not null,
  phone text,
  collaboration_type text not null,
  estimated_budget text,
  objective text not null,
  message text,
  privacy_consent boolean not null default false,
  source text not null default 'spotted-sessions-web',
  created_at timestamptz not null default now()
);

create index if not exists artist_applications_created_at_idx on public.artist_applications (created_at desc);
create index if not exists artist_applications_email_idx on public.artist_applications (email);
create index if not exists collaborator_applications_created_at_idx on public.collaborator_applications (created_at desc);
create index if not exists collaborator_applications_email_idx on public.collaborator_applications (email);
create index if not exists brand_inquiries_created_at_idx on public.brand_inquiries (created_at desc);
create index if not exists brand_inquiries_email_idx on public.brand_inquiries (email);

alter table public.artist_applications enable row level security;
alter table public.collaborator_applications enable row level security;
alter table public.brand_inquiries enable row level security;

drop policy if exists "Allow consented artist inserts" on public.artist_applications;
create policy "Allow consented artist inserts"
on public.artist_applications
for insert
to anon
with check (privacy_consent = true);

drop policy if exists "Allow consented collaborator inserts" on public.collaborator_applications;
create policy "Allow consented collaborator inserts"
on public.collaborator_applications
for insert
to anon
with check (privacy_consent = true);

drop policy if exists "Allow consented brand inserts" on public.brand_inquiries;
create policy "Allow consented brand inserts"
on public.brand_inquiries
for insert
to anon
with check (privacy_consent = true);

grant insert on public.artist_applications to anon;
grant insert on public.collaborator_applications to anon;
grant insert on public.brand_inquiries to anon;

comment on table public.artist_applications is 'Artist applications submitted from the SPOTTED Sessions website.';
comment on table public.collaborator_applications is 'Collaborator applications submitted from the SPOTTED Sessions website.';
comment on table public.brand_inquiries is 'Brand collaboration inquiries submitted from the SPOTTED Sessions website.';
