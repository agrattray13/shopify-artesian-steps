"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, CreditCard, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart, getCartTotals } from "@/lib/store/cart-store";
import { products, formatPrice } from "@/lib/data/products";

export function CheckoutPage() {
  const items = useCart((s) => s.items);
  const { subtotal } = getCartTotals(items);
  const shipping = subtotal >= 500 ? 0 : 25;
  const total = subtotal + shipping;

  const [step, setStep] = useState<"contact" | "shipping" | "payment" | "success">("contact");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("United States");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validateContact() {
    if (!email.includes("@")) return "Please enter a valid email.";
    return null;
  }

  function validateShipping() {
    if (!firstName || !lastName || !address || !city || !zip) return "Please complete all shipping fields.";
    return null;
  }

  function validatePayment() {
    if (cardNumber.length < 16 || !cardName || expiry.length < 5 || cvc.length < 3) {
      return "Please complete all payment fields.";
    }
    return null;
  }

  function handleNext() {
    setError(null);
    if (step === "contact") {
      const err = validateContact();
      if (err) return setError(err);
      setStep("shipping");
    } else if (step === "shipping") {
      const err = validateShipping();
      if (err) return setError(err);
      setStep("payment");
    } else if (step === "payment") {
      const err = validatePayment();
      if (err) return setError(err);
      setStep("success");
    }
  }

  if (items.length === 0 && step !== "success") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-soft-white px-4 py-24 text-center">
        <h1 className="font-serif text-3xl text-obsidian">Your bag is empty</h1>
        <Button asChild className="mt-6">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-soft-white px-4 py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <Check className="h-8 w-8 text-gold" />
        </div>
        <h1 className="mt-6 font-serif text-3xl text-obsidian">Thank You for Your Order</h1>
        <p className="mt-2 max-w-md text-charcoal/70">
          This is a demonstration checkout. No payment has been processed. A real payment provider such as Stripe or Shopify Payments can be connected here.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-soft-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-medium text-obsidian">Checkout</h1>
        <p className="mt-2 text-sm text-charcoal/60">Demo mode — no real payment processing.</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Contact */}
              <section className={step === "contact" ? "" : "opacity-60"}>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-semibold text-obsidian">1</span>
                  <h2 className="font-serif text-xl text-obsidian">Contact Information</h2>
                </div>
                <div className="mt-4 border border-stone-200 bg-ivory/20 p-6">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2"
                    placeholder="you@example.com"
                  />
                </div>
              </section>

              {/* Shipping */}
              <section className={step === "shipping" ? "" : "opacity-60"}>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-semibold text-obsidian">2</span>
                  <h2 className="font-serif text-xl text-obsidian">Shipping Address</h2>
                </div>
                <div className="mt-4 border border-stone-200 bg-ivory/20 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-2" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-2" />
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="zip">Postal Code</Label>
                      <Input id="zip" value={zip} onChange={(e) => setZip(e.target.value)} className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-2" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className={step === "payment" ? "" : "opacity-60"}>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-semibold text-obsidian">3</span>
                  <h2 className="font-serif text-xl text-obsidian">Payment</h2>
                </div>
                <div className="mt-4 border border-stone-200 bg-ivory/20 p-6">
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <ShieldCheck className="h-4 w-4 text-gold" />
                    Demo payment — use any test card details.
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative mt-2">
                      <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" />
                      <Input
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                        className="pl-9"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} className="mt-2" />
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="expiry">Expiry (MM/YY)</Label>
                      <Input
                        id="expiry"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value.slice(0, 5))}
                        className="mt-2"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        className="mt-2"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {error && (
                <p className="text-sm text-burgundy" role="alert">
                  {error}
                </p>
              )}

              <Button onClick={handleNext} className="w-full sm:w-auto" size="lg">
                {step === "payment" ? "Complete Purchase" : "Continue"}
              </Button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="border border-stone-200 bg-ivory/30 p-6">
              <h2 className="font-serif text-xl text-obsidian">Order Summary</h2>
              <div className="mt-4 max-h-64 space-y-4 overflow-auto">
                {items.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  if (!product) return null;
                  return (
                    <div key={`${item.productId}-${item.color}-${item.size}`} className="flex gap-3">
                      <div className="aspect-square w-16 overflow-hidden bg-ivory">
                        {product.images[0] ? (
                          <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                        ) : null}
                      </div>
                      <div className="flex-1 text-sm">
                        <p className="font-medium text-obsidian">{product.name}</p>
                        <p className="text-charcoal/60">
                          {item.color} / {item.size} / Qty {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">{formatPrice(product.price * item.quantity)}</p>
                    </div>
                  );
                })}
              </div>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-medium text-obsidian">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
