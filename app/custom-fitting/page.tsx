import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Custom Fitting | Artesian Steps",
  description: "Schedule a private fitting and experience made-to-measure formalwear tailored to your exact measurements.",
};

const steps = [
  {
    number: "01",
    title: "Schedule a Consultation",
    description: "Book a private appointment with a style advisor to discuss your occasion, preferences, and goals.",
  },
  {
    number: "02",
    title: "Select Your Style",
    description: "Choose fabrics, silhouettes, lapels, linings, buttons, and monogramming options.",
  },
  {
    number: "03",
    title: "Complete Your Measurements",
    description: "Our tailor captures over 30 measurements to ensure a precise, comfortable fit.",
  },
  {
    number: "04",
    title: "Final Fitting and Delivery",
    description: "Try on your finished garment, request any final tweaks, and take it home ready to wear.",
  },
];

export default function CustomFittingPage() {
  return (
    <>
      <PageHeader
        title="Custom Fitting Experience"
        subtitle="Made-to-measure formalwear shaped around your posture, preferences, and personal style."
      />
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-obsidian">Precision, Personalization, Confidence</h2>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              A custom-fitted garment is an investment in how you look and feel. Our process combines traditional tailoring with modern fit science, resulting in formalwear that moves with you and flatters your frame.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              Whether you need a single statement tuxedo or an entire wardrobe refresh, our team guides you through every decision—from lapel width to trouser break.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/appointments">Book a Private Fitting</Link>
            </Button>
          </div>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 border-b border-stone-200 pb-6">
                <span className="font-serif text-4xl text-gold/40">{step.number}</span>
                <div>
                  <h3 className="font-serif text-xl text-obsidian">{step.title}</h3>
                  <p className="mt-2 text-charcoal/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
