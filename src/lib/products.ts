import type { Category, Product, Testimonial } from "@/lib/types"

const placeholder = (label: string, bg = "1A1A1D", fg = "F5F0E7") =>
  `https://placehold.co/800x1000/${bg}/${fg}?text=${encodeURIComponent(label)}`

export const products: Product[] = [
  {
    id: "as-001",
    slug: "kensington-navy-suit",
    name: "The Kensington Navy Suit",
    category: "Suits",
    categorySlug: "suits",
    price: 895,
    description:
      "A refined two-button slim-fit suit cut from a lustrous navy wool blend. The Kensington is our most versatile silhouette — structured enough for the boardroom, softened just enough for a black-tie-optional evening. Half-canvassed construction allows the jacket to mould to the wearer over time, while a subtly tapered trouser keeps the line clean from shoulder to shoe.",
    materials:
      "Super 120s navy wool blend (78% virgin wool, 20% polyester, 2% elastane) with a Bemberg cupro lining. Half-canvas chest piece, functional surgeon's cuffs, and horn-finish buttons.",
    care: "Dry clean only. Rest the suit 24 hours between wears on a broad wooden hanger. Steam rather than press to preserve the canvas. Store in a breathable garment bag away from direct light.",
    colors: [
      { name: "Midnight Navy", hex: "#1B2A44" },
      { name: "Slate Grey", hex: "#4A4E57" },
      { name: "Obsidian", hex: "#0B0B0C" },
    ],
    sizes: ["36R", "38R", "40R", "42R", "44R", "46R", "48R"],
    images: [
      placeholder("Kensington Navy Suit"),
      placeholder("Kensington — Detail"),
      placeholder("Kensington — Lapel", "0B0B0C", "C6A15B"),
      placeholder("Kensington — Full Look", "5B1F2A"),
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 128,
    tags: ["business", "slim fit", "wool", "two-button", "everyday luxury"],
  },
  {
    id: "as-002",
    slug: "belmont-black-tuxedo",
    name: "The Belmont Black Tuxedo",
    category: "Tuxedos",
    categorySlug: "tuxedos",
    price: 1195,
    originalPrice: 1395,
    description:
      "The Belmont is black tie distilled. A wool and silk blend gives the cloth a quiet depth, while a hand-finished peak lapel faced in satin catches the light exactly as it should. Cut with a suppressed waist and clean shoulder, it is the tuxedo you keep for a decade of defining evenings.",
    materials:
      "Italian wool and silk blend (82% virgin wool, 18% mulberry silk) with satin-faced peak lapel, satin-covered buttons and a single satin trouser braid. Full Bemberg lining.",
    care: "Dry clean sparingly and only with a specialist familiar with satin facings. Never press satin directly — use a pressing cloth. Hang on a contoured hanger and store in the supplied garment bag.",
    colors: [
      { name: "Jet Black", hex: "#0B0B0C" },
      { name: "Midnight Blue", hex: "#101A31" },
    ],
    sizes: ["36R", "38R", "40R", "42R", "44R", "46R"],
    images: [
      placeholder("Belmont Black Tuxedo", "0B0B0C", "C6A15B"),
      placeholder("Belmont — Satin Peak Lapel"),
      placeholder("Belmont — Evening Detail", "5B1F2A"),
      placeholder("Belmont — Full Look"),
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 5.0,
    reviewCount: 86,
    tags: ["black tie", "peak lapel", "silk", "evening", "wedding"],
  },
  {
    id: "as-003",
    slug: "astor-double-breasted-suit",
    name: "The Astor Double-Breasted Suit",
    category: "Suits",
    categorySlug: "suits",
    price: 1095,
    description:
      "Six buttons, two to fasten, and a lapel with genuine conviction. The Astor is cut in a deep charcoal flannel-touch wool with a roped shoulder and a gently extended lapel line that broadens the chest. Double-breasted tailoring rewards posture — wear it buttoned, and stand as though the room is yours.",
    materials:
      "Super 130s charcoal wool (100% virgin wool) woven in Biella, Italy. Full-canvas construction, peak lapels, functional cuffs, and a jetted interior pocket set.",
    care: "Dry clean only, no more than twice per season. Brush after each wear with a natural bristle garment brush. Always fasten the interior jigger button when wearing to preserve the drape.",
    colors: [
      { name: "Deep Charcoal", hex: "#2E3033" },
      { name: "Storm Grey", hex: "#585C63" },
      { name: "Midnight Navy", hex: "#1B2A44" },
    ],
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R"],
    images: [
      placeholder("Astor Double-Breasted Suit"),
      placeholder("Astor — Peak Lapel", "0B0B0C", "C6A15B"),
      placeholder("Astor — Cloth Detail"),
      placeholder("Astor — Full Look", "5B1F2A"),
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 64,
    tags: ["double-breasted", "charcoal", "full canvas", "statement", "formal"],
  },
  {
    id: "as-004",
    slug: "windsor-dinner-jacket",
    name: "The Windsor Dinner Jacket",
    category: "Tuxedos",
    categorySlug: "tuxedos",
    price: 895,
    description:
      "Midnight blue reads richer than black under evening light — a truth the Windsor is built upon. A softly rolled shawl collar in silk satin frames the shirt, while the lightly padded shoulder keeps the line elegant rather than severe. Pair it with the Belmont trouser for a complete evening rig.",
    materials:
      "Midnight blue wool barathea (96% virgin wool, 4% mohair) with a silk satin shawl collar and covered buttons. Lightweight half-canvas construction for warm-room comfort.",
    care: "Dry clean only. Allow the jacket to air overnight after each wear. Steam the shawl collar from the underside to avoid flattening the satin nap.",
    colors: [
      { name: "Midnight Blue", hex: "#101A31" },
      { name: "Burgundy", hex: "#5B1F2A" },
      { name: "Jet Black", hex: "#0B0B0C" },
    ],
    sizes: ["36R", "38R", "40R", "42R", "44R", "46R"],
    images: [
      placeholder("Windsor Dinner Jacket", "101A31", "F5F0E7"),
      placeholder("Windsor — Shawl Collar", "0B0B0C", "C6A15B"),
      placeholder("Windsor — Evening Detail"),
      placeholder("Windsor — Full Look"),
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 52,
    tags: ["shawl lapel", "midnight blue", "dinner jacket", "black tie", "evening"],
  },
  {
    id: "as-005",
    slug: "executive-oxford-shirt",
    name: "The Executive Oxford Shirt",
    category: "Shirts",
    categorySlug: "shirts",
    price: 195,
    description:
      "The foundation of every considered wardrobe. Woven from long-staple Egyptian cotton with a crisp spread collar engineered to hold its shape without fusing that plasticky feel. Mother-of-pearl buttons, a split back yoke, and a single-needle side seam finished at 18 stitches per inch.",
    materials:
      "100% two-ply Egyptian cotton oxford, 120s yarn. Genuine mother-of-pearl buttons, removable collar stays in brushed brass, split yoke and reinforced gauntlet placket.",
    care: "Machine wash cold on a gentle cycle with like colours. Remove collar stays before washing. Hang immediately or tumble low. Press on medium heat with a light mist of water while slightly damp.",
    colors: [
      { name: "Optic White", hex: "#FCFBF8" },
      { name: "Ivory", hex: "#F5F0E7" },
      { name: "Pale Blue", hex: "#C4D2E3" },
      { name: "Midnight Navy", hex: "#1B2A44" },
    ],
    sizes: ['14.5"', '15"', '15.5"', '16"', '16.5"', '17"', '17.5"'],
    images: [
      placeholder("Executive Oxford Shirt", "F5F0E7", "1A1A1D"),
      placeholder("Executive — Spread Collar", "FCFBF8", "1A1A1D"),
      placeholder("Executive — Cuff Detail"),
      placeholder("Executive — Full Look", "0B0B0C", "C6A15B"),
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 214,
    tags: ["egyptian cotton", "spread collar", "essential", "business", "white shirt"],
  },
  {
    id: "as-006",
    slug: "regent-italian-leather-oxford",
    name: "The Regent Italian Leather Oxford",
    category: "Footwear",
    categorySlug: "footwear",
    price: 495,
    originalPrice: 575,
    description:
      "A closed-lacing oxford in black calfskin, built on a Goodyear welt so it can be resoled for a lifetime rather than replaced for a season. The last is elegantly elongated without becoming theatrical, and the leather is drum-dyed so the colour deepens rather than fades.",
    materials:
      "Full-grain Italian calfskin upper, leather-lined throughout. Goodyear-welted leather sole with a slim rubber top piece for grip, and a stacked leather heel with brass-pin reinforcement.",
    care: "Insert cedar shoe trees immediately after wearing. Brush off dust, condition monthly with cream polish, and rotate with at least one other pair. Avoid heavy rain; if caught, dry slowly away from heat.",
    colors: [
      { name: "Jet Black", hex: "#0B0B0C" },
      { name: "Chestnut", hex: "#6B3A22" },
      { name: "Oxblood", hex: "#5B1F2A" },
    ],
    sizes: ["7", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13"],
    images: [
      placeholder("Regent Leather Oxford", "0B0B0C", "C6A15B"),
      placeholder("Regent — Goodyear Welt"),
      placeholder("Regent — Profile"),
      placeholder("Regent — Sole Detail", "5B1F2A"),
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 97,
    tags: ["goodyear welt", "calfskin", "oxford", "handmade", "resolable"],
  },
  {
    id: "as-007",
    slug: "sterling-silk-tie",
    name: "The Sterling Silk Tie",
    category: "Accessories",
    categorySlug: "accessories",
    price: 125,
    description:
      "A silver and navy repp stripe woven in heavy mulberry silk and finished by hand in seven folds — no interlining required. The weight allows the knot to seat itself perfectly and the dimple to hold all evening. Three inches at the blade, cut to sit precisely at the belt line.",
    materials:
      "100% mulberry silk jacquard, hand-rolled edges, seven-fold construction with a self-tipped keeper loop. Woven in Como, Italy.",
    care: "Never dry clean unless absolutely necessary. Untie the knot fully after every wear and roll the tie loosely rather than hanging. Steam gently to release creases.",
    colors: [
      { name: "Silver / Navy", hex: "#8E99A6" },
      { name: "Gold / Obsidian", hex: "#C6A15B" },
      { name: "Burgundy / Ivory", hex: "#5B1F2A" },
    ],
    sizes: ["Standard 58\"", "Long 62\""],
    images: [
      placeholder("Sterling Silk Tie", "8E99A6", "0B0B0C"),
      placeholder("Sterling — Weave Detail"),
      placeholder("Sterling — Seven Fold", "0B0B0C", "C6A15B"),
    ],
    isNew: true,
    isFeatured: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 143,
    tags: ["silk", "seven fold", "repp stripe", "gift", "italian"],
  },
  {
    id: "as-008",
    slug: "monarch-cufflink-set",
    name: "The Monarch Cufflink Set",
    category: "Accessories",
    categorySlug: "accessories",
    price: 185,
    description:
      "Brushed gold faces with polished rhodium inlay, weighted so they sit flat against the cuff rather than rolling forward. The Monarch set arrives in a lacquered presentation box with a matching collar-stay pair — a quiet, considered gift for a groomsman or for yourself.",
    materials:
      "Brushed 18k gold-plated brass with rhodium accent inlay and a whale-back swivel closure. Presented in a lacquered box with velvet interior and matching brass collar stays.",
    care: "Polish with a dry microfibre cloth only. Avoid contact with fragrance, alcohol and abrasive cleaners. Store in the supplied box to prevent surface scratching.",
    colors: [
      { name: "Brushed Gold", hex: "#C6A15B" },
      { name: "Rhodium Silver", hex: "#B7BCC2" },
      { name: "Obsidian Onyx", hex: "#0B0B0C" },
    ],
    sizes: ["One Size"],
    images: [
      placeholder("Monarch Cufflink Set", "C6A15B", "0B0B0C"),
      placeholder("Monarch — Presentation Box"),
      placeholder("Monarch — Cuff Detail", "0B0B0C", "C6A15B"),
    ],
    isNew: false,
    isFeatured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 71,
    tags: ["cufflinks", "gold", "gift", "groomsmen", "formal jewellery"],
  },
]

export const categories: Category[] = [
  {
    name: "Suits",
    slug: "suits",
    href: "/suits",
    eyebrow: "Tailoring",
    description:
      "Half and full-canvas tailoring in Italian wool, cut for the boardroom and everything after it.",
    image: placeholder("Suits"),
  },
  {
    name: "Tuxedos",
    slug: "tuxedos",
    href: "/tuxedos",
    eyebrow: "Black Tie",
    description:
      "Satin-faced lapels, midnight blues and jet blacks for evenings that deserve the effort.",
    image: placeholder("Tuxedos", "0B0B0C", "C6A15B"),
  },
  {
    name: "Dress Shirts",
    slug: "shirts",
    href: "/shirts",
    eyebrow: "Foundations",
    description:
      "Egyptian cotton, mother-of-pearl buttons and collars engineered to hold their shape.",
    image: placeholder("Dress Shirts", "F5F0E7", "1A1A1D"),
  },
  {
    name: "Footwear",
    slug: "footwear",
    href: "/footwear",
    eyebrow: "Goodyear Welted",
    description:
      "Calfskin oxfords and derbies built to be resoled for a lifetime, not replaced in a season.",
    image: placeholder("Footwear", "1A1A1D", "C6A15B"),
  },
  {
    name: "Accessories",
    slug: "accessories",
    href: "/accessories",
    eyebrow: "The Finishing",
    description:
      "Seven-fold silk, weighted cufflinks and the small details that separate dressed from tailored.",
    image: placeholder("Accessories", "C6A15B", "0B0B0C"),
  },
  {
    name: "Wedding Collections",
    slug: "weddings",
    href: "/weddings",
    eyebrow: "Occasions",
    description:
      "Coordinated party dressing, group fittings and delivery timed to your rehearsal dinner.",
    image: placeholder("Wedding Collections", "5B1F2A", "F5F0E7"),
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "The fitting felt less like shopping and more like being measured for something that already belonged to me. Three appointments, zero pressure, and a jacket that fits better than anything I own.",
    author: "Sample Client — J. Ashford",
    detail: "Kensington Navy Suit · Sample content",
  },
  {
    quote:
      "We dressed a party of nine for the wedding and every single piece arrived on time and correctly altered. The team handled the coordination entirely so we never had to think about it.",
    author: "Sample Client — M. & T. Halloway",
    detail: "Wedding Party Consultation · Sample content",
  },
  {
    quote:
      "I have owned the Regent oxfords for two seasons and had them resoled once. They look better now than the day I collected them, which is precisely the point.",
    author: "Sample Client — D. Whitmore",
    detail: "Regent Italian Leather Oxford · Sample content",
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured)
}

export function getNewArrivals(): Product[] {
  return products.filter((product) => product.isNew)
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)

  const sameCategory = products.filter(
    (product) => product.categorySlug === current.categorySlug && product.slug !== slug
  )
  const others = products.filter(
    (product) => product.categorySlug !== current.categorySlug && product.slug !== slug
  )

  return [...sameCategory, ...others].slice(0, limit)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getAllSizes(items: Product[]): string[] {
  return Array.from(new Set(items.flatMap((product) => product.sizes)))
}

export function getAllColors(items: Product[]) {
  const map = new Map<string, string>()
  items.forEach((product) =>
    product.colors.forEach((color) => map.set(color.name, color.hex))
  )
  return Array.from(map, ([name, hex]) => ({ name, hex }))
}
