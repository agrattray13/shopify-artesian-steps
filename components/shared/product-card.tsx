"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/shared/safe-image";
import type { Product } from "@/lib/data/products";
import { formatPrice } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const firstImage = product.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col"
    >
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden bg-ivory">
        <div className="aspect-[3/4] w-full">
          {firstImage ? (
            <SafeImage
              src={firstImage}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-stone-200 text-sm text-charcoal">
              {product.name}
            </div>
          )}
        </div>
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-obsidian px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-ivory">
            New
          </span>
        )}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 rounded-full bg-soft-white/90 p-2 text-obsidian opacity-0 transition-opacity hover:text-burgundy focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs uppercase tracking-widest text-charcoal/70">{product.category}</p>
        <h3 className="mt-1 font-serif text-lg leading-tight">
          <Link href={`/products/${product.slug}`} className="hover:text-gold">
            {product.name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-charcoal/50 line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color.name}
              className="inline-block h-4 w-4 rounded-full border border-stone-300"
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
              title={color.name}
            />
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Button asChild className="w-full" size="sm">
            <Link href={`/products/${product.slug}`}>View Product</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="aspect-[3/4] w-full animate-pulse bg-stone-200" />
      <div className="mt-4 h-4 w-1/3 animate-pulse bg-stone-200" />
      <div className="mt-2 h-5 w-2/3 animate-pulse bg-stone-200" />
      <div className="mt-2 h-4 w-1/4 animate-pulse bg-stone-200" />
    </div>
  );
}
