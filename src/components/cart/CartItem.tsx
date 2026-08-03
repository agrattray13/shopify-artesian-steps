"use client"

import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"

import { useCart } from "@/components/cart/CartContext"
import { cn, formatPrice } from "@/lib/utils"
import type { CartItem as CartItemType } from "@/lib/types"

interface CartItemProps {
  item: CartItemType
  compact?: boolean
  onNavigate?: () => void
}

export function CartItem({ item, compact = false, onNavigate }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className={cn("flex gap-4 py-6", compact ? "gap-3 py-4" : "")}>
      <Link
        href={`/products/${item.slug}`}
        onClick={onNavigate}
        className={cn(
          "relative shrink-0 overflow-hidden bg-charcoal",
          compact ? "h-24 w-20" : "h-36 w-28"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              href={`/products/${item.slug}`}
              onClick={onNavigate}
              className="font-serif text-lg leading-snug hover:text-gold"
            >
              {item.name}
            </Link>
            <p className="mt-1 text-xs uppercase tracking-wideline text-muted-foreground">
              {item.color} · Size {item.size}
            </p>
          </div>
          <p className="whitespace-nowrap text-sm font-medium">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border border-border">
            <button
              type="button"
              aria-label={`Decrease quantity of ${item.name}`}
              onClick={() =>
                updateQuantity(item.productId, item.size, item.color, item.quantity - 1)
              }
              className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-ivory"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-10 text-center text-sm tabular-nums">
              {item.quantity}
            </span>
            <button
              type="button"
              aria-label={`Increase quantity of ${item.name}`}
              onClick={() =>
                updateQuantity(item.productId, item.size, item.color, item.quantity + 1)
              }
              className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-ivory"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeItem(item.productId, item.size, item.color)}
            className="flex items-center gap-1.5 text-[0.68rem] uppercase tracking-wideline text-muted-foreground transition-colors hover:text-burgundy"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
