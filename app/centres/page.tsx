import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { centresData } from "@/content/centres";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academy Centres — Chandrapur & Bhadrawati Campuses",
  description:
    "Find Glorious Academy learning centres at Warora Naka (Chandrapur) and Bhadrawati. Operating hours, addresses, telephone contacts, and course offerings.",
};

export default function CentresIndexPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs items={[{ label: "Centres" }]} />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
              Campus Locations
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Our Learning Centres
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Glorious Academy operates two fully equipped educational centres in Chandrapur and Bhadrawati with state-of-the-art classrooms, testing labs, and teacher doubt desks.
            </p>
          </div>
        </div>
      </section>

      {/* Centres List */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {centresData.map((centre) => (
              <div
                key={centre.slug}
                className="rounded-3xl bg-white border border-[#D8E1EB] p-8 sm:p-10 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between overflow-hidden"
              >
                {/* Campus Image Banner */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-[#D8E1EB] shadow-xs">
                  <img
                    src={centre.slug === "chandrapur" ? "/images/centre-chandrapur.jpg" : "/images/centre-bhadrawati.jpg"}
                    alt={`${centre.name} campus building`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold drop-shadow-sm">
                      {centre.slug === "chandrapur" ? "Chandrapur Campus" : "Bhadrawati Campus"}
                    </span>
                    <span className="text-[10px] bg-white/90 text-[#1E40AF] font-bold px-2 py-0.5 rounded-full">
                      Offline Coaching
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold text-[#0F766E] bg-[#ECFDF5] border border-[#A7F3D0]">
                      {centre.city} Centre
                    </span>
                    <span className="text-xs font-semibold text-[#64748B]">
                      PIN: {centre.pin}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                    {centre.shortName}
                  </h2>

                  <div className="mt-5 space-y-3.5 text-sm text-[#4B5563]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#1E40AF] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#111827] block">Address:</strong>
                        <span>{centre.fullAddress}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#1E40AF] shrink-0" />
                      <div>
                        <strong className="text-[#111827] inline mr-1">Phone:</strong>
                        <a
                          href={`tel:${centre.phone.replace(/\s+/g, "")}`}
                          className="font-bold text-[#111827] hover:text-[#1E40AF]"
                        >
                          {centre.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#111827] block">Operating Hours:</strong>
                        <span className="text-xs text-[#64748B]">{centre.operatingHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 pt-5 border-t border-[#F1F5F9] space-y-2">
                    <span className="text-xs font-bold text-[#111827] uppercase tracking-wider block mb-2">
                      Campus Facilities
                    </span>
                    {centre.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    href={`/centres/${centre.slug}`}
                    variant="primary"
                    size="md"
                    className="w-full sm:flex-1 text-xs sm:text-sm"
                  >
                    <span>View Centre Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>

                  <Button
                    href={centre.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto text-xs sm:text-sm"
                  >
                    <span>Google Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Visit Prompt */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="site-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-[#111827]">
            Schedule an In-Person Campus Visit
          </h2>
          <p className="mt-3 text-sm text-[#4B5563]">
            Parents and students are welcome to visit our classrooms, review sample study modules, and meet faculty members during office hours.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/admissions" variant="primary" size="lg">
              <span>Submit Admission Enquiry</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
