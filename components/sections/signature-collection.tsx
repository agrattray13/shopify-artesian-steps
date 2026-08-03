"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SignatureCollectionSection() {
  return (
    <section className="overflow-hidden bg-obsidian text-ivory">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-16 lg:py-28"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Signature Collection</p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight sm:text-5xl">
              Crafted for Life&apos;s Defining Moments
            </h2>
            <p className="mt-6 max-w-md text-ivory/80 leading-relaxed">
              Each piece in our Signature Collection is shaped from refined fabrics, constructed with care, and finished by experienced hands. From boardroom presentations to wedding altars, every garment is designed to fit properly, feel exceptional, and photograph beautifully.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-ivory/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Italian and British cloths selected for drape and durability
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Full and half-canvas construction for a natural lapel roll
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Private fittings and personal style guidance with every order
              </li>
            </ul>
            <div className="mt-10">
              <Button asChild variant="primary">
                <Link href="/shop">Explore the Collection</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative min-h-[400px] lg:min-h-full"
          >
            <img
              src="/images/signature-collection.jpg"
              alt="Tailored charcoal suit displayed in a refined atelier"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
