"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_ITEMS } from "@/constants/gallery";
import { GalleryItem } from "@/types";

const GALLERY_CATEGORIES = ["All", "Matchday", "Training", "Celebrations", "Academy"] as const;

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 relative bg-navy-card/40 border-t border-navy-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Matchday Moments"
          title="The Royal"
          titleHighlight="Visual Mosaic"
          description="Glimpses of unbridled passion under the Jaipur floodlights, training dedication, and euphoric dressing room celebrations."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-display uppercase tracking-wider font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-gold to-gold-amber text-navy-pitch shadow-gold-glow"
                  : "bg-navy-card border border-navy-border text-royal-slate hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => {
            const isSpan2 = idx === 0 || idx === 5;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative overflow-hidden bg-navy-pitch cursor-pointer border border-navy-border hover:border-gold/80 transition-all duration-300 shadow-md ${
                  isSpan2 ? "sm:col-span-2 sm:row-span-2 h-72 sm:h-[460px]" : "h-64 sm:h-56"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-pitch/90 via-navy-pitch/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] font-display uppercase tracking-widest text-gold font-bold">
                    {item.tag}
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-sans mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>

                {/* Expand Icon indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy-pitch/70 border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-pitch/95 backdrop-blur-xl animate-in fade-in duration-300">
          {/* Close Lightbox */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 text-royal-slate hover:text-white bg-navy-card/80 border border-navy-border rounded-full transition-colors z-20 cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-gold hover:text-white bg-navy-card/80 border border-gold/40 rounded-full transition-colors z-20 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-gold hover:text-white bg-navy-card/80 border border-gold/40 rounded-full transition-colors z-20 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image & Info */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] max-h-[560px] border-2 border-gold/60 bg-black">
              <Image
                src={filteredItems[activeImageIndex].image}
                alt={filteredItems[activeImageIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="w-full mt-4 text-center bg-navy-card/90 border border-navy-border p-4">
              <span className="text-xs font-display uppercase tracking-widest text-gold font-bold">
                {filteredItems[activeImageIndex].tag} &bull; Image {activeImageIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-1">
                {filteredItems[activeImageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-royal-slate font-sans mt-1">
                {filteredItems[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
