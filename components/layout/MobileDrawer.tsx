"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Course } from "@/lib/types";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { Brand } from "@/components/ui/Brand";
import {
  X,
  Phone,
  BookOpen,
  MapPin,
  Trophy,
  FileText,
  HelpCircle,
  Mail,
} from "lucide-react";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
}

export function MobileDrawer({ isOpen, onClose, courses }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const previousFocus = document.activeElement as HTMLElement | null;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      drawerRef.current?.querySelector<HTMLElement>('button, a[href]')?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "Tab") {
          const elements = drawerRef.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex="0"]');
          if (!elements?.length) return;
          const first = elements[0];
          const last = elements[elements.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = previousOverflow;
        previousFocus?.focus();
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-left duration-200"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E2E8F0]">
          <div onClick={onClose}><Brand /></div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Navigation Menu"
            className="p-2 rounded-xl text-[#64748B] hover:text-[#111827] hover:bg-[#F1F5F9] focus-visible:outline-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links Navigation */}
        <div className="flex-1 p-5 space-y-6">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-[#111827] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
            >
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-[#111827] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
            >
              <span>About the Academy</span>
            </Link>
            <Link
              href="/results"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-[#111827] hover:bg-[#EFF6FF] hover:text-[#1E40AF]"
            >
              <div className="flex items-center gap-2.5">
                <Trophy className="w-4 h-4 text-[#D97706]" />
                <span>Results & Achievers</span>
              </div>
            </Link>
          </div>

          {/* Courses Section */}
          <div className="pt-2 border-t border-[#F1F5F9]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 px-3">
              Courses & Programs
            </div>
            <div className="space-y-1">
              {courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0F6FF] text-sm font-semibold text-[#374151] hover:text-[#1E40AF]"
                >
                  <BookOpen className="w-4 h-4 text-[#1E40AF]" />
                  <span>{course.shortTitle}</span>
                </Link>
              ))}
              <Link
                href="/courses"
                onClick={onClose}
                className="block text-xs font-bold text-[#1E40AF] px-3 py-2 hover:underline"
              >
                View Full Course Catalogue & Comparison →
              </Link>
            </div>
          </div>

          {/* Resources & Centres */}
          <div className="pt-2 border-t border-[#F1F5F9]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 px-3">
              Resources & Centres
            </div>
            <div className="space-y-1">
              <Link
                href="/resources"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0F6FF] text-sm font-semibold text-[#374151] hover:text-[#1E40AF]"
              >
                <FileText className="w-4 h-4 text-[#0F766E]" />
                <span>Study Resources</span>
              </Link>
              <Link
                href="/resources/pyqs"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0F6FF] text-sm font-semibold text-[#374151] hover:text-[#1E40AF]"
              >
                <FileText className="w-4 h-4 text-[#1E40AF]" />
                <span>Previous Year Papers (PYQs)</span>
              </Link>
              <Link
                href="/centres"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0F6FF] text-sm font-semibold text-[#374151] hover:text-[#1E40AF]"
              >
                <MapPin className="w-4 h-4 text-[#B45309]" />
                <span>Academy Centres (Chandrapur & Bhadrawati)</span>
              </Link>
              <Link
                href="/faq"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0F6FF] text-sm font-semibold text-[#374151] hover:text-[#1E40AF]"
              >
                <HelpCircle className="w-4 h-4 text-[#64748B]" />
                <span>Frequently Asked Questions</span>
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F0F6FF] text-sm font-semibold text-[#374151] hover:text-[#1E40AF]"
              >
                <Mail className="w-4 h-4 text-[#64748B]" />
                <span>Contact Details</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-5 border-t border-[#E2E8F0] bg-[#FAFAF7] space-y-3">
          <Button
            href="/admissions"
            variant="primary"
            size="lg"
            className="w-full text-center"
          >
            Enquire About Admission
          </Button>

          <a
            href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`}
            className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-[#111827] hover:text-[#1E40AF] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#1E40AF]" />
            <span>Call: {siteConfig.primaryPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
