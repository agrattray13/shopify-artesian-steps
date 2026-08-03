import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, SectionHeading } from "@/components/layout/PageHero"
import { Button } from "@/components/ui/button"
import { brandValues, team } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Artesian Steps — a formalwear atelier founded in 1998, built on Italian cloth, hand finishing and unhurried service. Meet the team behind the workroom.",
  keywords: [
    "about Artesian Steps",
    "menswear atelier",
    "bespoke tailoring story",
    "master tailor",
    "luxury menswear brand",
  ],
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "A formalwear atelier founded in 1998, built on Italian cloth, hand finishing and unhurried service.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/about" },
}

const milestones = [
  { year: "1998", title: "The first workroom", detail: "Elias Marchetti cuts the first Artesian Steps jacket above a shoe repair shop on Wardour Row." },
  { year: "2006", title: "The atelier opens", detail: "We move into the fourth-floor space we still occupy, with six fitting rooms and a full workroom." },
  { year: "2014", title: "Weddings & Events", detail: "A dedicated wedding service launches after dressing our four hundredth groomsman." },
  { year: "2021", title: "Footwear", detail: "The Regent last is developed with a Goodyear-welted workshop in Le Marche, Italy." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Workroom, Not a Warehouse"
        description="Artesian Steps began with one tailor, one cutting table and a conviction that a man should own fewer, better things. Twenty-four years later, the conviction has not changed."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="aspect-[4/5] overflow-hidden bg-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/900x1125/1A1A1D/C6A15B?text=The+Atelier"
                alt="The Artesian Steps atelier"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-gold">Since 1998</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Built By Hand, Kept For Decades
              </h2>
              <div className="luxe-rule mt-8" />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Elias Marchetti trained in Naples, finished in London, and opened
                  Artesian Steps because he had grown tired of watching good cloth
                  ruined by rushed construction. The first jacket left the workroom in
                  the spring of 1998. It is still worn, occasionally, by the man who
                  ordered it.
                </p>
                <p>
                  We are not a large house. We cut in limited runs, we keep our own
                  tailors on the premises rather than sending work out, and we take
                  appointments rather than queues. That structure limits how much we
                  can make in a season — which is precisely the point.
                </p>
                <p>
                  What you buy from us is intended to outlast the occasion it was
                  bought for. Every garment can be altered, every shoe can be resoled,
                  and every measurement stays on file so the next order needs less of
                  your time than the last.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/booking">Visit the Atelier</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/custom-fitting">The Fitting Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ivory/40 section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading
            eyebrow="What We Hold To"
            title="Four Principles, Applied Without Exception"
          />
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
            {brandValues.map((value) => (
              <article key={value.title} className="bg-softwhite p-10">
                <h3 className="font-serif text-2xl">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {value.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading eyebrow="The Timeline" title="Four Moments That Shaped Us" />
          <ol className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="bg-softwhite p-9">
                <p className="font-serif text-4xl text-gold">{milestone.year}</p>
                <h3 className="mt-5 font-serif text-xl">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {milestone.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-obsidian text-ivory section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading
            tone="light"
            eyebrow="The Team"
            title="The People Who Make It"
            description="Four of the fourteen people who will handle your order between the first measurement and the final press."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-charcoal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-serif text-xl">{member.name}</h3>
                <p className="mt-1 text-[0.62rem] uppercase tracking-wideline text-gold">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
