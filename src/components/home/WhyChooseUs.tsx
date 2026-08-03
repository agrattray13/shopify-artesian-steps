"use client"

import { motion } from "framer-motion"
import { Ruler, Scissors, Sparkles, CalendarClock } from "lucide-react"

import { SectionHeading } from "@/components/layout/PageHero"
import { whyChooseUs } from "@/lib/content"

const icons = [Ruler, Scissors, Sparkles, CalendarClock]

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-ivory/50 section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading
          eyebrow="Why Artesian Steps"
          title="The Difference Is In The Standard"
          description="Four commitments we hold to on every order, whether it is a silk tie or a full-canvas dinner suit."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border border-border bg-softwhite p-8 transition-all duration-500 hover:border-gold hover:shadow-[0_18px_60px_-40px_rgba(11,11,12,0.6)]"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-obsidian">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-7 font-serif text-2xl leading-snug">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
