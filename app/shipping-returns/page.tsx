import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Shipping & Returns | Artesian Steps",
  description: "Shipping timelines, return policies, and care instructions for your Artesian Steps purchase.",
};

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHeader title="Shipping & Returns" subtitle="Simple, transparent policies for every order." />
      <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Shipping</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              We offer complimentary standard shipping on all orders over $500 within the contiguous United States. Orders below this threshold ship at a flat rate of $25. Express and overnight options are available at checkout.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-charcoal/80">
              <li>Standard shipping: 3–5 business days</li>
              <li>Express shipping: 2 business days</li>
              <li>Overnight shipping: 1 business day</li>
              <li>Custom garments: 4–6 weeks</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Returns</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Items may be returned within 30 days of delivery in original, unworn condition with all tags attached. Footwear must be returned in the original box and unworn.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-charcoal/80">
              <li>Made-to-measure and altered garments are final sale</li>
              <li>Sale items may be returned for store credit only</li>
              <li>Return shipping is complimentary for full-price items</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Cancellations</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Ready-to-wear orders may be cancelled before shipment. Custom orders may be cancelled within 48 hours of placing the order.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
