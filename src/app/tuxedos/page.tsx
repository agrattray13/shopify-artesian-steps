import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { CatalogView } from "@/components/products/CatalogView"
import { getProductsByCategory } from "@/lib/products"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Tuxedos & Dinner Jackets",
  description:
    "Luxury tuxedos and dinner jackets from Artesian Steps — peak and shawl lapels in wool-silk and midnight blue barathea, fitted by appointment.",
  keywords: ["tuxedo", "black tie", "dinner jacket", "midnight blue tuxedo", "wedding tuxedo", "peak lapel"],
  openGraph: {
    title: `Tuxedos & Dinner Jackets | ${siteConfig.name}`,
    description:
      "Luxury tuxedos and dinner jackets from Artesian Steps — peak and shawl lapels in wool-silk and midnight blue barathea, fitted by appointment.",
    url: `${siteConfig.url}/tuxedos`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/tuxedos" },
}

export default function TuxedosPage() {
  const products = getProductsByCategory("tuxedos")

  return (
    <>
      <PageHero
        eyebrow="Black Tie"
        title="Evening Wear, Properly Understood"
        description="Satin-faced peak lapels, midnight blues and jet blacks. Tuxedos and dinner jackets for the evenings that ask something of you."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tuxedos", href: "/tuxedos" },
        ]}
      />
      <CatalogView products={products} />
    </>
  )
}
