import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "About | Artesian Steps",
  description: "Learn about Artesian Steps, our commitment to luxury men's formalwear, and our approach to personal style.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Artesian Steps" subtitle="A modern destination for gentlemen who dress with intention." />
      <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8 text-charcoal/80 leading-relaxed">
          <p>
            Artesian Steps was founded on a simple belief: every man deserves to feel confident, refined, and properly dressed for the moments that matter. What began as a small tailoring studio has grown into a complete luxury formalwear destination—offering suits, tuxedos, dress shirts, footwear, accessories, and personalized styling under one roof.
          </p>
          <p>
            Our collections are built around timeless silhouettes, premium materials, and meticulous construction. We source Italian wools, English mohair, silk linings, and full-grain leathers, then shape each garment with techniques refined over generations.
          </p>
          <p>
            But great clothing is only part of the story. Our style advisors and tailors work directly with every client to understand the occasion, the fit, and the feeling they want to project. The result is formalwear that looks exceptional and feels unmistakably personal.
          </p>
          <p>
            Whether you are preparing for a wedding, a gala, a boardroom debut, or simply elevating your everyday wardrobe, Artesian Steps is here to help you arrive with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { value: "15+", label: "Years of Craft" },
            { value: "12,000+", label: "Garments Fitted" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="border border-stone-200 bg-ivory/30 p-8 text-center">
              <p className="font-serif text-4xl text-gold">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-charcoal/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
