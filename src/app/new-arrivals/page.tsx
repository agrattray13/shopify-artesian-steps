import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { CatalogView } from "@/components/products/CatalogView"
import { getAllProducts, getNewArrivals } from "@/lib/products"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "New Arrivals",
  description:
    "The newest pieces from the Artesian Steps atelier — suits, tuxedos, shirting, footwear and accessories, available for immediate delivery or made to measure.",
  keywords: [
    "new arrivals",
    "new menswear",
    "luxury formalwear",
    "new suits",
    "new tuxedos",
    "Artesian Steps",
  ],
  openGraph: {
    title: `New Arrivals | ${siteConfig.name}`,
    description:
      "The newest pieces from the Artesian Steps atelier — suits, tuxedos, shirting, footwear and accessories.",
    url: `${siteConfig.url}/new-arrivals`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/new-arrivals" },
}

export default function NewArrivalsPage() {
  const newest = getNewArrivals()
  const products = [
    ...newest,
    ...getAllProducts().filter((product) => !product.isNew),
  ]

  return (
    <>
      <PageHero
        eyebrow="Just Arrived"
        title="The Season's Newest Pieces"
        description="Freshly cut, freshly finished. Each piece below has left the workroom within the last six weeks and is ready to be fitted to you."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "New Arrivals", href: "/new-arrivals" },
        ]}
      />
      <CatalogView
        products={products}
        emptyTitle="Nothing matches this combination yet"
      />
    </>
  )
}
