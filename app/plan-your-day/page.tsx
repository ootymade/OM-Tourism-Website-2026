import type { Metadata } from "next";
import { sql } from "@/lib/db";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { TripFeasibilityChecker, type Attraction } from "@/components/TripFeasibilityChecker";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("plan-your-day");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "Plan Your Day | OotyMade Tourism",
    description: page?.meta_description,
  });
}

export default async function PlanYourDayPage() {
  const [page, attractionRows] = await Promise.all([
    getPage("plan-your-day"),
    sql`
      select id, name, distance_km, drive_time_min_weekday, drive_time_min_weekend,
             recommended_visit_min, notes
      from attraction_timings
      order by display_order
    `,
  ]);
  const attractions = attractionRows as unknown as Attraction[];

  return (
    <>
      <div className="bg-gradient-to-b from-mint/60 via-mint/20 to-cream">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <h1>{page?.page_title ?? "Plan Your Day"}</h1>
            <p className="mt-4">
              Pick the spots you want to see, tell us weekday or weekend and when you&apos;ll
              start, and we&apos;ll tell you honestly whether it fits in one day.
            </p>
          </div>
        </div>
      </div>

      <section className="container-page py-16 md:py-24">
        <TripFeasibilityChecker attractions={attractions} />
      </section>

      {page?.cta_text && page?.cta_action && (
        <section className="bg-forest py-16 text-center text-cream md:py-20">
          <div className="container-page">
            <p className="font-heading text-xl md:text-2xl">{page.cta_text}</p>
            <a href={page.cta_action} className="btn-primary mt-6 inline-flex">
              Contact Us
            </a>
          </div>
        </section>
      )}
    </>
  );
}
