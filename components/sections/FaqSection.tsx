"use client";

import React from "react";
import Link from "next/link";
import { faqData } from "@/content/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/MotionElements";
import { ArrowRight } from "lucide-react";

export function FaqSection() {
  const topFaqs = faqData.slice(0, 6).map((item) => ({
    id: item.id,
    title: item.question,
    content: (
      <div className="space-y-2">
        <p>{item.answer}</p>
        {item.relatedRoute && (
          <Link
            href={item.relatedRoute}
            className="inline-block text-xs font-bold text-[#1E40AF] hover:underline pt-1"
          >
            Learn more about this topic →
          </Link>
        )}
      </div>
    ),
  }));

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF7] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 -translate-y-1/2 bg-[#1E40AF]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container max-w-4xl relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Help & Guidance"
            title="Frequently Asked Questions"
            description="Straightforward answers about our courses, teaching methodology, admissions process, and centres."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion items={topFaqs} defaultOpenId="faq-c1" />
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1E40AF] hover:underline group"
            >
              <span>Have more questions? View our comprehensive FAQ directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
