import type { NavLink, SortOption } from "@/lib/types"

export const siteConfig = {
  name: "Artesian Steps",
  tagline: "Dress With Intention. Arrive With Confidence.",
  description:
    "Artesian Steps is a luxury men's formalwear atelier offering hand-finished suits, tuxedos, dress shirts, Goodyear-welted footwear and accessories, with private fitting appointments and wedding party services.",
  url: "https://artesiansteps.com",
  email: "atelier@artesiansteps.com",
  phone: "+1 (212) 555-0148",
  address: {
    line1: "118 Wardour Row, Fourth Floor",
    line2: "New York, NY 10013",
  },
  hours: [
    { day: "Monday – Friday", time: "10:00 – 19:00" },
    { day: "Saturday", time: "10:00 – 18:00" },
    { day: "Sunday", time: "By appointment only" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Youtube", href: "https://youtube.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
  keywords: [
    "luxury menswear",
    "men's formalwear",
    "bespoke suits",
    "tuxedo",
    "black tie",
    "wedding suits",
    "custom fitting",
    "dress shirts",
    "Goodyear welted shoes",
    "Artesian Steps",
  ],
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Suits", href: "/suits" },
  { label: "Tuxedos", href: "/tuxedos" },
  { label: "Dress Shirts", href: "/shirts" },
  { label: "Footwear", href: "/footwear" },
  { label: "Accessories", href: "/accessories" },
  { label: "Weddings & Events", href: "/weddings" },
  { label: "Custom Fitting", href: "/custom-fitting" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const footerNav = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Suits", href: "/suits" },
      { label: "Tuxedos", href: "/tuxedos" },
      { label: "Dress Shirts", href: "/shirts" },
      { label: "Footwear", href: "/footwear" },
      { label: "Accessories", href: "/accessories" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Shopping Bag", href: "/bag" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Our Story",
    links: [
      { label: "About Artesian Steps", href: "/about" },
      { label: "Custom Fitting", href: "/custom-fitting" },
      { label: "Weddings & Events", href: "/weddings" },
      { label: "Lookbook", href: "/lookbook" },
      { label: "Book an Appointment", href: "/booking" },
    ],
  },
]

export const sortOptions: SortOption[] = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Alphabetical", value: "name-asc" },
  { label: "Top Rated", value: "rating" },
]

export const priceRanges = [
  { label: "Under $250", value: "0-250", min: 0, max: 250 },
  { label: "$250 – $600", value: "250-600", min: 250, max: 600 },
  { label: "$600 – $1,000", value: "600-1000", min: 600, max: 1000 },
  { label: "$1,000 and above", value: "1000-99999", min: 1000, max: 99999 },
]

export const appointmentTypes = [
  "Private Consultation",
  "Suit Fitting",
  "Tuxedo Fitting",
  "Wedding Party Consultation",
  "Wardrobe Consultation",
  "Alteration Appointment",
]

export const appointmentTimes = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
]

export const SHIPPING_THRESHOLD = 500
export const STANDARD_SHIPPING = 25
export const EXPRESS_SHIPPING = 45
export const TAX_RATE = 0.0875
