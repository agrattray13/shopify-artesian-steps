"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = React.useState(0)

  const go = (direction: 1 | -1) => {
    setActive((current) => (current + direction + images.length) % images.length)
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-6">
      <div className="relative flex-1 overflow-hidden bg-charcoal">
        <div className="aspect-[4/5] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={images[active]}
            src={images[active]}
            alt={`${name} — view ${active + 1}`}
            className="h-full w-full animate-fade-up object-cover"
          />
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-softwhite/85 transition-colors hover:bg-softwhite"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-softwhite/85 transition-colors hover:bg-softwhite"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : null}

        <span className="absolute bottom-4 right-4 bg-obsidian/80 px-3 py-1 text-[0.65rem] uppercase tracking-wideline text-ivory">
          {active + 1} / {images.length}
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto lg:w-24 lg:flex-col lg:overflow-visible">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View image ${index + 1} of ${name}`}
            aria-current={index === active}
            className={cn(
              "relative aspect-[4/5] w-20 shrink-0 overflow-hidden border transition-all lg:w-full",
              index === active
                ? "border-gold opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
