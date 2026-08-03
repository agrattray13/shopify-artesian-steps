"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { CartItem } from "@/components/cart/CartItem"
import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { SHIPPING_THRESHOLD } from "@/lib/site"
import { formatPrice } from "@/lib/utils"

export function CartDrawer() {
  const { items, itemCount, subtotal, isDrawerOpen, setDrawerOpen } = useCart()
  const remaining = Math.max(0, SHIPPING_THRESHOLD - subtotal)

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
      <SheetContent side="right" className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="flex items-center gap-3">
            Your Bag
            <span className="text-xs uppercase tracking-wideline text-muted-foreground">
              ({itemCount} {itemCount === 1 ? "item" : "items"})
            </span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <ShoppingBag className="h-8 w-8 text-gold" strokeWidth={1} />
            <div>
              <p className="font-serif text-2xl">Your bag is empty</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Begin with a suit, a tuxedo, or the accessory that completes it.
              </p>
            </div>
            <Button asChild onClick={() => setDrawerOpen(false)}>
              <Link href="/new-arrivals">Explore New Arrivals</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.size}-${item.color}`}
                  item={item}
                  compact
                  onNavigate={() => setDrawerOpen(false)}
                />
              ))}
            </div>

            <div className="border-t border-border bg-ivory/60 px-6 py-6">
              {remaining > 0 ? (
                <p className="mb-4 text-center text-xs uppercase tracking-wideline text-muted-foreground">
                  {formatPrice(remaining)} away from complimentary shipping
                </p>
              ) : (
                <p className="mb-4 text-center text-xs uppercase tracking-wideline text-gold">
                  Complimentary shipping unlocked
                </p>
              )}

              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-wideline">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Shipping and duties calculated at checkout.
              </p>

              <Separator className="my-5" />

              <div className="grid gap-3">
                <Button asChild size="lg" onClick={() => setDrawerOpen(false)}>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  onClick={() => setDrawerOpen(false)}
                >
                  <Link href="/bag">View Bag</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
