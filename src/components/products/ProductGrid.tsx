import Link from "next/link"

import { ProductCard } from "@/components/products/ProductCard"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
  emptyTitle?: string
  emptyMessage?: string
  className?: string
}

export function ProductGrid({
  products,
  columns = 4,
  emptyTitle = "No pieces match your selection",
  emptyMessage = "Adjust or clear your filters to view the full collection, or speak with a stylist for a personal recommendation.",
  className,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center border border-dashed border-border px-8 py-24 text-center">
        <div className="luxe-rule" />
        <h3 className="mt-6 font-serif text-2xl">{emptyTitle}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {emptyMessage}
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/booking">Book a Consultation</Link>
        </Button>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-14",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
