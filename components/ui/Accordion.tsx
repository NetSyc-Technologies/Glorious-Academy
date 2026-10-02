"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="border border-[#D8E1EB] rounded-2xl bg-white transition-colors duration-200 overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-semibold text-[#111827] hover:text-[#1E40AF] transition-colors focus-visible:outline-2"
              >
                <span className="text-base sm:text-lg leading-snug">{item.title}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180 text-[#1E40AF]"
                  )}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-[#F1F5F9]"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
