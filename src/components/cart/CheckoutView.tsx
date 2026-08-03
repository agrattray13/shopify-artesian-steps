"use client"

import * as React from "react"
import Link from "next/link"
import { AlertTriangle, Check, CreditCard, Lock, ShoppingBag } from "lucide-react"

import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  EXPRESS_SHIPPING,
  SHIPPING_THRESHOLD,
  STANDARD_SHIPPING,
  TAX_RATE,
} from "@/lib/site"
import { cn, formatPrice } from "@/lib/utils"
import type { CheckoutFormData, FormStatus } from "@/lib/types"

const initialForm: CheckoutFormData = {
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "United States",
  deliveryMethod: "standard",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
  billingSameAsShipping: true,
}

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "France",
  "Italy",
  "Germany",
  "Australia",
  "Japan",
]

const deliveryMethods = [
  {
    value: "standard",
    title: "Standard Delivery",
    detail: "3 – 5 business days · Insured and signature required",
    price: STANDARD_SHIPPING,
  },
  {
    value: "express",
    title: "Express Delivery",
    detail: "1 – 2 business days · Priority workroom handling",
    price: EXPRESS_SHIPPING,
  },
  {
    value: "atelier",
    title: "Atelier Collection",
    detail: "Collect in person with a final press and fit check",
    price: 0,
  },
]

export function CheckoutView() {
  const { items, itemCount, subtotal, clearCart, isHydrated } = useCart()
  const [form, setForm] = React.useState<CheckoutFormData>(initialForm)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [status, setStatus] = React.useState<FormStatus>("idle")

  const method = deliveryMethods.find((option) => option.value === form.deliveryMethod)
  const baseShipping = method?.price ?? STANDARD_SHIPPING
  const shipping =
    form.deliveryMethod === "atelier" || subtotal >= SHIPPING_THRESHOLD
      ? 0
      : baseShipping
  const tax = subtotal * TAX_RATE
  const total = subtotal + shipping + tax

  const update = (field: keyof CheckoutFormData, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const validate = () => {
    const next: Record<string, string> = {}

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address."
    if (form.phone.replace(/\D/g, "").length < 7)
      next.phone = "Enter a contactable phone number."
    if (!form.firstName.trim()) next.firstName = "First name is required."
    if (!form.lastName.trim()) next.lastName = "Last name is required."
    if (!form.address1.trim()) next.address1 = "Street address is required."
    if (!form.city.trim()) next.city = "City is required."
    if (!form.state.trim()) next.state = "State or region is required."
    if (!/^[A-Za-z0-9 -]{3,10}$/.test(form.postalCode))
      next.postalCode = "Enter a valid postal code."
    if (!form.cardName.trim()) next.cardName = "Name on card is required."
    if (form.cardNumber.replace(/\D/g, "").length < 15)
      next.cardNumber = "Enter a 16-digit card number."
    if (!/^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/.test(form.expiry))
      next.expiry = "Use MM/YY format."
    if (!/^\d{3,4}$/.test(form.cvc)) next.cvc = "Enter the 3 or 4 digit code."

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate()) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    window.setTimeout(() => {
      setStatus("success")
      clearCart()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 900)
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center border border-gold/40 text-gold">
          <Check className="h-6 w-6" strokeWidth={1.25} />
        </span>
        <h2 className="mt-8 font-serif text-4xl">Demo order placed</h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          This storefront runs in demonstration mode, so no payment was processed
          and no order has been created. In a live environment you would now receive
          a confirmation email and an atelier appointment invitation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/new-arrivals">Continue Shopping</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/booking">Book a Fitting</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (isHydrated && items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center border border-gold/40 text-gold">
          <ShoppingBag className="h-6 w-6" strokeWidth={1.25} />
        </span>
        <h2 className="mt-8 font-serif text-4xl">There is nothing to check out</h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Add a piece to your bag and we will hold it here while you finish browsing.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/new-arrivals">Shop the Collection</Link>
        </Button>
      </div>
    )
  }

  const fieldError = (field: string) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs text-burgundy">{errors[field]}</p>
    ) : null

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
      <div className="mb-10 flex items-start gap-4 border border-gold/40 bg-gold/10 p-5">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
        <div>
          <p className="eyebrow text-gold">Demo Mode</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            This checkout is a demonstration only. No payment is taken, no card
            details are transmitted or stored, and no order is created. Please do not
            enter real payment information.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-14 lg:grid-cols-[1fr_24rem] lg:gap-20">
          <div className="space-y-14">
            <section aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="font-serif text-2xl">
                1. Contact
              </h2>
              <Separator className="my-6" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    className="mt-2"
                  />
                  {fieldError("email")}
                </div>
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    className="mt-2"
                  />
                  {fieldError("phone")}
                </div>
              </div>
            </section>

            <section aria-labelledby="shipping-heading">
              <h2 id="shipping-heading" className="font-serif text-2xl">
                2. Shipping Address
              </h2>
              <Separator className="my-6" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(event) => update("firstName", event.target.value)}
                    aria-invalid={Boolean(errors.firstName)}
                    className="mt-2"
                  />
                  {fieldError("firstName")}
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(event) => update("lastName", event.target.value)}
                    aria-invalid={Boolean(errors.lastName)}
                    className="mt-2"
                  />
                  {fieldError("lastName")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="address1">Street address</Label>
                  <Input
                    id="address1"
                    autoComplete="address-line1"
                    value={form.address1}
                    onChange={(event) => update("address1", event.target.value)}
                    aria-invalid={Boolean(errors.address1)}
                    className="mt-2"
                  />
                  {fieldError("address1")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="address2">Apartment, suite (optional)</Label>
                  <Input
                    id="address2"
                    autoComplete="address-line2"
                    value={form.address2}
                    onChange={(event) => update("address2", event.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    autoComplete="address-level2"
                    value={form.city}
                    onChange={(event) => update("city", event.target.value)}
                    aria-invalid={Boolean(errors.city)}
                    className="mt-2"
                  />
                  {fieldError("city")}
                </div>
                <div>
                  <Label htmlFor="state">State / Region</Label>
                  <Input
                    id="state"
                    autoComplete="address-level1"
                    value={form.state}
                    onChange={(event) => update("state", event.target.value)}
                    aria-invalid={Boolean(errors.state)}
                    className="mt-2"
                  />
                  {fieldError("state")}
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal code</Label>
                  <Input
                    id="postalCode"
                    autoComplete="postal-code"
                    value={form.postalCode}
                    onChange={(event) => update("postalCode", event.target.value)}
                    aria-invalid={Boolean(errors.postalCode)}
                    className="mt-2"
                  />
                  {fieldError("postalCode")}
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={form.country}
                    onValueChange={(value) => update("country", value)}
                  >
                    <SelectTrigger id="country" className="mt-2">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            <section aria-labelledby="delivery-heading">
              <h2 id="delivery-heading" className="font-serif text-2xl">
                3. Delivery Method
              </h2>
              <Separator className="my-6" />
              <fieldset className="space-y-3">
                <legend className="sr-only">Delivery method</legend>
                {deliveryMethods.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex cursor-pointer items-start justify-between gap-4 border p-5 transition-colors",
                      form.deliveryMethod === option.value
                        ? "border-gold bg-gold/5"
                        : "border-border hover:border-obsidian/40"
                    )}
                  >
                    <span className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value={option.value}
                        checked={form.deliveryMethod === option.value}
                        onChange={(event) =>
                          update("deliveryMethod", event.target.value)
                        }
                        className="mt-1 h-4 w-4 accent-[#C6A15B]"
                      />
                      <span>
                        <span className="block text-sm font-medium">
                          {option.title}
                        </span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {option.detail}
                        </span>
                      </span>
                    </span>
                    <span className="whitespace-nowrap text-sm tabular-nums">
                      {option.price === 0 || subtotal >= SHIPPING_THRESHOLD
                        ? "Complimentary"
                        : formatPrice(option.price)}
                    </span>
                  </label>
                ))}
              </fieldset>
            </section>

            <section aria-labelledby="payment-heading">
              <h2 id="payment-heading" className="flex items-center gap-3 font-serif text-2xl">
                4. Payment
                <span className="flex items-center gap-1.5 text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
                  <Lock className="h-3 w-3" /> Demo only
                </span>
              </h2>
              <Separator className="my-6" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="cardName">Name on card</Label>
                  <Input
                    id="cardName"
                    autoComplete="off"
                    value={form.cardName}
                    onChange={(event) => update("cardName", event.target.value)}
                    aria-invalid={Boolean(errors.cardName)}
                    className="mt-2"
                  />
                  {fieldError("cardName")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cardNumber">Card number</Label>
                  <div className="relative mt-2">
                    <Input
                      id="cardNumber"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="4242 4242 4242 4242"
                      value={form.cardNumber}
                      onChange={(event) => update("cardNumber", event.target.value)}
                      aria-invalid={Boolean(errors.cardNumber)}
                      className="pr-11"
                    />
                    <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  {fieldError("cardNumber")}
                </div>
                <div>
                  <Label htmlFor="expiry">Expiry (MM/YY)</Label>
                  <Input
                    id="expiry"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="04/29"
                    value={form.expiry}
                    onChange={(event) => update("expiry", event.target.value)}
                    aria-invalid={Boolean(errors.expiry)}
                    className="mt-2"
                  />
                  {fieldError("expiry")}
                </div>
                <div>
                  <Label htmlFor="cvc">Security code</Label>
                  <Input
                    id="cvc"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="123"
                    value={form.cvc}
                    onChange={(event) => update("cvc", event.target.value)}
                    aria-invalid={Boolean(errors.cvc)}
                    className="mt-2"
                  />
                  {fieldError("cvc")}
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <Checkbox
                    id="billingSame"
                    checked={form.billingSameAsShipping}
                    onCheckedChange={(checked) =>
                      update("billingSameAsShipping", checked === true)
                    }
                  />
                  <Label
                    htmlFor="billingSame"
                    className="cursor-pointer text-xs normal-case tracking-normal"
                  >
                    Billing address is the same as my shipping address
                  </Label>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-40 lg:self-start">
            <div className="border border-border bg-ivory/40 p-8">
              <h2 className="font-serif text-2xl">Order Summary</h2>
              <p className="mt-2 text-xs uppercase tracking-wideline text-muted-foreground">
                {itemCount} {itemCount === 1 ? "piece" : "pieces"}
              </p>

              <ul className="mt-6 divide-y divide-border">
                {items.map((item) => (
                  <li
                    key={`${item.productId}-${item.size}-${item.color}`}
                    className="flex gap-4 py-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-16 shrink-0 object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-base leading-snug">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
                          {item.color} · {item.size} · Qty {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping</dt>
                  <dd className="tabular-nums">
                    {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Estimated tax</dt>
                  <dd className="tabular-nums">{formatPrice(tax)}</dd>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <dt className="font-serif text-xl">Total</dt>
                  <dd className="font-serif text-xl tabular-nums">
                    {formatPrice(total)}
                  </dd>
                </div>
              </dl>

              <Button
                type="submit"
                size="lg"
                className="mt-8 w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Processing…" : "Place Demo Order"}
              </Button>

              <div aria-live="polite" className="mt-4 min-h-5">
                {status === "error" ? (
                  <p className="text-center text-xs text-burgundy">
                    Please correct the highlighted fields.
                  </p>
                ) : null}
              </div>

              <p className="mt-4 text-center text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
                No payment will be processed
              </p>
            </div>
          </aside>
        </div>
      </form>
    </div>
  )
}
