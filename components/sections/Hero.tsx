"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";
import {
  FadeIn,
  FloatingElement,
  GlowOrb,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionElements";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F6FF] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E2E8F0]">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none animated-dot-grid"
        aria-hidden="true"
      />

      {/* Ambient glow orbs */}
      <GlowOrb color="#1E40AF" size={350} className="top-[-100px] right-[-80px]" blur={120} />
      <GlowOrb color="#0F766E" size={280} className="bottom-[-60px] left-[-60px]" blur={100} />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1.5 h-1.5 rounded-full bg-[#1E40AF]/20"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 7 Cols (58%) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-bold text-[#1E40AF] uppercase tracking-wider shimmer-badge">
                <Sparkles className="w-3.5 h-3.5 text-[#1E40AF]" />
                <span>JEE • NEET • MHT-CET • Boards</span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.25} duration={0.7}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Build Strong Concepts. <br />
                <span className="gradient-text-animated">
                  Prepare for Your Next Step.
                </span>
              </h1>
            </FadeIn>

            {/* Supporting Paragraph */}
            <FadeIn delay={0.4}>
              <p className="text-base sm:text-lg lg:text-xl text-[#4B5563] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Structured learning, regular practice, and personal guidance for
                students preparing for competitive and Board examinations in
                Chandrapur and Bhadrawati.
              </p>
            </FadeIn>

            {/* Primary Action Buttons */}
            <FadeIn delay={0.55}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    href="/admissions"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Enquire About Admission</span>
                      <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    href="/courses"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Explore Courses</span>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>

            {/* Three Honest Capability Badges */}
            <FadeIn delay={0.7}>
              <StaggerContainer
                staggerDelay={0.12}
                className="pt-6 border-t border-[#E2E8F0]/80 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0"
              >
                {[
                  "Concept-Focused Learning",
                  "Regular Practice Tests",
                  "Personal Guidance",
                ].map((text) => (
                  <StaggerItem key={text}>
                    <div className="flex items-center gap-2 justify-center lg:justify-start text-xs sm:text-sm font-semibold text-[#111827]">
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                      <span>{text}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          </div>

          {/* Right Column: 5 Cols (42%) High-Impact Educational Imagery */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <FadeIn direction="right" delay={0.3} duration={0.8} className="w-full">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Ambient Glow */}
                <GlowOrb color="#3B82F6" size={260} className="-top-12 -right-12" blur={70} />
                <GlowOrb color="#10B981" size={240} className="-bottom-10 -left-10" blur={70} />

                {/* Main Image Container */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden border-2 border-white/80 shadow-[0_20px_50px_rgba(30,64,175,0.15)] bg-white group"
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/images/hero-students.jpg"
                      alt="Glorious Academy students engaged in collaborative classroom learning"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                    />
                    {/* Subtle Gradient Vignette Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                    {/* Floating Badge Top-Right: Admissions */}
                    <div className="absolute top-4 right-4 z-20">
                      <FloatingElement amplitude={4} duration={3.5}>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#BFDBFE] text-xs font-extrabold text-[#1E40AF] shadow-md">
                          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                          <span>Admissions 2026-27 Open</span>
                        </div>
                      </FloatingElement>
                    </div>

                    {/* Top Subject Pills Floating over Image */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        Physics
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        Chemistry
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        Maths & Bio
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-3 text-white">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#93C5FD] block">
                          Academic Culture
                        </span>
                        <h2 className="text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                          Interactive Classroom Rigor
                        </h2>
                      </div>

                      <div className="bg-white/90 backdrop-blur-md text-[#1E40AF] px-3 py-1.5 rounded-xl border border-white/80 shadow-xs shrink-0 text-center">
                        <span className="block text-xs font-extrabold">98.4%</span>
                        <span className="text-[9px] text-[#4B5563] uppercase font-bold tracking-tight">Top Score</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Feature Badges Bar */}
                  <div className="bg-[#FAFAF7] border-t border-[#E2E8F0] p-3.5 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="block text-xs font-bold text-[#1E40AF]">Concepts</span>
                      <span className="text-[10px] text-[#64748B]">Deep Foundations</span>
                    </div>
                    <div className="border-x border-[#E2E8F0]">
                      <span className="block text-xs font-bold text-[#0F766E]">Practice</span>
                      <span className="text-[10px] text-[#64748B]">Daily DPP Tests</span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#2563EB]">Doubt Desk</span>
                      <span className="text-[10px] text-[#64748B]">1-on-1 Faculty</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
