import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  level?: 1 | 2 | 3;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  level = 2,
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as const;

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#DBEAFE] mb-3">
          {eyebrow}
        </span>
      )}
      <HeadingTag className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
