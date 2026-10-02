"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { resultsData } from "@/content/results";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Trophy,
  Award,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  Medal,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

// Mapping student results to authentic topper portraits
const topperPhotoMap: Record<string, string> = {
  "res-1": "/images/topper-merit-girl.jpg", // Sanyukta Alurwar - 95.20%
  "res-2": "/images/student-topper-girl.jpg", // Purvaja Deogade - 95.00%
  "res-3": "/images/topper-medal-boy.jpg", // Nakul Atalwar - 95.00%
  "res-4": "/images/student-topper-girl.jpg", // Gauri Pattalwar - 94.40%
  "res-5": "/images/topper-merit-girl.jpg", // Snigdha Wadhai - 93.60%
  "res-6": "/images/student-topper-girl.jpg", // Tanvi Burande - 93.60%
  "res-7": "/images/topper-merit-girl.jpg", // Purva Algamwar - 92.00%
  "res-8": "/images/student-topper-girl.jpg", // Sanchita Sonalwar - 91.00%
  "res-9": "/images/topper-medal-boy.jpg", // Atharva Allewar - 90.00%
  "res-10": "/images/student-topper-boy.jpg", // Saksham Chaple - 90.00%
};

export default function ResultsPage() {
  const [filterExam, setFilterExam] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Top featured students for horizontal showcase reel
  const featuredToppers = resultsData.slice(0, 8);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredToppers.length);
  }, [featuredToppers.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredToppers.length) % featuredToppers.length);
  }, [featuredToppers.length]);

  // Auto horizontal scroll interval (advances one by one smoothly)
  useEffect(() => {
    if (!isAutoScrolling || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3200);

    return () => clearInterval(timer);
  }, [isAutoScrolling, isHovered, nextSlide]);

  // Scroll to active card smoothly
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320; // approximate width + gap
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const filteredResults = resultsData.filter((item) => {
    if (filterExam === "all") return true;
    if (filterExam === "class10") return item.exam === "Class 10 CBSE";
    if (filterExam === "class12") return item.exam === "Class 12 CBSE";
    return true;
  });

  return (
    <div className="bg-white">
      {/* ── Page Header ─────────────────────────── */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E40AF]/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="site-container relative z-10">
          <Breadcrumbs items={[{ label: "Results & Achievers" }]} />

          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#1E40AF]" />
              <span>Proven Academic Outcomes</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Verified Student Achievers & Toppers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Academic excellence built on discipline, conceptual clarity, and dedicated faculty guidance. Explore verified board and entrance exam results achieved by Glorious Academy students.
            </p>
          </div>

          {/* Quick Credibility Badges */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0]/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Top Board Score", val: "95.20%", sub: "CBSE Examination" },
              { label: "90%+ Achievers", val: "10+", sub: "Verified Cohort" },
              { label: "Transparency", val: "100%", sub: "Verified Scorecards" },
              { label: "Doubt Desk", val: "Daily", sub: "1-on-1 Faculty Mentorship" },
            ].map((stat, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white border border-[#D8E1EB] shadow-xs">
                <span className="block text-2xl font-extrabold text-[#1E40AF]">{stat.val}</span>
                <span className="block text-xs font-bold text-[#111827] mt-0.5">{stat.label}</span>
                <span className="block text-[11px] text-[#64748B]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Auto Horizontal Scroll: Toppers Hall of Fame ── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF]/30 to-white border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-2">
                <Trophy className="w-4 h-4 text-[#0F766E]" />
                <span>Hall of Fame • Auto-Scroll Showcase</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Featured Toppers & Merit Scholars
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Celebrating outstanding performance from our Chandrapur & Bhadrawati centres
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="p-2.5 rounded-xl border border-[#D8E1EB] bg-white hover:bg-[#F1F5F9] text-[#4B5563] transition-colors cursor-pointer text-xs flex items-center gap-1.5 font-semibold"
                aria-label={isAutoScrolling ? "Pause auto scroll" : "Play auto scroll"}
              >
                {isAutoScrolling ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#1E40AF]" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span className="hidden sm:inline">Auto Scroll</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-xl border border-[#D8E1EB] bg-white hover:bg-[#EFF6FF] text-[#111827] hover:text-[#1E40AF] transition-colors cursor-pointer shadow-xs"
                aria-label="Previous topper"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-xl border border-[#D8E1EB] bg-white hover:bg-[#EFF6FF] text-[#111827] hover:text-[#1E40AF] transition-colors cursor-pointer shadow-xs"
                aria-label="Next topper"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Track */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featuredToppers.map((topper, idx) => {
              const photo = topperPhotoMap[topper.id] || "/images/student-topper-boy.jpg";
              const isActive = idx === currentIndex;

              return (
                <motion.div
                  key={topper.id}
                  className={cn(
                    "w-[290px] sm:w-[320px] shrink-0 snap-start rounded-3xl bg-white p-6 border transition-all duration-300 relative flex flex-col justify-between overflow-hidden group cursor-pointer",
                    isActive
                      ? "border-[#1E40AF] shadow-[0_16px_40px_rgba(30,64,175,0.12)] scale-[1.02]"
                      : "border-[#D8E1EB] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:border-[#BFDBFE] hover:shadow-md"
                  )}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setCurrentIndex(idx)}
                >
                  {/* Decorative top ribbon for active */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E40AF] via-[#0F766E] to-[#2563EB]" />
                  )}

                  <div>
                    {/* Header: Exam Tag & Medal */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE]">
                        <Award className="w-3.5 h-3.5 text-[#1E40AF]" />
                        <span>{topper.exam}</span>
                      </span>

                      <div className="flex items-center gap-1 text-xs font-bold text-[#D97706] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full border border-[#FDE68A]">
                        <Medal className="w-3 h-3 text-[#D97706]" />
                        <span>Rank #{idx + 1}</span>
                      </div>
                    </div>

                    {/* Centered Student Photo with Glowing Ring */}
                    <div className="relative w-28 h-28 mx-auto my-3">
                      <div className="w-full h-full rounded-full overflow-hidden border-3 border-white shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={photo}
                          alt={`${topper.studentName}, Glorious Academy Topper`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {/* Animated Glow Halo */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full blur-md -z-0 transition-opacity duration-300",
                          isActive ? "bg-[#1E40AF]/25 opacity-100" : "bg-[#0F766E]/15 opacity-50 group-hover:opacity-100"
                        )}
                      />
                      <div className="absolute -bottom-1 -right-1 z-20 bg-white rounded-full p-1 shadow-sm border border-[#E2E8F0]">
                        <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                      </div>
                    </div>

                    {/* Student Identity */}
                    <div className="text-center mt-3">
                      <h3 className="text-lg font-extrabold text-[#111827] group-hover:text-[#1E40AF] transition-colors">
                        {topper.studentName}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5 font-medium line-clamp-1">
                        {topper.destinationOrSchool}
                      </p>
                    </div>
                  </div>

                  {/* Score Callout & Verification Badge */}
                  <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-end justify-between">
                    <div>
                      <span className="text-[11px] text-[#64748B] block font-semibold uppercase tracking-wider">
                        Score
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-[#0F766E] tracking-tight">
                        {topper.scoreOrMetric}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1E40AF] bg-[#EFF6FF] px-2.5 py-1 rounded-lg border border-[#BFDBFE]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {featuredToppers.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to topper slide ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  idx === currentIndex ? "w-8 bg-[#1E40AF]" : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Complete Filterable Results Directory ─────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Comprehensive Directory"
            title="All Verified Examination Results"
            description="Filter by board and competitive level to explore our students' verified scorecards."
            align="center"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 my-8">
            {[
              { id: "all", label: "All Achievers" },
              { id: "class10", label: "Class 10 Board (CBSE)" },
              { id: "class12", label: "Class 12 Board (CBSE)" },
            ].map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setFilterExam(chip.id)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                  filterExam === chip.id
                    ? "bg-[#1E40AF] text-white shadow-md scale-105"
                    : "bg-white text-[#374151] border border-[#D8E1EB] hover:bg-[#F1F5F9] hover:border-[#BFDBFE]"
                )}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Results Grid with Photos & Animations */}
          <AnimatePresence mode="popLayout">
            {filteredResults.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16 px-4 max-w-md mx-auto"
              >
                <GraduationCap className="w-12 h-12 text-[#94A3B8] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#111827]">
                  No records currently displayed
                </h3>
                <p className="text-sm text-[#4B5563] mt-2">
                  Student stories will be added as they are confirmed. Explore our courses or contact the academy.
                </p>
                <Button href="/courses" variant="primary" size="md" className="mt-6">
                  <span>Explore Courses</span>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredResults.map((result) => {
                  const photo = topperPhotoMap[result.id] || "/images/student-topper-boy.jpg";

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={result.id}
                      className="p-6 sm:p-7 rounded-3xl bg-white border border-[#D8E1EB] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] hover:border-[#BFDBFE] transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Top Badges */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE]">
                            <Award className="w-3.5 h-3.5 text-[#1E40AF]" />
                            <span>{result.exam}</span>
                          </span>

                          <span className="text-xs text-[#64748B] font-semibold">
                            {result.metricType}
                          </span>
                        </div>

                        {/* Student Info with Avatar */}
                        <div className="flex items-center gap-4 my-3">
                          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#1E40AF]/20 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                            <img
                              src={photo}
                              alt={result.studentName}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#1E40AF] transition-colors leading-snug">
                              {result.studentName}
                            </h3>
                            <p className="text-xs text-[#64748B] mt-0.5">
                              {result.destinationOrSchool}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Score Banner */}
                      <div className="mt-6 pt-5 border-t border-[#F1F5F9] flex items-baseline justify-between">
                        <div>
                          <span className="text-xs text-[#64748B] block font-medium">
                            Verified Score
                          </span>
                          <span className="text-3xl font-extrabold text-[#0F766E]">
                            {result.scoreOrMetric}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-bold text-[#0F766E]">
                          <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                          <span>Scorecard Verified</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Admissions Transparency Policy Notice */}
          <div className="mt-16 p-8 rounded-3xl bg-[#FAFAF7] border border-[#D8E1EB] max-w-3xl mx-auto text-center">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-5 h-5 text-[#1E40AF]" />
            </div>
            <h3 className="text-lg font-bold text-[#111827]">
              Admissions & Result Transparency Policy
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Glorious Academy publishes student achievements strictly based on verified student consent and verified examination scorecards. We do not publish unverified aggregate statistics or fabricated rank cards.
            </p>
          </div>
        </div>
      </section>

      {/* ── Admissions CTA ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="site-container text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Begin Your Academic Success Journey
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Speak directly with our academic mentors at Warora Naka (Chandrapur) or Bhadrawati.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3.5">
            <Button href="/admissions" variant="primary" size="lg">
              <span>Enquire About Admission</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/centres" variant="outline" size="lg">
              <span>Visit Our Campuses</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
