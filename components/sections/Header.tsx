"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Shield } from "lucide-react";
import { ClubCrest } from "@/components/ui/ClubCrest";
import { NAV_ITEMS } from "@/constants/navigation";
import { CLUB_INFO } from "@/constants/clubInfo";

interface HeaderProps {
  onJoinClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-pitch/95 backdrop-blur-md py-3 border-b border-gold/30 shadow-2xl"
          : "bg-gradient-to-b from-navy-pitch/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Crest Brand Link */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Rajasthan Football Club Homepage"
        >
          <ClubCrest size={46} showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm uppercase font-display tracking-widest text-slate-200 hover:text-gold transition-colors duration-200 font-semibold cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Contact Hotline */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${CLUB_INFO.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-xs font-sans text-royal-slate hover:text-gold transition-colors py-1 px-2.5 border border-navy-border/60 bg-navy-card/40"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span className="font-semibold">{CLUB_INFO.contact.phone}</span>
          </a>

          <button
            onClick={() => {
              if (onJoinClick) onJoinClick();
              else handleNavClick("#contact");
            }}
            className="btn-gold text-sm px-5 py-2.5 flex items-center gap-2 shadow-gold-glow cursor-pointer"
          >
            <Shield className="w-4 h-4" />
            Join the Club
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              if (onJoinClick) onJoinClick();
              else handleNavClick("#contact");
            }}
            className="btn-gold text-xs px-3.5 py-2 font-display font-bold uppercase tracking-wider"
          >
            Join
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-white hover:text-gold hover:bg-navy-slate/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-pitch/98 border-b border-gold/40 backdrop-blur-xl px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-3 pt-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left font-display text-lg uppercase tracking-wider text-slate-200 hover:text-gold py-2 px-3 border-b border-navy-border/30 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-gold text-xs">&rarr;</span>
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-navy-border/60 flex flex-col gap-3">
            <a
              href={`tel:${CLUB_INFO.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 py-3 bg-navy-card text-white text-sm font-sans border border-navy-border"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call Front Desk: {CLUB_INFO.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onJoinClick) onJoinClick();
                else handleNavClick("#contact");
              }}
              className="w-full btn-gold text-center py-3.5 shadow-gold-glow"
            >
              Join the Club (Season Passes & Trials)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
