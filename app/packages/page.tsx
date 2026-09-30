import { sql } from "@/lib/db";
import { PageHero } from "@/components/PageHero";
import { ContentCards } from "@/components/ContentCards";

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
    <>
      <PageHero
        title={page.page_title}
        painPoint={page.pain_point}
        imageSrc="/images/packages-family-trip.jpg"
        imageAlt="Family enjoying a scenic mountain viewpoint together"
      />
      <section className="bg-cream py-16 md:py-24">
        <div className="container-page">
          <h2 className="text-center">Popular Durations</h2>
          <div className="mt-10">
            <ContentCards pageSlug="packages" sectionKey="package_durations" />
          </div>
        </div>
      </section>
      <section className="bg-mint/20 py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2>Packages For Every Occasion</h2>
            {page.body_content && <p className="mt-6">{page.body_content}</p>}
            {page.cta_text && page.cta_action && (
              <a href={page.cta_action} className="btn-primary mt-8">
                {page.cta_text}
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
