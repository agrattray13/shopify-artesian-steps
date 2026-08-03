import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/layout/PageHero"
import { PolicyContent } from "@/components/layout/PolicyContent"
import { Button } from "@/components/ui/button"
import {
  EXPRESS_SHIPPING,
  SHIPPING_THRESHOLD,
  STANDARD_SHIPPING,
  siteConfig,
} from "@/lib/site"
import { formatPrice } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Delivery timelines, shipping rates, international options, returns within thirty days, exchanges and the Artesian Steps complimentary alteration policy.",
  keywords: [
    "shipping policy",
    "returns policy",
    "menswear exchanges",
    "free shipping",
    "alteration policy",
  ],
  openGraph: {
    title: `Shipping & Returns | ${siteConfig.name}`,
    description:
      "Delivery timelines, rates, returns within thirty days and complimentary alterations.",
    url: `${siteConfig.url}/shipping-returns`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/shipping-returns" },
}

const sections = [
  {
    heading: "Delivery Timelines",
    paragraphs: [
      "Ready-to-wear orders placed before 14:00 local time are dispatched the same business day. Orders placed after that, or at weekends, leave the atelier on the next business day.",
      "Made-to-measure and commissioned garments follow the timeline agreed at your fitting — typically six to eight weeks — and are dispatched or held for collection once the final press is complete.",
    ],
    bullets: [
      "Standard delivery: 3 – 5 business days",
      "Express delivery: 1 – 2 business days",
      "International: 5 – 10 business days, customs permitting",
      "Atelier collection: available the moment your order is marked ready",
    ],
  },
  {
    heading: "Shipping Rates",
    paragraphs: [
      `Standard delivery is ${formatPrice(STANDARD_SHIPPING)} and express delivery is ${formatPrice(EXPRESS_SHIPPING)}. Standard delivery is complimentary on all orders over ${formatPrice(SHIPPING_THRESHOLD)}.`,
      "International duties and taxes are calculated at checkout where possible. Where they cannot be pre-collected, they remain the responsibility of the recipient.",
    ],
  },
  {
    heading: "Tracking Your Order",
    paragraphs: [
      "A dispatch confirmation with tracking is emailed the moment your parcel leaves us. All shipments require a signature on delivery; we cannot authorise parcels to be left unattended.",
      "If tracking has not updated within two business days of dispatch, write to us and we will open an enquiry with the carrier on your behalf.",
    ],
  },
  {
    heading: "Returns",
    paragraphs: [
      "Unworn ready-to-wear pieces may be returned within thirty days of delivery for a full refund to the original payment method. Items must be returned with all tags attached, in the original packaging, and free of alteration, wear or fragrance.",
      "Refunds are processed within five business days of the return arriving at the atelier. Original shipping charges are refunded only where the return results from our error.",
    ],
    bullets: [
      "Return window: 30 days from delivery",
      "Return shipping: complimentary within the contiguous United States",
      "Refund method: original payment method, or store credit on request",
    ],
  },
  {
    heading: "Exchanges",
    paragraphs: [
      "Size and colour exchanges on ready-to-wear are complimentary and can be arranged by contacting the atelier. We will hold the replacement size for you while the original is in transit.",
    ],
  },
  {
    heading: "Non-Returnable Items",
    bullets: [
      "Made-to-measure and commissioned garments cut to your measurements",
      "Monogrammed or otherwise personalised pieces",
      "Items altered by a tailor other than our own",
      "Gift cards and appointment deposits",
    ],
  },
  {
    heading: "Alterations",
    paragraphs: [
      "First alterations are complimentary within twelve months of purchase on every garment we sell, whether ready-to-wear or commissioned. Subsequent alterations are quoted at cost.",
      "Alterations typically take seven to ten business days. Rush alterations can be arranged subject to workroom capacity.",
    ],
  },
  {
    heading: "Damaged or Incorrect Orders",
    paragraphs: [
      `If a piece arrives damaged or is not what you ordered, contact ${siteConfig.email} within seventy-two hours of delivery with photographs. We will collect the item at our expense and replace or refund it in full.`,
    ],
  },
]

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Care"
        title="Shipping & Returns"
        description="How your order travels, what it costs, and what happens if something is not right. Every garment we sell carries complimentary first alterations."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Shipping & Returns", href: "/shipping-returns" },
        ]}
      />

      <PolicyContent
        updated="1 March 2024"
        intro="This policy applies to all orders placed through artesiansteps.com and to commissions arranged at the atelier. It sits alongside our terms of sale."
        sections={sections}
      />

      <section className="border-t border-border bg-ivory/40 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl">Need a Hand With a Return?</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Write to the atelier with your order number and we will arrange collection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Customer Care</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/faq">Read the FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
