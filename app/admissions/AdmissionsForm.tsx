"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { coursesData } from "@/content/courses";
import { centresData } from "@/content/centres";
import { siteConfig } from "@/content/site-config";
import { normalizePhoneNumber, isValidEmail } from "@/lib/validation";
import { Input, Select, Textarea } from "@/components/ui/FormControls";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  Phone,
  ShieldCheck,
  Send,
  HelpCircle,
  Copy,
  Check,
} from "lucide-react";

export function AdmissionsForm() {
  const searchParams = useSearchParams();

  const initialCourse = searchParams.get("course")
    ? coursesData.find((c) => c.slug === searchParams.get("course"))?.title || "Help me choose"
    : "Help me choose";
  const initialCentre = searchParams.get("centre")
    ? centresData.find((c) => c.slug === searchParams.get("centre"))?.shortName || "No preference"
    : "No preference";

  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [preferredCourse, setPreferredCourse] = useState(initialCourse);
  const [preferredCentre, setPreferredCentre] = useState(initialCentre);
  const [currentClass, setCurrentClass] = useState("Class 10 to 11 Moving");
  const [parentName, setParentName] = useState("");
  const [message, setMessage] = useState("");
  const [consentContact, setConsentContact] = useState(true);
  const [consentPrivacy, setConsentPrivacy] = useState(true);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<null | {
    referenceId: string;
    message: string;
  }>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const courseOptions = [
    { label: "Help me choose the right path", value: "Help me choose" },
    ...coursesData.map((c) => ({ label: c.title, value: c.title })),
  ];

  const centreOptions = [
    { label: "No preference / Either centre", value: "No preference" },
    ...centresData.map((c) => ({ label: c.name, value: c.shortName })),
  ];

  const classOptions = [
    { label: "Class 10 Moving into Class 11", value: "Class 10 to 11 Moving" },
    { label: "Class 11 Moving into Class 12", value: "Class 11 to 12 Moving" },
    { label: "Class 12 Passed (Target / Dropper)", value: "Class 12 Passed / Repeater" },
    { label: "Class 9 or 10 (Foundation Batch)", value: "Class 9 or 10 Foundation" },
    { label: "Other / General Counseling", value: "Other" },
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!studentName.trim() || studentName.trim().length < 2) {
      newErrors.studentName = "Please enter student's full name (at least 2 characters).";
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter a 10-digit mobile number.";
    } else {
      const { isValid } = normalizePhoneNumber(mobileNumber);
      if (!isValid) {
        newErrors.mobileNumber = "Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).";
      }
    }

    if (email.trim() && !isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!consentContact) {
      newErrors.consentContact = "Consent to receive an admissions response is required.";
    }

    if (!consentPrivacy) {
      newErrors.consentPrivacy = "Acknowledgement of the privacy terms is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: studentName.trim(),
          mobileNumber: mobileNumber.trim(),
          email: email.trim() || undefined,
          preferredCourse,
          preferredCentre,
          currentClass,
          parentName: parentName.trim() || undefined,
          message: message.trim() || undefined,
          consentContact,
          consentPrivacy,
          marketingOptIn,
          website_hp: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(
          data.error || "Unable to submit enquiry. Please call our admissions desk directly."
        );
        if (data.validationErrors) {
          setErrors(data.validationErrors);
        }
      } else {
        setSubmissionSuccess({
          referenceId: data.referenceId,
          message: data.message,
        });
      }
    } catch (err) {
      console.error(err);
      setServerError(
        "Network connection error. Please call our admissions office at +91 7028766674."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyRef = () => {
    if (submissionSuccess?.referenceId) {
      navigator.clipboard.writeText(submissionSuccess.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setStudentName("");
    setMobileNumber("");
    setEmail("");
    setMessage("");
    setParentName("");
    setErrors({});
  };

  if (submissionSuccess) {
    return (
      <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#99F6E4] shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#0F766E] uppercase tracking-wider">
            Enquiry Successfully Submitted
          </span>
          <h3 className="text-2xl font-bold text-[#111827]">
            Thank You, {studentName || "Student"}!
          </h3>
          <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
            {submissionSuccess.message}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#F0FDFA] border border-[#A7F3D0] max-w-sm mx-auto flex items-center justify-between">
          <div className="text-left">
            <span className="text-[11px] font-semibold text-[#64748B] block">
              Admissions Reference ID
            </span>
            <span className="font-extrabold text-[#0F766E] text-base tracking-wide font-mono">
              {submissionSuccess.referenceId}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyRef}
            className="p-2 rounded-xl bg-white text-[#0F766E] hover:bg-[#ECFDF5] border border-[#A7F3D0] transition-colors cursor-pointer"
            title="Copy Reference ID"
          >
            {copiedRef ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
          <p className="text-xs text-[#64748B]">
            Need immediate assistance? Speak directly with our admissions counselor:
          </p>
          <a
            href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 font-bold text-sm text-[#1E40AF] hover:underline"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {siteConfig.primaryPhone}</span>
          </a>
        </div>

        <div className="pt-2">
          <Button onClick={handleReset} variant="outline" size="sm">
            <span>Submit Another Enquiry</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-7 sm:p-10 border border-[#D8E1EB] shadow-lg space-y-6"
    >
      <div className="border-b border-[#F1F5F9] pb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827]">
          Admissions Enquiry Form
        </h2>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1">
          Complete the form below to receive detailed course guides, fee schedules, and batch counseling.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-bold block">Submission Error</span>
            <span>{serverError}</span>
          </div>
        </div>
      )}

      {/* Honeypot field for anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Leave this empty</label>
        <input
          id="website_hp"
          name="website_hp"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="studentName"
          label="Student Full Name"
          required
          placeholder="e.g. Rahul Sharma"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          error={errors.studentName}
          autoComplete="name"
        />

        <Input
          id="mobileNumber"
          label="Mobile Number (Student or Parent)"
          required
          type="tel"
          placeholder="10-digit mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          error={errors.mobileNumber}
          helperText="e.g. 9876543210 (We will call/SMS on this number)"
          autoComplete="tel"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="name@example.com (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          autoComplete="email"
        />

        <Input
          id="parentName"
          label="Parent / Guardian Name"
          placeholder="Optional"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Select
          id="preferredCourse"
          label="Preferred Course"
          required
          value={preferredCourse}
          onChange={(e) => setPreferredCourse(e.target.value)}
          options={courseOptions}
        />

        <Select
          id="currentClass"
          label="Current Academic Class"
          value={currentClass}
          onChange={(e) => setCurrentClass(e.target.value)}
          options={classOptions}
        />

        <Select
          id="preferredCentre"
          label="Preferred Centre"
          value={preferredCentre}
          onChange={(e) => setPreferredCentre(e.target.value)}
          options={centreOptions}
        />
      </div>

      <Textarea
        id="message"
        label="Questions / Specific Academic Requirements"
        placeholder="Tell us about your target rank, board score goals, or any questions about our batches..."
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Mandatory Consents */}
      <div className="space-y-3 pt-2 border-t border-[#F1F5F9] text-xs">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={consentContact}
            onChange={(e) => setConsentContact(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded text-[#1E40AF] focus:ring-[#1D4ED8] cursor-pointer"
          />
          <span className="text-[#374151]">
            <strong className="text-[#111827]">Contact Consent (Required):</strong> I authorize Glorious Academy to contact me via phone call or SMS regarding course details, fees, and batch schedules.
          </span>
        </label>
        {errors.consentContact && (
          <p className="text-xs text-[#B91C1C] font-semibold pl-6">
            {errors.consentContact}
          </p>
        )}

        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={consentPrivacy}
            onChange={(e) => setConsentPrivacy(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded text-[#1E40AF] focus:ring-[#1D4ED8] cursor-pointer"
          />
          <span className="text-[#374151]">
            <strong className="text-[#111827]">Privacy Acknowledgement (Required):</strong> I agree that my details are processed strictly in accordance with Glorious Academy&apos;s{" "}
            <a href="/privacy-policy" target="_blank" className="text-[#1E40AF] underline">
              Privacy Policy
            </a>.
          </span>
        </label>
        {errors.consentPrivacy && (
          <p className="text-xs text-[#B91C1C] font-semibold pl-6">
            {errors.consentPrivacy}
          </p>
        )}

        {/* Optional marketing checkbox */}
        <label className="flex items-start gap-2.5 cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={marketingOptIn}
            onChange={(e) => setMarketingOptIn(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded text-[#1E40AF] focus:ring-[#1D4ED8] cursor-pointer"
          />
          <span className="text-[#64748B]">
            (Optional) Send me periodic updates regarding exam notification alerts and free PYQ releases.
          </span>
        </label>
      </div>

      <div className="pt-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full text-base font-bold shadow-md"
        >
          <Send className="w-4 h-4 mr-2" />
          <span>Submit Admission Enquiry</span>
        </Button>

        <p className="text-[11px] text-[#64748B] text-center mt-3">
          Note: Submitting this form constitutes an enquiry for counseling and fee quotation, not a binding fee payment or guaranteed seat.
        </p>
      </div>
    </form>
  );
}
