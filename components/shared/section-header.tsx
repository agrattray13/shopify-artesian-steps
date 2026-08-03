interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl" + " " + (className || "")}>
      <h2 className="font-serif text-3xl font-medium tracking-tight text-obsidian sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-charcoal/80 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
