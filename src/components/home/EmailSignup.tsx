"use client"

import * as React from "react"
import { Check, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FormStatus } from "@/lib/types"

export function EmailSignup() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<FormStatus>("idle")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    window.setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 600)
  }

  return (
    <section className="relative overflow-hidden bg-obsidian text-ivory section-padding">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(198,161,91,0.22), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center border border-gold/40 text-gold">
          <Mail className="h-5 w-5" strokeWidth={1.5} />
        </span>

        <p className="eyebrow mt-8 text-gold">The Gentleman&apos;s Edit</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight text-balance md:text-5xl">
          Dressing Notes, Twice a Month
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ivory/70">
          New cloth arrivals, black-tie guidance, and first access to atelier
          appointments during wedding season. No noise — two letters a month.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <div className="flex-1 text-left">
            <Label htmlFor="newsletter-email" className="sr-only">
              Email address
            </Label>
            <Input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === "error") setStatus("idle")
              }}
              placeholder="Your email address"
              aria-invalid={status === "error"}
              className="h-12 border-ivory/25 text-ivory placeholder:text-ivory/40"
            />
          </div>
          <Button
            type="submit"
            variant="gold"
            size="lg"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Subscribing…" : "Subscribe"}
          </Button>
        </form>

        <div className="mt-5 min-h-6" aria-live="polite">
          {status === "success" ? (
            <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-wideline text-gold">
              <Check className="h-3.5 w-3.5" /> Welcome to The Gentleman&apos;s Edit
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-xs uppercase tracking-wideline text-burgundy">
              Please enter a valid email address
            </p>
          ) : null}
        </div>

        <p className="mt-6 text-[0.62rem] uppercase tracking-wideline text-ivory/35">
          Unsubscribe at any time · We never share your details
        </p>
      </div>
    </section>
  )
}
