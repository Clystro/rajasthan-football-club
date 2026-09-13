import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "maroon" | "navy" | "outline" | "live";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className,
}) => {
  const variantStyles = {
    gold: "bg-gold/15 text-gold border border-gold/40",
    maroon: "bg-maroon/25 text-red-200 border border-maroon/60",
    navy: "bg-navy-slate/80 text-royal-slate border border-navy-border",
    outline: "bg-transparent text-white border border-white/20",
    live: "bg-maroon text-white border border-red-400/50 shadow-maroon-glow animate-pulse",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider font-display rounded-sm",
        variantStyles[variant],
        className
      )}
    >
      {variant === "live" && (
        <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
      )}
      {children}
    </span>
  );
};
