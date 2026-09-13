"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Shield, Calendar, MapPin, ChevronRight, Trophy, Users, Award } from "lucide-react";
import { ClubCrest } from "@/components/ui/ClubCrest";
import { Badge } from "@/components/ui/Badge";
import { CLUB_INFO } from "@/constants/clubInfo";

interface HeroProps {
  onJoinClick?: () => void;
  onExploreFixtures?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreFixtures }) => {
  // Countdown to next home match (Sep 28, 2026)
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 45, seconds: 20 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Stadium Atmosphere with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&auto=format&fit=crop&q=85"
          alt="Rajasthan Football Club SMS Stadium"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.28] contrast-125"
        />
        {/* Radial floodlight gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-pitch via-navy-pitch/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-pitch/90 via-transparent to-navy-pitch/90" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] floodlight-radial pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 floodlight-cone-left pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 floodlight-cone-right pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 text-center lg:text-left pt-6 sm:pt-0">
            {/* Royal Badge Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-5">
              <Badge variant="gold" className="px-3.5 py-1 text-xs">
                Official Club Portal
              </Badge>
              <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-widest text-slate-400 font-sans">
                Sawai Mansingh Stadium &bull; Jaipur
              </span>
            </div>

            {/* Club Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]">
              The Desert Royals <br />
              <span className="gold-heading-gradient">Of Football</span>
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="mt-6 text-base sm:text-xl text-slate-300 font-sans max-w-2xl font-light leading-relaxed">
              Forged in Rajasthan’s warrior legacy, driven by European tactical mastery. Welcome to Jaipur’s premier football institution — home to national contenders, elite academy prodigies, and 12,500+ roaring royals.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  if (onJoinClick) onJoinClick();
                  else scrollTo("#contact");
                }}
                className="btn-gold text-base sm:text-lg px-8 py-4 shadow-gold-glow-lg flex items-center justify-center gap-2.5"
              >
                <Shield className="w-5 h-5" />
                <span>Join the Club (2026/27)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (onExploreFixtures) onExploreFixtures();
                  else scrollTo("#fixtures");
                }}
                className="btn-outline-gold text-base sm:text-lg px-8 py-4 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Explore Fixtures & Passes</span>
              </button>
            </div>

            {/* Quick Club Heritage Stats Bar */}
            <div className="mt-12 sm:mt-14 pt-8 border-t border-navy-border/70 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-gold mb-1">
                  <Trophy className="w-4 h-4" />
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white">3</span>
                </div>
                <p className="text-[11px] sm:text-xs text-royal-slate font-display uppercase tracking-wider">
                  State Titles
                </p>
              </div>

              <div className="text-center lg:text-left border-x border-navy-border/70 px-2 sm:px-4">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-gold mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white">450+</span>
                </div>
                <p className="text-[11px] sm:text-xs text-royal-slate font-display uppercase tracking-wider">
                  Academy Talents
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-gold mb-1">
                  <Users className="w-4 h-4" />
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white">12.5k+</span>
                </div>
                <p className="text-[11px] sm:text-xs text-royal-slate font-display uppercase tracking-wider">
                  Fan Members
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Next Match Countdown Banner */}
          <div className="lg:col-span-4">
            <div className="relative bg-navy-card/95 border-2 border-gold/60 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              {/* Corner Badge */}
              <div className="absolute top-0 right-0">
                <span className="inline-block bg-maroon px-3.5 py-1 text-[11px] font-display font-bold uppercase tracking-widest text-white shadow-md">
                  Next Match
                </span>
              </div>

              <div className="text-xs font-display uppercase tracking-widest text-gold mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>National Super League Matchday 1</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                Season Opener Clash
              </h3>

              {/* Match Versus Card */}
              <div className="my-5 py-4 border-y border-navy-border flex items-center justify-between">
                {/* Rajasthan FC */}
                <div className="flex flex-col items-center text-center">
                  <ClubCrest size={48} />
                  <span className="font-display font-bold text-sm text-white uppercase mt-2">
                    Rajasthan FC
                  </span>
                  <span className="text-[10px] text-gold font-sans uppercase font-bold tracking-wider">
                    Home
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <span className="font-display text-2xl font-black text-gold/80 px-3 py-1 bg-navy-pitch border border-navy-border">
                    VS
                  </span>
                  <span className="text-[10px] text-royal-slate font-sans uppercase mt-1">
                    19:30 IST
                  </span>
                </div>

                {/* Opponent */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-navy-slate/80 border border-gold/40 flex items-center justify-center font-display font-black text-sm text-gold">
                    MBSG
                  </div>
                  <span className="font-display font-bold text-sm text-white uppercase mt-2 max-w-[90px] truncate">
                    Mohun Bagan
                  </span>
                  <span className="text-[10px] text-royal-slate font-sans uppercase">
                    Away
                  </span>
                </div>
              </div>

              {/* Venue & Date */}
              <div className="space-y-1.5 text-xs text-royal-slate font-sans mb-5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span className="text-slate-200">Sawai Mansingh Stadium, Jaipur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Saturday, 28 September 2026</span>
                </div>
              </div>

              {/* Match Countdown Ticker */}
              <div className="mb-6 bg-navy-pitch/90 p-3 border border-navy-border/80">
                <p className="text-[10px] uppercase font-display tracking-widest text-slate-400 text-center mb-2">
                  Kick-Off Countdown
                </p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div>
                    <span className="font-display text-xl font-bold text-gold">{timeLeft.days}</span>
                    <p className="text-[9px] text-royal-slate uppercase font-sans">Days</p>
                  </div>
                  <div>
                    <span className="font-display text-xl font-bold text-gold">{timeLeft.hours}</span>
                    <p className="text-[9px] text-royal-slate uppercase font-sans">Hours</p>
                  </div>
                  <div>
                    <span className="font-display text-xl font-bold text-gold">{timeLeft.minutes}</span>
                    <p className="text-[9px] text-royal-slate uppercase font-sans">Mins</p>
                  </div>
                  <div>
                    <span className="font-display text-xl font-bold text-gold">{timeLeft.seconds}</span>
                    <p className="text-[9px] text-royal-slate uppercase font-sans">Secs</p>
                  </div>
                </div>
              </div>

              {/* Ticket / Pass CTA */}
              <button
                onClick={() => {
                  if (onJoinClick) onJoinClick();
                  else scrollTo("#memberships");
                }}
                className="w-full btn-gold text-sm py-3 flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <span>Reserve Matchday Passes</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
