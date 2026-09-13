import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "maroon" | "outline-gold" | "outline-white" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "gold",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display tracking-wider uppercase font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer";

    const variantStyles = {
      gold: "bg-gradient-to-r from-gold via-gold-amber to-gold text-navy-pitch hover:brightness-110 shadow-gold-glow border border-gold-light/40",
      maroon:
        "bg-gradient-to-r from-maroon to-maroon-light text-white hover:brightness-110 shadow-maroon-glow border border-maroon-light/30",
      "outline-gold":
        "bg-navy-card/40 border-2 border-gold/80 text-gold hover:bg-gold/15 hover:border-gold hover:shadow-gold-glow backdrop-blur-sm",
      "outline-white":
        "bg-navy-card/40 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm",
      ghost:
        "bg-transparent text-royal-slate hover:text-white hover:bg-navy-slate/50",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm sm:text-base px-6 py-3 gap-2",
      lg: "text-base sm:text-lg px-8 py-4 gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
