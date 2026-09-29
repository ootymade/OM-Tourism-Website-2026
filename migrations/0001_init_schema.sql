create table pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  cluster text,
  page_title text not null,
  meta_title text,
  meta_description text,
  pain_point text,
  body_content text,
  cta_text text,
  cta_action text,
  created_at timestamp default now()
);

create table stay_listings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  area text,
  type text,
  description text,
  verified boolean default false,
  contact_phone text,
  price_range text,
  created_at timestamp default now()
);

create table enquiries (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text,
  travel_dates text,
  group_size int,
  interest_area text,
  message text,
  status text default 'new',
  created_at timestamp default now()
);

create table faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  page_slug text,
  display_order int
);
