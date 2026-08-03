"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/PageHero"
import { categories } from "@/lib/products"

export function FeaturedCategories() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading
          eyebrow="The Wardrobe"
          title="Every Occasion, Considered"
          description="From the first day in a new role to the last dance at the reception — six collections built to carry you through them."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={category.href}
                className="group relative block overflow-hidden bg-charcoal"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                  <p className="eyebrow text-gold">{category.eyebrow}</p>
                  <h3 className="mt-3 flex items-center gap-2 font-serif text-3xl">
                    {category.name}
                    <ArrowUpRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
