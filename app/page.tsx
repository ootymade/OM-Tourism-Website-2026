import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { PullQuote } from "@/components/PullQuote";
import { ContentCards } from "@/components/ContentCards";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "OotyMade Tourism",
    description: page?.meta_description,
    image: "/images/hero-ooty-hills.jpg",
  });
}

export default async function HomePage() {
  const page = await getPage("home");

  if (!page) {
    return (
      <div className="container-page py-16">
        <h1>Home</h1>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={page.page_title}
        painPoint={page.pain_point}
        ctaText={page.cta_text}
        ctaAction={page.cta_action}
        imageSrc="/images/hero-ooty-hills.jpg"
        imageAlt="Misty green hills of Ooty, Tamil Nadu"
      />
      <PullQuote>
        A long-time Ooty resident once put it plainly: most tourist spots feel overrated unless
        someone local is actually showing you around. That&apos;s the entire reason OotyMade
        Tourism exists.
      </PullQuote>
      <section className="bg-cream py-16 md:py-24">
        <div className="container-page">
          <h2 className="text-center">How We Help</h2>
          <div className="mt-10">
            <ContentCards pageSlug="home" sectionKey="four_ways_we_help" />
          </div>
        </div>
      </section>
    </>
  );
}
