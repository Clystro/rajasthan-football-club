"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Compass, Target, Sparkles, Trophy, Flag, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLUB_INFO } from "@/constants/clubInfo";

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Royal Valour (Shourya)",
      desc: "Playing with fearless heart, unwavering tactical integrity, and unyielding warrior spirit.",
    },
    {
      icon: Target,
      title: "Tactical Precision",
      desc: "UEFA & AFC licensed methodologies integrating sports science, video data, and positional fluid play.",
    },
    {
      icon: HeartHandshake,
      title: "Grassroots Empowerment",
      desc: "Scouting and nurturing raw athletic diamonds across Rajasthan’s 33 districts from rural sands to urban arenas.",
    },
    {
      icon: Sparkles,
      title: "Desert Pride",
      desc: "Carrying the cultural pride of the Pink City and the Thar desert to the pinnacle of Indian football.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-navy-card/40 border-t border-navy-border/80">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Heritage & Philosophy"
          title="Pride of the Desert,"
          titleHighlight="Royals of the Pitch"
          description="Founded in 2018, Rajasthan Football Club arose from a singular, audacious dream: to elevate Rajasthan into a football powerhouse that competes with fearless royalty on the national stage."
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Gold Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold border backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-maroon via-gold to-navy-card rounded-none opacity-40 blur-sm" />

              <div className="relative bg-navy-card border-2 border-gold/70 overflow-hidden shadow-2xl">
                <div className="relative h-96 sm:h-[480px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&auto=format&fit=crop&q=80"
                    alt="Rajasthan FC players huddle"
                    fill
                    className="object-cover filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-pitch via-navy-pitch/30 to-transparent" />
                </div>

                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-navy-pitch/95 border border-gold/60 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold border border-gold/40">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display uppercase text-sm font-bold text-white tracking-wide">
                        3x State Champions
                      </p>
                      <p className="text-xs text-royal-slate font-sans">
                        Dominance in Rajasthan State Football League
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Crest Ribbon */}
              <div className="absolute -top-4 -right-4 bg-maroon text-white font-display text-xs uppercase tracking-widest px-4 py-2 border border-gold/40 shadow-lg">
                Est. {CLUB_INFO.founded}
              </div>
            </div>
          </div>

          {/* Right Column: Story & Club Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
              <p>
                From the historic ramparts of Jaipur’s palaces to the roaring stands of <strong className="text-white">Sawai Mansingh Stadium</strong>, Rajasthan Football Club embodies a renaissance in desert athletics. We combine deep-rooted Rajput discipline with progressive tactical football inspired by European high-press methodologies.
              </p>
              <p>
                More than just a senior first team, RFC is a comprehensive football ecosystem. Our residential academy in Mansarovar nurtures over 450 young athletes with AIFF-accredited licenses, sports psychology, and world-class athletic periodization, creating a direct pipeline to national teams.
              </p>
            </div>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-4 bg-navy-card/70 border border-navy-border/80 hover:border-gold/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className="w-5 h-5 text-gold" />
                      <h4 className="font-display text-base font-bold uppercase text-white tracking-wide">
                        {v.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-royal-slate font-sans leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Link Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector("#academy");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold text-sm px-6 py-3"
              >
                Discover Our Youth Academy
              </button>

              <button
                onClick={() => {
                  const el = document.querySelector("#squad");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-gold text-sm px-6 py-3"
              >
                Meet the First Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
