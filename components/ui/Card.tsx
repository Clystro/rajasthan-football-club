import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "featured" | "glass";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = "default", hoverEffect = true, children, ...props },
    ref
  ) => {
    const variantStyles = {
      default:
        "bg-navy-card/90 border border-navy-border/80 text-white backdrop-blur-md",
      featured:
        "bg-gradient-to-b from-navy-card via-navy-card to-navy-slate/80 border-2 border-gold text-white shadow-gold-glow",
      glass:
        "bg-navy-pitch/70 border border-white/10 text-white backdrop-blur-lg",
    };

    const hoverStyles = hoverEffect
      ? "transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-pitch-card"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-none",
          variantStyles[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
