"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { resourcesData } from "@/content/resources";
import { ResourcePaper } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionElements";
import {
  Download,
  Eye,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export function ResourcesPreview() {
  const [selectedPaper, setSelectedPaper] = useState<ResourcePaper | null>(null);
  const previewPapers = resourcesData.slice(0, 3);

  const handleDownload = (paper: ResourcePaper) => {
    // Generate clean text-based mock PDF payload or initiate download
    const blob = new Blob(
      [
        `GLORIOUS ACADEMY EXAMINATION RESOURCE\n=====================================\nTitle: ${paper.title}\nExam: ${paper.exam}\nYear: ${paper.year}\nSession: ${paper.subjectOrSession}\nSource: ${paper.sourceAttribution}\n\nThis verified document has been archived by the Glorious Academy Academic Cell for student practice and revision.\nVisit https://gloriousacademy.co.in for more preparation resources.`,
      ],
      { type: "text/plain;charset=utf-8" }
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = paper.downloadFileName.replace(".pdf", ".txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1E40AF]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Academic Repository"
            title="Practise with Purpose: Previous Year Papers"
            description="Access verified previous years question papers and answer keys for JEE Main, JEE Advanced, and NEET to benchmark your preparation."
            align="center"
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPapers.map((paper) => (
            <StaggerItem key={paper.id}>
              <motion.div
                className="p-6 rounded-2xl bg-white border border-[#D8E1EB] shadow-xs card-hover-lift flex flex-col justify-between h-full relative overflow-hidden"
                whileHover={{ borderColor: "rgba(30, 64, 175, 0.25)" }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1E40AF] to-[#0F766E] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE]">
                      {paper.exam}
                    </span>
                    <span className="text-xs font-bold text-[#64748B]">
                      Year {paper.year}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#111827] line-clamp-2 leading-snug">
                    {paper.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#64748B]">
                    {paper.subjectOrSession}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-[#4B5563]">
                    <span className="font-semibold px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569]">
                      {paper.format} • {paper.fileSize}
                    </span>
                    <span className="text-[#0F766E] font-medium flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-2">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => setSelectedPaper(paper)}
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      <span>Details</span>
                    </Button>
                  </motion.div>

                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleDownload(paper)}
                      variant="primary"
                      size="sm"
                      className="w-full text-xs"
                    >
                      <Download className="w-3.5 h-3.5 mr-1" />
                      <span>Download</span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/resources/pyqs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#D8E1EB] hover:border-[#1E40AF] text-[#1E40AF] font-bold text-sm shadow-xs hover:shadow transition-all group"
              >
                <span>Browse Full PYQ Library (JEE, NEET, MHT-CET, Boards)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* Details Dialog */}
      <Dialog
        isOpen={Boolean(selectedPaper)}
        onClose={() => setSelectedPaper(null)}
        title={selectedPaper?.title}
        description={`Archive metadata and document distribution source for ${selectedPaper?.exam}`}
      >
        {selectedPaper && (
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-2 text-sm text-[#1E40AF]">
              <div className="flex justify-between">
                <span className="font-semibold">Examination:</span>
                <span>{selectedPaper.exam}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Year & Session:</span>
                <span>{selectedPaper.year} • {selectedPaper.subjectOrSession}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Document Type:</span>
                <span>{selectedPaper.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">File Details:</span>
                <span>{selectedPaper.format} ({selectedPaper.fileSize})</span>
              </div>
            </div>

            <p className="text-xs text-[#64748B]">
              <strong>Source Attribution:</strong> {selectedPaper.sourceAttribution}
            </p>

            <div className="pt-2 flex gap-3">
              <Button
                onClick={() => {
                  handleDownload(selectedPaper);
                  setSelectedPaper(null);
                }}
                variant="primary"
                size="md"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Download Verified Paper Archive</span>
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
