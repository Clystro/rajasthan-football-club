"use client";

import React from "react";
import Image from "next/image";
import { Award, Clock, MapPin, CheckCircle, Sparkles, ArrowRight, UserPlus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ACADEMY_PROGRAMS, ACADEMY_HIGHLIGHTS } from "@/constants/academy";

interface AcademyProps {
  onOpenTrialModal: () => void;
}

export const Academy: React.FC<AcademyProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="academy" className="py-24 relative bg-navy-card/40 border-t border-navy-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="AIFF 3-Star Accredited Pathway"
          title="Rajasthan FC"
          titleHighlight="Youth Academy"
          description="Nurturing the future champions of Indian football. From fundamental grassroots agility to high-intensity pre-professional pro pathways under UEFA & AFC licensed master coaches."
        />

        {/* Action Header Banner with Instant Book Free Trial CTA */}
        <div className="mb-14 bg-gradient-to-r from-navy-card via-navy-slate to-maroon/40 border border-gold/40 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="live">Free Trials Active</Badge>
              <span className="text-xs font-sans text-slate-300">
                Weekly trials conducted at RFC Royal Arena, Mansarovar
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Ready to Showcase Your Talent to RFC Scouts?
            </h3>
            <p className="text-xs sm:text-sm text-royal-slate font-sans max-w-xl">
              Ages 8 to 18 eligible. Attend a complimentary evaluation session with our technical directors and receive an official performance scorecard.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="btn-gold px-8 py-4 text-base flex-shrink-0 flex items-center gap-2.5 shadow-gold-glow"
          >
            <UserPlus className="w-5 h-5" />
            <span>Book Free Trial Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Academy Programs Grid (U-13, U-15, U-18) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACADEMY_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-navy-card border border-navy-border hover:border-gold/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-pitch-card group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="gold">{prog.badge}</Badge>
                  <span className="text-xs font-display uppercase tracking-wider text-slate-400 font-bold">
                    {prog.ageGroup}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-gold transition-colors">
                  {prog.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-royal-slate font-sans leading-relaxed">
                  {prog.description}
                </p>

                {/* Focus Areas Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {prog.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="text-[10px] uppercase font-display tracking-wider bg-navy-pitch px-2 py-0.5 border border-navy-border/80 text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Schedule & Venue Details */}
                <div className="mt-6 pt-4 border-t border-navy-border/60 space-y-2 text-xs text-royal-slate font-sans">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>{prog.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="truncate">{prog.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="text-slate-200">Coach: {prog.coach}</span>
                  </div>
                </div>

                {/* Program Features */}
                <div className="mt-5 space-y-2">
                  <p className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-semibold">
                    Curriculum Highlights:
                  </p>
                  <ul className="space-y-1.5">
                    {prog.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA for program */}
              <div className="mt-8 pt-4 border-t border-navy-border">
                <button
                  onClick={onOpenTrialModal}
                  className="w-full btn-outline-gold text-xs py-3 flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-navy-pitch transition-all"
                >
                  <span>Enrol / Book Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Academy Pillars & Facilities Showcase */}
        <div className="mt-16 pt-12 border-t border-navy-border/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="p-5 bg-navy-pitch/70 border border-navy-border">
              <div className="w-8 h-8 rounded-none bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-3 font-display font-bold">
                0{idx + 1}
              </div>
              <h4 className="font-display text-base font-bold uppercase text-white mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-royal-slate font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
