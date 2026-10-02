import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions — Glorious Academy",
  description:
    "Terms and Conditions governing the use of Glorious Academy website and admissions inquiries.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="site-container max-w-3xl">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <div className="mt-6 border-b border-[#E2E8F0] pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#64748B] mt-2">
            Effective Date: October 2026 | {siteConfig.legalName}
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-[#374151] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website of Glorious Academy Institute Pvt. Ltd. (“Glorious Academy”) or submitting an online enquiry, you acknowledge having read and understood these Terms & Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              2. Nature of Admissions Enquiry
            </h2>
            <p>
              Submitting an enquiry via this website registers a request for academic counseling, course information, and fee schedules. An enquiry does not constitute guaranteed admission, confirmed batch allotment, or payment receipt. Admission is finalized only upon physical verification and completion of enrollment procedures at our Chandrapur or Bhadrawati centres.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              3. Accuracy of Educational Content & Resources
            </h2>
            <p>
              All course syllabi, exam pattern descriptions, and previous years question papers (PYQs) provided on this website are compiled in good faith for general student guidance. Examination schedules, eligibility norms, and national conducting rules are established independently by regulatory authorities (NTA, IITs, State CET Cell, CBSE, and State Board).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              4. Intellectual Property
            </h2>
            <p>
              Original study curriculums, classroom methodologies, branding, and website text belong exclusively to Glorious Academy Institute Pvt. Ltd. Third-party examination logos and official question papers remain the property of their respective examining agencies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              5. Contact & Inquiries
            </h2>
            <p>
              For any questions regarding these terms, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#D8E1EB] text-xs space-y-1">
              <div>
                <strong>Legal Entity:</strong> {siteConfig.legalName}
              </div>
              <div>
                <strong>Admissions Desk:</strong> {siteConfig.primaryPhone}
              </div>
              <div>
                <strong>Email:</strong> {siteConfig.confirmedEmail}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
