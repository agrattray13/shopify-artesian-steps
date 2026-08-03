"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const testimonials = [
  {
    name: "Jonathan R.",
    role: "Groom",
    quote:
      "The team made wedding planning effortless. My suit fit perfectly, and the groomsmen looked cohesive without being identical.",
  },
  {
    name: "Michael T.",
    role: "Corporate Client",
    quote:
      "I needed a complete formal wardrobe quickly. The personal consultation saved me time, and the quality exceeded my expectations.",
  },
  {
    name: "David L.",
    role: "Longtime Customer",
    quote:
      "Every piece I have purchased has held its shape and earned compliments. The tailoring service is second to none.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-ivory/40 py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="What Our Clients Say" subtitle="Sample testimonials from valued clients." />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-gold bg-soft-white p-8"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-obsidian/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-serif text-lg text-obsidian">{t.name}</p>
                <p className="text-sm text-charcoal/60">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-charcoal/50">
          These testimonials are sample content provided for demonstration purposes and do not represent endorsements from public figures or companies.
        </p>
      </div>
    </section>
  );
}
