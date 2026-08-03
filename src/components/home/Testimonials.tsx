"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

import { SectionHeading } from "@/components/layout/PageHero"
import { testimonials } from "@/lib/products"

export function Testimonials() {
  return (
    <section className="bg-charcoal text-ivory section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <SectionHeading
          tone="light"
          eyebrow="Client Notes"
          title="In Their Words"
          description="The following testimonials are sample content created for this demonstration storefront and do not represent real clients."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.author}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-full flex-col border border-ivory/12 bg-obsidian/60 p-9"
            >
              <Quote className="h-7 w-7 text-gold" strokeWidth={1} />
              <blockquote className="mt-7 flex-1 font-serif text-xl leading-relaxed text-ivory/90">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-8 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-3.5 w-3.5 fill-gold text-gold"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-ivory/10 pt-4">
                <p className="text-sm text-ivory">{testimonial.author}</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-wideline text-ivory/45">
                  {testimonial.detail}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-10 text-center text-[0.62rem] uppercase tracking-wideline text-ivory/40">
          Sample content — for demonstration purposes only
        </p>
      </div>
    </section>
  )
}
