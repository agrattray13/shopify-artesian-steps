"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "@/components/shared/section-header";

export function EmailSignupSection() {
  return (
    <section className="bg-obsidian py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Gentleman’s Edit"
          subtitle="Receive private offers, seasonal style guidance, new collection announcements, and invitations to exclusive events."
          className="text-ivory"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Email address"
            aria-label="Email address for newsletter"
            className="border-stone-700 bg-charcoal text-ivory placeholder:text-stone-500 focus-visible:ring-gold"
            required
          />
          <Button type="submit" className="shrink-0">
            Subscribe
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-ivory/50">
          By subscribing, you agree to receive marketing emails from Artesian Steps.
        </p>
      </div>
    </section>
  );
}
