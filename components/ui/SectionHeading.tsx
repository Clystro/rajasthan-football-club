import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-3.5",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <span className="w-6 h-[2px] bg-gold" />
          <span className="font-display uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-gold">
            {eyebrow}
          </span>
          <span className="w-6 h-[2px] bg-gold" />
        </div>
      )}

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="gold-heading-gradient">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-royal-slate font-sans leading-relaxed">
          {description}
        </p>
      )}

      {/* Decorative Royal Motif Divider */}
      <div
        className={cn(
          "flex items-center gap-2 mt-5",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
        <div className="w-2 h-2 rotate-45 bg-gold" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
      </div>
    </div>
  );
};
