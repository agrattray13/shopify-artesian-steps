import Link from "next/link";
import { Heart } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Wishlist | Artesian Steps",
  description: "Save your favorite pieces for later.",
};

export default function WishlistPage() {
  return (
    <>
      <PageHeader title="Your Wishlist" subtitle="Save your favorite pieces for later." />
      <div className="flex flex-col items-center justify-center bg-soft-white px-4 py-24 text-center">
        <Heart className="h-12 w-12 text-stone-300" />
        <h2 className="mt-6 font-serif text-2xl text-obsidian">Your wishlist is empty</h2>
        <p className="mt-2 text-charcoal/70">Browse our collections and save items you love.</p>
        <Button asChild className="mt-8">
          <Link href="/shop">Explore Collections</Link>
        </Button>
      </div>
    </>
  );
}
