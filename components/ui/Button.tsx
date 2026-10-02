import React, { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none rounded-xl";

    const variants = {
      primary:
        "bg-[#102d46] text-white hover:bg-[#1a4666] active:bg-[#102d46] shadow-sm hover:shadow-md focus-visible:outline-[#0072bd]",
      secondary:
        "bg-[#EFF6FF] text-[#1E40AF] hover:bg-[#DBEAFE] active:bg-[#BFDBFE] focus-visible:outline-[#1D4ED8]",
      accent:
        "bg-[#ff7a16] text-[#102d46] hover:bg-[#ff8e38] active:bg-[#f56e06] shadow-sm hover:shadow focus-visible:outline-[#0072bd]",
      outline:
        "border border-[#D8E1EB] bg-white text-[#111827] hover:bg-[#F8FAFC] hover:border-[#94A3B8] active:bg-[#F1F5F9] focus-visible:outline-[#1D4ED8]",
      ghost:
        "text-[#374151] hover:text-[#111827] hover:bg-[#F1F5F9] active:bg-[#E2E8F0] focus-visible:outline-[#1D4ED8]",
      link:
        "text-[#1E40AF] hover:underline p-0 h-auto font-medium focus-visible:outline-[#1D4ED8]",
    };

    const sizes = {
      sm: "text-sm px-3.5 py-1.5 min-h-[36px] gap-1.5",
      md: "text-base px-5 py-2.5 min-h-[46px] gap-2",
      lg: "text-lg px-7 py-3 min-h-[52px] font-semibold gap-2.5",
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      variant !== "link" && sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className={combinedClasses}>
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
