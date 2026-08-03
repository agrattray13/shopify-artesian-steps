"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Truck, RotateCcw, Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { SafeImage } from "@/components/shared/safe-image";
import { type Product, formatPrice } from "@/lib/data/products";
import { useCart } from "@/lib/store/cart-store";
import { ProductCard } from "@/components/shared/product-card";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const addItem = useCart((s) => s.addItem);

  const selectedSizeObj = product.sizes.find((s) => s.name === selectedSize);
  const canAdd = selectedColor && selectedSize && selectedSizeObj?.inStock;

  function handleAddToBag() {
    setError(null);
    if (!selectedColor) {
      setError("Please select a color.");
      return;
    }
    if (!selectedSize) {
      setError("Please select a size.");
      return;
    }
    if (!selectedSizeObj?.inStock) {
      setError("Selected size is out of stock.");
      return;
    }
    addItem({ productId: product.id, color: selectedColor, size: selectedSize, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="bg-soft-white">
      <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-charcoal/60">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li>
              <Link href={`/shop/${product.categorySlug}`} className="hover:text-gold">
                {product.category}
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li aria-current="page" className="text-obsidian">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <div className="mx-auto max-w-[1600px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {product.images.map((image, index) => (
              <div key={image} className="relative aspect-[4/5] overflow-hidden bg-ivory">
                <SafeImage
                  src={image}
                  alt={`${product.name} - image ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{product.category}</p>
            <h1 className="mt-3 font-serif text-3xl font-medium text-obsidian sm:text-4xl">{product.name}</h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-medium text-obsidian">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-charcoal/50 line-through">{formatPrice(product.compareAtPrice)}</span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-charcoal/80">{product.description}</p>

            <div className="mt-8 space-y-6">
              {/* Color */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <Label>Color: {selectedColor}</Label>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                        selectedColor === color.name ? "border-obsidian" : "border-stone-300 hover:border-gold"
                      )}
                      style={{ backgroundColor: color.hex }}
                      aria-label={color.name}
                      title={color.name}
                    >
                      {selectedColor === color.name && <Check className="h-4 w-4 text-inverse" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <Label>Size: {selectedSize || "Select a size"}</Label>
                  <Link href="/size-fit-guide" className="text-xs underline hover:text-gold">
                    Size & Fit Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      type="button"
                      disabled={!size.inStock}
                      onClick={() => setSelectedSize(size.name)}
                      className={cn(
                        "min-w-[3.5rem] border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                        selectedSize === size.name
                          ? "border-obsidian bg-obsidian text-ivory"
                          : "border-stone-300 bg-soft-white text-charcoal hover:border-gold",
                        !size.inStock && "cursor-not-allowed bg-stone-100 text-stone-400 line-through"
                      )}
                      aria-label={size.inStock ? size.name : `${size.name} out of stock`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <Label className="mb-3 block">Quantity</Label>
                <Input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
                  className="w-24"
                />
              </div>

              {error && (
                <p className="text-sm text-burgundy" role="alert">
                  {error}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={handleAddToBag}
                  disabled={!canAdd}
                  className="flex-1"
                  size="lg"
                >
                  {added ? "Added to Bag" : "Add to Bag"}
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Heart className="h-4 w-4" />
                  Wishlist
                </Button>
              </div>

              <div className="grid gap-3 pt-4 text-sm text-charcoal/70">
                <div className="flex items-center gap-3">
                  <Truck className="h-4 w-4 text-gold" />
                  {product.shipping}
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-4 w-4 text-gold" />
                  {product.returns}
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="materials">
                <ul className="list-inside list-disc space-y-1 text-sm text-charcoal/80">
                  {product.materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="care">
                <ul className="list-inside list-disc space-y-1 text-sm text-charcoal/80">
                  {product.care.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="shipping">
                <div className="space-y-3 text-sm text-charcoal/80">
                  <p>{product.shipping}</p>
                  <p>{product.returns}</p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="bg-ivory/40 py-16">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-obsidian">You May Also Like</h2>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
