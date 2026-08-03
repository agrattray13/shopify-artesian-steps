import type { Metadata } from "next"

import { PageHero } from "@/components/layout/PageHero"
import { PolicyContent } from "@/components/layout/PolicyContent"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Artesian Steps collects, uses, stores and protects your personal information, including measurement records, order data, cookies and your rights over that data.",
  keywords: [
    "privacy policy",
    "data protection",
    "customer data",
    "cookies policy",
    "measurement records",
  ],
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "How we collect, use, store and protect your personal information.",
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/privacy" },
}

const sections = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect information you give us directly when you create an account, place an order, book an appointment, subscribe to The Gentleman's Edit or contact the atelier.",
    ],
    bullets: [
      "Identity and contact details: name, email address, telephone number, delivery and billing addresses",
      "Measurement records: the eighteen figures taken at a fitting, plus posture and preference notes",
      "Order history: garments purchased, alterations performed and appointment history",
      "Technical data: IP address, browser type, device information and pages viewed",
    ],
  },
  {
    heading: "How We Use Your Information",
    bullets: [
      "To fulfil orders, arrange delivery and process returns or exchanges",
      "To schedule and confirm fittings, consultations and alteration appointments",
      "To keep your measurement profile current so future commissions need less of your time",
      "To send order updates and, where you have opted in, editorial and collection announcements",
      "To detect and prevent fraudulent transactions",
      "To improve the storefront based on aggregated, non-identifying usage patterns",
    ],
  },
  {
    heading: "Legal Basis for Processing",
    paragraphs: [
      "We process order and appointment data because it is necessary to perform our contract with you. We process marketing data on the basis of your consent, which you may withdraw at any time. We process fraud-prevention and security data on the basis of our legitimate interests.",
    ],
  },
  {
    heading: "Cookies and Local Storage",
    paragraphs: [
      "This storefront uses your browser's local storage to remember the contents of your shopping bag between visits. That data stays on your device and is not transmitted to us until you place an order.",
      "Where analytics or advertising cookies are used, they are set only with your consent and can be withdrawn through your browser settings at any time.",
    ],
  },
  {
    heading: "Sharing Your Information",
    paragraphs: [
      "We do not sell personal information. We share it only with the service providers required to run the business — payment processors, delivery carriers, our workroom partners and our email platform — and only to the extent each of them needs it.",
      "Every provider is bound by contract to process data solely on our instructions and to keep it confidential.",
    ],
  },
  {
    heading: "Data Retention",
    paragraphs: [
      "Order records are retained for seven years to meet tax and accounting obligations. Measurement profiles are retained indefinitely so that repeat commissions remain straightforward, unless you ask us to delete them. Marketing preferences are retained until you unsubscribe.",
    ],
  },
  {
    heading: "Your Rights",
    bullets: [
      "Access a copy of the personal information we hold about you",
      "Correct anything inaccurate or incomplete",
      "Request deletion of your data, including your measurement profile",
      "Object to or restrict certain processing, including direct marketing",
      "Receive your data in a portable, machine-readable format",
      "Lodge a complaint with your local data protection authority",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "All traffic to this storefront is encrypted in transit. Payment details are handled entirely by our payment processor and never stored on our systems. Access to measurement and order records is restricted to atelier staff who need it.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This storefront is not directed at anyone under sixteen, and we do not knowingly collect information from children. Measurements taken for a junior member of a wedding party are recorded under the booking adult's profile.",
    ],
  },
  {
    heading: "Changes and Contact",
    paragraphs: [
      `We will post any change to this policy on this page and update the date above. To exercise any of your rights, or to ask a question about how we handle data, write to ${siteConfig.email} or to ${siteConfig.address.line1}, ${siteConfig.address.line2}.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="What we collect, why we collect it, how long we keep it, and how to have it removed."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy", href: "/privacy" },
        ]}
        size="compact"
      />

      <PolicyContent
        updated="1 March 2024"
        intro="Artesian Steps holds two kinds of information about its clients: the ordinary details required to sell and deliver a garment, and the measurements required to make one fit. Both are treated with the same care."
        sections={sections}
      />
    </>
  )
}
