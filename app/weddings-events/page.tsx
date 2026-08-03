import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/shared/safe-image";

export const metadata = {
  title: "Weddings & Events | Artesian Steps",
  description: "Wedding-party styling, groom consultations, group fittings, and formal packages for every celebration.",
};

const services = [
  {
    title: "Groom Consultations",
    description: "A private session to define your wedding-day look, from suit style and fabric to tie and shoe pairing.",
  },
  {
    title: "Wedding-Party Styling",
    description: "Coordinated outfits for groomsmen, fathers, and ring bearers that complement the wedding palette.",
  },
  {
    title: "Group Fittings",
    description: "Scheduled fittings for the entire party, ensuring consistent fit and timely delivery before the big day.",
  },
  {
    title: "Suit & Tuxedo Packages",
    description: "Customized packages that include jackets, trousers, shirts, ties, and shoes at preferred rates.",
  },
];

export default function WeddingsEventsPage() {
  return (
    <>
      <PageHeader
        title="Weddings & Special Events"
        subtitle="Elegant styling for grooms, wedding parties, galas, proms, and celebrations."
      />
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden bg-ivory">
            <SafeImage
              src="/images/weddings-events.jpg"
              alt="Groom and groomsmen in tailored wedding suits"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-obsidian">A Complete Celebration Wardrobe</h2>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              Weddings and formal celebrations deserve more than off-the-rack solutions. At Artesian Steps, we provide end-to-end styling that covers every gentleman in your party—from the groom to the guests.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="border-l-2 border-gold pl-6">
                  <h3 className="font-serif text-xl text-obsidian">{service.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/appointments">Plan Your Wedding Look</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/shop/weddings">Shop Wedding Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
