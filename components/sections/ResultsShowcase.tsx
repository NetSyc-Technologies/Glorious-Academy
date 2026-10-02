"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { resultsData } from "@/content/results";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionElements";
import { Award, ArrowRight, CheckCircle2 } from "lucide-react";

export function ResultsShowcase() {
  // Show top 6 achievers on homepage
  const featuredResults = resultsData.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1E40AF]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Academic Outcomes"
            title="Verified Student Achievers"
            description="Consistent dedication and conceptual preparation reflected in our students' academic results across Board and competitive examination tracks."
            align="center"
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResults.map((result) => (
            <StaggerItem key={result.id}>
              <motion.div
                className="p-6 rounded-2xl bg-white border border-[#D8E1EB] shadow-[0_4px_16px_rgba(15,23,42,0.04)] card-hover-lift flex flex-col justify-between h-full"
                whileHover={{ borderColor: "rgba(30, 64, 175, 0.25)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE]">
                      <Award className="w-3.5 h-3.5 text-[#1E40AF]" />
                      <span>{result.exam}</span>
                    </span>

                    <span className="text-xs text-[#64748B] font-semibold">
                      {result.metricType}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mt-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1E40AF]/20 shadow-xs shrink-0">
                      <img
                        src={result.id === "res-3" ? "/images/student-topper-boy.jpg" : "/images/student-topper-girl.jpg"}
                        alt={result.studentName}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111827]">
                        {result.studentName}
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        {result.destinationOrSchool}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[#64748B] block font-medium">
                      Verified Result
                    </span>
                    <span className="text-2xl font-extrabold text-[#0F766E]">
                      {result.scoreOrMetric}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-[#1E40AF] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                    <span>Verified</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/results"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAFAF7] hover:bg-[#EFF6FF] text-[#1E40AF] font-bold text-sm border border-[#D8E1EB] hover:border-[#BFDBFE] transition-all focus-visible:outline-2 group"
              >
                <span>Explore All Student Results & Alumni Stories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
