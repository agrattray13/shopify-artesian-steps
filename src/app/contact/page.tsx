import type { Metadata } from "next"
import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/forms/ContactForm"
import { PageHero } from "@/components/layout/PageHero"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Artesian Steps atelier — address, opening hours, telephone, email and a direct message form. We reply to every enquiry within one business day.",
  keywords: [
    "contact Artesian Steps",
    "menswear atelier contact",
    "formalwear customer service",
    "tailor phone number",
  ],
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Address, hours and a direct line to the atelier. We reply within one business day.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak With the Atelier"
        description="A stylist answers the phone between ten and seven. If you would rather write, use the form below and we will reply within one business day."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow text-gold">The Atelier</p>
            <h2 className="mt-4 font-serif text-3xl">Where To Find Us</h2>
            <div className="luxe-rule mt-7" />

            <dl className="mt-10 space-y-8">
              <div className="flex gap-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
                    Address
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </dd>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
                    Telephone
                  </dt>
                  <dd className="mt-2 text-sm">
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                      className="link-underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-2 text-sm">
                    <a href={`mailto:${siteConfig.email}`} className="link-underline">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
                    Opening Hours
                  </dt>
                  <dd className="mt-2 space-y-1 text-sm">
                    {siteConfig.hours.map((entry) => (
                      <span key={entry.day} className="flex justify-between gap-8">
                        <span>{entry.day}</span>
                        <span className="text-muted-foreground">{entry.time}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-12 border border-border bg-ivory/40 p-8">
              <h3 className="font-serif text-xl">Prefer to come in?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Fittings and consultations are by appointment so that no fitting room is
                ever shared. Booking takes under a minute.
              </p>
              <Button asChild className="mt-7">
                <Link href="/booking">Book an Appointment</Link>
              </Button>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="relative h-[320px] w-full overflow-hidden bg-charcoal md:h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://placehold.co/1600x600/1A1A1D/C6A15B?text=118+Wardour+Row"
            alt="Map of the Artesian Steps atelier location"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}
