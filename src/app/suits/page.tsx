import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { CatalogView } from "@/components/products/CatalogView"
import { getProductsByCategory } from "@/lib/products"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Men's Suits",
  description:
    "Shop luxury men's suits from Artesian Steps — half and full-canvas tailoring in Italian wool, cut slim or double-breasted and fitted in our atelier.",
  keywords: ["men's suits", "luxury suits", "navy suit", "charcoal suit", "double breasted suit", "tailored suits"],
  openGraph: {
    title: `Men's Suits | ${siteConfig.name}`,
    description:
      "Shop luxury men's suits from Artesian Steps — half and full-canvas tailoring in Italian wool, cut slim or double-breasted and fitted in our atelier.",
    url: `${siteConfig.url}/suits`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/suits" },
}

export default function SuitsPage() {
  const products = getProductsByCategory("suits")

  return (
    <>
      <PageHero
        eyebrow="Tailoring"
        title="Suits Built On Canvas, Not Fusing"
        description="Half and full-canvas tailoring in Italian wool, cut for the boardroom and everything that follows it. Every suit includes one complimentary alteration."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Suits", href: "/suits" },
        ]}
      />
      <CatalogView products={products} />
    </>
  )
}
