import { products } from "@/lib/data/products";
import { ShopPage } from "@/components/shop/shop-page";

export const metadata = {
  title: "Shop All | Artesian Steps",
  description: "Browse all luxury men's formalwear including suits, tuxedos, dress shirts, footwear, and accessories.",
};

export default function ShopAllPage() {
  return <ShopPage initialCategory="all" products={products} />;
}
