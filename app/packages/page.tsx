import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { ContentCards } from "@/components/ContentCards";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("packages");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "Packages | OotyMade Tourism",
    description: page?.meta_description,
    image: "/images/packages-family-trip.jpg",
  });
}

export default async function PackagesPage() {
  const page = await getPage("packages");

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
