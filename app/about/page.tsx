import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";
import {
  GraduationCap,
  ShieldCheck,
  Target,
  Users2,
  BookOpen,
  ArrowRight,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Glorious Academy — Educational Philosophy & Leadership",
  description:
    "Learn about Glorious Academy, our academic approach, leadership under Prof. Nitish Kumar, and our dedication to student success in Chandrapur and Bhadrawati.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Our Academic Mission
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Rooted in Rigor. Dedicated to Every Student’s Future.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Glorious Academy provides comprehensive preparation for JEE Main & Advanced, NEET UG, MHT-CET, and Board examinations through disciplined learning, structured practice, and personal mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] block">
                Educational Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] leading-tight">
                Clear Concepts Build Long-Term Academic Self-Reliance
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                At Glorious Academy, we believe that academic mastery is not achieved through rote memorization or hasty shortcuts. Whether a student is tackling multi-concept physics numericals for JEE Advanced or mastering botanical definitions for NEET, true competence begins when concepts are understood from first principles.
              </p>
              <p className="text-base text-[#4B5563] leading-relaxed">
                Our classrooms encourage inquiry and logical deduction. Teachers break down syllabus chapters into structured modules, allowing students to grasp foundational concepts before advancing to high-difficulty question banks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE]/60">
                  <h3 className="font-bold text-sm text-[#1E40AF] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Balanced Batch Sizes</span>
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-1">
                    Ensuring every student receives teacher attention and participation opportunities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0]/60">
                  <h3 className="font-bold text-sm text-[#0F766E] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Daily Doubt Desks</span>
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-1">
                    One-on-one doubt clarification available directly after lecture hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Graphic Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#F0F6FF] via-white to-[#F0FDFA] p-6 sm:p-10 border border-[#BFDBFE] shadow-lg relative overflow-hidden">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-[#BFDBFE] shadow-xs">
                <img
                  src="/images/mentorship-doubt-desk.jpg"
                  alt="Faculty mentorship and doubt resolution session at Glorious Academy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-lg">
                  Direct Student-Faculty Mentorship
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                The Three Pillars of Glorious Academy
              </h3>

              <div className="mt-6 space-y-5 text-sm text-[#374151]">
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-[#EFF6FF] text-[#1E40AF] font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-[#111827]">Conceptual Instruction</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Classroom teaching focused on scientific and mathematical rigor rather than rote tricks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#0F766E] font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-[#111827]">Graded Daily Practice (DPPs)</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Structured problem sets building step-mark presentation and entrance test speed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-[#EFF6FF] text-[#2563EB] font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-[#111827]">Continuous Realistic Evaluation</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Weekly assessments and full mock exams with granular error diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E8F0]">
        <div className="site-container max-w-4xl">
          <SectionHeading
            eyebrow="Leadership & Direction"
            title="Guiding Every Student with Purpose"
            description="Our academic vision is led by dedicated educators committed to quality coaching in our region."
            align="center"
          />

          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#D8E1EB] shadow-md">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#1E40AF]/20 shadow-md shrink-0">
                <img
                  src="/images/nitish_kumar.png"
                  alt="Prof. Nitish Kumar, Managing Director & Academic Head"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Prof. Nitish Kumar
                  </h3>
                  <span className="text-sm font-semibold text-[#1E40AF]">
                    Managing Director & Academic Head
                  </span>
                </div>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Prof. Nitish Kumar has directed Glorious Academy with a vision to democratize elite competitive preparation for students in Chandrapur, Bhadrawati, and neighboring districts. His emphasis on curriculum discipline, faculty accountability, and approachable mentorship has shaped the academy into a dependable destination for serious students.
                </p>

                <div className="pt-3 flex flex-wrap gap-4 justify-center sm:justify-start text-xs font-semibold text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                    <span>Academic Administration</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#0F766E]" />
                    <span>Curriculum Strategy</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="site-container text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Ready to Begin Your Preparation?
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Visit either our Warora Naka Centre in Chandrapur or our Bhadrawati Centre for a personalized academic counseling session.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/admissions" variant="primary" size="lg">
              <span>Enquire About Admission</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/centres" variant="outline" size="lg">
              <span>View Centre Locations</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

