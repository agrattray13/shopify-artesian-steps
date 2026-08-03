import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Privacy Policy | Artesian Steps",
  description: "Artesian Steps privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="How we collect, use, and protect your information." />
      <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8 text-charcoal/80 leading-relaxed">
          <p>
            Artesian Steps respects your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or make a purchase.
          </p>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly, such as your name, email, phone number, shipping address, and payment details. We also collect browsing data through cookies and analytics tools.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">How We Use Your Information</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Process and fulfill orders</li>
              <li>Communicate about appointments and promotions</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Data Protection</h2>
            <p className="mt-2">
              We implement reasonable security measures to protect your information. Payment details are not stored on our servers and are processed by trusted third-party providers in test or live mode.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal information by contacting us at privacy@artesiansteps.com.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
