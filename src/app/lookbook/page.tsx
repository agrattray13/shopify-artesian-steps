import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/layout/PageHero"
import { Button } from "@/components/ui/button"
import { lookbookItems } from "@/lib/content"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "The Artesian Steps lookbook — editorial imagery across black tie, boardroom, ceremony and after hours, styled from the current formalwear collection.",
  keywords: [
    "menswear lookbook",
    "black tie styling",
    "formalwear editorial",
    "suit inspiration",
    "tuxedo lookbook",
  ],
  openGraph: {
    title: `Lookbook | ${siteConfig.name}`,
    description:
      "Editorial imagery across black tie, boardroom, ceremony and after hours.",
    url: `${siteConfig.url}/lookbook`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/lookbook" },
}

const chapters = [
  {
    label: "Chapter I",
    title: "Daylight",
    detail:
      "Charcoal, navy and stone. Cloth chosen for how it holds a room at eleven in the morning.",
  },
  {
    label: "Chapter II",
    title: "Black Tie",
    detail:
      "Satin lapels, hand-rolled silk and midnight blue that reads darker than black under warm light.",
  },
  {
    label: "Chapter III",
    title: "The Workroom",
    detail:
      "Chalk lines, canvas fronts and the quiet part of the process nobody photographs.",
  },
]

export default function LookbookPage() {
  return (
    <>
      <PageHero
        eyebrow="Lookbook"
        title="Autumn / Winter Editorial"
        description="Photographed at the atelier and shot on the current collection. Every piece pictured is available to order or to commission."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Lookbook", href: "/lookbook" },
        ]}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {chapters.map((chapter) => (
              <article key={chapter.title} className="bg-softwhite p-10">
                <p className="eyebrow text-gold">{chapter.label}</p>
                <h2 className="mt-4 font-serif text-2xl">{chapter.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {chapter.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-5 md:auto-rows-[280px] lg:grid-cols-4">
            {lookbookItems.map((item) => (
              <figure
                key={item.title}
                className={cn(
                  "group relative overflow-hidden bg-charcoal",
                  item.span === "tall" ? "row-span-2" : "row-span-1"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <p className="font-serif text-xl">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ivory/65">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian text-ivory section-padding">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="eyebrow text-gold">Seen Something?</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Every Look Can Be Made Yours
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/70">
            Bring a reference to your consultation — a photograph, a colour, a jacket
            you already own. We will build the commission around it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="gold">
              <Link href="/new-arrivals">Shop the Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
