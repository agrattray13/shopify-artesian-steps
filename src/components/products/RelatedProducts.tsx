import { ProductGrid } from "@/components/products/ProductGrid"
import { SectionHeading } from "@/components/layout/PageHero"
import { getRelatedProducts } from "@/lib/products"

interface RelatedProductsProps {
  slug: string
  title?: string
  eyebrow?: string
}

export function RelatedProducts({
  slug,
  title = "Complete the Look",
  eyebrow = "You May Also Consider",
}: RelatedProductsProps) {
  const related = getRelatedProducts(slug, 4)

  if (related.length === 0) return null

  return (
    <section className="border-t border-border bg-ivory/40 section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-14">
          <ProductGrid products={related} columns={4} />
        </div>
      </div>
    </section>
  )
}
