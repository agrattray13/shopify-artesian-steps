"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const pillars = [
  {
    title: "Half & Full Canvas",
    detail:
      "A floating canvas chest piece that moulds to your posture rather than fighting it.",
  },
  {
    title: "Italian Cloth",
    detail:
      "Super 120s to 150s wool woven in Biella, chosen for drape, recovery and depth of colour.",
  },
  {
    title: "Hand Finishing",
    detail:
      "Pick-stitched edges, surgeon's cuffs and hand-set collars — the details you feel before you see.",
  },
]

export function SignatureCollection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/900x1125/1A1A1D/C6A15B?text=Signature+Collection"
                alt="The Artesian Steps signature collection"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-52 bg-burgundy p-7 text-ivory md:block lg:-right-10">
              <p className="font-serif text-4xl">1998</p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-wideline text-ivory/70">
                The year our first jacket left the workroom
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow text-gold">The Signature Collection</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-balance md:text-5xl">
              Crafted for Life&apos;s Defining Moments
            </h2>
            <div className="luxe-rule mt-8" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              A signature Artesian Steps garment begins with a conversation and ends
              with a fitting you did not know you needed. Between those two points
              are sixty individual operations, four of which are performed entirely
              by hand.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The result is tailoring that holds its shape for a decade and reads as
              quiet rather than loud — the kind of clothing that lets the person
              wearing it be the most interesting thing in the room.
            </p>

            <dl className="mt-10 space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-l border-gold/60 pl-6">
                  <dt className="font-serif text-xl">{pillar.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pillar.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/suits">
                  Explore Tailoring
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
