import Link from "next/link";
import { sql } from "@/lib/db";

export async function ContentCards({
  pageSlug,
  sectionKey,
}: {
  pageSlug: string;
  sectionKey: string;
}) {
  const cards = await sql`
    select title, description, cta_action
    from content_cards
    where page_slug = ${pageSlug} and section_key = ${sectionKey}
    order by display_order
  `;

  if (cards.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const inner = (
          <>
            <h3 className="font-heading text-lg font-semibold text-forest">{card.title}</h3>
            <p className="mt-2 text-sm text-forest/70 md:text-sm">{card.description}</p>
          </>
        );

        return card.cta_action ? (
          <Link
            key={card.title}
            href={card.cta_action}
            className="group rounded-xl border border-forest/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-md"
          >
            {inner}
          </Link>
        ) : (
          <div key={card.title} className="rounded-xl border border-forest/10 bg-white p-6 shadow-sm">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
