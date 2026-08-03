import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/PageHero"
import { ProductGrid } from "@/components/products/ProductGrid"
import { Button } from "@/components/ui/button"
import { getAllProducts } from "@/lib/products"

export function NewArrivals() {
  const products = getAllProducts()

  return (
    <section className="border-y border-border bg-ivory/40 section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Newly Arrived"
            title="The Current Collection"
            description="Eight pieces, each finished by hand in our atelier. Available for immediate delivery or made to your measurements."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/new-arrivals">
              View All
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-16">
          <ProductGrid products={products} columns={4} />
        </div>
      </div>
    </section>
  )
}
