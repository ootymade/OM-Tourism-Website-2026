import { sql } from "@/lib/db";
import { EnquiryForm } from "@/components/EnquiryForm";

export default async function ContactPage() {
  const [page] = await sql`
    select page_title, pain_point, body_content
    from pages
    where slug = 'contact'
  `;

  return (
    <article>
      <h1>{page?.page_title ?? "Contact"}</h1>
      {page && (
        <>
          <p>{page.pain_point}</p>
          <p>{page.body_content}</p>
        </>
      )}
      <EnquiryForm />
    </article>
  );
}
