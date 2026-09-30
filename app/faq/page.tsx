import type { Metadata } from "next";
import { sql } from "@/lib/db";
import { buildPageMetadata } from "@/lib/metadata";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = buildPageMetadata({
  title: "Frequently Asked Questions | OotyMade Tourism",
  description:
    "Answers to common questions about visiting Ooty — E-Pass rules, weather, taxis, and how OotyMade Tourism arranges your trip.",
});

export default async function FaqPage() {
  const faqs = await sql`
    select question, answer
    from faqs
    where page_slug = 'faq'
    order by display_order
  `;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-gradient-to-b from-mint/60 via-mint/20 to-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <h1>Frequently Asked Questions</h1>
          <p className="mt-4">
            Everything you need to know before you plan your trip to Ooty.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <FaqAccordion faqs={faqs as { question: string; answer: string }[]} />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
