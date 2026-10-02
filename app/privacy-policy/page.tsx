import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy — Glorious Academy",
  description:
    "Privacy Policy for Glorious Academy Institute Pvt. Ltd. regarding admissions inquiries and student data handling.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="site-container max-w-3xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="mt-6 border-b border-[#E2E8F0] pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#64748B] mt-2">
            Effective Date: October 2026 | {siteConfig.legalName}
          </p>
        </div>

        <div className="mt-8 space-y-8 text-sm text-[#374151] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">1. Introduction</h2>
            <p>
              Glorious Academy Institute Pvt. Ltd. (“Glorious Academy”, “we”, “our”, or “us”) respects your personal privacy. This Privacy Policy outlines how we collect, store, and utilize information submitted by prospective students, parents, and website visitors when enquiring about academic programs or using our online resources.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              2. Information We Collect
            </h2>
            <p>
              When submitting an admission enquiry or contacting our office through this website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#4B5563]">
              <li>Student and parent/guardian full name</li>
              <li>Active mobile phone number</li>
              <li>Email address (optional)</li>
              <li>Current academic class and target examination</li>
              <li>Preferred campus location (Chandrapur or Bhadrawati)</li>
              <li>Any specific queries or messages submitted in the form</li>
            </ul>
            <p className="text-xs text-[#64748B] italic">
              Note: We do not collect Aadhaar cards, bank details, or payment card numbers through initial website inquiry forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              3. Purpose of Processing
            </h2>
            <p>
              The information submitted by you is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#4B5563]">
              <li>Responding to admission and batch schedule enquiries</li>
              <li>Providing counseling regarding JEE, NEET, MHT-CET, and Board preparation</li>
              <li>Scheduling campus visits and counseling appointments</li>
              <li>Sending examination alert updates if explicitly requested</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              4. Data Sharing and Protection
            </h2>
            <p>
              Glorious Academy maintains a strict policy against selling, renting, or leasing student contact details to third-party telemarketers or commercial distributors. All enquiries are stored securely and accessible only to authorized academic counseling personnel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#111827]">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions about your information or wish to modify or withdraw your enquiry details, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#D8E1EB] text-xs space-y-1">
              <div>
                <strong>Institution:</strong> {siteConfig.legalName}
              </div>
              <div>
                <strong>Email:</strong> {siteConfig.confirmedEmail}
              </div>
              <div>
                <strong>Phone:</strong> {siteConfig.primaryPhone}
              </div>
              <div>
                <strong>Campus:</strong> Dr. Ambedkar College Campus, Warora Naka, Chandrapur, Maharashtra – 442401
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
