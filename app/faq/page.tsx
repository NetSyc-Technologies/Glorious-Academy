"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqData } from "@/content/faq";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Search, ArrowRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "Courses", label: "Courses" },
    { id: "Centres", label: "Centres" },
    { id: "Admissions & Fees", label: "Admissions & Fees" },
    { id: "Learning Support", label: "Learning Support" },
    { id: "Resources", label: "Resources" },
  ];

  const filteredFaqs = faqData.filter((item) => {
    if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      const matchQ = item.question.toLowerCase().includes(q);
      const matchA = item.answer.toLowerCase().includes(q);
      if (!matchQ && !matchA) return false;
    }
    return true;
  });

  const accordionItems = filteredFaqs.map((item) => ({
    id: item.id,
    title: item.question,
    content: (
      <div className="space-y-2">
        <p>{item.answer}</p>
        {item.relatedRoute && (
          <Link
            href={item.relatedRoute}
            className="inline-block text-xs font-bold text-[#1E40AF] hover:underline pt-1"
          >
            Read more related details →
          </Link>
        )}
      </div>
    ),
  }));

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Answers & Guidance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Find clear answers regarding admissions, batch options, classroom support, previous year papers, and campus locations.
            </p>
          </div>

          {/* Search Bar & Category Chips */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#D8E1EB] shadow-xs space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions by keyword (e.g. fees, doubt, JEE, Chandrapur)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#D8E1EB] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] text-sm text-[#111827] placeholder:text-[#94A3B8]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider mr-2">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer",
                    selectedCategory === cat.id
                      ? "bg-[#1E40AF] text-white"
                      : "bg-[#F1F5F9] text-[#374151] hover:bg-[#E2E8F0]"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container max-w-4xl">
          {accordionItems.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#111827]">
                No matching questions found
              </h3>
              <p className="text-sm text-[#4B5563] mt-1">
                Please contact our admissions desk directly for assistance.
              </p>
            </div>
          ) : (
            <Accordion items={accordionItems} defaultOpenId={accordionItems[0]?.id} />
          )}
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="site-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-[#111827]">
            Have a Specific Question Not Listed Here?
          </h2>
          <p className="mt-3 text-sm text-[#4B5563]">
            Our admissions team is available daily to answer questions about batch schedules, syllabus progress, and test formats.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg">
              <span>Contact Admissions Desk</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
