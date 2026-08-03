"use client"

import Link from "next/link"
import { Ruler } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getSizeChart } from "@/lib/size-guide"

interface SizeGuideProps {
  categorySlug: string
}

export function SizeGuide({ categorySlug }: SizeGuideProps) {
  const chart = getSizeChart(categorySlug)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 text-[0.65rem] uppercase tracking-wideline text-muted-foreground transition-colors hover:text-gold"
        >
          <Ruler className="h-3.5 w-3.5" strokeWidth={1.5} />
          Size Guide
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{chart.title} — Size Guide</DialogTitle>
          <DialogDescription>{chart.note}</DialogDescription>
        </DialogHeader>

        <div className="max-h-[55vh] overflow-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {chart.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-3 py-3 text-left text-[0.62rem] uppercase tracking-wideline text-muted-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chart.rows.map((row) => (
                <tr key={row[0]} className="border-b border-border/60">
                  {row.map((cell, index) => (
                    <td
                      key={`${row[0]}-${index}`}
                      className="whitespace-nowrap px-3 py-3 tabular-nums"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground">
          Between sizes or unsure?{" "}
          <Link href="/size-guide" className="link-underline text-obsidian">
            View the full size guide
          </Link>{" "}
          or{" "}
          <Link href="/booking" className="link-underline text-obsidian">
            book a fitting
          </Link>
          .
        </p>
      </DialogContent>
    </Dialog>
  )
}
