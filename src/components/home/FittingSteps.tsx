"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/layout/PageHero"
import { Button } from "@/components/ui/button"
import { fittingSteps } from "@/lib/content"

export function FittingSteps() {
  return (
    <section className="bg-obsidian text-ivory section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading
          tone="light"
          eyebrow="The Fitting Process"
          title="Four Appointments. One Perfect Fit."
          description="Our custom fitting service is deliberate by design. Each stage exists because it measurably improves the garment you eventually wear."
        />

        <ol className="mt-16 grid gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-4">
          {fittingSteps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-obsidian p-8 transition-colors duration-500 hover:bg-charcoal lg:p-10"
            >
              <p className="font-serif text-5xl text-gold/40 transition-colors duration-500 group-hover:text-gold">
                {step.number}
              </p>
              <h3 className="mt-6 font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 text-[0.62rem] uppercase tracking-wideline text-gold">
                {step.duration}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ivory/60">
                {step.detail}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="gold">
            <Link href="/booking">Book Your Fitting</Link>
          </Button>
          <Button asChild size="lg" variant="outlineLight">
            <Link href="/custom-fitting">How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
