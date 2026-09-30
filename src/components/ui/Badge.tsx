import { cn } from "@/lib/utils";

type Variant = "default" | "accent" | "muted" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  /** When true, badge renders denser — used for the About stack grid. */
  dense?: boolean;
}

const variantClasses: Record<Variant, string> = {
  default:
    "bg-white/[0.04] text-[#cfcfcf] border border-white/10 hover:border-white/30 hover:text-white",
  accent:
    "bg-[#ff3c00]/10 text-[#ff7a4a] border border-[#ff3c00]/30 hover:bg-[#ff3c00]/15",
  muted:
    "bg-transparent text-[#7a7a7a] border border-white/[0.06] hover:text-[#cfcfcf] hover:border-white/15",
  outline:
    "bg-transparent text-white border border-white/15 hover:border-white/40",
};

export function Badge({
  className,
  variant = "default",
  dense = false,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        dense
          ? "inline-flex items-center gap-1 rounded-full px-2 py-[3px] text-[9px] font-mono uppercase tracking-wider transition-colors duration-300"
          : "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] md:text-[11px] font-mono uppercase tracking-wider transition-colors duration-300",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
