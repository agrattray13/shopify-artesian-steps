"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/PageHero"
import { Button } from "@/components/ui/button"
import { lookbookItems } from "@/lib/content"
import { cn } from "@/lib/utils"

export function LookbookSection() {
  const items = lookbookItems.slice(0, 6)

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading
          eyebrow="The Lookbook"
          title="Seen In The Wild"
          description="Editorial studies of the collection worn as intended — in boardrooms, ballrooms and the hour before the ceremony."
        />

        <div className="mt-16 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (index % 4) * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "group relative overflow-hidden bg-charcoal",
                item.span === "tall" ? "row-span-2 aspect-[4/5] lg:aspect-auto" : "aspect-square"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian to-transparent p-6 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-serif text-xl">{item.title}</p>
                <p className="mt-1 text-xs text-ivory/60">{item.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/lookbook">
              View the Full Lookbook
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
