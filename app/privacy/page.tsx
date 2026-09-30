import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | OotyMade Tourism",
  description:
    "How OotyMade Tourism collects, uses, and protects the information you share with us when enquiring about a trip.",
});

export default function PrivacyPage() {
  return (
    <div className="bg-gradient-to-b from-mint/60 via-mint/20 to-cream">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <h1>Privacy Policy</h1>
          <p className="mt-4 text-sm text-forest/60">Last updated: 30 September 2026</p>
        </div>

        <div className="mt-10 max-w-2xl space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl">What We Collect</h2>
            <p className="mt-4">
              When you fill out our enquiry form, we ask for your name, phone number, travel
              dates, group size, and any message you send us. That&apos;s all we collect — this
              site doesn&apos;t use tracking cookies, ad pixels, or any other hidden data
              collection.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">Why We Collect It</h2>
            <p className="mt-4">
              We use this information for one purpose: to respond to your trip enquiry. Your
              travel dates and group size help us shortlist the right stays and arrange transport;
              your phone number is how our team reaches you to confirm details.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">We Don&apos;t Sell or Share Your Data</h2>
            <p className="mt-4">
              We never sell your information, and we don&apos;t share it with third parties for
              marketing or any other purpose. It stays with the OotyMade Tourism team and is used
              only to plan and arrange your trip.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">Requesting Deletion</h2>
            <p className="mt-4">
              If you&apos;d like us to delete the information you&apos;ve shared with us, email{" "}
              <a href="mailto:support@ootymade.com" className="text-gold-dark underline">
                support@ootymade.com
              </a>{" "}
              and we&apos;ll remove it from our records.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl">Questions</h2>
            <p className="mt-4">
              If anything here is unclear, reach out to us at{" "}
              <a href="mailto:support@ootymade.com" className="text-gold-dark underline">
                support@ootymade.com
              </a>{" "}
              and we&apos;ll be glad to explain.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
