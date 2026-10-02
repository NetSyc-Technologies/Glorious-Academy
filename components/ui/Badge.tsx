import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "teal" | "amber" | "neutral" | "outline";
}

export function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-[#EFF6FF] text-[#1E40AF] border border-[#BFDBFE]",
    teal: "bg-[#ECFDF5] text-[#0F766E] border border-[#A7F3D0]",
    amber: "bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]",
    neutral: "bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]",
    outline: "bg-white text-[#4B5563] border border-[#D8E1EB]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
