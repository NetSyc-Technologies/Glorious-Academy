"use client";

import React, { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ResultsPage() {
  const [filterExam, setFilterExam] = useState<string>("all");

  const filteredResults = resultsData.filter((item) => {
    if (filterExam === "all") return true;
    if (filterExam === "class10") return item.exam === "Class 10 CBSE";
    if (filterExam === "class12") return item.exam === "Class 12 CBSE";
    return true;
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Results & Achievers" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Academic Outcomes
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Verified Student Achievers
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Academic excellence built on discipline, conceptual clarity, and dedicated faculty guidance. Explore verified results achieved by Glorious Academy students.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider mr-2">
              Filter by Exam:
            </span>
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
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                  filterExam === chip.id
                    ? "bg-[#1E40AF] text-white shadow-xs"
                    : "bg-white text-[#374151] border border-[#D8E1EB] hover:bg-[#F1F5F9]"
                )}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          {filteredResults.length === 0 ? (
            <div className="text-center py-16 px-4 max-w-md mx-auto">
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
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((result) => (
                <div
                  key={result.id}
                  className="p-7 rounded-3xl bg-white border border-[#D8E1EB] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE]">
                        <Award className="w-3.5 h-3.5" />
                        <span>{result.exam}</span>
                      </span>

                      <span className="text-xs text-[#64748B] font-semibold">
                        {result.metricType}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111827]">
                      {result.studentName}
                    </h3>

                    <p className="text-xs text-[#64748B] mt-1.5">
                      {result.destinationOrSchool}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#F1F5F9] flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-[#64748B] block font-medium">
                        Verified Score
                      </span>
                      <span className="text-3xl font-extrabold text-[#0F766E]">
                        {result.scoreOrMetric}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#1E40AF] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                      <span>Verified Record</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 p-8 rounded-3xl bg-[#FAFAF7] border border-[#D8E1EB] max-w-3xl mx-auto text-center">
            <h3 className="text-lg font-bold text-[#111827]">
              Admissions & Result Transparency Policy
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Glorious Academy publishes student achievements strictly based on verified student consent and verified examination scorecards. We do not publish unverified aggregate statistics or fabricated rank cards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="site-container text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Begin Your Academic Success Journey
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Speak directly with our academic counselors at Chandrapur or Bhadrawati.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/admissions" variant="primary" size="lg">
              <span>Enquire About Admission</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
