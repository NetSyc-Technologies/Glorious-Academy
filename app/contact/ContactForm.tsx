"use client";

import React, { useState } from "react";
import { normalizePhoneNumber, isValidEmail } from "@/lib/validation";
import { Input, Textarea } from "@/components/ui/FormControls";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send, Phone } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consentPrivacy, setConsentPrivacy] = useState(true);
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successResult, setSuccessResult] = useState<null | {
    referenceId: string;
    message: string;
  }>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else {
      const { isValid } = normalizePhoneNumber(phone);
      if (!isValid) {
        newErrors.phone = "Please enter a valid 10-digit mobile number.";
      }
    }

    if (email.trim() && !isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = "Please write a message of at least 10 characters.";
    }

    if (!consentPrivacy) {
      newErrors.consentPrivacy = "Please agree to the privacy policy.";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          subject: subject.trim() || undefined,
          message: message.trim(),
          consentPrivacy,
          website_hp: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(
          data.error || "Unable to send message. Please call our campus directly."
        );
      } else {
        setSuccessResult({
          referenceId: data.referenceId,
          message: data.message,
        });
      }
    } catch (err) {
      console.error(err);
      setServerError("Network error. Please call +91 7028766674 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successResult) {
    return (
      <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#99F6E4] shadow-lg text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] text-[#0F766E] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-bold text-[#111827]">
          Message Received
        </h3>

        <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
          {successResult.message}
        </p>

        <div className="p-3.5 rounded-xl bg-[#F0FDFA] border border-[#A7F3D0] max-w-xs mx-auto text-xs">
          <span className="text-[#64748B] block">Tracking Reference</span>
          <span className="font-extrabold text-[#0F766E] font-mono text-sm">
            {successResult.referenceId}
          </span>
        </div>

        <div className="pt-3">
          <Button
            onClick={() => {
              setSuccessResult(null);
              setName("");
              setPhone("");
              setEmail("");
              setMessage("");
              setSubject("");
            }}
            variant="outline"
            size="sm"
          >
            <span>Send Another Message</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-7 sm:p-10 border border-[#D8E1EB] shadow-md space-y-5"
    >
      <div>
        <h3 className="text-xl font-bold text-[#111827]">
          Send Us a Direct Message
        </h3>
        <p className="text-xs text-[#64748B] mt-1">
          Have a question about courses, batch transfers, or centre facilities? Write to us below.
        </p>
      </div>

      {serverError && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          name="website_hp"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="contactName"
          label="Your Name"
          required
          placeholder="e.g. Anand Kulkarni"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <Input
          id="contactPhone"
          label="Phone Number"
          required
          type="tel"
          placeholder="10-digit number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="contactEmail"
          label="Email Address (Optional)"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <Input
          id="contactSubject"
          label="Subject / Topic"
          placeholder="e.g. JEE Batch Timings"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <Textarea
        id="contactMessage"
        label="Message"
        required
        placeholder="How can our academic team help you?"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={errors.message}
      />

      <label className="flex items-start gap-2.5 text-xs text-[#4B5563] cursor-pointer pt-1">
        <input
          type="checkbox"
          checked={consentPrivacy}
          onChange={(e) => setConsentPrivacy(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded text-[#1E40AF] focus:ring-[#1D4ED8]"
        />
        <span>
          I acknowledge that my contact information will be used by Glorious Academy to respond to this message in accordance with the Privacy Policy.
        </span>
      </label>
      {errors.consentPrivacy && (
        <p className="text-xs text-[#B91C1C] font-semibold">{errors.consentPrivacy}</p>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          className="w-full font-bold"
        >
          <Send className="w-4 h-4 mr-2" />
          <span>Send Message</span>
        </Button>
      </div>
    </form>
  );
}
