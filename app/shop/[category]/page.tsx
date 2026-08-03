import { notFound } from "next/navigation";
import { products, categories } from "@/lib/data/products";
import { ShopPage } from "@/components/shop/shop-page";

export function generateStaticParams() {
  return [{ category: "new-arrivals" }, ...categories.map((c) => ({ category: c.slug }))];
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = categories.find((c) => c.slug === params.category);
  const title = category ? category.name : params.category === "new-arrivals" ? "New Arrivals" : "Shop";
  return {
    title: `${title} | Artesian Steps`,
    description: `Browse ${title.toLowerCase()} at Artesian Steps. Luxury men's formalwear tailored for every occasion.`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const validCategories = ["new-arrivals", ...categories.map((c) => c.slug)];
  if (!validCategories.includes(params.category)) return notFound();

  return <ShopPage initialCategory={params.category} products={products} />;
}
