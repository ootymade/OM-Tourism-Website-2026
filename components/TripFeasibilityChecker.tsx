"use client";

import { useMemo, useState } from "react";

export type Attraction = {
  id: string;
  name: string;
  distance_km: string | number | null;
  drive_time_min_weekday: number | null;
  drive_time_min_weekend: number | null;
  recommended_visit_min: number | null;
  notes: string | null;
};

function formatMinutes(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

function addMinutesToTime(time: string, minutesToAdd: number) {
  const [h, m] = time.split(":").map(Number);
  const totalStart = h * 60 + m;
  const wrapped = (totalStart + minutesToAdd) % (24 * 60);
  const hh = Math.floor(wrapped / 60);
  const mm = wrapped % 60;
  const period = hh >= 12 ? "PM" : "AM";
  const hour12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${hour12}:${mm.toString().padStart(2, "0")} ${period}`;
}

export function TripFeasibilityChecker({ attractions }: { attractions: Attraction[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [dayType, setDayType] = useState<"weekday" | "weekend">("weekday");
  const [startTime, setStartTime] = useState("08:00");

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const breakdown = useMemo(
    () =>
      attractions
        .filter((a) => selected.has(a.id))
        .map((a) => ({
          ...a,
          drive: (dayType === "weekday" ? a.drive_time_min_weekday : a.drive_time_min_weekend) ?? 0,
          visit: a.recommended_visit_min ?? 0,
        })),
    [attractions, selected, dayType]
  );

  const totalDrive = breakdown.reduce((sum, a) => sum + a.drive, 0);
  const totalVisit = breakdown.reduce((sum, a) => sum + a.visit, 0);
  const totalMin = totalDrive + totalVisit;
  const totalHours = totalMin / 60;

  let verdict: { label: string; tone: "good" | "tight" | "bad" } | null = null;
  if (breakdown.length > 0) {
    if (totalHours < 6) {
      verdict = { label: "Comfortable — this fits well in one day", tone: "good" };
    } else if (totalHours <= 9) {
      verdict = { label: "Tight but doable — start early and keep visits brief", tone: "tight" };
    } else {
      verdict = {
        label: "Too much for one day — consider splitting into two days or removing a stop",
        tone: "bad",
      };
    }
  }

  const finishTime = breakdown.length > 0 ? addMinutesToTime(startTime, totalMin) : null;

  const toneStyles: Record<string, string> = {
    good: "border-mint bg-mint/40 text-forest",
    tight: "border-gold bg-gold/10 text-forest",
    bad: "border-red-300 bg-red-50 text-red-800",
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h2 className="text-xl md:text-2xl">Choose Your Stops</h2>
        <div className="mt-4 flex flex-col gap-3">
          {attractions.map((a) => (
            <label
              key={a.id}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-forest/10 bg-white p-4 transition hover:border-gold"
            >
              <input
                type="checkbox"
                checked={selected.has(a.id)}
                onChange={() => toggle(a.id)}
                className="mt-1 h-4 w-4 accent-gold"
              />
              <span>
                <span className="block font-medium text-forest">{a.name}</span>
                {a.notes && <span className="mt-0.5 block text-sm text-forest/60">{a.notes}</span>}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <span className="block text-sm font-medium text-forest">Day Type</span>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={() => setDayType("weekday")}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                  dayType === "weekday"
                    ? "border-gold bg-gold text-forest"
                    : "border-forest/20 bg-white text-forest"
                }`}
              >
                Weekday
              </button>
              <button
                type="button"
                onClick={() => setDayType("weekend")}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                  dayType === "weekend"
                    ? "border-gold bg-gold text-forest"
                    : "border-forest/20 bg-white text-forest"
                }`}
              >
                Weekend
              </button>
            </div>
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-medium text-forest">
            Start Time
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="field-input"
            />
          </label>
        </div>
      </div>

      <div className="h-fit rounded-xl border border-forest/10 bg-white p-6 shadow-sm">
        <h2 className="text-xl md:text-2xl">Your Estimate</h2>

        {breakdown.length === 0 ? (
          <p className="mt-4 text-forest/60">Select a few stops above to see your estimate.</p>
        ) : (
          <>
            <ul className="mt-4 flex flex-col gap-3">
              {breakdown.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center justify-between gap-4 border-b border-forest/10 pb-3 text-sm"
                >
                  <span className="font-medium text-forest">{a.name}</span>
                  <span className="whitespace-nowrap text-forest/70">
                    {formatMinutes(a.drive)} drive · {formatMinutes(a.visit)} visit
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-1 text-sm text-forest/80">
              <div className="flex justify-between">
                <span>Total drive time</span>
                <span>{formatMinutes(totalDrive)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total visit time</span>
                <span>{formatMinutes(totalVisit)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-forest/10 pt-2 font-semibold text-forest">
                <span>Total time needed</span>
                <span>{formatMinutes(totalMin)}</span>
              </div>
              {finishTime && (
                <div className="flex justify-between text-forest/60">
                  <span>Estimated finish</span>
                  <span>{finishTime}</span>
                </div>
              )}
            </div>

            {verdict && (
              <div className={`mt-6 rounded-lg border px-4 py-4 font-medium ${toneStyles[verdict.tone]}`}>
                {verdict.label}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
