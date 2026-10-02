import React, { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FieldWrapper({
  label,
  id,
  error,
  helperText,
  required,
  children,
}: FieldWrapperProps) {
  return (
    <div className="w-full space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-[#111827]">
        {label}
        {required && <span className="text-[#B91C1C] ml-1">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs text-[#B91C1C] font-medium mt-1">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="text-xs text-[#64748B] mt-1">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, required, ...props }, ref) => {
    const autoId = useId();
    const inputId = id || autoId;

    const inputElement = (
      <input
        ref={ref}
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={cn(
          "w-full px-4 py-2.5 rounded-xl border bg-white text-[#111827] placeholder:text-[#94A3B8] text-sm sm:text-base transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent",
          error
            ? "border-[#B91C1C] focus:ring-[#B91C1C]"
            : "border-[#D8E1EB] hover:border-[#94A3B8]",
          className
        )}
        {...props}
      />
    );

    if (label) {
      return (
        <FieldWrapper
          label={label}
          id={inputId}
          error={error}
          helperText={helperText}
          required={required}
        >
          {inputElement}
        </FieldWrapper>
      );
    }

    return inputElement;
  }
);
Input.displayName = "Input";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { label: string; value: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, id, required, options, ...props }, ref) => {
    const autoId = useId();
    const selectId = id || autoId;

    const selectElement = (
      <select
        ref={ref}
        id={selectId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
        className={cn(
          "w-full px-4 py-2.5 rounded-xl border bg-white text-[#111827] text-sm sm:text-base transition-colors appearance-none cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent",
          error
            ? "border-[#B91C1C] focus:ring-[#B91C1C]"
            : "border-[#D8E1EB] hover:border-[#94A3B8]",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );

    if (label) {
      return (
        <FieldWrapper
          label={label}
          id={selectId}
          error={error}
          helperText={helperText}
          required={required}
        >
          <div className="relative">
            {selectElement}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#64748B]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </FieldWrapper>
      );
    }

    return (
      <div className="relative">
        {selectElement}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#64748B]">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, required, rows = 4, ...props }, ref) => {
    const autoId = useId();
    const textareaId = id || autoId;

    const textareaElement = (
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        className={cn(
          "w-full px-4 py-2.5 rounded-xl border bg-white text-[#111827] placeholder:text-[#94A3B8] text-sm sm:text-base transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent",
          error
            ? "border-[#B91C1C] focus:ring-[#B91C1C]"
            : "border-[#D8E1EB] hover:border-[#94A3B8]",
          className
        )}
        {...props}
      />
    );

    if (label) {
      return (
        <FieldWrapper
          label={label}
          id={textareaId}
          error={error}
          helperText={helperText}
          required={required}
        >
          {textareaElement}
        </FieldWrapper>
      );
    }

    return textareaElement;
  }
);
Textarea.displayName = "Textarea";
