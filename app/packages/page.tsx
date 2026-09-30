import { sql } from "@/lib/db";
import { PageHero } from "@/components/PageHero";

export default async function PackagesPage() {
  const [page] = await sql`
    select page_title, pain_point, body_content, cta_text, cta_action
    from pages
    where slug = 'packages'
  `;

  if (!page) {
    return (
      <div className="container-page py-16">
        <h1>Packages</h1>
      </div>
    );
  }

  return (
    <PageHero
      title={page.page_title}
      painPoint={page.pain_point}
      body={page.body_content}
      ctaText={page.cta_text}
      ctaAction={page.cta_action}
    />
  );
}
