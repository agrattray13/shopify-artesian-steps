import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ProductGallery } from "@/components/products/ProductGallery"
import { ProductVariants } from "@/components/products/ProductVariants"
import { RelatedProducts } from "@/components/products/RelatedProducts"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts, getProductBySlug } from "@/lib/products"
import { siteConfig } from "@/lib/site"
import { formatPrice } from "@/lib/utils"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The piece you are looking for is no longer available.",
    }
  }

  const description = `${product.description.slice(0, 155).trim()}…`

  return {
    title: product.name,
    description,
    keywords: [...product.tags, product.category, "Artesian Steps"],
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/products/${product.slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: product.images[0], alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description,
      images: [product.images[0]],
    },
    alternates: { canonical: `/products/${product.slug}` },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { "@type": "Brand", name: siteConfig.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="border-b border-border bg-ivory/40">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 px-6 py-5 text-[0.65rem] uppercase tracking-wideline text-muted-foreground"
        >
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="text-gold">/</span>
          <Link href={`/${product.categorySlug}`} className="hover:text-gold">
            {product.category}
          </Link>
          <span className="text-gold">/</span>
          <span className="text-obsidian">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ProductGallery images={product.images} name={product.name} />
          <ProductVariants product={product} />
        </div>

        <Separator className="my-16" />

        <Tabs defaultValue="description" className="mx-auto max-w-4xl">
          <TabsList className="justify-center">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="materials">Materials &amp; Care</TabsTrigger>
            <TabsTrigger value="shipping">Shipping &amp; Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-10">
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>{product.description}</p>
              <p>
                Every {product.category.toLowerCase().replace(/s$/, "")} is finished
                in our atelier and includes a complimentary alteration. If you are
                unsure of your size, book a fitting and we will record your
                measurements for all future orders.
              </p>
              <dl className="grid gap-x-10 gap-y-4 pt-4 sm:grid-cols-2">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-obsidian">Reference</dt>
                  <dd>{product.id.toUpperCase()}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-obsidian">Category</dt>
                  <dd>{product.category}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-obsidian">Price</dt>
                  <dd>{formatPrice(product.price)}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-obsidian">Availability</dt>
                  <dd>{product.inStock ? "In stock" : "Made to order"}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-2 pt-4">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-3 py-1 text-[0.62rem] uppercase tracking-wideline"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="materials" className="mt-10">
            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-serif text-2xl text-obsidian">Materials</h3>
                <p className="mt-3">{product.materials}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-obsidian">Care</h3>
                <p className="mt-3">{product.care}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-10">
            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-serif text-2xl text-obsidian">Shipping</h3>
                <p className="mt-3">
                  In-stock pieces are dispatched within one to two business days.
                  Standard delivery arrives in three to five business days ($25), and
                  express in one to two ($45). Orders over $500 ship complimentary.
                  International delivery is available to more than forty countries.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-obsidian">Returns</h3>
                <p className="mt-3">
                  Unworn, unaltered stock pieces may be returned within thirty days
                  of delivery for a full refund. Made-to-measure and altered garments
                  are final sale, though we will correct any fit issue at no charge.
                </p>
              </div>
              <p>
                Full details are set out in our{" "}
                <Link href="/shipping-returns" className="link-underline text-obsidian">
                  shipping &amp; returns policy
                </Link>
                .
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <RelatedProducts slug={product.slug} />
    </>
  )
}
