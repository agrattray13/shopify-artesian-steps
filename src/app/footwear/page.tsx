import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { CatalogView } from "@/components/products/CatalogView"
import { getProductsByCategory } from "@/lib/products"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Men's Formal Footwear",
  description:
    "Goodyear-welted men's dress shoes from Artesian Steps — Italian calfskin oxfords in black, chestnut and oxblood, resolable for a lifetime.",
  keywords: ["men's dress shoes", "goodyear welted", "oxford shoes", "calfskin shoes", "formal footwear"],
  openGraph: {
    title: `Men's Formal Footwear | ${siteConfig.name}`,
    description:
      "Goodyear-welted men's dress shoes from Artesian Steps — Italian calfskin oxfords in black, chestnut and oxblood, resolable for a lifetime.",
    url: `${siteConfig.url}/footwear`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/footwear" },
}

export default function FootwearPage() {
  const products = getProductsByCategory("footwear")

  return (
    <>
      <PageHero
        eyebrow="Goodyear Welted"
        title="Shoes Made To Be Resoled"
        description="Calfskin oxfords and derbies on Goodyear welts, drum-dyed so the colour deepens with age rather than fading from it."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Footwear", href: "/footwear" },
        ]}
      />
      <CatalogView products={products} />
    </>
  )
}
