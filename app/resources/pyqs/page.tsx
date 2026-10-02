"use client";

import React, { useState } from "react";
import { resourcesData } from "@/content/resources";
import { ResourcePaper } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  FileCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PyqsLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExam, setSelectedExam] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [activePaper, setActivePaper] = useState<ResourcePaper | null>(null);

  const availableExams = [
    { id: "all", label: "All Exams" },
    { id: "JEE Main", label: "JEE Main" },
    { id: "JEE Advanced", label: "JEE Advanced" },
    { id: "NEET", label: "NEET UG" },
    { id: "MHT-CET", label: "MHT-CET" },
    { id: "CBSE Class 10", label: "CBSE Class 10" },
    { id: "CBSE Class 12", label: "CBSE Class 12" },
  ];

  const availableYears = ["all", "2025", "2024", "2023"];

  const filteredPapers = resourcesData.filter((paper) => {
    // Exam filter
    if (selectedExam !== "all" && paper.exam !== selectedExam) return false;
    // Year filter
    if (selectedYear !== "all" && paper.year.toString() !== selectedYear) return false;
    // Type filter
    if (selectedType !== "all" && paper.type !== selectedType) return false;
    // Query search
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      const matchTitle = paper.title.toLowerCase().includes(q);
      const matchSubject = paper.subjectOrSession.toLowerCase().includes(q);
      const matchExam = paper.exam.toLowerCase().includes(q);
      if (!matchTitle && !matchSubject && !matchExam) return false;
    }
    return true;
  });

  const handleDownload = (paper: ResourcePaper) => {
    const textContent = `GLORIOUS ACADEMY ARCHIVE\n=====================================\nTitle: ${paper.title}\nExam: ${paper.exam}\nYear: ${paper.year}\nSession / Scope: ${paper.subjectOrSession}\nType: ${paper.type}\nFile Size: ${paper.fileSize}\nSource Attribution: ${paper.sourceAttribution}\n\nThis verified document has been archived for student practice by Glorious Academy (Chandrapur & Bhadrawati).\nOfficial Portal: https://gloriousacademy.co.in`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = paper.downloadFileName.replace(".pdf", ".txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedExam("all");
    setSelectedYear("all");
    setSelectedType("all");
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs
            items={[
              { label: "Resources", href: "/resources" },
              { label: "Previous Year Papers (PYQs)" },
            ]}
          />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Official Examination Papers
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Previous Year Papers (PYQs) Library
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Browse, inspect, and download verified previous years question papers and official answer keys for JEE Main, JEE Advanced, NEET, MHT-CET, and CBSE Board examinations.
            </p>
          </div>

          {/* Search & Filter Controls Panel */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#D8E1EB] shadow-xs space-y-5">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search papers by keyword (e.g. Physics, 2025, Session 1, NEET)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#D8E1EB] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] text-sm text-[#111827] placeholder:text-[#94A3B8]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#64748B] uppercase tracking-wider">Exam:</span>
                {availableExams.map((exam) => (
                  <button
                    key={exam.id}
                    type="button"
                    onClick={() => setSelectedExam(exam.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg border transition-colors cursor-pointer",
                      selectedExam === exam.id
                        ? "bg-[#1E40AF] text-white border-[#1E40AF]"
                        : "bg-white text-[#374151] border-[#D8E1EB] hover:bg-[#F1F5F9]"
                    )}
                  >
                    {exam.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#64748B] uppercase tracking-wider">Year:</span>
                {availableYears.map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setSelectedYear(yr)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg border transition-colors cursor-pointer",
                      selectedYear === yr
                        ? "bg-[#0F766E] text-white border-[#0F766E]"
                        : "bg-white text-[#374151] border-[#D8E1EB] hover:bg-[#F1F5F9]"
                    )}
                  >
                    {yr === "all" ? "All Years" : yr}
                  </button>
                ))}
              </div>

              {(searchQuery || selectedExam !== "all" || selectedYear !== "all") && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-[#B91C1C] hover:underline font-bold ml-auto cursor-pointer"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-semibold text-[#64748B]">
              Showing {filteredPapers.length} of {resourcesData.length} papers in library
            </span>
          </div>

          {filteredPapers.length === 0 ? (
            <div className="text-center py-16 px-4 max-w-md mx-auto">
              <AlertCircle className="w-12 h-12 text-[#94A3B8] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#111827]">
                No matching question papers found
              </h3>
              <p className="text-sm text-[#4B5563] mt-2">
                Try adjusting your search keywords or reset filter criteria.
              </p>
              <Button
                onClick={handleResetFilters}
                variant="outline"
                size="md"
                className="mt-6"
              >
                <span>Reset Filters</span>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="p-6 rounded-3xl bg-white border border-[#D8E1EB] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE]">
                        {paper.exam}
                      </span>
                      <span className="text-xs font-bold text-[#64748B]">
                        Year {paper.year}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111827] line-clamp-2 leading-snug">
                      {paper.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#64748B]">
                      {paper.subjectOrSession}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#4B5563]">
                      <span className="font-semibold px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                        {paper.type}
                      </span>
                      <span className="text-[#64748B]">
                        {paper.format} ({paper.fileSize})
                      </span>
                    </div>

                    <div className="mt-3 text-[11px] text-[#64748B] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                      <span className="truncate">Attribution: {paper.sourceAttribution}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-2">
                    <Button
                      onClick={() => setActivePaper(paper)}
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      <span>Inspect</span>
                    </Button>

                    <Button
                      onClick={() => handleDownload(paper)}
                      variant="primary"
                      size="sm"
                      className="flex-1 text-xs"
                    >
                      <Download className="w-3.5 h-3.5 mr-1" />
                      <span>Download</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inspect Dialog */}
      <Dialog
        isOpen={Boolean(activePaper)}
        onClose={() => setActivePaper(null)}
        title={activePaper?.title}
        description={`Examination Resource Details • ${activePaper?.exam}`}
      >
        {activePaper && (
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-2 text-xs sm:text-sm text-[#1E40AF]">
              <div className="flex justify-between">
                <span className="font-semibold">Target Examination:</span>
                <span className="font-bold">{activePaper.exam}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Academic Year:</span>
                <span>{activePaper.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Subject / Session:</span>
                <span>{activePaper.subjectOrSession}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Document Category:</span>
                <span>{activePaper.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">File Format & Size:</span>
                <span>{activePaper.format} ({activePaper.fileSize})</span>
              </div>
            </div>

            <div className="text-xs text-[#4B5563] space-y-1">
              <p>
                <strong>Source Attribution:</strong> {activePaper.sourceAttribution}
              </p>
              <p>
                <strong>Provenance Notice:</strong> This document is provided by Glorious Academy strictly for student educational review and practice purposes in accordance with examination redistribution norms.
              </p>
            </div>

            <div className="pt-2">
              <Button
                onClick={() => {
                  handleDownload(activePaper);
                  setActivePaper(null);
                }}
                variant="primary"
                size="md"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Download Question Paper Document</span>
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
