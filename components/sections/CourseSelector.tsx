"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { coursesData } from "@/content/courses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionElements";
import {
  Compass,
  ArrowRight,
  Stethoscope,
  Cpu,
  GraduationCap,
} from "lucide-react";

export function CourseSelector() {
  const iconMap: Record<string, React.ReactNode> = {
    jee: <Cpu className="w-6 h-6" />,
    neet: <Stethoscope className="w-6 h-6" />,
    "mht-cet": <Compass className="w-6 h-6" />,
    boards: <GraduationCap className="w-6 h-6" />,
  };

  const colorMap: Record<string, string> = {
    jee: "#1E40AF",
    neet: "#0F766E",
    "mht-cet": "#2563EB",
    boards: "#D97706",
  };

  return (
    <section className="py-14 sm:py-18 bg-[#FAFAF7] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E40AF]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0F766E]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Targeted Academic Paths"
            title="What Are You Preparing For?"
            description="Select your target examination to view curriculum details, study modules, test schedules, and centre availability."
            align="center"
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coursesData.map((course) => (
            <StaggerItem key={course.slug}>
              <Link
                href={`/courses/${course.slug}`}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#D8E1EB] hover:border-[#1E40AF] transition-all duration-300 card-hover-lift shadow-[0_4px_16px_rgba(15,23,42,0.04)] focus-visible:outline-2 focus-visible:outline-[#1D4ED8] h-full"
              >
                {/* Gradient accent line on hover */}
                <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#1E40AF] via-[#0F766E] to-[#2563EB]" />

                <div>
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 mb-4"
                    style={{
                      backgroundColor: `${colorMap[course.slug]}10`,
                      color: colorMap[course.slug],
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="group-hover:text-white group-hover:bg-current/0 transition-colors">
                      {iconMap[course.slug]}
                    </div>
                  </motion.div>

                  <span className="inline-block text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-1">
                    {course.badge}
                  </span>

                  <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#1E40AF] transition-colors leading-snug">
                    {course.shortTitle}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                    {course.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#1E40AF]">
                  <span>Explore Program</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
