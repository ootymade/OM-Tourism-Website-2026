"use server";

import { sql } from "@/lib/db";

export type EnquiryFormState = {
  success: boolean;
  error?: string;
};

export async function submitEnquiry(
  _prevState: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";

  if (!name || !phone) {
    return { success: false, error: "Name and phone are required." };
  }

  const travelDates = (formData.get("travelDates") as string | null)?.trim() || null;
  const message = (formData.get("message") as string | null)?.trim() || null;

  const groupSizeRaw = (formData.get("groupSize") as string | null)?.trim();
  const groupSize =
    groupSizeRaw && Number.isInteger(Number(groupSizeRaw)) ? Number(groupSizeRaw) : null;

  await sql`
    insert into enquiries (name, phone, travel_dates, group_size, interest_area, message, status)
    values (${name}, ${phone}, ${travelDates}, ${groupSize}, null, ${message}, 'new')
  `;

  return { success: true };
}
