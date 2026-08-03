"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailSignupClient({ dark = false }: { dark?: boolean }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
    >
      <Input
        type="email"
        placeholder="Email address"
        aria-label="Email address for newsletter"
        className={
          dark
            ? "border-stone-700 bg-charcoal text-ivory placeholder:text-stone-500 focus-visible:ring-gold"
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
