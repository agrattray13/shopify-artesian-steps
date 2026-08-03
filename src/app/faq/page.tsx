import type { Metadata } from "next"
import Link from "next/link"

import { PageHero } from "@/components/layout/PageHero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { faqs } from "@/lib/content"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Artesian Steps fittings, sizing, alterations, orders, shipping, returns and wedding party services.",
  keywords: [
    "formalwear FAQ",
    "suit sizing questions",
    "alterations policy",
    "menswear returns",
    "fitting appointment questions",
  ],
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Fittings, sizing, alterations, orders and wedding services — answered.",
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/faq" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Help Centre"
        title="Frequently Asked"
        description="Fittings, sizing, alterations, delivery and weddings. If your question is not answered here, a stylist will answer it in person."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-16">
            {faqs.map((group) => (
              <div key={group.category}>
                <h2 className="font-serif text-2xl md:text-3xl">{group.category}</h2>
                <div className="luxe-rule mt-5" />
                <Accordion type="single" collapsible className="mt-6">
                  {group.items.map((item) => (
                    <AccordionItem key={item.question} value={item.question}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-20 border border-border bg-ivory/40 p-10 text-center">
            <h2 className="font-serif text-2xl">Still Have a Question?</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Write to us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="link-underline">
                {siteConfig.email}
              </a>{" "}
              or call {siteConfig.phone}. We reply within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact the Atelier</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/size-guide">View Size Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
