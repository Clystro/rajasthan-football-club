"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Award, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { SQUAD_DATA } from "@/constants/squad";
import { PlayerPosition } from "@/types";

const POSITION_FILTERS: Array<"All" | PlayerPosition> = [
  "All",
  "Goalkeepers",
  "Defenders",
  "Midfielders",
  "Forwards",
  "Coaches",
];

export const Squad: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<"All" | PlayerPosition>("All");

  const filteredSquad =
    selectedFilter === "All"
      ? SQUAD_DATA
      : SQUAD_DATA.filter((p) => p.position === selectedFilter);

  return (
    <section id="squad" className="py-24 relative bg-navy-card/30 border-t border-navy-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="First Team & Technical Staff"
          title="The Desert Royals"
          titleHighlight="2026/27 Squad"
          description="Meet the warriors defending the Navy & Gold crest under the tactical command of UEFA Pro Head Coach Carlos Montero."
        />

        {/* Position Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {POSITION_FILTERS.map((pos) => (
            <button
              key={pos}
              onClick={() => setSelectedFilter(pos)}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-display uppercase tracking-wider font-bold transition-all duration-300 ${
                selectedFilter === pos
                  ? "bg-gradient-to-r from-gold to-gold-amber text-navy-pitch shadow-gold-glow"
                  : "bg-navy-card border border-navy-border text-royal-slate hover:text-white hover:border-gold/50"
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Squad Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSquad.map((player) => (
            <div
              key={player.id}
              className="group bg-navy-card border border-navy-border hover:border-gold/70 transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-pitch-card"
            >
              {/* Card Header & Photo */}
              <div className="relative h-72 w-full bg-navy-pitch overflow-hidden">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-card via-transparent to-black/40" />

                {/* Jersey Number or Role Tag */}
                {player.number ? (
                  <div className="absolute top-3 right-3 font-display font-black text-4xl sm:text-5xl text-gold/30 group-hover:text-gold/90 transition-colors">
                    #{player.number}
                  </div>
                ) : (
                  <div className="absolute top-3 right-3">
                    <Badge variant="maroon">{player.role || "Coach"}</Badge>
                  </div>
                )}

                {/* Captain Badge */}
                {player.isCaptain && (
                  <div className="absolute top-3 left-3 bg-gold text-navy-pitch font-display font-black text-xs uppercase px-2 py-1 shadow-md flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Captain</span>
                  </div>
                )}

                {/* Nationality pill */}
                <div className="absolute bottom-3 left-3 text-[11px] font-sans font-medium text-slate-300 bg-navy-pitch/80 px-2 py-0.5 border border-navy-border">
                  {player.nationality}
                </div>
              </div>

              {/* Player Information & Stats */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-display uppercase tracking-wider text-gold font-semibold">
                      {player.position}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-gold transition-colors leading-snug">
                    {player.name}
                  </h3>
                  <p className="mt-2 text-xs text-royal-slate font-sans line-clamp-2 leading-relaxed">
                    {player.bio}
                  </p>
                </div>

                {/* Key Stats Bar */}
                {player.stats && (
                  <div className="mt-4 pt-3 border-t border-navy-border/60 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="font-display font-bold text-sm text-white">
                        {player.stats.appearances}
                      </span>
                      <p className="text-[9px] uppercase font-sans text-royal-slate">Apps</p>
                    </div>

                    {player.stats.goals !== undefined ? (
                      <div>
                        <span className="font-display font-bold text-sm text-gold">
                          {player.stats.goals}
                        </span>
                        <p className="text-[9px] uppercase font-sans text-royal-slate">Goals</p>
                      </div>
                    ) : player.stats.cleanSheets !== undefined ? (
                      <div>
                        <span className="font-display font-bold text-sm text-gold">
                          {player.stats.cleanSheets}
                        </span>
                        <p className="text-[9px] uppercase font-sans text-royal-slate">Clean Sheets</p>
                      </div>
                    ) : (
                      <div>
                        <span className="font-display font-bold text-sm text-gold">
                          {player.stats.tackles || "--"}
                        </span>
                        <p className="text-[9px] uppercase font-sans text-royal-slate">Tackles</p>
                      </div>
                    )}

                    <div>
                      <span className="font-display font-bold text-sm text-white">
                        {player.stats.assists !== undefined
                          ? player.stats.assists
                          : player.stats.saves !== undefined
                          ? player.stats.saves
                          : player.stats.passAccuracy || "100%"}
                      </span>
                      <p className="text-[9px] uppercase font-sans text-royal-slate">
                        {player.stats.assists !== undefined
                          ? "Assists"
                          : player.stats.saves !== undefined
                          ? "Saves"
                          : "Pass Acc"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
