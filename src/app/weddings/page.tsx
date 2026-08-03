import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"

import { PageHero, SectionHeading } from "@/components/layout/PageHero"
import { ProductGrid } from "@/components/products/ProductGrid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { weddingPackages } from "@/lib/content"
import { getProductsByCategory } from "@/lib/products"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Weddings & Events",
  description:
    "Wedding and event dressing from Artesian Steps — group fittings, coordinated party suiting, managed timelines and packages for parties of one to sixteen.",
  keywords: [
    "wedding suits",
    "groomsmen suits",
    "wedding tuxedo",
    "group fitting",
    "wedding party styling",
    "event formalwear",
  ],
  openGraph: {
    title: `Weddings & Events | ${siteConfig.name}`,
    description:
      "Coordinated wedding party dressing, group fittings and managed delivery timelines.",
    url: `${siteConfig.url}/weddings`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/weddings" },
}

const timeline = [
  { when: "6 – 9 months out", what: "Initial consultation with the couple. Palette, formality and budget agreed." },
  { when: "4 – 5 months out", what: "Cloth selected and the groom's first measurements taken." },
  { when: "3 months out", what: "Group fitting session for the full party at the atelier." },
  { when: "6 weeks out", what: "Garments arrive from the workroom; alteration fittings scheduled." },
  { when: "2 weeks out", what: "Final fittings, accessories confirmed, everything pressed." },
  { when: "7 days out", what: "Collection or delivery to your venue, with a spare of everything." },
]

export default function WeddingsPage() {
  const tuxedos = getProductsByCategory("tuxedos")

  return (
    <>
      <PageHero
        eyebrow="Weddings & Events"
        title="Dress The Whole Party As One"
        description="From a single groom to a party of sixteen, we manage the fittings, the alterations and the delivery timeline so the only thing you think about that morning is the ceremony."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Weddings", href: "/weddings" },
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="gold">
            <Link href="/booking">Book a Party Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outlineLight">
            <Link href="/tuxedos">Shop Tuxedos</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading
            eyebrow="Packages"
            title="Three Ways To Work With Us"
            description="Every package includes a dedicated stylist, complimentary first alterations and delivery at least seven days before your date."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {weddingPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={cn(
                  "flex flex-col border p-10 transition-shadow duration-500",
                  pkg.featured
                    ? "border-gold bg-obsidian text-ivory shadow-[0_30px_80px_-50px_rgba(11,11,12,0.8)]"
                    : "border-border bg-softwhite"
                )}
              >
                {pkg.featured ? (
                  <Badge variant="gold" className="w-fit">
                    Most Chosen
                  </Badge>
                ) : null}

                <h3 className="mt-5 font-serif text-3xl">{pkg.name}</h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    pkg.featured ? "text-ivory/65" : "text-muted-foreground"
                  )}
                >
                  {pkg.summary}
                </p>
                <p className="mt-7 font-serif text-2xl text-gold">{pkg.price}</p>

                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        strokeWidth={1.5}
                      />
                      <span
                        className={pkg.featured ? "text-ivory/75" : "text-muted-foreground"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={pkg.featured ? "gold" : "outline"}
                  className="mt-10"
                >
                  <Link href="/booking">Enquire</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ivory/40 section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading
            eyebrow="The Timeline"
            title="Working Backwards From Your Date"
            description="This is the schedule we build for every wedding. If you are closer to the date than the first step, tell us — we have made a full party work in five weeks before."
          />

          <ol className="mx-auto mt-16 max-w-3xl">
            {timeline.map((entry, index) => (
              <li
                key={entry.when}
                className="relative flex gap-8 border-l border-gold/40 pb-10 pl-10 last:pb-0"
              >
                <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-softwhite text-[0.55rem] text-gold">
                  {index + 1}
                </span>
                <div>
                  <p className="eyebrow text-gold">{entry.when}</p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {entry.what}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading
            eyebrow="Wedding Favourites"
            title="What The Groom Usually Wears"
          />
          <div className="mt-14">
            <ProductGrid products={tuxedos} columns={3} />
          </div>
        </div>
      </section>

      <section className="bg-burgundy text-ivory section-padding">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="eyebrow text-gold">Let&apos;s Begin</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Bring the Party. We&apos;ll Handle the Rest.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/75">
            Consultations run ninety minutes and are complimentary. Bring the couple,
            the colour palette and as many of the party as you can gather.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="gold">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/contact">Speak With a Stylist</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
