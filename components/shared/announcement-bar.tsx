"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnnouncementBar() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      className={cn(
        "relative z-50 bg-obsidian px-4 py-2.5 text-center text-xs font-medium tracking-wide text-ivory sm:text-sm"
      )}
    >
      <Link
        href="/appointments"
        className="inline-block underline-offset-2 transition-colors hover:text-gold hover:underline"
      >
        Complimentary style consultation with every formalwear appointment.
      </Link>
      <button
        type="button"
        onClick={() => setClosed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-ivory/80 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
