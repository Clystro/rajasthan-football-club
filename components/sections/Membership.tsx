"use client";

import React from "react";
import { Check, Crown, Shield, Star, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { MEMBERSHIP_PLANS } from "@/constants/plans";
import { InterestCategory } from "@/types";

interface MembershipProps {
  onSelectPlan?: (planName: string, category: InterestCategory) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  const handlePlanClick = (planName: string, category: InterestCategory) => {
    if (onSelectPlan) {
      onSelectPlan(planName, category);
    } else {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="memberships" className="py-24 relative bg-navy-pitch">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="2026/27 Official Passes"
          title="Memberships &"
          titleHighlight="Season Ticket Passes"
          description="Wear the royal crest with pride. Enjoy guaranteed home match entry at Sawai Mansingh Stadium, exclusive fan kits, VIP player meetups, and high-end matchday hospitality."
        />

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isFeatured = Boolean(plan.popular);

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-navy-card via-navy-card to-navy-slate/90 border-2 border-gold shadow-gold-glow lg:-translate-y-2"
                    : "bg-navy-card/90 border border-navy-border hover:border-gold/50 shadow-pitch-card"
                }`}
              >
                {/* Popular Ribbon for Royal Season Pass */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold via-gold-light to-gold-amber text-navy-pitch font-display font-black text-xs uppercase tracking-widest px-4 py-1 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                {/* Card Top */}
                <div className="p-6 sm:p-8">
                  {/* Tier Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-display uppercase tracking-widest text-gold font-bold">
                      {plan.badge}
                    </span>
                    {plan.tier === "maharaja" ? (
                      <Crown className="w-6 h-6 text-gold" />
                    ) : isFeatured ? (
                      <Star className="w-6 h-6 text-gold fill-gold" />
                    ) : (
                      <Shield className="w-6 h-6 text-royal-slate" />
                    )}
                  </div>

                  {/* Plan Name & Tagline */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-royal-slate font-sans leading-relaxed min-h-[40px]">
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 pb-6 border-b border-navy-border flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-royal-slate font-sans uppercase">
                      /{plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <p className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-semibold">
                      What’s Included:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() =>
                      handlePlanClick(
                        `${plan.name} (${plan.price}/Season)`,
                        plan.interestCategory
                      )
                    }
                    className={`w-full py-4 text-sm font-display uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? "btn-gold shadow-gold-glow"
                        : "btn-outline-gold hover:bg-gold hover:text-navy-pitch"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-royal-slate uppercase font-sans mt-2.5">
                    Streamlined Clystro Pass Allocation
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Sponsorship Banner Note */}
        <div className="mt-16 bg-navy-card/80 border border-navy-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <Badge variant="maroon" className="mb-1">
              Corporate & Brand Partnerships
            </Badge>
            <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">
              Looking for Corporate Matchday Boxes or Kit Sponsorships?
            </h4>
            <p className="text-xs sm:text-sm text-royal-slate font-sans max-w-2xl">
              Elevate your corporate brand with pitchside perimeter LED hoardings, full hospitality skybox bookings for up to 25 guests, and official club partnership rights.
            </p>
          </div>

          <button
            onClick={() =>
              handlePlanClick(
                "Corporate & Brand Sponsorship",
                "General"
              )
            }
            className="btn-gold text-xs px-6 py-3.5 flex-shrink-0 flex items-center gap-2"
          >
            <span>Request Corporate Deck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
