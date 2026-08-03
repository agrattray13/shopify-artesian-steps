import { PageHeader } from "@/components/shared/page-header";

export const metadata = {
  title: "Size & Fit Guide | Artesian Steps",
  description: "Find your perfect fit with our comprehensive size and fit guide for suits, shirts, and footwear.",
};

export default function SizeFitGuidePage() {
  return (
    <>
      <PageHeader title="Size & Fit Guide" subtitle="Find the fit that flatters your frame." />
      <div className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl text-obsidian">Suit Jackets & Tuxedos</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Our jackets are offered in short (S), regular (R), and long (L) lengths. Choose your length based on where the jacket hem falls relative to your knuckles. A well-fitted jacket should hug the shoulders without pulling across the chest.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse border border-stone-300 text-sm">
                <thead>
                  <tr className="bg-ivory/50">
                    <th className="border border-stone-300 px-4 py-3 text-left">Chest (inches)</th>
                    <th className="border border-stone-300 px-4 py-3 text-left">Jacket Size</th>
                    <th className="border border-stone-300 px-4 py-3 text-left">Recommended Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">34–36</td>
                    <td className="border border-stone-300 px-4 py-3">36</td>
                    <td className="border border-stone-300 px-4 py-3">Short or Regular</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">37–39</td>
                    <td className="border border-stone-300 px-4 py-3">38</td>
                    <td className="border border-stone-300 px-4 py-3">Regular</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">40–42</td>
                    <td className="border border-stone-300 px-4 py-3">40</td>
                    <td className="border border-stone-300 px-4 py-3">Regular or Long</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">43–45</td>
                    <td className="border border-stone-300 px-4 py-3">42–44</td>
                    <td className="border border-stone-300 px-4 py-3">Long</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Dress Shirts</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Dress shirt sizes combine neck circumference and sleeve length. Measure around the base of your neck and from the center back of your neck to your wrist bone.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse border border-stone-300 text-sm">
                <thead>
                  <tr className="bg-ivory/50">
                    <th className="border border-stone-300 px-4 py-3 text-left">Neck (inches)</th>
                    <th className="border border-stone-300 px-4 py-3 text-left">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">14–14.5</td>
                    <td className="border border-stone-300 px-4 py-3">14.5</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">15–15.5</td>
                    <td className="border border-stone-300 px-4 py-3">15–15.5</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">16–16.5</td>
                    <td className="border border-stone-300 px-4 py-3">16–16.5</td>
                  </tr>
                  <tr>
                    <td className="border border-stone-300 px-4 py-3">17+</td>
                    <td className="border border-stone-300 px-4 py-3">17+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-obsidian">Footwear</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Our footwear is offered in standard US sizes and runs true to size. If you are between sizes, we recommend sizing up for closed-toe Oxfords and down for loafers.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
