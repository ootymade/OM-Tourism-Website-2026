"use client";

import { useState } from "react";

type Faq = { question: string; answer: string };

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-forest/10 overflow-hidden rounded-xl border border-forest/10 bg-white">
      {faqs.map((faq) => (
        <FaqItem key={faq.question} faq={faq} />
      ))}
    </div>
  );
}

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-mint/20"
      >
        <span className="font-body font-semibold text-forest">{faq.question}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`h-5 w-5 flex-none text-gold-dark transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="px-5 pb-4 text-forest/80">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
