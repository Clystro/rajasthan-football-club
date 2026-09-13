"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  className,
}) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-navy-pitch/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full max-w-lg bg-navy-card border-2 border-gold/60 p-6 sm:p-8 text-white shadow-2xl z-10 animate-in zoom-in-95 duration-200",
          className
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-royal-slate hover:text-white hover:bg-navy-slate/50 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        {(title || subtitle) && (
          <div className="mb-6 pr-8">
            {subtitle && (
              <p className="text-xs font-display uppercase tracking-widest text-gold mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white">
                {title}
              </h3>
            )}
            <div className="h-[2px] w-12 bg-gold mt-3" />
          </div>
        )}

        {/* Modal Body */}
        <div>{children}</div>
      </div>
    </div>
  );
};
