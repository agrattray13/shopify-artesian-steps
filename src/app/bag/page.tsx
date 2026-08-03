import type { Metadata } from "next"

import { BagView } from "@/components/cart/BagView"
import { PageHero } from "@/components/layout/PageHero"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Shopping Bag",
  description:
    "Review the pieces in your Artesian Steps shopping bag, adjust sizes and quantities, apply a promotional code and proceed to checkout.",
  keywords: ["shopping bag", "cart", "checkout", "Artesian Steps"],
  openGraph: {
    title: `Shopping Bag | ${siteConfig.name}`,
    description:
      "Review the pieces in your Artesian Steps shopping bag and proceed to checkout.",
    url: `${siteConfig.url}/bag`,
    siteName: siteConfig.name,
    type: "website",
  },
  robots: { index: false, follow: true },
  alternates: { canonical: "/bag" },
}

export default function BagPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Your Selection"
        title="Shopping Bag"
        description="Nothing is reserved until checkout. If a piece requires alteration, note it at the payment stage and our atelier will be in touch."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Bag", href: "/bag" },
        ]}
      />
      <BagView />
    </>
  )
}
