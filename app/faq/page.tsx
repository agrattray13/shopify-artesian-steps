import { PageHeader } from "@/components/shared/page-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ | Artesian Steps",
  description: "Frequently asked questions about sizing, shipping, returns, and custom fittings.",
};

const faqs = [
  {
    question: "How do I know my suit size?",
    answer:
      "We recommend visiting our Size & Fit Guide or booking a private fitting. Our tailors take comprehensive measurements to ensure the best fit.",
  },
  {
    question: "Do you offer alterations?",
    answer:
      "Yes. Basic alterations are complimentary with full-price suiting and tuxedo purchases. Additional tailoring can be arranged at our atelier.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Most orders ship within 1–2 business days and arrive within 3–5 business days. Custom and made-to-measure items require 4–6 weeks.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Unworn items with original tags may be returned within 30 days. Made-to-measure and altered garments are final sale.",
  },
  {
    question: "Can I book a fitting for my wedding party?",
    answer:
      "Absolutely. We offer group fittings and wedding-party consultations. Visit our Appointments page to schedule.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We currently ship to the United States and Canada. International shipping rates are calculated at checkout.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" subtitle="Answers to common questions about our products and services." />
      <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
