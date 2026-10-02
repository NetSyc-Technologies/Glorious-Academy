"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FadeIn,
  GlowOrb,
} from "@/components/ui/MotionElements";
import {
  Target,
  Route,
  BookOpen,
  FileCheck2,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";

const journeySteps = [
  {
    step: 1,
    title: "Understand Your Academic Goal",
    subtitle: "Assessment & Direction",
    description:
      "Discuss your aspirations with our counselors. We map out your target examination (JEE, NEET, MHT-CET, or Boards) and current academic foundation to identify the ideal starting point.",
    icon: <Target className="w-5 h-5 text-[#1E40AF]" />,
    detailPill: "Initial Consultation",
    color: "#1E40AF",
  },
  {
    step: 2,
    title: "Choose Your Preparation Path",
    subtitle: "Course & Mode Selection",
    description:
      "Select between 2-Year integrated classroom coaching, 1-Year target dropper programs, or foundation batches at either our Chandrapur or Bhadrawati centre.",
    icon: <Route className="w-5 h-5 text-[#0F766E]" />,
    detailPill: "Structured Cohort",
    color: "#0F766E",
  },
  {
    step: 3,
    title: "Master Core Concepts in Class",
    subtitle: "Interactive Lectures",
    description:
      "Engage in disciplined classroom teaching where experienced educators break down complex science and mathematics principles from basic fundamentals to advanced applications.",
    icon: <BookOpen className="w-5 h-5 text-[#2563EB]" />,
    detailPill: "Daily Classroom Hours",
    color: "#2563EB",
  },
  {
    step: 4,
    title: "Practise, Test & Review",
    subtitle: "Continuous Evaluation",
    description:
      "Solve chapter-wise Daily Practice Problems (DPPs) and undertake periodic simulated mock examinations to build calculation speed, time management, and test temperament.",
    icon: <FileCheck2 className="w-5 h-5 text-[#D97706]" />,
    detailPill: "Weekly Testing",
    color: "#D97706",
  },
  {
    step: 5,
    title: "Receive Personal Guidance & Revision",
    subtitle: "Doubt Desk & Mentorship",
    description:
      "Clear specific doubts at dedicated faculty desks daily. Fine-tune weak areas through personalized performance feedback, revision marathons, and exam strategy workshops.",
    icon: <Compass className="w-5 h-5 text-[#10B981]" />,
    detailPill: "Continuous Mentorship",
    color: "#10B981",
  },
];

export function LearningJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E40AF]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="The Student Path"
            title="From Understanding to Confident Practice"
            description="A clear 5-step roadmap guiding students from their initial counseling session to examination readiness."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 7 Cols Interactive Steps */}
          <div className="lg:col-span-7 space-y-4">
            {journeySteps.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <FadeIn key={item.step} delay={index * 0.08}>
                  <motion.div
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "p-6 rounded-2xl border transition-all duration-200 cursor-pointer text-left bg-white",
                      isActive
                        ? "border-[#1E40AF] shadow-[0_8px_24px_rgba(30,64,175,0.08)] ring-1 ring-[#1E40AF]"
                        : "border-[#D8E1EB] hover:border-[#94A3B8] shadow-xs"
                    )}
                    whileHover={{ x: isActive ? 0 : 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-sm transition-colors"
                        )}
                        animate={{
                          backgroundColor: isActive ? item.color : "#EFF6FF",
                          color: isActive ? "#FFFFFF" : item.color,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.step}
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                          <h3 className="font-bold text-base sm:text-lg text-[#111827]">
                            {item.title}
                          </h3>
                          <span className="text-[11px] font-semibold text-[#0F766E] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                            {item.detailPill}
                          </span>
                        </div>

                        <p className="text-xs font-semibold text-[#64748B] mb-2">
                          {item.subtitle}
                        </p>

                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-sm text-[#4B5563] leading-relaxed overflow-hidden"
                            >
                              {item.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right Column: 5 Cols Highlight Visual Tracker */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <FadeIn direction="right" delay={0.3}>
              <div className="rounded-3xl bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white p-8 shadow-xl relative overflow-hidden">
                {/* Background Glow */}
                <GlowOrb color="#3B82F6" size={200} className="-top-16 -right-16" blur={60} />

                <span className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] block mb-2">
                  Active Roadmap Step {journeySteps[activeStep].step} of 5
                </span>

                <AnimatePresence mode="wait">
                  <motion.h4
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-extrabold text-white leading-tight"
                  >
                    {journeySteps[activeStep].title}
                  </motion.h4>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="my-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white text-[#1E40AF] flex items-center justify-center shadow-xs">
                        {journeySteps[activeStep].icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#BFDBFE] block">
                          Focus Area
                        </span>
                        <span className="font-bold text-white text-sm">
                          {journeySteps[activeStep].subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {journeySteps[activeStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Milestones */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold text-[#93C5FD]">
                    Milestone Sequence:
                  </span>
                  <div className="flex items-center gap-2">
                    {journeySteps.map((s, idx) => (
                      <motion.button
                        key={s.step}
                        type="button"
                        onClick={() => setActiveStep(idx)}
                        className={cn(
                          "h-2.5 flex-1 rounded-full cursor-pointer"
                        )}
                        animate={{
                          backgroundColor: idx <= activeStep ? "#FFFFFF" : "rgba(255,255,255,0.2)",
                          scale: idx === activeStep ? 1.1 : 1,
                        }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        aria-label={`Jump to step ${s.step}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                  <span>Glorious Academy Framework</span>
                  <span className="font-semibold text-white">Chandrapur & Bhadrawati</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
