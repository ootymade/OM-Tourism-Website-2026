import { sql } from "@/lib/db";

export default async function AboutPage() {
  const [page] = await sql`
    select page_title, pain_point, body_content, cta_text, cta_action
    from pages
    where slug = 'about'
  `;

  if (!page) {
    return <h1>About</h1>;
  }

  return (
    <article>
      <h1>{page.page_title}</h1>
      <p>{page.pain_point}</p>
      <p>{page.body_content}</p>
      {page.cta_text && page.cta_action && (
        <a className="cta-button" href={page.cta_action}>
          {page.cta_text}
        </a>
      )}
    </article>
  );
}
