"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart, getCartTotals } from "@/lib/store/cart-store";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/shop/new-arrivals" },
  { label: "Suits", href: "/shop/suits" },
  { label: "Tuxedos", href: "/shop/tuxedos" },
  { label: "Dress Shirts", href: "/shop/dress-shirts" },
  { label: "Footwear", href: "/shop/footwear" },
  { label: "Accessories", href: "/shop/accessories" },
  { label: "Weddings & Events", href: "/weddings-events" },
  { label: "Custom Fitting", href: "/custom-fitting" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const items = useCart((s) => s.items);
  const { count } = getCartTotals(items);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/60 bg-soft-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-obsidian sm:text-3xl">
          Artesian Steps
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm font-medium tracking-wide text-charcoal xl:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-gold",
                pathname === link.href && "text-obsidian underline decoration-gold underline-offset-8"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/shop"
            className="p-2 text-charcoal transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/account"
            className="p-2 text-charcoal transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            href="/wishlist"
            className="p-2 text-charcoal transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            href="/cart"
            className="relative p-2 text-charcoal transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`Shopping bag${count > 0 ? `, ${count} items` : ""}`}
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-obsidian">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-stone-200/60 bg-soft-white px-4 py-6 xl:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-4 text-sm font-medium tracking-wide text-charcoal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "py-1 transition-colors hover:text-gold",
                  pathname === link.href && "text-obsidian"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
