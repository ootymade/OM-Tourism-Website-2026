import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("travel");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "Travel | OotyMade Tourism",
    description: page?.meta_description,
    image: "/images/travel-ghat-road.jpg",
  });
}

export default async function TravelPage() {
  const page = await getPage("travel");

  if (!page) {
    return (
      <div className="container-page py-16">
        <h1>Travel</h1>
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
      imageSrc="/images/travel-ghat-road.jpg"
      imageAlt="Winding hairpin mountain road through green hills"
    />
  );
}
