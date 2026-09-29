import { sql } from "@/lib/db";

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
    <article>
      <h1>Frequently Asked Questions</h1>
      <dl className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt>{faq.question}</dt>
            <dd>{faq.answer}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
