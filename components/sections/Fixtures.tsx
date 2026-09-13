"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Trophy, ArrowRight, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ClubCrest } from "@/components/ui/ClubCrest";
import { FIXTURES } from "@/constants/fixtures";
import { Fixture } from "@/types";

interface FixturesProps {
  onTicketClick?: (fixture: Fixture) => void;
}

export const Fixtures: React.FC<FixturesProps> = ({ onTicketClick }) => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">("upcoming");

  const displayedFixtures = FIXTURES.filter((f) => f.status === activeTab);

  const handleTicketEnquiry = (fixture: Fixture) => {
    if (onTicketClick) {
      onTicketClick(fixture);
    } else {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fixtures" className="py-24 relative bg-navy-pitch">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-maroon/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="2026/27 Season Schedule"
          title="Fixtures &"
          titleHighlight="Match Results"
          description="Follow the Desert Royals in action across the National Super League, Durand Cup, and Federation Championships."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-navy-card border border-navy-border max-w-xs sm:max-w-md w-full">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 py-3 text-xs sm:text-sm font-display uppercase tracking-wider font-bold transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-gold to-gold-amber text-navy-pitch shadow-gold-glow"
                  : "text-royal-slate hover:text-white"
              }`}
            >
              Upcoming Fixtures
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`flex-1 py-3 text-xs sm:text-sm font-display uppercase tracking-wider font-bold transition-all duration-300 ${
                activeTab === "completed"
                  ? "bg-gradient-to-r from-gold to-gold-amber text-navy-pitch shadow-gold-glow"
                  : "text-royal-slate hover:text-white"
              }`}
            >
              Recent Results
            </button>
          </div>
        </div>

        {/* Match Cards Grid */}
        <div className="space-y-4">
          {displayedFixtures.map((fixture) => {
            const isWin =
              fixture.status === "completed" &&
              fixture.score &&
              (fixture.isHome
                ? fixture.score.home > fixture.score.away
                : fixture.score.away > fixture.score.home);

            const isDraw =
              fixture.status === "completed" &&
              fixture.score &&
              fixture.score.home === fixture.score.away;

            return (
              <div
                key={fixture.id}
                className="bg-navy-card/85 border border-navy-border hover:border-gold/50 transition-all duration-300 p-4 sm:p-6 backdrop-blur-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  {/* Left: Competition & Date */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Trophy className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs font-display uppercase tracking-wider text-gold font-bold">
                        {fixture.competition}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white font-sans">{fixture.date}</p>
                    <div className="flex items-center gap-1.5 text-xs text-royal-slate font-sans mt-0.5">
                      <MapPin className="w-3 h-3 text-gold/80 flex-shrink-0" />
                      <span className="truncate">{fixture.venue}</span>
                    </div>
                  </div>

                  {/* Center: Teams & Score / Time */}
                  <div className="lg:col-span-6 py-3 lg:py-0 border-y lg:border-y-0 lg:border-x border-navy-border/60 px-0 lg:px-6">
                    <div className="flex items-center justify-between sm:justify-around gap-2">
                      {/* Home Team */}
                      <div className="flex items-center gap-3 w-5/12 justify-end text-right">
                        <div>
                          <p className="font-display font-bold text-sm sm:text-base uppercase text-white">
                            {fixture.isHome ? "Rajasthan FC" : fixture.opponent}
                          </p>
                          <p className="text-[10px] text-royal-slate font-sans uppercase">
                            {fixture.isHome ? "Jaipur (H)" : `${fixture.opponentCity} (H)`}
                          </p>
                        </div>
                        {fixture.isHome ? (
                          <ClubCrest size={34} />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-navy-slate flex items-center justify-center font-display font-bold text-xs text-slate-300">
                            {fixture.opponent.slice(0, 3).toUpperCase()}
                          </div>
                        )}
                      </div>

                      {/* Score / Time Badge */}
                      <div className="flex flex-col items-center justify-center px-3 flex-shrink-0">
                        {fixture.status === "completed" && fixture.score ? (
                          <div className="flex items-center gap-2 bg-navy-pitch px-3 py-1.5 border border-navy-border">
                            <span className="font-display text-xl sm:text-2xl font-black text-white">
                              {fixture.score.home}
                            </span>
                            <span className="text-gold font-black">-</span>
                            <span className="font-display text-xl sm:text-2xl font-black text-white">
                              {fixture.score.away}
                            </span>
                          </div>
                        ) : (
                          <div className="bg-navy-pitch px-3 py-1.5 border border-navy-border text-center">
                            <span className="font-display text-base sm:text-lg font-bold text-gold">
                              {fixture.time}
                            </span>
                          </div>
                        )}

                        {fixture.status === "completed" ? (
                          <span
                            className={`text-[10px] font-display font-bold uppercase mt-1 px-1.5 py-0.2 rounded-sm ${
                              isWin
                                ? "text-emerald-400 bg-emerald-950/60"
                                : isDraw
                                ? "text-amber-400 bg-amber-950/60"
                                : "text-rose-400 bg-rose-950/60"
                            }`}
                          >
                            {isWin ? "RFC Victory" : isDraw ? "Match Drawn" : "Defeat"}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-sans uppercase mt-1">
                            {fixture.isHome ? "Home Ground" : "Away Ground"}
                          </span>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center gap-3 w-5/12 justify-start text-left">
                        {!fixture.isHome ? (
                          <ClubCrest size={34} />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-navy-slate flex items-center justify-center font-display font-bold text-xs text-slate-300">
                            {fixture.opponent.slice(0, 3).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-display font-bold text-sm sm:text-base uppercase text-white">
                            {!fixture.isHome ? "Rajasthan FC" : fixture.opponent}
                          </p>
                          <p className="text-[10px] text-royal-slate font-sans uppercase">
                            {!fixture.isHome ? "Jaipur (A)" : `${fixture.opponentCity} (A)`}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Scorers info for completed matches */}
                    {fixture.scorers && fixture.scorers.length > 0 && (
                      <div className="mt-2 text-center text-[11px] text-royal-slate font-sans">
                        Goals: <span className="text-slate-200">{fixture.scorers.join(", ")}</span>
                      </div>
                    )}
                  </div>

                  {/* Right: CTA Action */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    {fixture.status === "upcoming" ? (
                      <button
                        onClick={() => handleTicketEnquiry(fixture)}
                        className="w-full lg:w-auto btn-gold text-xs px-4 py-2.5 flex items-center justify-center gap-1.5 shadow-gold-glow"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>Book Season Pass</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          const el = document.querySelector("#news");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full lg:w-auto btn-outline-gold text-xs px-4 py-2.5 flex items-center justify-center gap-1.5"
                      >
                        <span>Match Report</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
