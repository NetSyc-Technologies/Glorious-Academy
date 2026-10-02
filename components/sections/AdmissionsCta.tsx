"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";
import { FadeIn, GlowOrb } from "@/components/ui/MotionElements";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export function AdmissionsCta() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="site-container">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-[#1E40AF] via-[#1E3A8A] to-[#0F766E] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center sm:text-left">
            {/* Animated Background Orbs */}
            <GlowOrb color="#3B82F6" size={400} className="top-[-100px] right-[-100px]" blur={100} />
            <GlowOrb color="#10B981" size={300} className="bottom-[-80px] left-[-80px]" blur={80} />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="particle absolute w-1 h-1 rounded-full bg-white/20"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${30 + (i % 2) * 30}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-[#93C5FD] border border-white/20 shimmer-badge">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                  Admissions Session 2026–27
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Find the Preparation Path That Fits Your Goals
                </h2>

                <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed">
                  Connect with our academic team in Chandrapur or Bhadrawati. We will help you assess your current foundation, select the appropriate batch, and answer all enrollment queries.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    href="/admissions"
                    variant="accent"
                    size="lg"
                    className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white shadow-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Enquire About Admission</span>
                      <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <a
                    href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all focus-visible:outline-2 w-full"
                  >
                    <Phone className="w-4 h-4 text-[#93C5FD]" />
                    <span>Call: {siteConfig.primaryPhone}</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
