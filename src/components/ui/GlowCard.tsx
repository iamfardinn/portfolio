import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowCardProps {
  className?: string;
  children?: ReactNode;
  interactive?: boolean;
  onClick?: () => void;
}

export function GlowCard({
  className,
  interactive = true,
  children,
  ...props
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d0d] p-6 md:p-8",
        "transition-colors duration-500",
        interactive && "hover:border-white/20",
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}