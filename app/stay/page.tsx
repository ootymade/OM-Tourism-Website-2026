import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("stay");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "Stay | OotyMade Tourism",
    description: page?.meta_description,
    image: "/images/stay-hillview.jpg",
  });
}

export default async function StayPage() {
  const page = await getPage("stay");

  if (!page) {
    return (
      <div className="container-page py-16">
        <h1>Stay</h1>
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
      imageSrc="/images/stay-hillview.jpg"
      imageAlt="Stone cottage in the hills, similar to Nilgiris homestays"
    />
  );
}
