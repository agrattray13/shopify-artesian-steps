"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"

const messages = [
  "Complimentary style consultation with every formalwear appointment.",
  "Complimentary shipping on orders over $500 — worldwide delivery available.",
  "Wedding parties of six or more receive coordinated group fittings.",
]

export function AnnouncementBar() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative z-50 bg-obsidian text-ivory">
      <div className="mx-auto flex h-10 max-w-[1400px] items-center justify-center gap-2 px-6">
        <Sparkles className="h-3 w-3 text-gold" strokeWidth={1.5} />
        <p
          key={index}
          className="animate-fade-up text-center text-[0.66rem] uppercase tracking-luxe text-ivory/90"
        >
          {messages[index]}
        </p>
      </div>
    </div>
  )
}
