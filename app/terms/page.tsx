import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | OotyMade Tourism",
  description: "The terms that apply when you enquire about or book a trip through OotyMade Tourism.",
});

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-mint/60 via-mint/20 to-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <h1>Terms of Service</h1>
          <p className="mt-4 text-sm text-forest/60">Last updated: 30 September 2026</p>
        </div>

        <div className="mt-10 max-w-2xl space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl">This Is an Enquiry-Led Service</h2>
            <p className="mt-4">
              OotyMade Tourism doesn&apos;t work like an instant-booking platform. When you submit
              an enquiry — through the contact form or WhatsApp — our team reviews it and gets
              back to you with options based on what&apos;s actually available. Submitting an
              enquiry doesn&apos;t confirm a booking on its own.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">Availability Isn&apos;t Guaranteed</h2>
            <p className="mt-4">
              Stays, drivers, and experiences are arranged based on availability at the time we
              respond to you. Ooty is a popular destination with limited capacity, especially in
              peak season, so we recommend enquiring as early as you can.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">What We Arrange</h2>
            <p className="mt-4">
              We help plan and coordinate stays, transport, and guided experiences in and around
              Ooty, Coonoor, and Kotagiri. Many of these services — hotels, drivers, guides — are
              provided by third parties we work with, not directly by OotyMade Tourism.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">Limitation of Liability</h2>
            <p className="mt-4">
              We do our best to recommend reliable stays and arrange dependable transport, but we
              can&apos;t guarantee against things outside our control — weather, road closures,
              vehicle breakdowns, or a property not meeting expectations on a given day. OotyMade
              Tourism&apos;s liability for any issue arising from your trip is limited to the
              amount you paid us directly for our services. We&apos;re not liable for indirect or
              consequential losses, such as missed connections or lost wages.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">Changes to These Terms</h2>
            <p className="mt-4">
              We may update these terms occasionally as our services evolve. The latest version
              will always be available on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">Questions</h2>
            <p className="mt-4">
              If anything here is unclear, reach out to us at{" "}
              <a href="mailto:support@ootymade.com" className="text-gold-dark underline">
                support@ootymade.com
              </a>{" "}
              before booking.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
