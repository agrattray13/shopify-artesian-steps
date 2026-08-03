import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { CatalogView } from "@/components/products/CatalogView"
import { getProductsByCategory } from "@/lib/products"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Men's Formal Accessories",
  description:
    "Luxury men's accessories from Artesian Steps — seven-fold silk ties, gold cufflink sets, pocket squares and collar stays for formal dressing.",
  keywords: ["silk tie", "cufflinks", "pocket square", "men's accessories", "formal accessories"],
  openGraph: {
    title: `Men's Formal Accessories | ${siteConfig.name}`,
    description:
      "Luxury men's accessories from Artesian Steps — seven-fold silk ties, gold cufflink sets, pocket squares and collar stays for formal dressing.",
    url: `${siteConfig.url}/accessories`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/accessories" },
}

export default function AccessoriesPage() {
  const products = getProductsByCategory("accessories")

  return (
    <>
      <PageHero
        eyebrow="The Finishing"
        title="The Details People Remember"
        description="Seven-fold silk, weighted cufflinks and pocket squares — the small decisions that separate dressed from tailored."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Accessories", href: "/accessories" },
        ]}
      />
      <CatalogView products={products} />
    </>
  )
}
