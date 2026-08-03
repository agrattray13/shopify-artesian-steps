export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductSize = {
  name: string;
  inStock: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  colors: ProductColor[];
  sizes: ProductSize[];
  images: string[];
  description: string;
  materials: string[];
  care: string[];
  shipping: string;
  returns: string;
  isNew?: boolean;
  isBestseller?: boolean;
  tags: string[];
};

export const categories = [
  { name: "Suits", slug: "suits", image: "/images/category-suits.jpg" },
  { name: "Tuxedos", slug: "tuxedos", image: "/images/category-tuxedos.jpg" },
  { name: "Dress Shirts", slug: "dress-shirts", image: "/images/category-shirts.jpg" },
  { name: "Footwear", slug: "footwear", image: "/images/category-footwear.jpg" },
  { name: "Accessories", slug: "accessories", image: "/images/category-accessories.jpg" },
  { name: "Wedding Collections", slug: "weddings", image: "/images/category-weddings.jpg" },
];

export const products: Product[] = [
  {
    id: "kensington-navy-suit",
    slug: "kensington-navy-suit",
    name: "The Kensington Navy Suit",
    category: "Suits",
    categorySlug: "suits",
    price: 895,
    compareAtPrice: 995,
    colors: [
      { name: "Navy", hex: "#1B2B4A" },
      { name: "Charcoal", hex: "#36454F" },
    ],
    sizes: [
      { name: "36S", inStock: true },
      { name: "38R", inStock: true },
      { name: "40R", inStock: true },
      { name: "42L", inStock: true },
      { name: "44L", inStock: false },
    ],
    images: ["/images/products/kensington-navy-1.jpg", "/images/products/kensington-navy-2.jpg"],
    description:
      "A sharply tailored two-piece suit in a deep navy wool blend. The Kensington is cut for a modern silhouette with clean shoulders, a tapered waist, and trousers that sit elegantly on the shoe.",
    materials: ["85% superfine wool", "15% silk", "Bemberg lining", "Horn buttons"],
    care: ["Dry clean only", "Steam to refresh", "Store on a shaped hanger"],
    shipping: "Complimentary shipping on all suiting orders. Delivered within 3–5 business days.",
    returns: "Returns accepted within 30 days in original condition with tags attached.",
    isNew: true,
    isBestseller: true,
    tags: ["suit", "navy", "business", "wedding"],
  },
  {
    id: "belmont-black-tuxedo",
    slug: "belmont-black-tuxedo",
    name: "The Belmont Black Tuxedo",
    category: "Tuxedos",
    categorySlug: "tuxedos",
    price: 1195,
    colors: [{ name: "Black", hex: "#0B0B0C" }],
    sizes: [
      { name: "36S", inStock: true },
      { name: "38R", inStock: true },
      { name: "40R", inStock: true },
      { name: "42L", inStock: true },
      { name: "44L", inStock: true },
    ],
    images: ["/images/products/belmont-black-1.jpg", "/images/products/belmont-black-2.jpg"],
    description:
      "The Belmont is our signature black-tie set: satin peak lapels, a grosgrain trim, and trousers with a satin side stripe. Designed for galas, weddings, and any evening that calls for absolute refinement.",
    materials: ["100% Italian wool", "Silk satin lapel", "Satin side stripe", "Satin-covered buttons"],
    care: ["Professional dry clean", "Hang with care after each wear"],
    shipping: "Complimentary shipping on all tuxedo orders.",
    returns: "Returns accepted within 30 days in original condition.",
    isNew: true,
    isBestseller: true,
    tags: ["tuxedo", "black tie", "gala", "wedding"],
  },
  {
    id: "astor-double-breasted-suit",
    slug: "astor-double-breasted-suit",
    name: "The Astor Double-Breasted Suit",
    category: "Suits",
    categorySlug: "suits",
    price: 1095,
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Midnight", hex: "#191970" },
    ],
    sizes: [
      { name: "38R", inStock: true },
      { name: "40R", inStock: true },
      { name: "42L", inStock: true },
      { name: "44L", inStock: true },
    ],
    images: ["/images/products/astor-charcoal-1.jpg", "/images/products/astor-charcoal-2.jpg"],
    description:
      "Power dressing, redefined. The Astor features a six-button double-breasted front, broad peak lapels, and a strong shoulder line for a commanding presence in the boardroom or at formal events.",
    materials: ["90% wool", "10% cashmere", "Full canvas construction", "Horn buttons"],
    care: ["Dry clean only", "Steam press recommended"],
    shipping: "Complimentary shipping on all suiting orders.",
    returns: "Returns accepted within 30 days in original condition.",
    isNew: true,
    tags: ["suit", "double-breasted", "business", "formal"],
  },
  {
    id: "windsor-dinner-jacket",
    slug: "windsor-dinner-jacket",
    name: "The Windsor Dinner Jacket",
    category: "Tuxedos",
    categorySlug: "tuxedos",
    price: 795,
    colors: [
      { name: "Ivory", hex: "#F5F0E7" },
      { name: "Burgundy", hex: "#5B1F2A" },
    ],
    sizes: [
      { name: "38R", inStock: true },
      { name: "40R", inStock: true },
      { name: "42L", inStock: false },
      { name: "44L", inStock: true },
    ],
    images: ["/images/products/windsor-ivory-1.jpg", "/images/products/windsor-burgundy-1.jpg"],
    description:
      "A statement dinner jacket for hosts, entertainers, and modern romantics. Cut from plush velvet in ivory or deep burgundy, it pairs effortlessly with black tuxedo trousers.",
    materials: ["Cotton velvet", "Silk satin lapel", "Bemberg lining"],
    care: ["Dry clean only", "Brush gently to maintain nap"],
    shipping: "Complimentary shipping.",
    returns: "Returns accepted within 30 days.",
    isNew: true,
    tags: ["dinner jacket", "velvet", "black tie", "evening"],
  },
  {
    id: "executive-oxford-shirt",
    slug: "executive-oxford-shirt",
    name: "The Executive Oxford Shirt",
    category: "Dress Shirts",
    categorySlug: "dress-shirts",
    price: 145,
    compareAtPrice: 175,
    colors: [
      { name: "White", hex: "#FCFBF8" },
      { name: "Light Blue", hex: "#B0C4DE" },
      { name: "Burgundy", hex: "#5B1F2A" },
    ],
    sizes: [
      { name: "14.5", inStock: true },
      { name: "15", inStock: true },
      { name: "15.5", inStock: true },
      { name: "16", inStock: true },
      { name: "16.5", inStock: true },
      { name: "17", inStock: false },
    ],
    images: ["/images/products/executive-oxford-1.jpg", "/images/products/executive-oxford-2.jpg"],
    description:
      "The foundation of a well-dressed wardrobe. Crisp Oxford cotton, a semi-spread collar, and mother-of-pearl buttons make this shirt equally appropriate under a suit or worn with tailored trousers.",
    materials: ["100% long-staple cotton", "Mother-of-pearl buttons", "Removable collar stays"],
    care: ["Machine wash cold", "Tumble dry low", "Iron while damp"],
    shipping: "Complimentary shipping on orders over $200.",
    returns: "Returns accepted within 30 days.",
    isNew: true,
    isBestseller: true,
    tags: ["shirt", "oxford", "business", "formal"],
  },
  {
    id: "regent-italian-leather-oxford",
    slug: "regent-italian-leather-oxford",
    name: "The Regent Italian Leather Oxford",
    category: "Footwear",
    categorySlug: "footwear",
    price: 425,
    colors: [
      { name: "Black", hex: "#0B0B0C" },
      { name: "Tan", hex: "#C6A15B" },
    ],
    sizes: [
      { name: "8", inStock: true },
      { name: "8.5", inStock: true },
      { name: "9", inStock: true },
      { name: "9.5", inStock: true },
      { name: "10", inStock: true },
      { name: "10.5", inStock: true },
      { name: "11", inStock: false },
      { name: "12", inStock: true },
    ],
    images: ["/images/products/regent-oxford-1.jpg", "/images/products/regent-oxford-2.jpg"],
    description:
      "Hand-finished Italian leather Oxfords with a sleek cap toe and leather sole. The Regent is benchmade for comfort, structure, and the quiet confidence of a perfectly polished shoe.",
    materials: ["Full-grain Italian calfskin", "Leather sole", "Calfskin lining"],
    care: ["Use cedar shoe trees", "Condition leather monthly", "Polish as needed"],
    shipping: "Complimentary shipping on all footwear.",
    returns: "Returns accepted within 30 days in unworn condition.",
    isNew: true,
    isBestseller: true,
    tags: ["shoes", "oxford", "leather", "formal"],
  },
  {
    id: "sterling-silk-tie",
    slug: "sterling-silk-tie",
    name: "The Sterling Silk Tie",
    category: "Accessories",
    categorySlug: "accessories",
    price: 95,
    colors: [
      { name: "Burgundy", hex: "#5B1F2A" },
      { name: "Navy", hex: "#1B2B4A" },
      { name: "Gold", hex: "#C6A15B" },
      { name: "Charcoal", hex: "#36454F" },
    ],
    sizes: [{ name: "One Size", inStock: true }],
    images: ["/images/products/sterling-tie-1.jpg"],
    description:
      "Woven from heavyweight silk in Como, Italy, the Sterling tie offers a generous blade, balanced interlining, and a refined drape that holds a crisp knot all evening.",
    materials: ["100% silk", "Wool interlining", "Hand-rolled edges"],
    care: ["Dry clean only", "Hang after each wear"],
    shipping: "Complimentary shipping on orders over $200.",
    returns: "Returns accepted within 30 days.",
    isNew: true,
    tags: ["tie", "silk", "accessories", "formal"],
  },
  {
    id: "monarch-cufflink-set",
    slug: "monarch-cufflink-set",
    name: "The Monarch Cufflink Set",
    category: "Accessories",
    categorySlug: "accessories",
    price: 165,
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Gold", hex: "#C6A15B" },
    ],
    sizes: [{ name: "One Size", inStock: true }],
    images: ["/images/products/monarch-cufflinks-1.jpg"],
    description:
      "A curated set of four enamel and precious-metal cufflinks presented in a leather travel case. Mix and match to complement your shirt, suit, or mood.",
    materials: ["Rhodium-plated brass", "Enamel detailing", "Leather case"],
    care: ["Wipe clean with a soft cloth", "Store in provided case"],
    shipping: "Complimentary shipping on orders over $200.",
    returns: "Returns accepted within 30 days.",
    isNew: true,
    tags: ["cufflinks", "accessories", "formal", "gift"],
  },
  {
    id: "cambridge-taupe-suit",
    slug: "cambridge-taupe-suit",
    name: "The Cambridge Taupe Suit",
    category: "Suits",
    categorySlug: "suits",
    price: 875,
    colors: [{ name: "Taupe", hex: "#B8A88A" }],
    sizes: [
      { name: "38R", inStock: true },
      { name: "40R", inStock: true },
      { name: "42L", inStock: true },
      { name: "44L", inStock: true },
    ],
    images: ["/images/products/cambridge-taupe-1.jpg"],
    description:
      "Warm, versatile, and unmistakably elegant. The Cambridge in taupe is ideal for outdoor weddings, summer galas, and refined daytime events.",
    materials: ["Super 120s wool", "Half canvas", "Horn buttons"],
    care: ["Dry clean only"],
    shipping: "Complimentary shipping on all suiting orders.",
    returns: "Returns accepted within 30 days.",
    tags: ["suit", "taupe", "wedding", "summer"],
  },
  {
    id: "mayfair-midnight-tuxedo",
    slug: "mayfair-midnight-tuxedo",
    name: "The Mayfair Midnight Tuxedo",
    category: "Tuxedos",
    categorySlug: "tuxedos",
    price: 1295,
    colors: [{ name: "Midnight Blue", hex: "#191970" }],
    sizes: [
      { name: "38R", inStock: true },
      { name: "40R", inStock: true },
      { name: "42L", inStock: true },
      { name: "44L", inStock: true },
    ],
    images: ["/images/products/mayfair-midnight-1.jpg"],
    description:
      "A contemporary alternative to black tie. The Mayfair in midnight blue is tailored from mohair-blend cloth with a subtle sheen that catches candlelight beautifully.",
    materials: ["Mohair-wool blend", "Silk satin lapel", "Bemberg lining"],
    care: ["Dry clean only"],
    shipping: "Complimentary shipping.",
    returns: "Returns accepted within 30 days.",
    tags: ["tuxedo", "midnight", "black tie", "wedding"],
  },
  {
    id: "savile-striped-business-shirt",
    slug: "savile-striped-business-shirt",
    name: "The Savile Striped Business Shirt",
    category: "Dress Shirts",
    categorySlug: "dress-shirts",
    price: 155,
    colors: [{ name: "White/Navy", hex: "#FFFFFF" }],
    sizes: [
      { name: "15", inStock: true },
      { name: "15.5", inStock: true },
      { name: "16", inStock: true },
      { name: "16.5", inStock: true },
      { name: "17", inStock: true },
    ],
    images: ["/images/products/savile-striped-1.jpg"],
    description:
      "Pinstriped precision for the modern professional. The Savile shirt pairs a crisp collar with subtle stripes and a refined tailored fit.",
    materials: ["100% cotton", "Mother-of-pearl buttons"],
    care: ["Machine wash cold", "Iron while damp"],
    shipping: "Complimentary shipping on orders over $200.",
    returns: "Returns accepted within 30 days.",
    tags: ["shirt", "striped", "business"],
  },
  {
    id: "duke-patent-loafer",
    slug: "duke-patent-loafer",
    name: "The Duke Patent Loafer",
    category: "Footwear",
    categorySlug: "footwear",
    price: 385,
    colors: [{ name: "Black", hex: "#0B0B0C" }],
    sizes: [
      { name: "8", inStock: true },
      { name: "9", inStock: true },
      { name: "10", inStock: true },
      { name: "11", inStock: true },
      { name: "12", inStock: true },
    ],
    images: ["/images/products/duke-loafer-1.jpg"],
    description:
      "A polished loafer with a subtle apron toe and a leather sole. The Duke slips on with ease and completes any formal or business look with understated elegance.",
    materials: ["Patent calf leather", "Leather sole"],
    care: ["Wipe with soft cloth", "Use shoe trees"],
    shipping: "Complimentary shipping on all footwear.",
    returns: "Returns accepted within 30 days in unworn condition.",
    tags: ["shoes", "loafer", "patent", "formal"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "new-arrivals") return products.filter((p) => p.isNew);
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit);
}

export function formatPrice(price: number) {
  return `$${price.toLocaleString("en-US")}`;
}
