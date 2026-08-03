"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn, formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  index?: number
  priority?: boolean
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [wishlisted, setWishlisted] = React.useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.4), ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col"
    >
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden bg-charcoal">
        <div className="aspect-[4/5] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
        </div>

        {product.images[1] ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        ) : null}

        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.isNew ? <Badge variant="gold">New</Badge> : null}
          {product.originalPrice ? <Badge variant="burgundy">Atelier Price</Badge> : null}
          {!product.inStock ? <Badge variant="outlineLight">Waitlist</Badge> : null}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-obsidian/85 py-3 text-center text-[0.65rem] uppercase tracking-luxe text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View Piece
        </div>
      </Link>

      <button
        type="button"
        aria-label={
          wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`
        }
        aria-pressed={wishlisted}
        onClick={() => setWishlisted((value) => !value)}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-softwhite/90 opacity-0 transition-all duration-300 hover:text-burgundy group-hover:opacity-100 focus-visible:opacity-100"
      >
        <Heart
          className={cn("h-4 w-4", wishlisted && "fill-burgundy text-burgundy")}
          strokeWidth={1.5}
        />
      </button>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[0.62rem] uppercase tracking-luxe text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug">
          <Link href={`/products/${product.slug}`} className="hover:text-gold">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={1} />
          <span className="tabular-nums">{product.rating.toFixed(1)}</span>
          <span className="text-muted-foreground/70">({product.reviewCount})</span>
        </div>

        <div className="mt-3 flex items-baseline gap-3">
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
          {product.originalPrice ? (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex gap-1.5">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color.name}
              title={color.name}
              className="h-3.5 w-3.5 rounded-full border border-obsidian/15"
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
    </motion.article>
  )
}
