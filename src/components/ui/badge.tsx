import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-[0.62rem] font-medium uppercase tracking-wideline transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-transparent bg-obsidian text-ivory",
        secondary: "border-transparent bg-ivory text-obsidian",
        gold: "border-transparent bg-gold text-obsidian",
        burgundy: "border-transparent bg-burgundy text-ivory",
        outline: "border-obsidian/25 text-obsidian",
        outlineLight: "border-ivory/40 text-ivory",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
