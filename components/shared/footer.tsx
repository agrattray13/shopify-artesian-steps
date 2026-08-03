import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "/shop/new-arrivals" },
    { label: "Suits", href: "/shop/suits" },
    { label: "Tuxedos", href: "/shop/tuxedos" },
    { label: "Dress Shirts", href: "/shop/dress-shirts" },
    { label: "Footwear", href: "/shop/footwear" },
    { label: "Accessories", href: "/shop/accessories" },
  ],
  services: [
    { label: "Custom Fitting", href: "/custom-fitting" },
    { label: "Weddings & Events", href: "/weddings-events" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Book Appointment", href: "/appointments" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Size & Fit Guide", href: "/size-fit-guide" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-obsidian text-ivory" role="contentinfo">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
              Artesian Steps
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
              Tailored confidence for every occasion. Refined suits, tuxedos, footwear, and finishing pieces for the modern gentleman.
            </p>
            <address className="mt-6 not-italic text-sm text-ivory/70">
              <p>128 Atelier Row, Suite 400</p>
              <p>New York, NY 10012</p>
              <p className="mt-2">
                <a href="tel:+12125551234" className="hover:text-gold">
                  (212) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:concierge@artesiansteps.com" className="hover:text-gold">
                  concierge@artesiansteps.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">Shop</h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">Services</h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">Customer Care</h3>
            <ul className="space-y-3 text-sm text-ivory/80">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded bg-charcoal/50 p-6 lg:mt-16">
          <h3 className="font-serif text-lg">The Gentleman&apos;s Edit</h3>
          <p className="mt-1 text-sm text-ivory/70">
            Receive private offers, seasonal style guidance, and invitations to exclusive events.
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Email address"
              aria-label="Email address for newsletter"
              className="border-stone-700 bg-obsidian text-ivory placeholder:text-stone-500 focus-visible:ring-gold"
              required
            />
            <Button type="submit" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>

        <Separator className="my-10 bg-stone-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-ivory/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Artesian Steps. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="hover:text-gold" aria-label="Pinterest">
              Pinterest
            </a>
            <a href="#" className="hover:text-gold" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
