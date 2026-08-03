import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata = {
  title: "Contact | Artesian Steps",
  description: "Get in touch with the Artesian Steps team for inquiries, appointments, and support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We would be delighted to hear from you." />
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-obsidian">Visit the Atelier</h2>
            <address className="mt-6 not-italic text-charcoal/80">
              <p className="font-medium text-obsidian">Artesian Steps</p>
              <p>128 Atelier Row, Suite 400</p>
              <p>New York, NY 10012</p>
              <p className="mt-4">
                Phone:{" "}
                <a href="tel:+12125551234" className="text-gold hover:underline">
                  (212) 555-1234
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:concierge@artesiansteps.com" className="text-gold hover:underline">
                  concierge@artesiansteps.com
                </a>
              </p>
            </address>
            <div className="mt-8">
              <h3 className="font-serif text-xl text-obsidian">Hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
                <li>Monday – Friday: 10:00 AM – 7:00 PM</li>
                <li>Saturday: 10:00 AM – 6:00 PM</li>
                <li>Sunday: 12:00 PM – 5:00 PM</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
