"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { ClubCrest } from "@/components/ui/ClubCrest";
import { CLUB_INFO } from "@/constants/clubInfo";
import { NAV_ITEMS } from "@/constants/navigation";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-pitch border-t-2 border-gold/40 text-white relative z-10">
      {/* Top Footer Banner */}
      <div className="bg-gradient-to-r from-maroon via-navy-card to-navy-pitch py-6 border-b border-navy-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <ClubCrest size={40} />
            <div>
              <span className="font-display font-bold uppercase tracking-wider text-base text-white">
                Rajasthan Football Club
              </span>
              <p className="text-xs text-gold font-sans italic">
                &ldquo;{CLUB_INFO.motto}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-display uppercase tracking-widest text-slate-300">
              Connect With The Royals:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={CLUB_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-navy-pitch border border-navy-border flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                aria-label="RFC Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-navy-pitch border border-navy-border flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                aria-label="RFC Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-navy-pitch border border-navy-border flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                aria-label="RFC YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-navy-pitch border border-navy-border flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                aria-label="RFC Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-navy-pitch border border-navy-border flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                aria-label="RFC LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: About & Info */}
          <div className="lg:col-span-4 space-y-4">
            <ClubCrest size={52} showText={true} />
            <p className="text-xs sm:text-sm text-royal-slate font-sans leading-relaxed">
              Rajasthan Football Club is Jaipur’s flagship professional football club, competing in national tournaments and nurturing elite youth athletes at our AIFF 3-Star accredited academy.
            </p>

            <div className="pt-2 text-xs text-royal-slate font-sans space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{CLUB_INFO.stadium.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{CLUB_INFO.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{CLUB_INFO.contact.email}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-royal-slate font-sans">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleScrollTo(item.href)}
                    className="hover:text-gold transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Memberships & Academy */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">
              Memberships & Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-royal-slate font-sans">
              <li>
                <button
                  onClick={() => handleScrollTo("#memberships")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Supporter Pass (₹1,499)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#memberships")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Royal Season Pass (₹4,999)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#memberships")}
                  className="hover:text-gold transition-colors text-left"
                >
                  Maharaja VIP Box (₹24,999)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#academy")}
                  className="hover:text-gold transition-colors text-left"
                >
                  U-13 Junior Royals Foundation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#academy")}
                  className="hover:text-gold transition-colors text-left"
                >
                  U-15 Elite Colts Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#academy")}
                  className="hover:text-gold transition-colors text-left"
                >
                  U-18 Desert Warriors Pro Pathway
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Maps Embed for Stadium */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">
              Sawai Mansingh Stadium
            </h4>
            <div className="relative h-40 w-full overflow-hidden border border-navy-border bg-navy-pitch">
              <iframe
                title="Sawai Mansingh Stadium Map"
                src={CLUB_INFO.stadium.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                CLUB_INFO.stadium.name + " " + CLUB_INFO.stadium.city
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline font-sans"
            >
              <span>Get Stadium Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Multi-Tenant Attribution */}
      <div className="bg-navy-pitch/95 border-t border-navy-border/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-royal-slate font-sans">
          <p>
            &copy; {currentYear} {CLUB_INFO.name}. All rights reserved. Registered under AIFF & RSFA.
          </p>
          <p className="flex items-center gap-2">
            <span>Powered by Clystro Lead Engine</span>
            <span>&bull;</span>
            <span className="text-slate-400">clystro-essentials Firestore</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
