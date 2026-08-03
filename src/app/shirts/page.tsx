import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { CatalogView } from "@/components/products/CatalogView"
import { getProductsByCategory } from "@/lib/products"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Men's Dress Shirts",
  description:
    "Egyptian cotton dress shirts from Artesian Steps — spread collars, mother-of-pearl buttons and single-needle tailoring in white, ivory and blue.",
  keywords: ["dress shirts", "egyptian cotton shirt", "white dress shirt", "spread collar", "formal shirts"],
  openGraph: {
    title: `Men's Dress Shirts | ${siteConfig.name}`,
    description:
      "Egyptian cotton dress shirts from Artesian Steps — spread collars, mother-of-pearl buttons and single-needle tailoring in white, ivory and blue.",
    url: `${siteConfig.url}/shirts`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/shirts" },
}

export default function ShirtsPage() {
  const products = getProductsByCategory("shirts")

  return (
    <>
      <PageHero
        eyebrow="Foundations"
        title="The Shirt Beneath Everything"
        description="Two-ply Egyptian cotton, mother-of-pearl buttons and collars engineered to hold their shape through a fourteen-hour day."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dress Shirts", href: "/shirts" },
        ]}
      />
      <CatalogView products={products} />
    </>
  )
}
