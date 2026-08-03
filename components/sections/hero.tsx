"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-obsidian text-ivory"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-formalwear.jpg"
          alt="Man wearing a tailored navy suit in a luxury showroom"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Tailored Confidence for Every Occasion
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.1] sm:text-6xl lg:text-7xl">
            Dress With Intention. Arrive With Confidence.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/80">
            Discover refined suits, tuxedos, footwear, and finishing pieces selected for gentlemen who understand that every detail matters.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="/shop">Shop the Collection</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="min-w-[180px]">
              <Link href="/appointments">Book a Fitting</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
