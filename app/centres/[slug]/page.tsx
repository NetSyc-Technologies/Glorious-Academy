import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { centresData } from "@/content/centres";
import { coursesData } from "@/content/courses";
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
  BookOpen,
  CheckCircle2,
} from "lucide-react";

interface CentrePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return centresData.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CentrePageProps): Promise<Metadata> {
  const { slug } = await params;
  const centre = centresData.find((c) => c.slug === slug);
  if (!centre) return { title: "Centre Not Found" };

  return {
    title: `${centre.name} — Address & Contact`,
    description: `Contact and location information for Glorious Academy ${centre.shortName}. Full address: ${centre.fullAddress}. Telephone: ${centre.phone}.`,
  };
}

export default async function CentreDetailPage({ params }: CentrePageProps) {
  const { slug } = await params;
  const centre = centresData.find((c) => c.slug === slug);

  if (!centre) {
    notFound();
  }

  const offeredCourses = coursesData.filter((c) =>
    centre.offeredCourseSlugs.includes(c.slug)
  );

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#FAFAF7] border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs
            items={[
              { label: "Centres", href: "/centres" },
              { label: centre.shortName },
            ]}
          />

          <div className="max-w-3xl mt-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0F766E] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0] mb-3">
              {centre.city} Centre
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              {centre.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Complete address, telephone contacts, operating schedule, and offered preparation programs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 Cols: Location & Info */}
            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-3xl bg-[#FAFAF7] p-8 border border-[#D8E1EB] space-y-6">
                <h2 className="text-xl font-bold text-[#111827]">
                  Campus Location & Working Hours
                </h2>

                <div className="space-y-4 text-sm text-[#4B5563]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1E40AF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111827] block">Physical Address:</strong>
                      <span className="leading-relaxed">{centre.fullAddress}</span>
                    </div>
                  </div>

                  {centre.landmark && (
                    <div className="flex items-start gap-3 text-xs">
                      <span className="font-bold text-[#64748B]">Landmark:</span>
                      <span>{centre.landmark}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#1E40AF] shrink-0" />
                    <div>
                      <strong className="text-[#111827] mr-1">Direct Telephone:</strong>
                      <a
                        href={`tel:${centre.phone.replace(/\s+/g, "")}`}
                        className="font-bold text-[#1E40AF] hover:underline"
                      >
                        {centre.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111827] block">Campus Visiting Hours:</strong>
                      <span className="text-xs text-[#64748B]">{centre.operatingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-3">
                  <Button
                    href={centre.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Campus Highlights */}
              <div className="rounded-3xl bg-white p-8 border border-[#D8E1EB] space-y-4 shadow-xs">
                <h3 className="text-lg font-bold text-[#111827]">
                  Campus Facilities & Academic Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {centre.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E2E8F0] text-xs text-[#374151] flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Offered Programs at this centre & Enquiry prefill */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-[#EFF6FF] p-8 border border-[#BFDBFE] space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF] block mb-1">
                    Admissions Desk
                  </span>
                  <h3 className="text-xl font-bold text-[#111827]">
                    Enquire for {centre.shortName}
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                    Submit your details online to reserve an in-person academic counseling slot at this branch.
                  </p>
                </div>

                <Button
                  href={`/admissions?centre=${centre.slug}`}
                  variant="primary"
                  size="lg"
                  className="w-full text-center"
                >
                  <span>Submit Enquiry for This Centre</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <div className="text-center pt-2">
                  <a
                    href={`tel:${centre.phone.replace(/\s+/g, "")}`}
                    className="text-xs font-bold text-[#1E40AF] hover:underline"
                  >
                    Or call directly: {centre.phone}
                  </a>
                </div>
              </div>

              {/* Courses at this centre */}
              <div className="rounded-3xl bg-white p-8 border border-[#D8E1EB] shadow-xs space-y-4">
                <h3 className="text-base font-bold text-[#111827]">
                  Programs Conducted at {centre.shortName}
                </h3>
                <div className="space-y-2">
                  {offeredCourses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/courses/${c.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#FAFAF7] hover:bg-[#EFF6FF] text-xs font-semibold text-[#111827] hover:text-[#1E40AF] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#1E40AF]" />
                        <span>{c.shortTitle}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
