"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-obsidian text-ivory">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://placehold.co/1920x1200/0B0B0C/1A1A1D?text=+"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(198,161,91,0.18), transparent 55%), linear-gradient(to right, rgba(11,11,12,0.96), rgba(11,11,12,0.72) 55%, rgba(11,11,12,0.9))",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-gold">Est. Atelier — Formalwear for the Modern Gentleman</p>

          <h1 className="mt-8 font-serif text-5xl leading-[1.02] text-balance md:text-7xl lg:text-[5.25rem]">
            Dress With Intention.
            <span className="block text-gold">Arrive With Confidence.</span>
          </h1>

          <div className="luxe-rule mt-10" />

          <p className="mt-10 max-w-xl text-base leading-relaxed text-ivory/70 md:text-lg">
            Hand-finished suits, tuxedos and shoes cut from Italian cloth and fitted
            in our atelier. Every garment is measured to you, altered by our tailors,
            and made to be worn for the moments you will remember.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="gold">
              <Link href="/new-arrivals">
                Shop the Collection
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/booking">Book a Private Fitting</Link>
            </Button>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-ivory/15 pt-8">
            {[
              { value: "24 yrs", label: "Of Tailoring" },
              { value: "6 pt", label: "Fitting Process" },
              { value: "48 hr", label: "Alteration Turn" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl text-gold">{stat.value}</dt>
                <dd className="mt-1 text-[0.62rem] uppercase tracking-wideline text-ivory/50">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[0.6rem] uppercase tracking-luxe text-ivory/40">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
