"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/shared/safe-image";

const services = [
  "Groom consultations",
  "Coordinated wedding-party styling",
  "Group fittings",
  "Suit and tuxedo packages",
  "Accessories and footwear",
  "Appointment scheduling",
];

export function WeddingsEventsSection() {
  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <SafeImage
                src="/images/weddings-events.jpg"
                alt="Groom and groomsmen in tailored wedding suits"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Weddings & Events</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-obsidian sm:text-5xl">
              Dress the Entire Celebration
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-charcoal/80">
              From the groom to the groomsmen, from black-tie galas to milestone birthdays, we help groups look coordinated, elegant, and completely themselves. Our wedding and events service includes everything you need for a polished, stress-free occasion.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 text-sm text-charcoal">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                  {service}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/appointments">Plan Your Wedding Look</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/weddings-events">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
