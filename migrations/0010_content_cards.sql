create table content_cards (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null,
  section_key text not null,
  title text not null,
  description text not null,
  cta_text text,
  cta_action text,
  display_order int,
  created_at timestamp default now()
);

insert into content_cards (page_slug, section_key, title, description, cta_action, display_order) values
('home', 'four_ways_we_help', 'Stay', 'Matched to your dates, verified by our team before we recommend it.', '/stay', 1),
('home', 'four_ways_we_help', 'Travel', 'Pre-arranged drivers, no airport-arrival taxi negotiation.', '/travel', 2),
('home', 'four_ways_we_help', 'Experiences', 'Timed and guided so you don''t waste the good hours.', '/experiences', 3),
('home', 'four_ways_we_help', 'Packages', 'One plan, one point of contact, instead of five separate bookings.', '/packages', 4),
('packages', 'package_durations', '1-Day Sightseeing', 'A tightly planned single day covering Ooty''s essentials without feeling rushed.', '/contact', 1),
('packages', 'package_durations', '2-Day Sightseeing', 'Ooty town plus one extension (Coonoor or Doddabetta), paced realistically.', '/contact', 2),
('packages', 'package_durations', '3-Day Sightseeing', 'The full Nilgiris circuit — Ooty, Coonoor, and time for tea estates or a safari.', '/contact', 3);
