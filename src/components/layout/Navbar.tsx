"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react"

import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { mainNav, siteConfig } from "@/lib/site"
import { products } from "@/lib/products"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const { itemCount, setDrawerOpen } = useCart()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [pathname])

  const results = React.useMemo(() => {
    const term = query.trim().toLowerCase()
    if (term.length < 2) return []
    return products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term) ||
          product.tags.some((tag) => tag.toLowerCase().includes(term))
      )
      .slice(0, 5)
  }, [query])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/70 bg-softwhite/85 backdrop-blur-md"
          : "border-transparent bg-softwhite"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20"
          )}
        >
          <div className="flex items-center gap-3 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[86%] p-0 sm:max-w-sm">
                <SheetHeader className="border-b border-border px-6 py-5">
                  <SheetTitle className="tracking-luxe">ARTESIAN STEPS</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col px-6 py-4">
                  {mainNav.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "border-b border-border/60 py-4 text-sm uppercase tracking-wideline transition-colors hover:text-gold",
                        pathname === link.href && "text-gold"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="px-6 py-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/booking">Book an Appointment</Link>
                  </Button>
                  <p className="mt-6 text-xs uppercase tracking-wideline text-muted-foreground">
                    {siteConfig.phone}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            className="font-serif text-lg tracking-luxe sm:text-xl lg:text-2xl"
          >
            ARTESIAN STEPS
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center transition-colors hover:text-gold"
            >
              {searchOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Search className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
            <Link
              href="/contact"
              aria-label="Account"
              className="hidden h-10 w-10 items-center justify-center transition-colors hover:text-gold sm:flex"
            >
              <User className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="/lookbook"
              aria-label="Wishlist"
              className="hidden h-10 w-10 items-center justify-center transition-colors hover:text-gold sm:flex"
            >
              <Heart className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              aria-label={`Shopping bag, ${itemCount} items`}
              onClick={() => setDrawerOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center transition-colors hover:text-gold"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              {itemCount > 0 ? (
                <span className="absolute right-0 top-1 flex h-4 min-w-4 items-center justify-center bg-gold px-1 text-[0.6rem] font-medium text-obsidian">
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        <nav className="hidden justify-center gap-7 pb-4 lg:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.68rem] uppercase tracking-wideline transition-colors hover:text-gold",
                pathname === link.href ? "text-gold" : "text-obsidian/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {searchOpen ? (
        <div className="border-t border-border bg-softwhite">
          <div className="mx-auto max-w-3xl px-6 py-6">
            <Input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search suits, tuxedos, shirts, accessories…"
              className="h-12 text-base"
            />
            {query.trim().length >= 2 ? (
              <div className="mt-4">
                {results.length > 0 ? (
                  <ul className="divide-y divide-border border border-border">
                    {results.map((product) => (
                      <li key={product.id}>
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-ivory"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="h-14 w-11 object-cover"
                          />
                          <span className="flex-1">
                            <span className="block font-serif text-base">
                              {product.name}
                            </span>
                            <span className="block text-xs uppercase tracking-wideline text-muted-foreground">
                              {product.category}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No pieces match “{query}”. Try “tuxedo”, “oxford” or “silk”.
                  </p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
