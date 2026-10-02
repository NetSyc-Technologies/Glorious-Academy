"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionElements";
import {
  ShieldCheck,
  Compass,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export function AcademyStory() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1E40AF]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual / Leadership Badge Panel: 5 Cols */}
          <FadeIn direction="left" delay={0.1} className="lg:col-span-5 relative">
            <motion.div
              className="rounded-3xl bg-white p-8 sm:p-10 border border-[#D8E1EB] shadow-[0_12px_36px_rgba(15,23,42,0.06)] relative overflow-hidden card-hover-lift"
              whileHover={{ borderColor: "rgba(30, 64, 175, 0.2)" }}
            >
              {/* Gradient accent at top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1E40AF] via-[#0F766E] to-[#2563EB]" />

              {/* Portrait & Leadership Info */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#1E40AF]/20 shadow-md shrink-0">
                  <img
                    src="/images/nitish_kumar.png"
                    alt="Prof. Nitish Kumar, Managing Director & Founder of Glorious Academy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-0.5 text-center">
                    <span className="text-[9px] font-bold text-white uppercase tracking-wider">Founder</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF] block mb-1">
                    Academic Leadership
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#111827] leading-snug">
                    Prof. Nitish Kumar
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#64748B] mt-0.5">
                    Managing Director & Founder
                  </p>
                </div>
              </div>

              <div className="my-6 p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE]/60 text-xs sm:text-sm text-[#1E40AF] leading-relaxed italic">
                &ldquo;Our commitment is to cultivate genuine academic confidence by making core scientific and mathematical concepts understandable to every willing student.&rdquo;
              </div>

              <StaggerContainer staggerDelay={0.1} className="space-y-3 pt-2 text-xs font-semibold text-[#374151]">
                <StaggerItem>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                    <span>Student-Centric Mentorship Environment</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[#0F766E]" />
                    <span>Dual Centres: Chandrapur & Bhadrawati</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </motion.div>
          </FadeIn>

          {/* Editorial Content: 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.15}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-bold text-[#0F766E] uppercase tracking-wider shimmer-badge">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Academy Heritage & Approach</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Rooted in Rigor. <span className="gradient-text-animated">Dedicated to Every Student&apos;s Future.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Glorious Academy was founded with a singular purpose: to bring high-calibre competitive examination coaching and strong foundational schooling within direct reach of students in Chandrapur and Bhadrawati.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <p className="text-base text-[#4B5563] leading-relaxed">
                We reject the one-size-fits-all model. By maintaining balanced classroom cohorts, providing daily post-lecture doubt desks, and conducting transparent test series evaluations, we foster a disciplined environment where learners build self-reliance and academic poise.
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button href="/about" variant="primary" size="md">
                    <span>Learn About the Academy</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button href="/centres" variant="outline" size="md">
                    <span>Visit Our Centres</span>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

