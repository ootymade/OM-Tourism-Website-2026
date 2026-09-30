import type { Metadata } from "next";
import { getPage } from "@/lib/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("contact");
  return buildPageMetadata({
    title: page?.meta_title ?? page?.page_title ?? "Contact | OotyMade Tourism",
    description: page?.meta_description,
  });
}

export default async function ContactPage() {
  const page = await getPage("contact");

  return (
    <>
      <PageHero
        title={page?.page_title ?? "Contact"}
        painPoint={page?.pain_point}
        body={page?.body_content}
      />
      <section className="container-page py-16 md:py-24">
        <div className="max-w-xl">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
