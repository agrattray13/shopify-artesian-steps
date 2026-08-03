import { PageHeader } from "@/components/shared/page-header";
import { SafeImage } from "@/components/shared/safe-image";

export const metadata = {
  title: "Lookbook | Artesian Steps",
  description: "Editorial formalwear looks for weddings, black-tie events, business occasions, and evening celebrations.",
};

const looks = [
  { title: "Wedding Morning", description: "Soft tailoring for outdoor ceremonies and refined receptions.", image: "/images/lookbook-wedding.jpg" },
  { title: "Black Tie", description: "Classic tuxedos and dinner jackets for galas and formal evenings.", image: "/images/lookbook-blacktie.jpg" },
  { title: "Business Formal", description: "Sharp suits and Oxford shirts for the modern professional.", image: "/images/lookbook-business.jpg" },
  { title: "Evening Celebration", description: "Velvet jackets and polished footwear for memorable nights.", image: "/images/lookbook-evening.jpg" },
];

export default function LookbookPage() {
  return (
    <>
      <PageHeader title="The Lookbook" subtitle="Editorial inspiration for every formal occasion." />
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {looks.map((look) => (
            <div key={look.title} className="group relative aspect-[4/5] overflow-hidden bg-ivory">
              <SafeImage
                src={look.image}
                alt={look.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-ivory">
                <h2 className="font-serif text-3xl">{look.title}</h2>
                <p className="mt-2 max-w-sm text-ivory/80">{look.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
