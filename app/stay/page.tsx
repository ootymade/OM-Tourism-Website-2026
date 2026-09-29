import { sql } from "@/lib/db";

export default async function StayPage() {
  const [page] = await sql`
    select page_title, pain_point, body_content, cta_text, cta_action
    from pages
    where slug = 'stay'
  `;

  if (!page) {
    return <h1>Stay</h1>;
  }

  return (
    <article>
      <h1>{page.page_title}</h1>
      <p>{page.pain_point}</p>
      <p>{page.body_content}</p>
      <a className="cta-button" href={page.cta_action}>
        {page.cta_text}
      </a>
    </article>
  );
}
