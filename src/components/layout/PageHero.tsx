import Link from "next/link"

import { cn } from "@/lib/utils"

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  size?: "default" | "compact"
  breadcrumb?: { label: string; href: string }[]
  children?: React.ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  size = "default",
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-obsidian text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(198,161,91,0.22), transparent 55%), radial-gradient(circle at 85% 80%, rgba(91,31,42,0.35), transparent 60%)",
        }}
      />
      <div
        className={cn(
          "relative mx-auto max-w-[1400px] px-6",
          size === "compact" ? "py-16 md:py-20" : "py-24 md:py-32",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {breadcrumb ? (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "mb-6 flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-wideline text-ivory/50",
              align === "center" && "justify-center"
            )}
          >
            {breadcrumb.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {index > 0 ? <span className="text-gold">/</span> : null}
                <Link href={crumb.href} className="transition-colors hover:text-gold">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? <p className="eyebrow text-gold">{eyebrow}</p> : null}

        <h1
          className={cn(
            "mt-4 font-serif text-4xl leading-[1.05] text-balance md:text-6xl",
            size === "compact" && "md:text-5xl"
          )}
        >
          {title}
        </h1>

        <div
          className={cn(
            "luxe-rule mt-7",
            align === "center" ? "mx-auto" : ""
          )}
        />

        {description ? (
          <p
            className={cn(
              "mt-7 max-w-2xl text-base leading-relaxed text-ivory/70",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  tone?: "dark" | "light"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow text-gold">{eyebrow}</p> : null}
      <h2
        className={cn(
          "mt-4 font-serif text-3xl leading-tight text-balance md:text-5xl",
          tone === "light" ? "text-ivory" : "text-obsidian"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "light" ? "text-ivory/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
