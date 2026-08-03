# Artesian Steps

A polished, production-quality eCommerce website for Artesian Steps, an upscale men’s formalwear destination. Built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui primitives, Lucide icons, Framer Motion, and Zustand.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Quality

```bash
npm run lint      # ESLint
npx tsc --noEmit  # TypeScript type check
npm run build     # Production build
```

## Project Structure

- `app/` — Next.js App Router pages
- `components/sections/` — Homepage sections
- `components/shared/` — Reusable layout and UI pieces
- `components/shop/` — Shop, product detail, cart, checkout
- `components/appointments/` — Appointment booking
- `lib/data/products.ts` — Sample product catalog and types
- `lib/store/cart-store.ts` — Persistent cart state via localStorage

## Notes

- This site uses sample products and testimonials for demonstration purposes.
- Payment processing is in placeholder/test mode. Connect Stripe, Shopify, or another provider for live transactions.
- Real customer reviews should replace the sample testimonials before launch.
- The original Shopify theme has been preserved in `shopify-theme-backup/`.
