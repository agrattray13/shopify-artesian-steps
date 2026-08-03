import type { Metadata } from "next"
import Link from "next/link"

import { PageHero, SectionHeading } from "@/components/layout/PageHero"
import { Button } from "@/components/ui/button"
import { fittingSteps } from "@/lib/content"
import { measuringTips } from "@/lib/size-guide"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Custom Fitting",
  description:
    "The Artesian Steps fitting process — consultation, eighteen hand measurements, a pinned fitting and final collection, with every figure kept on file for future orders.",
  keywords: [
    "custom fitting",
    "made to measure suit",
    "bespoke tailoring process",
    "suit measurements",
    "tailor appointment",
  ],
  openGraph: {
    title: `Custom Fitting | ${siteConfig.name}`,
    description:
      "Four appointments, eighteen measurements and a garment cut to one body — yours.",
    url: `${siteConfig.url}/custom-fitting`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/custom-fitting" },
}

const included = [
  "A dedicated stylist for the length of the commission",
  "Eighteen hand measurements plus posture and stance notes",
  "Cloth selection from over two hundred Italian and English mills",
  "Lapel, lining, button, pocket and monogram specification",
  "Complimentary first alterations within twelve months",
  "Your measurement profile kept on file indefinitely",
]

const faqLite = [
  {
    q: "How long does a commission take?",
    a: "Six to eight weeks from measurement to collection for suits and tuxedos. Rush commissions can be arranged in as little as three weeks for an additional fee.",
  },
  {
    q: "What should I bring?",
    a: "The shoes you intend to wear with the garment, and a shirt you already like the fit of. Everything else we provide.",
  },
  {
    q: "Do I need an appointment?",
    a: "Yes. We only ever have one client in a fitting room at a time, so every visit is booked in advance and never double-booked.",
  },
  {
    q: "Can you work from an existing garment?",
    a: "We can. If travel makes visiting difficult, send us a jacket that fits you well and we will pattern from it, then refine at the first fitting.",
  },
]

export default function CustomFittingPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom Fitting"
        title="Cut For One Body. Yours."
        description="Four appointments, roughly two and a half hours in total, and a garment that will not need explaining. This is how a commission runs from first handshake to final press."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Custom Fitting", href: "/custom-fitting" },
        ]}
      >
        <Button asChild size="lg" variant="gold">
          <Link href="/booking">Book Your First Appointment</Link>
        </Button>
      </PageHero>

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading
            eyebrow="The Process"
            title="Four Appointments, Start To Finish"
          />

          <div className="mt-16 space-y-px bg-border">
            {fittingSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-6 bg-softwhite p-10 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12 md:p-12"
              >
                <p className="font-serif text-5xl text-gold md:text-6xl">
                  {step.number}
                </p>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{step.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
                <p className="text-[0.62rem] uppercase tracking-wideline text-muted-foreground md:text-right">
                  {step.duration}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian text-ivory section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="aspect-[4/5] overflow-hidden bg-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://placehold.co/900x1125/1A1A1D/C6A15B?text=The+Fitting+Room"
                alt="A fitting room at the Artesian Steps atelier"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-gold">What Is Included</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Everything, Except the Rush
              </h2>
              <div className="luxe-rule mt-8" />
              <ul className="mt-10 space-y-5">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-ivory/10 pb-5 text-sm leading-relaxed text-ivory/70 last:border-0"
                  >
                    <span className="text-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading
            eyebrow="Before You Arrive"
            title="How To Measure At Home"
            description="If you would rather start remotely, these four measurements are enough for us to begin. Use a soft tape and have someone else hold it."
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
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Full charts are available on the{" "}
            <Link href="/size-guide" className="link-underline text-obsidian">
              size guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-ivory/40 section-padding">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHeading eyebrow="Practicalities" title="Questions We Are Asked Most" />
          <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2">
            {faqLite.map((item) => (
              <div key={item.q}>
                <h3 className="font-serif text-xl">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/booking">Reserve a Fitting</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
