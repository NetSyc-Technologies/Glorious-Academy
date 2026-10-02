import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  BookOpen,
  FileCheck2,
  HelpCircle,
  ArrowRight,
  Download,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Study Resources & PYQ Library — Glorious Academy",
  description:
    "Explore comprehensive study materials, previous years question papers (PYQs), daily practice problem sheets (DPPs), and mock test portals at Glorious Academy.",
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Previous Year Question Papers (PYQs)",
      description:
        "Official question papers and verified answer keys for JEE Main, JEE Advanced, NEET UG, MHT-CET, and CBSE Board examinations.",
      link: "/resources/pyqs",
      linkText: "Browse & Download PYQs",
      icon: <FileText className="w-6 h-6 text-[#1E40AF]" />,
      badge: "Public Access Archive",
    },
    {
      title: "Standardized Theory Modules",
      description:
        "Chapter-wise theory books with derivations, illustrations, and NCERT-linked summaries curated for competitive depth.",
      link: "/courses",
      linkText: "View Course Curriculum",
      icon: <BookOpen className="w-6 h-6 text-[#0F766E]" />,
      badge: "Classroom Inclusions",
    },
    {
      title: "Daily Practice Problem (DPP) Sheets",
      description:
        "Graded daily worksheets categorized from fundamental definition questions to advanced multi-concept calculations.",
      link: "/admissions",
      linkText: "Learn About Batch Enrollment",
      icon: <FileCheck2 className="w-6 h-6 text-[#2563EB]" />,
      badge: "Daily Practice",
    },
    {
      title: "In-Person Faculty Doubt Desks",
      description:
        "Dedicated daily doubt clarification desks at Chandrapur and Bhadrawati centres where students solve homework hurdles with teachers.",
      link: "/centres",
      linkText: "Visit Campus Desks",
      icon: <HelpCircle className="w-6 h-6 text-[#D97706]" />,
      badge: "Daily Campus Support",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Study Resources" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Academic Support Repository
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Study Resources & Learning Tools
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Equipping every student with structured study modules, past question paper archives, and teacher guidance for disciplined exam preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#D8E1EB] shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F6FF] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#0F766E] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#F1F5F9]">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E40AF] hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured PYQ Callout Banner */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="site-container">
          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#D8E1EB] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
                Free Student Download
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                Previous Year Papers (PYQs) Archive
              </h2>
              <p className="text-sm text-[#4B5563] max-w-xl">
                Filter by examination (JEE Main, JEE Advanced, NEET, MHT-CET, Boards), year, and session. No mandatory sign-up required.
              </p>
            </div>

            <Button href="/resources/pyqs" variant="primary" size="lg">
              <span>Access PYQ Library</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
