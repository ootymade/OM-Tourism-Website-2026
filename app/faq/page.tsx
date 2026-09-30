import { sql } from "@/lib/db";
import { FaqAccordion } from "@/components/FaqAccordion";

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
