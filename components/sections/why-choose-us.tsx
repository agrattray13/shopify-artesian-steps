"use client";

import { motion } from "framer-motion";
import { UserCheck, Gem, Ruler, Layers } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const benefits = [
  {
    icon: UserCheck,
    title: "Personal Style Guidance",
    description: "Work one-on-one with a dedicated advisor who understands fit, fabric, and occasion.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Italian wools, English mohair, silk linings, and full-grain leathers chosen for longevity.",
  },
  {
    icon: Ruler,
    title: "Precision Fitting",
    description: "Measurements, alterations, and made-to-measure options ensure every piece fits exactly right.",
  },
  {
    icon: Layers,
    title: "Complete Formalwear Collections",
    description: "Suits, tuxedos, shirts, shoes, ties, cufflinks, and finishing pieces—all in one destination.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Artesian Steps"
          subtitle="We believe luxury formalwear is about more than fabric. It is about confidence, preparation, and service."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-flex mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ivory text-obsidian">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-obsidian">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
