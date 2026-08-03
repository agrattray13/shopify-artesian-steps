"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Tag } from "lucide-react"

import { CartItem } from "@/components/cart/CartItem"
import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { SHIPPING_THRESHOLD, STANDARD_SHIPPING } from "@/lib/site"
import { formatPrice } from "@/lib/utils"

const PROMO_CODES: Record<string, { label: string; rate: number }> = {
  ATELIER10: { label: "Atelier welcome — 10% off", rate: 0.1 },
  BLACKTIE15: { label: "Black tie season — 15% off", rate: 0.15 },
}

export function BagView() {
  const { items, itemCount, subtotal, clearCart, isHydrated } = useCart()
  const [promoInput, setPromoInput] = React.useState("")
  const [promo, setPromo] = React.useState<string | null>(null)
  const [promoError, setPromoError] = React.useState<string | null>(null)

  const discount = promo ? subtotal * PROMO_CODES[promo].rate : 0
  const discounted = subtotal - discount
  const shipping =
    discounted === 0 || discounted >= SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING
  const total = discounted + shipping

  const applyPromo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const code = promoInput.trim().toUpperCase()

    if (PROMO_CODES[code]) {
      setPromo(code)
      setPromoError(null)
      setPromoInput("")
    } else {
      setPromo(null)
      setPromoError("That code is not recognised. Try ATELIER10.")
    }
  }

  if (!isHydrated) {
    return (
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="text-center text-xs uppercase tracking-wideline text-muted-foreground">
          Loading your bag…
        </p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center border border-gold/40 text-gold">
          <ShoppingBag className="h-6 w-6" strokeWidth={1.25} />
        </span>
        <h2 className="mt-8 font-serif text-4xl">Your bag is empty</h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Nothing has been added yet. Begin with the tailoring, or let a stylist
          build the wardrobe with you at a private appointment.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/new-arrivals">
              Shop New Arrivals
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/booking">Book a Fitting</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_24rem] lg:gap-20">
        <section aria-labelledby="bag-items">
          <div className="flex items-center justify-between border-b border-border pb-5">
            <h2 id="bag-items" className="eyebrow">
              {itemCount} {itemCount === 1 ? "Piece" : "Pieces"}
            </h2>
            <button
              type="button"
              onClick={clearCart}
              className="text-[0.65rem] uppercase tracking-wideline text-muted-foreground transition-colors hover:text-burgundy"
            >
              Empty bag
            </button>
          </div>

          <div className="divide-y divide-border">
            {items.map((item) => (
              <CartItem
                key={`${item.productId}-${item.size}-${item.color}`}
                item={item}
              />
            ))}
          </div>

          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/new-arrivals">Continue Shopping</Link>
            </Button>
          </div>
        </section>

        <aside className="lg:sticky lg:top-40 lg:self-start">
          <div className="border border-border bg-ivory/40 p-8">
            <h2 className="font-serif text-2xl">Order Summary</h2>

            <dl className="mt-7 space-y-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
              </div>

              {promo ? (
                <div className="flex justify-between text-gold">
                  <dt>{PROMO_CODES[promo].label}</dt>
                  <dd className="tabular-nums">−{formatPrice(discount)}</dd>
                </div>
              ) : null}

              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping estimate</dt>
                <dd className="tabular-nums">
                  {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                </dd>
              </div>

              <Separator />

              <div className="flex justify-between text-base">
                <dt className="font-serif text-xl">Total</dt>
                <dd className="font-serif text-xl tabular-nums">
                  {formatPrice(total)}
                </dd>
              </div>
            </dl>

            <p className="mt-3 text-xs text-muted-foreground">
              Taxes and duties calculated at checkout.
            </p>

            <form onSubmit={applyPromo} className="mt-8">
              <Label htmlFor="promo" className="flex items-center gap-2">
                <Tag className="h-3.5 w-3.5 text-gold" />
                Promotional code
              </Label>
              <div className="mt-3 flex gap-2">
                <Input
                  id="promo"
                  value={promoInput}
                  onChange={(event) => {
                    setPromoInput(event.target.value)
                    setPromoError(null)
                  }}
                  placeholder="Enter code"
                  className="bg-softwhite"
                />
                <Button type="submit" variant="outline">
                  Apply
                </Button>
              </div>
              <div aria-live="polite" className="mt-2 min-h-5">
                {promoError ? (
                  <p className="text-xs text-burgundy">{promoError}</p>
                ) : null}
                {promo ? (
                  <p className="text-xs text-gold">
                    {promo} applied to your order.
                  </p>
                ) : null}
              </div>
            </form>

            <Button asChild size="lg" className="mt-6 w-full">
              <Link href="/checkout">
                Proceed to Checkout
                <ArrowRight />
              </Link>
            </Button>

            <p className="mt-6 text-center text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
              Complimentary shipping over {formatPrice(SHIPPING_THRESHOLD)}
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
