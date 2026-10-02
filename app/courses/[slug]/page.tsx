import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { coursesData } from "@/content/courses";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import {
  BookOpen,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} — Coaching in Chandrapur & Bhadrawati`,
    description: course.summary,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const faqItems = course.faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    content: <p>{faq.answer}</p>,
  }));

  return (
    <div className="bg-white">
      {/* Course Hero Banner */}
      <section className="bg-gradient-to-b from-[#F0F6FF] via-[#FAFAF7] to-white border-b border-[#E2E8F0] py-10 sm:py-16">
        <div className="site-container">
          <Breadcrumbs
            items={[
              { label: "Courses", href: "/courses" },
              { label: course.shortTitle },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold text-[#1E40AF] bg-white border border-[#BFDBFE]">
                <Sparkles className="w-3.5 h-3.5 text-[#1E40AF]" />
                {course.badge}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                {course.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[#111827]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#64748B]">Subjects:</span>
                  <span className="text-[#1E40AF]">{course.subjects.join(", ")}</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#64748B]">Target:</span>
                  <span>{course.targetAudience.slice(0, 32)}...</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  href={`/admissions?course=${course.slug}`}
                  variant="primary"
                  size="lg"
                >
                  <span>Enquire About {course.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <Button href="/centres" variant="outline" size="lg">
                  <span>Check Centre Availability</span>
                </Button>
              </div>
            </div>

            {/* Quick Summary Sticky Card: 4 Cols */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-[#D8E1EB] shadow-md space-y-5">
                <h3 className="font-bold text-base text-[#111827] border-b border-[#F1F5F9] pb-3">
                  Program Quick Snapshot
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-xs font-semibold text-[#64748B] block">
                      Subjects Included:
                    </span>
                    <span className="font-bold text-[#111827]">
                      {course.subjects.join(" • ")}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#64748B] block">
                      Centres Offering This:
                    </span>
                    <span className="font-bold text-[#0F766E]">
                      Chandrapur (Warora Naka) & Bhadrawati
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[#64748B] block">
                      Fee & Installment Notice:
                    </span>
                    <p className="text-xs text-[#4B5563] mt-1 leading-snug">
                      Contact academy for current verified fees, scholarship options, and batch dates.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9]">
                  <Link
                    href={`/admissions?course=${course.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#1E40AF] font-bold text-xs transition-colors"
                  >
                    <span>Request Admission Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Variants & Cohorts */}
      <section className="py-16 sm:py-20 border-b border-[#E2E8F0]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Batches & Cohorts"
            title="Available Learning Modes"
            description="Choose the program structure best suited to your academic year and schedule."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.variants.map((variant) => (
              <div
                key={variant.id}
                className="rounded-3xl bg-[#FAFAF7] p-7 border border-[#D8E1EB] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#0F766E] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                      {variant.mode}
                    </span>
                    <span className="text-xs font-semibold text-[#64748B]">
                      {variant.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827]">
                    {variant.name}
                  </h3>

                  <span className="inline-block text-xs font-semibold text-[#1E40AF] mt-1">
                    Target: {variant.targetClass}
                  </span>

                  <div className="mt-5 space-y-2 pt-4 border-t border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#111827] uppercase tracking-wider block">
                      Program Inclusions:
                    </span>
                    {variant.keyInclusions.map((inc, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-[#4B5563]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] space-y-3">
                  <p className="text-[11px] text-[#64748B] italic">
                    {variant.feeNotice}
                  </p>

                  <Button
                    href={`/admissions?course=${course.slug}&variant=${variant.id}`}
                    variant="primary"
                    size="sm"
                    className="w-full text-xs"
                  >
                    <span>Enquire for this Batch</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Inclusions / What's Included */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Curriculum Inclusions"
            title="Comprehensive Support Structure"
            description="Every enrollment includes exhaustive study material, continuous testing, and teacher mentorship."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.detailedInclusions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#D8E1EB] shadow-xs hover:border-[#1E40AF] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center font-bold text-sm mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-base text-[#111827]">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-16 sm:py-20 bg-[#FAFAF7] border-b border-[#E2E8F0]">
        <div className="site-container max-w-4xl">
          <SectionHeading
            eyebrow="Pedagogical Flow"
            title="Our Step-by-Step Learning Approach"
            description="How we guide students through each chapter to ensure long-term conceptual retention."
            align="center"
          />

          <div className="space-y-4">
            {course.learningProcess.map((proc) => (
              <div
                key={proc.step}
                className="p-6 rounded-2xl bg-white border border-[#D8E1EB] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {proc.step}
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111827]">
                    {proc.title}
                  </h4>
                  <p className="mt-1 text-sm text-[#4B5563] leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course FAQs */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="site-container max-w-3xl">
          <SectionHeading
            eyebrow="Common Inquiries"
            title={`${course.shortTitle} — FAQs`}
            description="Answers to common questions from students and parents regarding this program."
            align="center"
          />

          <Accordion items={faqItems} defaultOpenId="faq-0" />
        </div>
      </section>

      {/* Final Course Enquiry Banner */}
      <section className="py-16 bg-[#FAFAF7]">
        <div className="site-container text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Start Preparing for {course.shortTitle}
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Submit an admission enquiry to discuss current batch availability, schedule, and fee options with our academic counselors.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              href={`/admissions?course=${course.slug}`}
              variant="primary"
              size="lg"
            >
              <span>Enquire for {course.shortTitle}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href="/centres" variant="outline" size="lg">
              <span>View Centres</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
