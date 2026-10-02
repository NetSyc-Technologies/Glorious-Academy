"use client";

import React, { useState } from "react";
import { testimonialsData } from "@/content/testimonials";
import { Testimonial } from "@/lib/types";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Quote, CheckCircle2, ArrowRight } from "lucide-react";

export default function TestimonialsPage() {
  const [selectedFeedback, setSelectedFeedback] = useState<Testimonial | null>(null);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Testimonials" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Approved Student Voices
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Student Feedback & Experiences
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Read authentic feedback from students who attended our classroom and foundation coaching programs in Chandrapur and Bhadrawati.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-white border border-[#D8E1EB] shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#1E40AF]/30 mb-4" />
                  <p className="text-base sm:text-lg text-[#111827] leading-relaxed italic">
                    “{item.quote}”
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h3 className="font-bold text-base text-[#111827]">
                      {item.studentName}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-[#0F766E] block mt-0.5">
                      {item.scoreContext}
                    </span>
                    <span className="text-xs text-[#64748B]">
                      {item.examOrClass}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedFeedback(item)}
                    className="text-xs font-bold text-[#1E40AF] hover:underline cursor-pointer"
                  >
                    Read Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-[#FAFAF7] border border-[#D8E1EB] max-w-2xl mx-auto text-center text-xs text-[#64748B]">
            All testimonials published above are verified transcriptions of student feedback on academic progress and test guidance at Glorious Academy.
          </div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog
        isOpen={Boolean(selectedFeedback)}
        onClose={() => setSelectedFeedback(null)}
        title={selectedFeedback?.studentName}
        description={selectedFeedback?.scoreContext}
      >
        {selectedFeedback && (
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] italic text-sm text-[#111827] leading-relaxed">
              “{selectedFeedback.quote}”
            </div>

            <div className="text-xs space-y-1 text-[#64748B]">
              <div>
                <strong>Program / Class:</strong> {selectedFeedback.examOrClass}
              </div>
              <div>
                <strong>Batch Type:</strong> {selectedFeedback.year}
              </div>
              <div className="flex items-center gap-1 text-[#0F766E] font-semibold pt-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Student Record</span>
              </div>
            </div>
          </div>
        )}
      </Dialog>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="site-container text-center max-w-xl">
          <h2 className="text-2xl font-bold text-[#111827]">
            Discuss Your Academic Goals With Our Faculty
          </h2>
          <p className="mt-2 text-sm text-[#4B5563]">
            Submit an enquiry or visit our Chandrapur or Bhadrawati centres in person.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/admissions" variant="primary" size="md">
              <span>Enquire About Admission</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
