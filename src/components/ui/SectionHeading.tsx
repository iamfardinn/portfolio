import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-12 md:mb-20",
        align === "center" && "text-center",
        className,
      )}
    >
      <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#ff3c00] mb-4 flex items-center gap-2">
        <span className="inline-block h-px w-6 bg-[#ff3c00]/60" />
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-[0.95] text-white">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-sm md:text-base text-[#9a9a9a] leading-relaxed max-w-2xl font-mono",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
