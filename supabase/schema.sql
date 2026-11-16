create extension if not exists pgcrypto;
create table if not exists public.roms (
 id uuid primary key default gen_random_uuid(), name text not null, version text, android_version text, description text, changelog text, bugs text, download_url text, file_size text, published boolean not null default false, created_at timestamptz not null default now()
);
alter table public.roms enable row level security;
drop policy if exists "Public can read published ROMs" on public.roms;
create policy "Public can read published ROMs" on public.roms for select using (published = true);
drop policy if exists "Authenticated admins can manage ROMs" on public.roms;
create policy "Authenticated admins can manage ROMs" on public.roms for all to authenticated using (true) with check (true);
