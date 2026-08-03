import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Terms & Conditions | Artesian Steps",
  description: "Artesian Steps terms and conditions.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHeader title="Terms & Conditions" subtitle="The terms governing your use of our website and services." />
      <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8 text-charcoal/80 leading-relaxed">
          <p>
            These terms and conditions outline the rules and regulations for the use of the Artesian Steps website and services.
          </p>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Orders & Payment</h2>
            <p className="mt-2">
              By placing an order, you agree to provide accurate and complete information. Payment processing is handled by secure third-party providers. All prices are listed in USD.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Shipping & Returns</h2>
            <p className="mt-2">
              Shipping and return policies are described in our Shipping & Returns page. Custom and altered items are final sale unless otherwise agreed.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Intellectual Property</h2>
            <p className="mt-2">
              All content, images, branding, and product descriptions on this website are the property of Artesian Steps and may not be used without permission.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Limitation of Liability</h2>
            <p className="mt-2">
              Artesian Steps is not liable for indirect, incidental, or consequential damages arising from the use of our website or products beyond the purchase price paid.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
