import type { Metadata } from "next"

import { EmailSignup } from "@/components/home/EmailSignup"
import { FeaturedCategories } from "@/components/home/FeaturedCategories"
import { FittingSteps } from "@/components/home/FittingSteps"
import { Hero } from "@/components/home/Hero"
import { LookbookSection } from "@/components/home/LookbookSection"
import { NewArrivals } from "@/components/home/NewArrivals"
import { SignatureCollection } from "@/components/home/SignatureCollection"
import { Testimonials } from "@/components/home/Testimonials"
import { WeddingsSection } from "@/components/home/WeddingsSection"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Luxury Men's Formalwear",
  description:
    "Artesian Steps is a luxury formalwear atelier: hand-finished suits, tuxedos, dress shirts, Goodyear-welted footwear and accessories, fitted by appointment.",
  keywords: siteConfig.keywords,
  openGraph: {
    title: `${siteConfig.name} | Luxury Men's Formalwear`,
    description:
      "Hand-finished suits, tuxedos and formalwear, measured and fitted in our atelier. Dress with intention. Arrive with confidence.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <SignatureCollection />
      <WeddingsSection />
      <FittingSteps />
      <LookbookSection />
      <WhyChooseUs />
      <Testimonials />
      <EmailSignup />
    </>
  )
}
