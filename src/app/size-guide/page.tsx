import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, SectionHeading } from "@/components/layout/PageHero"
import { Button } from "@/components/ui/button"
import { measuringTips, sizeCharts } from "@/lib/size-guide"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Size Guide",
  description:
    "Artesian Steps size charts for suits, tuxedos, dress shirts, footwear and accessories, with guidance on how to measure chest, waist, sleeve and inseam at home.",
  keywords: [
    "suit size chart",
    "tuxedo sizing",
    "dress shirt collar size",
    "shoe size conversion",
    "how to measure for a suit",
  ],
  openGraph: {
    title: `Size Guide | ${siteConfig.name}`,
    description:
      "Charts for suits, tuxedos, shirts and footwear, plus how to measure at home.",
    url: `${siteConfig.url}/size-guide`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/size-guide" },
}

export default function SizeGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Size Guide"
        title="Measure Once, Wear For Years"
        description="Our sizing follows US conventions. If you fall between two sizes, take the larger — suppressing a waist is straightforward, adding cloth is not."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Size Guide", href: "/size-guide" },
        ]}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-[1100px] px-6">
          <nav className="flex flex-wrap justify-center gap-3">
            {sizeCharts.map((chart) => (
              <a
                key={chart.slug}
                href={`#${chart.slug}`}
                className="border border-border px-5 py-2.5 text-[0.62rem] uppercase tracking-wideline transition-colors hover:border-gold hover:text-gold"
              >
                {chart.title}
              </a>
            ))}
          </nav>

          <div className="mt-20 space-y-20">
            {sizeCharts.map((chart) => (
              <section key={chart.slug} id={chart.slug} className="scroll-mt-32">
                <h2 className="font-serif text-3xl">{chart.title}</h2>
                <div className="luxe-rule mt-5" />
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {chart.note}
                </p>

                <div className="mt-8 overflow-x-auto border border-border">
                  <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead>
                      <tr className="bg-obsidian text-ivory">
                        {chart.headers.map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="whitespace-nowrap px-5 py-4 text-left text-[0.6rem] font-medium uppercase tracking-wideline"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {chart.rows.map((row, rowIndex) => (
                        <tr
                          key={row[0]}
                          className={
                            rowIndex % 2 === 0 ? "bg-softwhite" : "bg-ivory/40"
                          }
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={`${row[0]}-${chart.headers[cellIndex]}`}
                              className={
                                cellIndex === 0
                                  ? "whitespace-nowrap px-5 py-4 font-medium"
                                  : "whitespace-nowrap px-5 py-4 text-muted-foreground"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ivory/40 section-padding">
        <div className="mx-auto max-w-[1100px] px-6">
          <SectionHeading
            eyebrow="How To Measure"
            title="Four Measurements, Taken Properly"
            description="Use a soft tape, stand as you normally stand, and have someone else take the reading. Do not pull the tape tight."
          />
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
            {measuringTips.map((tip) => (
              <article key={tip.title} className="bg-softwhite p-10">
                <h3 className="font-serif text-xl">{tip.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tip.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Still uncertain? A stylist will take all eighteen measurements in under
              thirty minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/booking">Book a Measurement</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/shipping-returns">Shipping &amp; Returns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
