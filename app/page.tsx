import { HeroSection } from "@/components/sections/hero";
import { FeaturedCategoriesSection } from "@/components/sections/featured-categories";
import { NewArrivalsSection } from "@/components/sections/new-arrivals";
import { SignatureCollectionSection } from "@/components/sections/signature-collection";
import { WeddingsEventsSection } from "@/components/sections/weddings-events";
import { CustomFittingSection } from "@/components/sections/custom-fitting";
import { LookbookSection } from "@/components/sections/lookbook";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { EmailSignupSection } from "@/components/sections/email-signup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategoriesSection />
      <NewArrivalsSection />
      <SignatureCollectionSection />
      <WeddingsEventsSection />
      <CustomFittingSection />
      <LookbookSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <EmailSignupSection />
    </>
  );
}
