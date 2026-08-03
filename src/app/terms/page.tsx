import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { PolicyContent } from "@/components/layout/PolicyContent"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing purchases, commissions, appointments, deposits, alterations and use of the Artesian Steps storefront.",
  keywords: [
    "terms and conditions",
    "terms of sale",
    "commission terms",
    "appointment policy",
    "website terms",
  ],
  openGraph: {
    title: `Terms & Conditions | ${siteConfig.name}`,
    description:
      "Terms governing purchases, commissions, appointments and use of this storefront.",
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/terms" },
}

const sections = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By browsing this storefront, placing an order or booking an appointment, you agree to these terms. If you do not agree with them, please do not use the site.",
      "We may revise these terms from time to time. The version in force is the one published on this page at the moment you place your order.",
    ],
  },
  {
    heading: "Demonstration Storefront",
    paragraphs: [
      "This site is a demonstration build. Checkout does not process real payments, no cards are charged, and no order is dispatched. Product imagery is placeholder artwork and the testimonials shown are clearly labelled sample content.",
    ],
  },
  {
    heading: "Orders and Acceptance",
    paragraphs: [
      "Your order is an offer to buy. A contract is formed only when we send a dispatch confirmation, or, for commissions, when the deposit is received and the cloth is cut.",
      "We may decline an order where the item is unavailable, where a pricing or description error has occurred, or where we are unable to obtain authorisation for payment.",
    ],
  },
  {
    heading: "Pricing and Payment",
    bullets: [
      "All prices are shown in US dollars and exclude sales tax unless stated otherwise",
      "Tax is calculated at checkout based on the delivery address",
      "Ready-to-wear orders are charged in full at the point of sale",
      "Commissions require a fifty per cent deposit, with the balance due at collection",
      "We reserve the right to correct pricing errors before dispatch",
    ],
  },
  {
    heading: "Appointments and Deposits",
    paragraphs: [
      "Consultations are complimentary. Fittings and wedding party sessions may require a deposit, which is credited in full against any order placed within ninety days.",
      "Appointments cancelled with less than twenty-four hours' notice, or missed entirely, may forfeit the deposit. We will always try to rebook you first.",
    ],
  },
  {
    heading: "Commissions and Alterations",
    paragraphs: [
      "Commissioned garments are cut to the measurements recorded at your fitting. Because they cannot be resold, they are not returnable except where the fault is ours.",
      "First alterations are complimentary within twelve months of purchase. Alterations carried out by a tailor other than our own void that provision and any related warranty.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      `All content on this storefront — text, imagery, layout, the ${siteConfig.name} name and associated marks — belongs to us or our licensors. You may not reproduce, distribute or create derivative works from it without written permission.`,
    ],
  },
  {
    heading: "Acceptable Use",
    bullets: [
      "Do not use the site for any unlawful or fraudulent purpose",
      "Do not attempt to gain unauthorised access to any part of the site or its systems",
      "Do not scrape, mirror or systematically extract content from the site",
      "Do not interfere with the site's operation or introduce malicious code",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, our liability arising from any order is limited to the amount you paid for the goods concerned. We do not exclude liability for death or personal injury caused by our negligence, or for fraud.",
      "We do not warrant that the storefront will be uninterrupted or error free, and we are not liable for losses arising from events beyond our reasonable control.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These terms and any dispute arising from them are governed by the laws of the State of New York, and the courts of that state have exclusive jurisdiction.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about these terms should be sent to ${siteConfig.email}, or by post to ${siteConfig.address.line1}, ${siteConfig.address.line2}.`,
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms on which we sell garments, take commissions and hold appointments."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms", href: "/terms" },
        ]}
        size="compact"
      />

      <PolicyContent
        updated="1 March 2024"
        intro="These terms set out the agreement between you and Artesian Steps whenever you buy a garment, commission a piece or book time with a stylist."
        sections={sections}
      />
    </>
  )
}
