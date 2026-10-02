"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Phone, ArrowRight } from "lucide-react";


export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(true);

  // Automatically hide bottom bar when typing in form inputs on mobile
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT")
      ) {
        setIsVisible(false);
      }
    };

    const handleFocusOut = () => {
      setIsVisible(true);
    };

    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);
    return () => {
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-20 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#D8E1EB] px-4 py-2.5 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`}
          className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#D8E1EB] bg-[#FAFAF7] text-xs font-bold text-[#111827] active:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-[#1D4ED8]"
        >
          <Phone className="w-4 h-4 text-[#1E40AF]" />
          <span>Call Academy</span>
        </a>

        <Link
          href="/admissions"
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#102d46] text-white text-xs font-bold shadow-sm active:bg-[#1E3A8A] focus-visible:outline-2 focus-visible:outline-[#1D4ED8]"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}

