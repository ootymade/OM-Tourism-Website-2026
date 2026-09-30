import { sql } from "@/lib/db";
import { PageHero } from "@/components/PageHero";

export default async function AboutPage() {
  const [page] = await sql`
    select page_title, pain_point, body_content, cta_text, cta_action
    from pages
    where slug = 'about'
  `;

  if (!page) {
    return (
      <div className="container-page py-16">
        <h1>About</h1>
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
      imageSrc="/images/about-ooty-lake.jpg"
      imageAlt="Misty hills and lake in Ooty, Tamil Nadu"
    />
  );
}
