import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("about");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "About | OotyMade Tourism",
    description: page?.meta_description,
    image: "/images/about-ooty-lake.jpg",
  });
}

export default async function AboutPage() {
  const page = await getPage("about");

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
