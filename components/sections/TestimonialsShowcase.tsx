"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { testimonialsData } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/MotionElements";
import { Quote, ArrowRight, CheckCircle2 } from "lucide-react";

export function TestimonialsShowcase() {
  const featured = testimonialsData[0];
  const supporting = testimonialsData.slice(1, 3);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 bg-[#0F766E]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Student Experiences"
            title="In Their Own Words"
            description="Read genuine reflections from students who prepared for their Board and competitive examinations with Glorious Academy."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Testimonial: 7 Cols */}
          {featured && (
            <FadeIn direction="left" delay={0.1} className="lg:col-span-7">
              <motion.div
                className="rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDFA] p-8 sm:p-10 border border-[#BFDBFE] shadow-[0_8px_30px_rgba(30,64,175,0.06)] flex flex-col justify-between h-full card-hover-lift"
                whileHover={{ borderColor: "rgba(30, 64, 175, 0.3)" }}
              >
                <div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-10 h-10 text-[#1E40AF]/30 mb-6" />
                  </motion.div>
                  <p className="text-lg sm:text-xl font-medium text-[#111827] leading-relaxed italic">
                    &ldquo;{featured.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#D8E1EB] flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1E40AF]/30 shadow-xs shrink-0">
                      <img
                        src="/images/student-topper-girl.jpg"
                        alt={featured.studentName}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-[#111827]">
                        {featured.studentName}
                      </h4>
                      <span className="text-xs sm:text-sm font-semibold text-[#0F766E] block mt-0.5">
                        {featured.scoreContext}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {featured.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8E1EB] text-xs font-semibold text-[#1E40AF]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Approved Feedback</span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          )}

          {/* Supporting Cards: 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supporting.map((item, idx) => (
              <FadeIn key={item.id} direction="right" delay={0.2 + idx * 0.15}>
                <motion.div
                  className="flex-1 rounded-2xl bg-[#FAFAF7] p-6 sm:p-7 border border-[#D8E1EB] shadow-xs flex flex-col justify-between card-hover-lift"
                  whileHover={{ borderColor: "rgba(15, 118, 110, 0.25)" }}
                >
                  <div>
                    <p className="text-sm text-[#374151] leading-relaxed italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D8E1EB] shrink-0">
                        <img
                          src={idx === 1 ? "/images/student-topper-boy.jpg" : "/images/student-topper-girl.jpg"}
                          alt={item.studentName}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-[#111827]">
                          {item.studentName}
                        </h5>
                        <span className="text-xs font-medium text-[#0F766E] block">
                          {item.scoreContext}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-[#64748B] bg-white px-2.5 py-1 rounded-lg border border-[#E2E8F0]">
                      Verified
                    </span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1E40AF] hover:underline group"
            >
              <span>View All Student Feedback & Source Stories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
