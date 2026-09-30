"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryFormState } from "@/app/contact/actions";

const initialState: EnquiryFormState = { success: false };

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);

  if (state.success) {
    return (
      <p className="rounded-lg border border-mint bg-mint/40 px-4 py-4 text-forest">
        Thanks — we&apos;ve received your enquiry and will be in touch shortly.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-forest">
        Name
        <input type="text" name="name" required className="field-input" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-forest">
        Phone
        <input type="tel" name="phone" required className="field-input" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-forest">
        Travel Dates
        <input
          type="text"
          name="travelDates"
          placeholder="e.g. 10–15 Dec"
          className="field-input"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-forest">
        Group Size
        <input type="number" name="groupSize" min={1} className="field-input" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-forest">
        Message
        <textarea name="message" rows={4} className="field-input resize-y" />
      </label>
      {state.error && <p className="text-sm font-medium text-red-700">{state.error}</p>}
      <button type="submit" className="btn-primary self-start" disabled={pending}>
        {pending ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
