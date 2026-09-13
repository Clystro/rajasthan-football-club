"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/forms/LeadForm";
import { CLUB_INFO } from "@/constants/clubInfo";
import { buildWhatsAppUrl } from "@/lib/utils";
import { InterestCategory } from "@/types";

interface ContactSectionProps {
  selectedPlan?: string;
  selectedCategory?: InterestCategory;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPlan = "Royal Season Pass (₹4,999/Season)",
  selectedCategory = "Membership",
}) => {
  const whatsAppUrl = buildWhatsAppUrl(
    CLUB_INFO.contact.whatsapp,
    "Hi Rajasthan FC! I would like to inquire about club memberships, season passes, and academy programs."
  );

  return (
    <section id="contact" className="py-24 relative bg-navy-pitch">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Direct Front Office Access"
          title="Join The Desert Royals"
          titleHighlight="Or Inquire Today"
          description="Whether you wish to secure a 2026/27 Royal Season Pass, enrol your young athlete into the AIFF Youth Academy, or reserve a Maharaja VIP Hospitality Box, submit your inquiry below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Channels & Stadium Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy-card/90 border-2 border-gold/50 p-6 sm:p-8 shadow-pitch-card">
              <div className="flex items-center gap-2.5 mb-4">
                <ShieldCheck className="w-6 h-6 text-gold" />
                <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                  RFC Front Office
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-royal-slate font-sans leading-relaxed mb-6">
                Our membership liaisons and technical academy coordinators respond to all applications within 24 business hours.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs sm:text-sm font-sans">
                {/* Stadium Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white font-semibold">Home Stadium</strong>
                    <span className="text-slate-300">{CLUB_INFO.stadium.name}</span>
                    <p className="text-royal-slate text-xs mt-0.5">{CLUB_INFO.stadium.address}</p>
                  </div>
                </div>

                {/* Academy Ground */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white font-semibold">High Performance Centre</strong>
                    <span className="text-slate-300">{CLUB_INFO.academyVenue}</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white font-semibold">Club Hotline & Support</strong>
                    <a
                      href={`tel:${CLUB_INFO.contact.phone.replace(/\s+/g, "")}`}
                      className="text-gold hover:underline"
                    >
                      {CLUB_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white font-semibold">Direct Email Channels</strong>
                    <p className="text-slate-300">
                      Memberships:{" "}
                      <a href={`mailto:${CLUB_INFO.contact.membershipEmail}`} className="text-gold hover:underline">
                        {CLUB_INFO.contact.membershipEmail}
                      </a>
                    </p>
                    <p className="text-slate-300">
                      Academy:{" "}
                      <a href={`mailto:${CLUB_INFO.contact.academyEmail}`} className="text-gold hover:underline">
                        {CLUB_INFO.contact.academyEmail}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Timings */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white font-semibold">Front Office Hours</strong>
                    <span className="text-slate-300">{CLUB_INFO.contact.timings}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Conversion Bridge */}
              <div className="mt-8 pt-6 border-t border-navy-border">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-display uppercase tracking-wider text-sm font-bold py-3.5 hover:brightness-110 transition-all shadow-md"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Reactive Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="bg-navy-card/95 border border-navy-border p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              <div className="mb-6">
                <span className="text-xs font-display uppercase tracking-widest text-gold font-bold">
                  High-Priority Lead Submission
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                  Official Application & Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-royal-slate font-sans mt-1.5">
                  Select your tier, enter your contact information, and our club representatives will initiate your onboarding.
                </p>
              </div>

              <LeadForm
                initialPlan={selectedPlan}
                initialInterestCategory={selectedCategory}
                source="website_unified_contact_section"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
