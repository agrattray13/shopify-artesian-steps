import Link from "next/link"
import { CalendarCheck, Gem, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Users,
    title: "Group Fittings",
    detail:
      "The entire party measured in a single private session, with a stylist assigned to your wedding from first appointment to final press.",
  },
  {
    icon: CalendarCheck,
    title: "Timeline Management",
    detail:
      "We work backwards from your date, scheduling alterations so every garment is collected at least seven days before the ceremony.",
  },
  {
    icon: Gem,
    title: "Coordinated Details",
    detail:
      "Ties, pocket squares, cufflinks and boutonnière pins matched across the party — including the fathers and the ring bearer.",
  },
]

export function WeddingsSection() {
  return (
    <section className="relative overflow-hidden bg-burgundy text-ivory section-padding">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(198,161,91,0.35), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow text-gold">Weddings & Events</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-balance md:text-5xl">
              The Party Dressed as One
            </h2>
            <div className="luxe-rule mt-8" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75">
              A wedding party is a composition. We fit every member of it — groom,
              groomsmen, fathers and guests of honour — so the photographs read as a
              single, deliberate line rather than eight separate decisions.
            </p>

            <dl className="mt-12 space-y-8">
              {services.map((service) => (
                <div key={service.title} className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50">
                    <service.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <dt className="font-serif text-xl">{service.title}</dt>
                    <dd className="mt-1.5 max-w-md text-sm leading-relaxed text-ivory/70">
                      {service.detail}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="gold">
                <Link href="/weddings">Wedding Services</Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link href="/booking">Book a Party Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 self-center">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden bg-obsidian/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://placehold.co/600x800/0B0B0C/C6A15B?text=The+Groom"
                  alt="Groom in Artesian Steps tailoring"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-obsidian/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://placehold.co/600x600/1A1A1D/F5F0E7?text=Details"
                  alt="Wedding accessory detail"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="aspect-square overflow-hidden bg-obsidian/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://placehold.co/600x600/5B1F2A/F5F0E7?text=The+Party"
                  alt="Wedding party fitting"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-obsidian/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://placehold.co/600x800/0B0B0C/F5F0E7?text=The+Ceremony"
                  alt="Ceremony formalwear"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
