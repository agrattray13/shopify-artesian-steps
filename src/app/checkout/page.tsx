import type { Metadata } from "next"

import { CheckoutView } from "@/components/cart/CheckoutView"
import { PageHero } from "@/components/layout/PageHero"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your Artesian Steps order. This demonstration checkout collects contact, shipping, delivery and payment details without processing any payment.",
  keywords: ["checkout", "secure checkout", "demo checkout", "Artesian Steps"],
  openGraph: {
    title: `Checkout | ${siteConfig.name}`,
    description: "Complete your Artesian Steps order.",
    url: `${siteConfig.url}/checkout`,
    siteName: siteConfig.name,
    type: "website",
  },
  robots: { index: false, follow: false },
  alternates: { canonical: "/checkout" },
}

export default function CheckoutPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Secure Checkout"
        title="Complete Your Order"
        description="Four short sections: how to reach you, where it is going, how quickly, and how you would like to pay."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Bag", href: "/bag" },
          { label: "Checkout", href: "/checkout" },
        ]}
      />
      <CheckoutView />
    </>
  )
}
