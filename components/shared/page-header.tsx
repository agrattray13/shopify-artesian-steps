interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export function PageHeader({ title, subtitle, centered = true, dark = false }: PageHeaderProps) {
  return (
    <div className={dark ? "bg-obsidian text-ivory" : "bg-ivory/40 text-obsidian"}>
      <div
        className={`mx-auto max-w-[1600px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 ${
          centered ? "text-center" : ""
        }`}
      >
        <h1 className="font-serif text-4xl font-medium sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (
          <p className={`mt-4 max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${dark ? "text-ivory/70" : "text-charcoal/70"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
