"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";

const looks = [
  { title: "Wedding Morning", image: "/images/lookbook-wedding.jpg" },
  { title: "Black Tie", image: "/images/lookbook-blacktie.jpg" },
  { title: "Business Formal", image: "/images/lookbook-business.jpg" },
  { title: "Evening Celebration", image: "/images/lookbook-evening.jpg" },
];

export function LookbookSection() {
  return (
    <section className="bg-obsidian py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Lookbook"
          subtitle="Editorial inspiration for weddings, black-tie events, business occasions, and evening celebrations."
          className="text-ivory"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {looks.map((look, index) => (
            <motion.div
              key={look.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={look.image}
                alt={`${look.title} formalwear look`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-serif text-2xl">{look.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
