"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-4 flex flex-col gap-3 sm:flex-row"
    >
      <Input
        type="email"
        placeholder="Email address"
        aria-label="Email address for newsletter"
        className={
          dark
            ? "border-stone-700 bg-obsidian text-ivory placeholder:text-stone-500 focus-visible:ring-gold"
            : ""
        }
        required
      />
      <Button type="submit" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
