import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  FileQuestion,
  Home,
  BookOpen,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-[#FAFAF7]">
      <div className="site-container max-w-lg text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center mx-auto shadow-xs">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-white px-3 py-1 rounded-full border border-[#DBEAFE]">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#4B5563] leading-relaxed">
            The page you are looking for may have been moved or updated as part of our new curriculum structure.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Home</span>
          </Button>

          <Button href="/courses" variant="outline" size="md">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Browse Courses</span>
          </Button>
        </div>

        <div className="pt-8 border-t border-[#E2E8F0] space-y-2 text-xs text-[#64748B]">
          <span className="font-bold text-[#111827] block">Popular Destinations:</span>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/courses/jee" className="text-[#1E40AF] hover:underline">
              JEE Preparation
            </Link>
            <span>•</span>
            <Link href="/courses/neet" className="text-[#1E40AF] hover:underline">
              NEET Medical
            </Link>
            <span>•</span>
            <Link href="/resources/pyqs" className="text-[#1E40AF] hover:underline">
              PYQ Papers
            </Link>
            <span>•</span>
            <Link href="/centres" className="text-[#1E40AF] hover:underline">
              Centres
            </Link>
            <span>•</span>
            <Link href="/admissions" className="text-[#1E40AF] hover:underline">
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
