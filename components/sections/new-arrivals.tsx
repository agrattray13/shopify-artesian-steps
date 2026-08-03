"use client";

import Link from "next/link";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/shared/product-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

export function NewArrivalsSection() {
  const arrivals = products.filter((p) => p.isNew).slice(0, 8);

  return (
    <section className="bg-ivory/40 py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="New Arrivals"
          subtitle="The latest additions to our formalwear collections, chosen for impeccable construction and timeless style."
        />

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {arrivals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild variant="outline">
            <Link href="/shop/new-arrivals">View All New Arrivals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
