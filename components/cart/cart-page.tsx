"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SafeImage } from "@/components/shared/safe-image";
import { useCart, getCartTotals, type CartItem } from "@/lib/store/cart-store";
import { products, formatPrice } from "@/lib/data/products";

function findProduct(productId: string) {
  return products.find((p) => p.id === productId);
}

function CartLineItem({ item }: { item: CartItem }) {
  const product = findProduct(item.productId);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);

  if (!product) return null;

  return (
    <div className="flex gap-4 py-6 sm:gap-6">
      <Link href={`/products/${product.slug}`} className="shrink-0">
        <div className="aspect-[3/4] w-24 overflow-hidden bg-ivory sm:w-32">
          {product.images[0] ? (
            <SafeImage
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="128px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-charcoal">{product.name}</div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-charcoal/60">{product.category}</p>
              <Link href={`/products/${product.slug}`}>
                <h3 className="mt-1 font-serif text-lg text-obsidian hover:text-gold">{product.name}</h3>
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                Color: {item.color} / Size: {item.size}
              </p>
            </div>
            <p className="font-medium text-obsidian">{formatPrice(product.price * item.quantity)}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border border-stone-300">
            <button
              type="button"
              onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity - 1)}
              className="p-2 text-charcoal hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-10 text-center text-sm">{item.quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity + 1)}
              className="p-2 text-charcoal hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => removeItem(item.productId, item.color, item.size)}
            className="flex items-center gap-2 text-sm text-charcoal/70 transition-colors hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export function CartPage() {
  const items = useCart((s) => s.items);
  const clearCart = useCart((s) => s.clearCart);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const { subtotal, count } = getCartTotals(items);
  const shipping = subtotal >= 500 ? 0 : 25;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  if (items.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-soft-white px-4 py-24 text-center">
        <ShoppingBag className="h-12 w-12 text-stone-300" />
        <h1 className="mt-6 font-serif text-3xl text-obsidian">Your bag is empty</h1>
        <p className="mt-2 max-w-md text-charcoal/70">Discover our latest formalwear collections and add your favorites.</p>
        <Button asChild className="mt-8">
          <Link href="/shop">Shop the Collection</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-soft-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-medium text-obsidian">Shopping Bag</h1>
        <p className="mt-2 text-charcoal/70">{count} item{count !== 1 ? "s" : ""}</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="divide-y divide-stone-200 border-t border-stone-200">
              {items.map((item) => (
                <motion.div key={`${item.productId}-${item.color}-${item.size}`} layout>
                  <CartLineItem item={item} />
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button variant="ghost" onClick={clearCart} className="text-charcoal/70 hover:text-burgundy">
                Clear Bag
              </Button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="border border-stone-200 bg-ivory/30 p-6">
              <h2 className="font-serif text-2xl text-obsidian">Order Summary</h2>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-charcoal">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-charcoal">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-burgundy">
                    <span>Promotional Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <Separator className="my-3" />
                <div className="flex justify-between text-lg font-medium text-obsidian">
                  <span>Estimated Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" />
                    <Input
                      type="text"
                      placeholder="Promo code"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setPromoApplied(promo.trim().toLowerCase() === "artesian10")}
                    disabled={!promo.trim()}
                  >
                    Apply
                  </Button>
                </div>
                {promoApplied && (
                  <p className="mt-2 text-sm text-burgundy">Promo code applied: 10% off</p>
                )}
                {promo && !promoApplied && (
                  <p className="mt-2 text-sm text-charcoal/60">Try code ARTESIAN10 for 10% off.</p>
                )}
              </div>

              <Button asChild className="mt-6 w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <p className="mt-4 text-center text-xs text-charcoal/50">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
