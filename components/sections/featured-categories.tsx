"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data/products";
import { SectionHeader } from "@/components/shared/section-header";
import { SafeImage } from "@/components/shared/safe-image";

export function FeaturedCategoriesSection() {
  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Shop by Category" subtitle="Curated collections for every formal occasion." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/shop/${category.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-ivory"
              >
                <SafeImage
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-ivory">
                  <h3 className="font-serif text-2xl">{category.name}</h3>
                  <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
                    Explore
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
