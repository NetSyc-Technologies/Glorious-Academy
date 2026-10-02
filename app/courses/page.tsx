"use client";

import React, { useState } from "react";
import Link from "next/link";
import { coursesData } from "@/content/courses";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CoursesCataloguePage() {
  const [selectedGoal, setSelectedGoal] = useState<string>("all");
  const [selectedComparison, setSelectedComparison] = useState<string[]>([
    "jee",
    "neet",
  ]);

  const filteredCourses = coursesData.filter((course) => {
    if (selectedGoal === "all") return true;
    if (selectedGoal === "engineering") return course.slug === "jee";
    if (selectedGoal === "medical") return course.slug === "neet";
    if (selectedGoal === "state") return course.slug === "mht-cet";
    if (selectedGoal === "boards") return course.slug === "boards";
    return true;
  });

  const toggleComparison = (slug: string) => {
    if (selectedComparison.includes(slug)) {
      if (selectedComparison.length > 1) {
        setSelectedComparison(selectedComparison.filter((s) => s !== slug));
      }
    } else {
      setSelectedComparison([...selectedComparison, slug]);
    }
  };

  const comparedCoursesList = coursesData.filter((c) =>
    selectedComparison.includes(c.slug)
  );

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Courses & Programs" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Comprehensive Academic Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Choose Your Preparation Path
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Explore our structured coaching programs designed for JEE Main & Advanced, NEET UG, MHT-CET, and Class 10 & 12 Board examinations.
            </p>
          </div>

          {/* Goal Filter Chips */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider mr-2">
              Filter by Stream:
            </span>
            {[
              { id: "all", label: "All Programs" },
              { id: "engineering", label: "IIT-JEE (Engineering)" },
              { id: "medical", label: "NEET UG (Medical)" },
              { id: "state", label: "MHT-CET (Maharashtra)" },
              { id: "boards", label: "Class 10 & 12 Boards" },
            ].map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setSelectedGoal(chip.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",
                  selectedGoal === chip.id
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

      {/* Catalogue Cards Grid */}
      <section className="py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl bg-white border border-[#D8E1EB] p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE]">
                      {course.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleComparison(course.slug)}
                      className={cn(
                        "text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer",
                        selectedComparison.includes(course.slug)
                          ? "bg-[#0F766E] text-white border-[#0F766E]"
                          : "bg-white text-[#64748B] border-[#D8E1EB] hover:bg-[#F1F5F9]"
                      )}
                    >
                      {selectedComparison.includes(course.slug)
                        ? "✓ Compared"
                        : "+ Compare"}
                    </button>
                  </div>

                  <h2 className="text-2xl font-bold text-[#111827]">
                    {course.title}
                  </h2>

                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                    {course.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#F1F5F9] space-y-3">
                    <div className="text-xs text-[#374151]">
                      <strong className="text-[#111827]">Subjects Covered:</strong>{" "}
                      {course.subjects.join(", ")}
                    </div>

                    <div className="text-xs text-[#374151]">
                      <strong className="text-[#111827]">Audience:</strong>{" "}
                      {course.targetAudience}
                    </div>

                    <div className="text-xs text-[#374151]">
                      <strong className="text-[#111827]">Available Modes:</strong>{" "}
                      {course.availableModes.join(" • ")}
                    </div>
                  </div>

                  {/* Program Inclusions */}
                  <div className="mt-5 space-y-1.5">
                    {course.keySupportFeatures.slice(0, 3).map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-[#4B5563]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    href={`/courses/${course.slug}`}
                    variant="primary"
                    size="md"
                    className="w-full sm:flex-1"
                  >
                    <span>View Full Details & Syllabus</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>

                  <Button
                    href={`/admissions?course=${course.slug}`}
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto text-xs"
                  >
                    <span>Enquire for {course.shortTitle}</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Course Comparison Table */}
      <section className="py-16 sm:py-24 bg-[#FAFAF7]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Side-by-Side Review"
            title="Course Comparison Table"
            description="Compare curriculum scope, duration, subjects, and study support to determine the ideal preparation pathway."
            align="center"
          />

          <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs font-semibold text-[#64748B]">
              Showing {comparedCoursesList.length} courses for comparison (select/unselect cards above)
            </span>
            <div className="flex gap-2">
              {coursesData.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => toggleComparison(c.slug)}
                  className={cn(
                    "text-xs px-2.5 py-1 rounded-lg border font-semibold cursor-pointer transition-colors",
                    selectedComparison.includes(c.slug)
                      ? "bg-[#1E40AF] text-white border-[#1E40AF]"
                      : "bg-white text-[#4B5563] border-[#D8E1EB]"
                  )}
                >
                  {c.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#D8E1EB] bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#D8E1EB]">
                  <th className="p-4 sm:p-5 font-bold text-[#111827] w-1/4">
                    Program Parameters
                  </th>
                  {comparedCoursesList.map((c) => (
                    <th key={c.slug} className="p-4 sm:p-5 font-extrabold text-[#1E40AF]">
                      {c.shortTitle}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#111827] bg-[#FAFAF7]">
                    Stream / Goal
                  </td>
                  {comparedCoursesList.map((c) => (
                    <td key={c.slug} className="p-4 sm:p-5 text-[#374151]">
                      {c.badge}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#111827] bg-[#FAFAF7]">
                    Subjects
                  </td>
                  {comparedCoursesList.map((c) => (
                    <td key={c.slug} className="p-4 sm:p-5 text-[#374151]">
                      {c.subjects.join(", ")}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#111827] bg-[#FAFAF7]">
                    Available Modes
                  </td>
                  {comparedCoursesList.map((c) => (
                    <td key={c.slug} className="p-4 sm:p-5 text-[#374151]">
                      {c.availableModes.join(", ")}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#111827] bg-[#FAFAF7]">
                    Doubt Resolution
                  </td>
                  {comparedCoursesList.map((c) => (
                    <td key={c.slug} className="p-4 sm:p-5 text-[#0F766E] font-medium">
                      Daily In-Person Doubt Desk
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#111827] bg-[#FAFAF7]">
                    Mock Tests
                  </td>
                  {comparedCoursesList.map((c) => (
                    <td key={c.slug} className="p-4 sm:p-5 text-[#374151]">
                      Periodic Chapter Tests + Simulated Mock Exams
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#111827] bg-[#FAFAF7]">
                    Current Fee Notice
                  </td>
                  {comparedCoursesList.map((c) => (
                    <td key={c.slug} className="p-4 sm:p-5 text-xs text-[#64748B]">
                      Contact academy for verified fees & batch availability.
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-[#111827] bg-[#FAFAF7]">
                    Action
                  </td>
                  {comparedCoursesList.map((c) => (
                    <td key={c.slug} className="p-4 sm:p-5">
                      <Link
                        href={`/courses/${c.slug}`}
                        className="text-xs font-bold text-[#1E40AF] hover:underline"
                      >
                        Explore Program Details →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
