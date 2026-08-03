"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col justify-center rounded border border-stone-200 bg-ivory/30 p-10 text-center">
        <h3 className="font-serif text-2xl text-obsidian">Message Sent</h3>
        <p className="mt-2 text-charcoal/70">Thank you for reaching out. Our team will respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border border-stone-200 bg-ivory/20 p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required className="mt-2" />
        </div>
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" required className="mt-2" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" required className="mt-2" />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
