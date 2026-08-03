import { notFound } from "next/navigation";
import { products, getRelatedProducts } from "@/lib/data/products";
import { ProductDetail } from "@/components/shop/product-detail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product | Artesian Steps" };
  return {
    title: `${product.name} | Artesian Steps`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const related = getRelatedProducts(product, 4);
  return <ProductDetail product={product} relatedProducts={related} />;
}
