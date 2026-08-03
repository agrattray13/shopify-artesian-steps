"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    number: "01",
    title: "Schedule a Consultation",
    description: "Meet with a style advisor to discuss your occasion, preferences, and fit goals.",
  },
  {
    number: "02",
    title: "Select Your Style",
    description: "Choose fabrics, silhouettes, lapels, linings, and finishing details that reflect your taste.",
  },
  {
    number: "03",
    title: "Complete Your Measurements",
    description: "Our tailor takes a full set of measurements to ensure precision and comfort.",
  },
  {
    number: "04",
    title: "Final Fitting and Delivery",
    description: "Review the finished garment, request any adjustments, and take it home ready to wear.",
  },
];

export function CustomFittingSection() {
  return (
    <section className="bg-ivory/40 py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Custom Fitting Experience"
          subtitle="A four-step process designed around you. Because the right fit changes everything."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-l border-gold/40 bg-soft-white p-8"
            >
              <span className="font-serif text-4xl text-gold/40">{step.number}</span>
              <h3 className="mt-4 font-serif text-xl text-obsidian">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg">
            <Link href="/appointments">Book a Private Fitting</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
