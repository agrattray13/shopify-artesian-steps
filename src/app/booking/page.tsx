import type { Metadata } from "next"

import { BookingForm } from "@/components/booking/BookingForm"
import { PageHero } from "@/components/layout/PageHero"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a private consultation, suit or tuxedo fitting, wedding party consultation or alteration appointment at the Artesian Steps atelier.",
  keywords: [
    "book fitting",
    "suit fitting appointment",
    "tuxedo fitting",
    "wedding party consultation",
    "private styling appointment",
  ],
  openGraph: {
    title: `Book an Appointment | ${siteConfig.name}`,
    description:
      "Reserve a private fitting or consultation at the Artesian Steps atelier.",
    url: `${siteConfig.url}/booking`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/booking" },
}

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Appointments"
        title="Reserve Your Fitting"
        description="Appointments are private and never double-booked. Tell us the occasion and we will assign a stylist and a tailor to you for the duration."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Booking", href: "/booking" },
        ]}
      />
      <BookingForm />
    </>
  )
}
