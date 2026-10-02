import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "./ContactForm";
import { centresData } from "@/content/centres";
import { siteConfig } from "@/content/site-config";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Building2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Campus Visits — Glorious Academy",
  description:
    "Get in touch with Glorious Academy. Phone numbers, campus addresses in Chandrapur (Warora Naka) and Bhadrawati, operating hours, and message desk.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Reach Out to Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Contact & Campus Locations
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              We welcome prospective students and parents to call our admissions desk, send a message, or visit our campuses in person.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 5 Cols: Contact Channels & Centres */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quick Numbers Box */}
              <div className="rounded-3xl bg-[#FAFAF7] p-7 border border-[#D8E1EB] space-y-4">
                <h2 className="text-lg font-bold text-[#111827]">
                  Telephone & Email Desk
                </h2>

                <div className="space-y-3 text-sm text-[#4B5563]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#64748B] block">Primary Line:</span>
                      <a
                        href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`}
                        className="font-bold text-[#111827] hover:text-[#1E40AF]"
                      >
                        {siteConfig.primaryPhone}
                      </a>
                    </div>
                  </div>

                  {siteConfig.altPhone && (
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-[#64748B] block">Alternate / Bhadrawati:</span>
                        <a
                          href={`tel:${siteConfig.altPhone.replace(/\s+/g, "")}`}
                          className="font-bold text-[#111827] hover:text-[#1E40AF]"
                        >
                          {siteConfig.altPhone}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-[#64748B] block">Official Email:</span>
                      <a
                        href={`mailto:${siteConfig.confirmedEmail}`}
                        className="font-bold text-[#111827] hover:text-[#1E40AF]"
                      >
                        {siteConfig.confirmedEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Address Blocks */}
              {centresData.map((centre) => (
                <div
                  key={centre.slug}
                  className="rounded-3xl bg-white p-7 border border-[#D8E1EB] shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-[#111827]">
                      {centre.shortName}
                    </h3>
                    <span className="text-[11px] font-bold text-[#0F766E] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                      {centre.city}
                    </span>
                  </div>

                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {centre.fullAddress}
                  </p>

                  <div className="text-xs space-y-1 text-[#64748B] pt-1">
                    <div>
                      <strong>Visiting Hours:</strong> {centre.operatingHours}
                    </div>
                    <div>
                      <strong>Campus Phone:</strong>{" "}
                      <a
                        href={`tel:${centre.phone.replace(/\s+/g, "")}`}
                        className="text-[#1E40AF] font-bold hover:underline"
                      >
                        {centre.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={centre.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E40AF] hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
