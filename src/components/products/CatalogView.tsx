"use client"

import * as React from "react"
import { SlidersHorizontal, X } from "lucide-react"

import { ProductGrid } from "@/components/products/ProductGrid"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { getAllColors, getAllSizes } from "@/lib/products"
import { priceRanges, sortOptions } from "@/lib/site"
import { cn } from "@/lib/utils"
import type { Product, SortValue } from "@/lib/types"

interface CatalogViewProps {
  products: Product[]
  emptyTitle?: string
}

export function CatalogView({ products, emptyTitle }: CatalogViewProps) {
  const [selectedSizes, setSelectedSizes] = React.useState<string[]>([])
  const [selectedColors, setSelectedColors] = React.useState<string[]>([])
  const [selectedPrice, setSelectedPrice] = React.useState<string | null>(null)
  const [sort, setSort] = React.useState<SortValue>("featured")
  const [filtersOpen, setFiltersOpen] = React.useState(false)

  const sizes = React.useMemo(() => getAllSizes(products), [products])
  const colors = React.useMemo(() => getAllColors(products), [products])

  const toggle = (
    value: string,
    list: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const clearAll = () => {
    setSelectedSizes([])
    setSelectedColors([])
    setSelectedPrice(null)
  }

  const activeCount =
    selectedSizes.length + selectedColors.length + (selectedPrice ? 1 : 0)

  const filtered = React.useMemo(() => {
    const range = priceRanges.find((option) => option.value === selectedPrice)

    const result = products.filter((product) => {
      const sizeMatch =
        selectedSizes.length === 0 ||
        product.sizes.some((size) => selectedSizes.includes(size))
      const colorMatch =
        selectedColors.length === 0 ||
        product.colors.some((color) => selectedColors.includes(color.name))
      const priceMatch =
        !range || (product.price >= range.min && product.price <= range.max)

      return sizeMatch && colorMatch && priceMatch
    })

    switch (sort) {
      case "newest":
        return [...result].sort(
          (a, b) => Number(b.isNew) - Number(a.isNew) || a.name.localeCompare(b.name)
        )
      case "price-asc":
        return [...result].sort((a, b) => a.price - b.price)
      case "price-desc":
        return [...result].sort((a, b) => b.price - a.price)
      case "name-asc":
        return [...result].sort((a, b) => a.name.localeCompare(b.name))
      case "rating":
        return [...result].sort((a, b) => b.rating - a.rating)
      default:
        return [...result].sort(
          (a, b) => Number(b.isFeatured) - Number(a.isFeatured)
        )
    }
  }, [products, selectedSizes, selectedColors, selectedPrice, sort])

  const filterPanel = (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Refine</p>
        {activeCount > 0 ? (
          <button
            type="button"
            onClick={clearAll}
            className="text-[0.65rem] uppercase tracking-wideline text-muted-foreground transition-colors hover:text-burgundy"
          >
            Clear ({activeCount})
          </button>
        ) : null}
      </div>

      <Separator />

      <fieldset>
        <legend className="eyebrow mb-4">Size</legend>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => toggle(size, selectedSizes, setSelectedSizes)}
              aria-pressed={selectedSizes.includes(size)}
              className={cn(
                "border px-2 py-2 text-xs transition-colors",
                selectedSizes.includes(size)
                  ? "border-obsidian bg-obsidian text-ivory"
                  : "border-border hover:border-obsidian"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </fieldset>

      <Separator />

      <fieldset>
        <legend className="eyebrow mb-4">Colour</legend>
        <div className="space-y-3">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center gap-3">
              <Checkbox
                id={`color-${color.name}`}
                checked={selectedColors.includes(color.name)}
                onCheckedChange={() =>
                  toggle(color.name, selectedColors, setSelectedColors)
                }
              />
              <Label
                htmlFor={`color-${color.name}`}
                className="flex cursor-pointer items-center gap-2 tracking-normal text-xs normal-case"
              >
                <span
                  className="h-3.5 w-3.5 rounded-full border border-obsidian/15"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
              </Label>
            </div>
          ))}
        </div>
      </fieldset>

      <Separator />

      <fieldset>
        <legend className="eyebrow mb-4">Price</legend>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center gap-3">
              <Checkbox
                id={`price-${range.value}`}
                checked={selectedPrice === range.value}
                onCheckedChange={() =>
                  setSelectedPrice(selectedPrice === range.value ? null : range.value)
                }
              />
              <Label
                htmlFor={`price-${range.value}`}
                className="cursor-pointer text-xs normal-case tracking-normal"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-40">{filterPanel}</div>
        </aside>

        <div className="flex-1">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
            <p className="text-xs uppercase tracking-wideline text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setFiltersOpen((open) => !open)}
              >
                {filtersOpen ? <X /> : <SlidersHorizontal />}
                Filters
              </Button>

              <div className="w-52">
                <Label htmlFor="sort" className="sr-only">
                  Sort by
                </Label>
                <Select
                  value={sort}
                  onValueChange={(value) => setSort(value as SortValue)}
                >
                  <SelectTrigger id="sort" className="h-10 text-xs uppercase tracking-wideline">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {filtersOpen ? (
            <div className="mb-10 border border-border p-6 lg:hidden">{filterPanel}</div>
          ) : null}

          <ProductGrid products={filtered} columns={3} emptyTitle={emptyTitle} />
        </div>
      </div>
    </div>
  )
}
