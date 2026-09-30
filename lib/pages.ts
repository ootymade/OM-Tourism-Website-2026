import { cache } from "react";
import { sql } from "@/lib/db";

export type PageRow = {
  page_title: string;
  meta_title: string | null;
  meta_description: string | null;
  pain_point: string | null;
  body_content: string | null;
  cta_text: string | null;
  cta_action: string | null;
};

export const getPage = cache(async (slug: string): Promise<PageRow | undefined> => {
  const [page] = await sql`
    select page_title, meta_title, meta_description, pain_point, body_content, cta_text, cta_action
    from pages
    where slug = ${slug}
  `;
  return page as PageRow | undefined;
});
