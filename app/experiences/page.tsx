import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("experiences");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "Experiences | OotyMade Tourism",
    description: page?.meta_description,
    image: "/images/experiences-tea-plantation.jpg",
  });
}

export default async function ExperiencesPage() {
  const page = await getPage("experiences");

  if (!page) {
    return (
      <div className="container-page py-16">
        <h1>Experiences</h1>
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
      imageSrc="/images/experiences-tea-plantation.jpg"
      imageAlt="Lush tea plantation on rolling hills"
    />
  );
}
