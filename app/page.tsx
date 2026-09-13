"use client";

import React, { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Fixtures } from "@/components/sections/Fixtures";
import { Squad } from "@/components/sections/Squad";
import { Membership } from "@/components/sections/Membership";
import { Academy } from "@/components/sections/Academy";
import { News } from "@/components/sections/News";
import { Gallery } from "@/components/sections/Gallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { Modal } from "@/components/ui/Modal";
import { LeadForm } from "@/components/forms/LeadForm";
import { InterestCategory, Fixture } from "@/types";

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("Royal Season Pass (₹4,999/Season)");
  const [selectedCategory, setSelectedCategory] = useState<InterestCategory>("Membership");
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handlePlanSelect = (planName: string, category: InterestCategory) => {
    setSelectedPlan(planName);
    setSelectedCategory(category);

    // Smooth scroll to the contact form section
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFixtureTicketClick = (fixture: Fixture) => {
    setSelectedPlan(`Matchday Pass: RFC vs ${fixture.opponent}`);
    setSelectedCategory("Membership");
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-navy-pitch text-white relative selection:bg-gold selection:text-navy-pitch">
      {/* Header */}
      <Header
        onJoinClick={() => {
          const el = document.querySelector("#contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onJoinClick={() => {
            const el = document.querySelector("#contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onExploreFixtures={() => {
            const el = document.querySelector("#fixtures");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 2. About & Heritage */}
        <About />

        {/* 3. Fixtures & Match Schedule */}
        <Fixtures onTicketClick={handleFixtureTicketClick} />

        {/* 4. Squad & Coaching Staff */}
        <Squad />

        {/* 5. Membership & Season Ticket Passes */}
        <Membership onSelectPlan={handlePlanSelect} />

        {/* 6. Youth Academy & Pro Pathways */}
        <Academy onOpenTrialModal={() => setIsTrialModalOpen(true)} />

        {/* 7. Latest News & Club Updates */}
        <News />

        {/* 8. Matchday Photo Gallery Mosaic */}
        <Gallery />

        {/* 9. Unified Lead Generation & Contact Section */}
        <ContactSection
          selectedPlan={selectedPlan}
          selectedCategory={selectedCategory}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dedicated Academy Free Trial Booking Modal */}
      <Modal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        title="Book Free Academy Trial"
        subtitle="AIFF 3-Star Youth Development Program"
        className="max-w-xl"
      >
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-royal-slate font-sans">
            Register your athlete for an official scout evaluation session at RFC Royal Arena, Mansarovar. Please enter guardian and player contact information below.
          </p>
        </div>

        <LeadForm
          initialPlan="Grassroots Open Trial Session"
          initialInterestCategory="Academy"
          source="academy_trial_modal"
          compact={true}
          onSuccess={() => {
            // keep modal open so user sees confirmation or close after delay
          }}
        />
      </Modal>
    </div>
  );
}
