"use client";

import { Suspense } from "react";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { products, categories, formatPrice, type Product } from "@/lib/data/products";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "popularity", label: "Popularity" },
];

const availabilityOptions = [
  { value: "all", label: "All" },
  { value: "in-stock", label: "In Stock" },
];

interface ShopPageProps {
  initialCategory: string;
  products: Product[];
}

function ShopPageInner({ initialCategory }: ShopPageProps) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");
  const [sort, setSort] = useState<string>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const allSizes = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.sizes.forEach((s) => set.add(s.name)));
    return Array.from(set).sort();
  }, []);

  const allColors = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.colors.forEach((c) => set.add(c.name)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      if (selectedCategory === "new-arrivals") {
        result = result.filter((p) => p.isNew);
      } else {
        result = result.filter((p) => p.categorySlug === selectedCategory);
      }
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedSize !== "all") {
      result = result.filter((p) => p.sizes.some((s) => s.name === selectedSize && s.inStock));
    }

    if (selectedColor !== "all") {
      result = result.filter((p) => p.colors.some((c) => c.name === selectedColor));
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((p) => p.price >= min && (Number.isNaN(max) || p.price <= max));
    }

    if (availability === "in-stock") {
      result = result.filter((p) => p.sizes.some((s) => s.inStock));
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case "popularity":
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, query, selectedSize, selectedColor, priceRange, availability, sort]);

  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleProducts.length < filtered.length;

  const activeFiltersCount = [
    selectedCategory !== "all" && selectedCategory !== initialCategory,
    selectedSize !== "all",
    selectedColor !== "all",
    priceRange !== "all",
    availability !== "all",
    query.trim().length > 0,
  ].filter(Boolean).length;

  function resetFilters() {
    setQuery("");
    setSelectedCategory(initialCategory);
    setSelectedSize("all");
    setSelectedColor("all");
    setPriceRange("all");
    setAvailability("all");
    setSort("featured");
    setVisibleCount(12);
  }

  const categoryLabel =
    initialCategory === "all"
      ? "All Products"
      : initialCategory === "new-arrivals"
        ? "New Arrivals"
        : categories.find((c) => c.slug === initialCategory)?.name || "Shop";

  return (
    <div className="bg-soft-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Shop</p>
            <h1 className="mt-2 font-serif text-4xl font-medium text-obsidian">{categoryLabel}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-charcoal/70">{filtered.length} results</span>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
          {/* Filters - desktop */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="font-serif text-lg text-obsidian">Search</h3>
                <div className="relative mt-3">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <FilterGroup title="Category">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mt-2 w-full border border-stone-300 bg-soft-white px-3 py-2 text-sm text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <option value="all">All Categories</option>
                  <option value="new-arrivals">New Arrivals</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup title="Size">
                <div className="flex flex-wrap gap-2">
                  <FilterChip active={selectedSize === "all"} onClick={() => setSelectedSize("all")}>
                    All
                  </FilterChip>
                  {allSizes.map((size) => (
                    <FilterChip key={size} active={selectedSize === size} onClick={() => setSelectedSize(size)}>
                      {size}
                    </FilterChip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="Color">
                <div className="flex flex-wrap gap-2">
                  <FilterChip active={selectedColor === "all"} onClick={() => setSelectedColor("all")}>
                    All
                  </FilterChip>
                  {allColors.map((color) => (
                    <FilterChip key={color} active={selectedColor === color} onClick={() => setSelectedColor(color)}>
                      {color}
                    </FilterChip>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title="Price">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="mt-2 w-full border border-stone-300 bg-soft-white px-3 py-2 text-sm text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <option value="all">All Prices</option>
                  <option value="0-200">Under {formatPrice(200)}</option>
                  <option value="200-500">{formatPrice(200)} – {formatPrice(500)}</option>
                  <option value="500-1000">{formatPrice(500)} – {formatPrice(1000)}</option>
                  <option value="1000-99999">{formatPrice(1000)}+</option>
                </select>
              </FilterGroup>

              <FilterGroup title="Availability">
                <div className="flex flex-wrap gap-2">
                  {availabilityOptions.map((o) => (
                    <FilterChip
                      key={o.value}
                      active={availability === o.value}
                      onClick={() => setAvailability(o.value)}
                    >
                      {o.label}
                    </FilterChip>
                  ))}
                </div>
              </FilterGroup>

              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={resetFilters} className="w-full justify-start gap-2">
                  <X className="h-4 w-4" />
                  Clear all filters
                </Button>
              )}
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((v) => !v)}
              className="flex w-full items-center justify-between border border-stone-300 bg-soft-white px-4 py-3 text-sm font-medium text-obsidian"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileFiltersOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {mobileFiltersOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-x border-b border-stone-300 bg-soft-white px-4"
                >
                  <div className="py-4 space-y-4">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <MobileSelect label="Category" value={selectedCategory} onChange={setSelectedCategory}>
                      <option value="all">All Categories</option>
                      <option value="new-arrivals">New Arrivals</option>
                      {categories.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.name}
                        </option>
                      ))}
                    </MobileSelect>
                    <MobileSelect label="Size" value={selectedSize} onChange={setSelectedSize}>
                      <option value="all">All Sizes</option>
                      {allSizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </MobileSelect>
                    <MobileSelect label="Color" value={selectedColor} onChange={setSelectedColor}>
                      <option value="all">All Colors</option>
                      {allColors.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </MobileSelect>
                    <MobileSelect label="Price" value={priceRange} onChange={setPriceRange}>
                      <option value="all">All Prices</option>
                      <option value="0-200">Under {formatPrice(200)}</option>
                      <option value="200-500">{formatPrice(200)} – {formatPrice(500)}</option>
                      <option value="500-1000">{formatPrice(500)} – {formatPrice(1000)}</option>
                      <option value="1000-99999">{formatPrice(1000)}+</option>
                    </MobileSelect>
                    <MobileSelect label="Availability" value={availability} onChange={setAvailability}>
                      {availabilityOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </MobileSelect>
                    {activeFiltersCount > 0 && (
                      <Button variant="ghost" size="sm" onClick={resetFilters} className="w-full gap-2">
                        <X className="h-4 w-4" />
                        Clear all filters
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded border border-dashed border-stone-300 bg-ivory/30 py-24 text-center">
                <p className="font-serif text-xl text-obsidian">No products match your filters.</p>
                <p className="mt-2 text-sm text-charcoal/70">Try adjusting your search or filters.</p>
                <Button variant="outline" onClick={resetFilters} className="mt-6">
                  Clear filters
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
                {hasMore && (
                  <div className="mt-12 text-center">
                    <Button variant="outline" onClick={() => setVisibleCount((c) => c + 12)}>
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShopPage(props: ShopPageProps) {
  return (
    <Suspense fallback={<ShopPageSkeleton />}>
      <ShopPageInner {...props} />
    </Suspense>
  );
}

function ShopPageSkeleton() {
  return (
    <div className="bg-soft-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="h-10 w-48 animate-pulse bg-stone-200" />
        <div className="mt-8 grid gap-8 lg:grid-cols-4">
          <div className="hidden lg:block">
            <div className="space-y-6">
              <div className="h-40 animate-pulse bg-stone-200" />
              <div className="h-40 animate-pulse bg-stone-200" />
              <div className="h-40 animate-pulse bg-stone-200" />
            </div>
          </div>
          <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] animate-pulse bg-stone-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-serif text-lg text-obsidian">{title}</h3>
      {children}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        active
          ? "border-obsidian bg-obsidian text-ivory"
          : "border-stone-300 bg-soft-white text-charcoal hover:border-gold"
      )}
    >
      {children}
    </button>
  );
}

function MobileSelect({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-obsidian">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-stone-300 bg-soft-white px-3 py-2 text-sm text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {children}
      </select>
    </label>
  );
}
