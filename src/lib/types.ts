export interface ProductColor {
  name: string
  hex: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  categorySlug: string
  price: number
  originalPrice?: number
  description: string
  materials: string
  care: string
  colors: ProductColor[]
  sizes: string[]
  images: string[]
  isNew: boolean
  isFeatured: boolean
  inStock: boolean
  rating: number
  reviewCount: number
  tags: string[]
}

export interface Category {
  name: string
  slug: string
  href: string
  description: string
  image: string
  eyebrow?: string
}

export interface CartItem {
  productId: string
  slug: string
  name: string
  price: number
  quantity: number
  size: string
  color: string
  image: string
}

export interface BookingFormData {
  name: string
  email: string
  phone: string
  appointmentType: string
  preferredDate: string
  preferredTime: string
  eventDate: string
  partySize: string
  notes: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface CheckoutFormData {
  email: string
  phone: string
  firstName: string
  lastName: string
  address1: string
  address2: string
  city: string
  state: string
  postalCode: string
  country: string
  deliveryMethod: string
  cardName: string
  cardNumber: string
  expiry: string
  cvc: string
  billingSameAsShipping: boolean
}

export type FormStatus = "idle" | "submitting" | "success" | "error"

export interface Testimonial {
  quote: string
  author: string
  detail: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SortOption {
  label: string
  value: SortValue
}

export type SortValue =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "rating"

export interface ProductFilters {
  sizes: string[]
  colors: string[]
  priceRange: string | null
}
