import { SectionHeader } from "@/components/shared/section-header";
import { EmailSignupClient } from "@/components/sections/email-signup-client";

export function EmailSignupSection() {
  return (
    <section className="bg-obsidian py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Gentleman’s Edit"
          subtitle="Receive private offers, seasonal style guidance, new collection announcements, and invitations to exclusive events."
          className="text-ivory"
        />

        <EmailSignupClient dark />

        <p className="mt-4 text-center text-xs text-ivory/50">
          By subscribing, you agree to receive marketing emails from Artesian Steps.
        </p>
      </div>
    </section>
  );
}
