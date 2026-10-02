import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AdmissionsForm } from "./AdmissionsForm";
import { siteConfig } from "@/content/site-config";
import {
  FileText,
  Users2,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions & Course Enquiry — Glorious Academy",
  description:
    "Enquire about admissions for JEE Main & Advanced, NEET UG, MHT-CET, and Board coaching at Glorious Academy Chandrapur and Bhadrawati centres.",
};

export default function AdmissionsPage() {
  const steps = [
    {
      step: 1,
      title: "Submit Your Enquiry",
      description: "Fill the simple enquiry form with your contact details, student class, and desired preparation path.",
    },
    {
      step: 2,
      title: "Academic Counseling",
      description: "Our academic counselor reviews your background, discusses batch timings, curriculum scope, and current fees.",
    },
    {
      step: 3,
      title: "Confirm Enrollment",
      description: "Visit our campus to collect printed study modules, verify identity, and finalize your batch registration directly with the academy.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Admissions Enquiry" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Session 2026–27 Enrollment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Admissions & Course Guidance
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Take the first step toward academic excellence. Submit an admission enquiry below and our academic desk will get in touch with detailed guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Steps & Form */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 5 Cols: Process & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-3xl bg-[#FAFAF7] p-8 border border-[#D8E1EB] space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] block">
                  How Admissions Work
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  Three Transparent Steps
                </h2>

                <div className="space-y-6">
                  {steps.map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-[#111827]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#4B5563] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Call Alternative Box */}
              <div className="rounded-3xl bg-[#EFF6FF] p-8 border border-[#BFDBFE] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111827]">
                      Prefer Calling Directly?
                    </h3>
                    <span className="text-xs text-[#64748B]">
                      Mon–Sat: 8:00 AM – 8:00 PM
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  You can speak immediately with our counselors regarding batch vacancies, hostel tie-ups, or demo lectures.
                </p>

                <div className="space-y-2 pt-2 text-xs font-bold text-[#1E40AF]">
                  <div>
                    <span className="text-[#64748B] font-medium mr-1">Main Office:</span>
                    <a href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`} className="hover:underline">
                      {siteConfig.primaryPhone}
                    </a>
                  </div>
                  {siteConfig.altPhone && (
                    <div>
                      <span className="text-[#64748B] font-medium mr-1">Bhadrawati Branch:</span>
                      <a href={`tel:${siteConfig.altPhone.replace(/\s+/g, "")}`} className="hover:underline">
                        {siteConfig.altPhone}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#D8E1EB] text-xs text-[#64748B] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#111827]">
                  <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                  <span>Student Data Protection</span>
                </div>
                <p>
                  Glorious Academy does not sell student contacts or share enquiry information with third-party marketing companies.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Admissions Form */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-sm text-[#64748B] bg-[#F8FAFC] rounded-3xl border border-[#D8E1EB]">
                    Loading Admissions Form...
                  </div>
                }
              >
                <AdmissionsForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
