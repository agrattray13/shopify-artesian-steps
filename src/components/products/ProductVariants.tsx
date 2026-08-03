"use client"

import * as React from "react"
import Link from "next/link"
import { Check, Heart, Minus, Plus, ShoppingBag, Star, Truck } from "lucide-react"

import { useCart } from "@/components/cart/CartContext"
import { SizeGuide } from "@/components/products/SizeGuide"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { cn, formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface ProductVariantsProps {
  product: Product
}

export function ProductVariants({ product }: ProductVariantsProps) {
  const { addItem, setDrawerOpen } = useCart()
  const { toast } = useToast()

  const [size, setSize] = React.useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  )
  const [color, setColor] = React.useState<string | null>(
    product.colors.length === 1 ? product.colors[0].name : null
  )
  const [quantity, setQuantity] = React.useState(1)
  const [wishlisted, setWishlisted] = React.useState(false)

  const canAdd = Boolean(size && color) && product.inStock

  const handleAdd = () => {
    if (!size || !color) return

    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity,
      size,
      color,
      image: product.images[0],
    })

    toast({
      title: "Added to your bag",
      description: `${product.name} — ${color}, size ${size}`,
    })

    setDrawerOpen(true)
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/${product.categorySlug}`}
          className="text-[0.65rem] uppercase tracking-luxe text-muted-foreground transition-colors hover:text-gold"
        >
          {product.category}
        </Link>
        {product.isNew ? <Badge variant="gold">New</Badge> : null}
      </div>

      <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn(
                "h-3.5 w-3.5",
                index < Math.round(product.rating)
                  ? "fill-gold text-gold"
                  : "text-muted-foreground/40"
              )}
              strokeWidth={1}
            />
          ))}
        </span>
        <span className="tabular-nums">{product.rating.toFixed(1)}</span>
        <span>·</span>
        <span>{product.reviewCount} reviews</span>
      </div>

      <div className="mt-6 flex items-baseline gap-4">
        <span className="font-serif text-3xl">{formatPrice(product.price)}</span>
        {product.originalPrice ? (
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(product.originalPrice)}
          </span>
        ) : null}
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        {product.description}
      </p>

      <Separator className="my-8" />

      <div>
        <div className="flex items-center justify-between">
          <p className="eyebrow">
            Colour{color ? <span className="text-gold"> — {color}</span> : null}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {product.colors.map((option) => (
            <button
              key={option.name}
              type="button"
              onClick={() => setColor(option.name)}
              aria-pressed={color === option.name}
              aria-label={option.name}
              title={option.name}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full border transition-all",
                color === option.name
                  ? "border-gold ring-1 ring-gold ring-offset-2 ring-offset-softwhite"
                  : "border-obsidian/15 hover:border-obsidian/40"
              )}
            >
              <span
                className="h-7 w-7 rounded-full"
                style={{ backgroundColor: option.hex }}
              />
              {color === option.name ? (
                <Check className="absolute h-3.5 w-3.5 text-ivory mix-blend-difference" />
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <p className="eyebrow">
            Size{size ? <span className="text-gold"> — {size}</span> : null}
          </p>
          <SizeGuide categorySlug={product.categorySlug} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={size === option}
              className={cn(
                "min-w-[4rem] border px-4 py-3 text-xs uppercase tracking-wideline transition-colors",
                size === option
                  ? "border-obsidian bg-obsidian text-ivory"
                  : "border-border hover:border-obsidian"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <div className="flex items-center border border-border">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-ivory"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center text-sm tabular-nums">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => Math.min(10, value + 1))}
            className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-ivory"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <Button
          size="lg"
          onClick={handleAdd}
          disabled={!canAdd}
          className="flex-1 min-w-[15rem]"
        >
          <ShoppingBag />
          {product.inStock
            ? canAdd
              ? "Add to Bag"
              : "Select Colour & Size"
            : "Join the Waitlist"}
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Add to wishlist"
          aria-pressed={wishlisted}
          onClick={() => setWishlisted((value) => !value)}
          className="h-12 w-12"
        >
          <Heart className={cn(wishlisted && "fill-burgundy text-burgundy")} />
        </Button>
      </div>

      <div className="mt-8 space-y-3 border border-border bg-ivory/50 p-6 text-sm">
        <p className="flex items-start gap-3">
          <Truck className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
          Complimentary shipping on orders over $500. Express delivery available at
          checkout.
        </p>
        <p className="flex items-start gap-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
          One complimentary alteration included with every tailored garment.
        </p>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Prefer to be measured in person?{" "}
        <Link href="/booking" className="link-underline text-obsidian">
          Book a private fitting
        </Link>
        .
      </p>
    </div>
  )
}
