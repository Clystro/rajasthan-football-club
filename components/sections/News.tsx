"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { NEWS_ARTICLES } from "@/constants/news";
import { NewsCategory, NewsArticle } from "@/types";

const CATEGORIES: Array<"All" | NewsCategory> = [
  "All",
  "Match Report",
  "Transfers",
  "Club News",
  "Academy",
  "Community",
];

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | NewsCategory>("All");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filteredNews =
    selectedCategory === "All"
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((item) => item.category === selectedCategory);

  return (
    <section id="news" className="py-24 relative bg-navy-pitch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Media & Press Releases"
          title="Latest News &"
          titleHighlight="Club Updates"
          description="Stay informed with official match reports, squad transfers, academy breakthroughs, and community football initiatives."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-navy-card border border-navy-border hover:border-gold/60 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-pitch-card"
            >
              <div>
                {/* Article Image */}
                <div className="relative h-52 w-full overflow-hidden bg-navy-pitch">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-card via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="gold">{article.category}</Badge>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-royal-slate font-sans mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {article.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-gold transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-royal-slate font-sans leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Full Story Button */}
              <div className="p-6 pt-0">
                <div className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider text-gold group-hover:translate-x-1 transition-transform font-bold">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <Modal
          isOpen={Boolean(activeArticle)}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
          subtitle={activeArticle.category}
          className="max-w-2xl"
        >
          <div className="space-y-4">
            <div className="relative h-64 w-full overflow-hidden border border-navy-border">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-royal-slate font-sans border-b border-navy-border pb-2">
              <span>By {activeArticle.author}</span>
              <span>{activeArticle.date} &bull; {activeArticle.readTime}</span>
            </div>

            <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
              {activeArticle.excerpt}
            </p>

            <p className="text-sm text-royal-slate font-sans leading-relaxed">
              Rajasthan Football Club remains committed to building transparent connections with all club members and the football fraternity across India. For media accreditation and press inquiries, please contact our club communications desk at media@rajasthanfootballclub.com.
            </p>

            <div className="pt-3 border-t border-navy-border flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="btn-gold text-xs px-5 py-2.5"
              >
                Close Article
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
