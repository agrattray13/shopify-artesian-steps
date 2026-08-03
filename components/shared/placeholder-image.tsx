import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
}

export function PlaceholderImage({ label, className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br from-ivory to-stone-200 text-center text-charcoal/60",
        className
      )}
    >
      {label ? <span className="px-4 text-sm font-medium uppercase tracking-widest">{label}</span> : null}
    </div>
  );
}
