"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryFormState } from "@/app/contact/actions";

const initialState: EnquiryFormState = { success: false };

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);

  if (state.success) {
    return (
      <p className="form-success">
        Thanks — we&apos;ve received your enquiry and will be in touch shortly.
      </p>
    );
  }

  return (
    <form action={formAction} className="enquiry-form">
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" required />
      </label>
      <label>
        Travel Dates
        <input type="text" name="travelDates" placeholder="e.g. 10–15 Dec" />
      </label>
      <label>
        Group Size
        <input type="number" name="groupSize" min={1} />
      </label>
      <label>
        Message
        <textarea name="message" rows={4} />
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <button type="submit" className="cta-button" disabled={pending}>
        {pending ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
