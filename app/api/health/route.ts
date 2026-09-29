import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const rows = await sql`select count(*)::int as page_count from pages`;
  return NextResponse.json({ ok: true, pages: rows[0].page_count });
}
