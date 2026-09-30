import { sql } from "@/lib/db";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";

export default async function ContactPage() {
  const [page] = await sql`
    select page_title, pain_point, body_content
    from pages
    where slug = 'contact'
  `;

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
