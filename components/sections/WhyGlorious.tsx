"use client";

import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionElements";
import {
  BookOpenCheck,
  Users2,
  BarChart3,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

export function WhyGlorious() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Ambient decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#1E40AF]/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#0F766E]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="The Academy Methodology"
            title="A Structured Approach to Preparation"
            description="Competitive success requires disciplined methodology. We combine classroom concept lectures with rigorous daily problem-solving, continuous testing, and direct faculty support."
            align="center"
          />
        </FadeIn>

        {/* Bento Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tile 1: Large Tile (Spans 2 columns on desktop) */}
          <StaggerItem className="md:col-span-2">
            <motion.div
              className="rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white p-7 sm:p-10 border border-[#D8E1EB] shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between h-full card-hover-lift"
              whileHover={{ borderColor: "rgba(30, 64, 175, 0.2)" }}
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFDBFE] text-xs font-bold text-[#1E40AF] mb-5 shimmer-badge">
                  <Lightbulb className="w-3.5 h-3.5 text-[#1E40AF]" />
                  <span>Foundational Methodology</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111827] leading-snug">
                  Concept Mastery Precedes Problem Shortcuts
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
                  Instead of memorizing superficial formulas, students at Glorious Academy learn fundamental physics, chemistry, and mathematics principles from the ground up. This prepares them to tackle both routine board exam questions and unpredictable entrance examination patterns with composure.
                </p>
              </div>

              {/* Sequence Diagram Visual */}
              <div className="mt-8 pt-6 border-t border-[#D8E1EB]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { phase: "PHASE 1", title: "Concept Lectures", desc: "Derivations, definitions, and real physical models.", color: "#1E40AF" },
                  { phase: "PHASE 2", title: "Graded DPPs", desc: "Level 1 basics to Level 3 multi-concept problems.", color: "#0F766E" },
                  { phase: "PHASE 3", title: "Review & Fix", desc: "In-depth error analysis and teacher doubt desk.", color: "#2563EB" },
                ].map((item) => (
                  <motion.div
                    key={item.phase}
                    className="bg-white p-4 rounded-2xl border border-[#D8E1EB] shadow-xs card-hover-lift"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="text-xs font-extrabold block mb-1" style={{ color: item.color }}>
                      {item.phase}
                    </span>
                    <span className="font-bold text-sm text-[#111827] block">
                      {item.title}
                    </span>
                    <p className="text-xs text-[#64748B] mt-1">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </StaggerItem>

          {/* Tile 2: Compact Tile 1 (Curated Study Material) */}
          <StaggerItem>
            <motion.div
              className="rounded-3xl bg-[#FAFAF7] p-7 sm:p-8 border border-[#D8E1EB] shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between h-full card-hover-lift"
              whileHover={{ borderColor: "rgba(30, 64, 175, 0.2)" }}
            >
              <div>
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BookOpenCheck className="w-6 h-6" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Exhaustive Study Material & DPPs
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  Comprehensive printed modules, summary revision notes, and daily practice problem sheets (DPPs) aligned specifically with NCERT and current national exam formats.
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-xs font-semibold text-[#111827]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Chapter-wise theory handbooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Previous 15-year question trends</span>
                </li>
              </ul>
            </motion.div>
          </StaggerItem>

          {/* Tile 3: Compact Tile 2 (Testing & Analytics) */}
          <StaggerItem>
            <motion.div
              className="rounded-3xl bg-[#FAFAF7] p-7 sm:p-8 border border-[#D8E1EB] shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between h-full card-hover-lift"
              whileHover={{ borderColor: "rgba(15, 118, 110, 0.2)" }}
            >
              <div>
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BarChart3 className="w-6 h-6" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                  Real Exam Simulated Test Series
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  OMR and computer-based mock tests conducted under strict exam parameters to train time allocation, negative mark reduction, and examination temper.
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-xs font-semibold text-[#111827]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Weekly topic-level assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Full-length grand mock tests</span>
                </li>
              </ul>
            </motion.div>
          </StaggerItem>

          {/* Tile 4: Wide Tile (Mentorship & Doubt Resolution, Spans 2 cols) */}
          <StaggerItem className="md:col-span-2">
            <motion.div
              className="rounded-3xl bg-gradient-to-br from-[#F0FDFA] via-[#F8FAFC] to-white p-7 sm:p-10 border border-[#D8E1EB] shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between h-full card-hover-lift"
              whileHover={{ borderColor: "rgba(15, 118, 110, 0.2)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#99F6E4] text-xs font-bold text-[#0F766E] mb-4 shimmer-badge">
                    <Users2 className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Individual Support</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                    Dedicated Doubt-Solving Desks & 1-on-1 Faculty Mentorship
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    Every student learns at their own pace. Our Chandrapur and Bhadrawati centres feature dedicated doubt desks where students sit directly with teachers to resolve confusion before it compounds into exam anxiety.
                  </p>

                  <div className="mt-5 space-y-2">
                    {[
                      "Daily post-lecture doubt sessions",
                      "Direct faculty interaction with standard texts (HC Verma & NCERT)",
                      "Personalized study schedule and weak-area diagnosis",
                    ].map((text) => (
                      <div key={text} className="text-xs text-[#374151] font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0F766E] shrink-0" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-[#99F6E4] shadow-md group">
                    <img
                      src="/images/mentorship-doubt-desk.jpg"
                      alt="Glorious Academy teacher guiding a student at the doubt resolution desk"
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg">
                      Daily Doubt Clearing Counters
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
