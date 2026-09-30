create table attraction_timings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  distance_km numeric,
  drive_time_min_weekday int,
  drive_time_min_weekend int,
  recommended_visit_min int,
  notes text,
  display_order int
);

insert into attraction_timings (name, distance_km, drive_time_min_weekday, drive_time_min_weekend, recommended_visit_min, notes, display_order) values
('Botanical Garden', 1.5, 10, 15, 60, 'Best early morning, crowded by late morning on weekends', 1),
('Ooty Lake', 2, 10, 20, 60, 'Long boat queues on weekends after 10 AM', 2),
('Rose Garden', 3, 15, 20, 45, 'Best in bloom season only', 3),
('Doddabetta Peak', 9, 25, 45, 60, 'Views best early morning before haze', 4),
('Coonoor', 19, 50, 60, 180, 'Includes travel time only, not time spent there', 5),
('Pykara Lake & Falls', 22, 50, 75, 120, 'One-way time shown, double for return', 6),
('Mudumalai Safari (Theppakadu)', 65, 90, 110, 180, 'Morning safari requires arrival by 6:30-7 AM, on-spot tickets only', 7);
