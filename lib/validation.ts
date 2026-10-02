import { EnquirySubmission, ContactSubmission } from "./types";

export function normalizePhoneNumber(rawPhone: string): { isValid: boolean; normalized: string } {
  if (!rawPhone) return { isValid: false, normalized: "" };
  // Remove spaces, hyphens, parentheses, plus
  let cleaned = rawPhone.replace(/[\s\-()]/g, "");

  if (cleaned.startsWith("+91")) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith("91") && cleaned.length === 12) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith("0") && cleaned.length === 11) {
    cleaned = cleaned.slice(1);
  }

  // Check if exactly 10 digits and starts with 6, 7, 8, or 9
  const indianMobileRegex = /^[6-9]\d{9}$/;
  const isValid = indianMobileRegex.test(cleaned);

  return {
    isValid,
    normalized: isValid ? `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}` : cleaned,
  };
}

export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export interface ValidationResult<T> {
  isValid: boolean;
  errors: Partial<Record<keyof T, string>>;
}

export function validateEnquiry(data: Partial<EnquirySubmission>): ValidationResult<EnquirySubmission> {
  const errors: Partial<Record<keyof EnquirySubmission, string>> = {};

  if (!data.studentName || data.studentName.trim().length < 2) {
    errors.studentName = "Please enter student's full name (at least 2 characters).";
  } else if (data.studentName.trim().length > 80) {
    errors.studentName = "Name must be less than 80 characters.";
  }

  if (!data.mobileNumber || !data.mobileNumber.trim()) {
    errors.mobileNumber = "Please enter a valid 10-digit mobile number.";
  } else {
    const { isValid } = normalizePhoneNumber(data.mobileNumber);
    if (!isValid) {
      errors.mobileNumber = "Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).";
    }
  }

  if (data.email && data.email.trim().length > 0) {
    if (!isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address or leave blank.";
    }
  }

  if (!data.preferredCourse || !data.preferredCourse.trim()) {
    errors.preferredCourse = "Please select a preferred course or choose 'Help me choose'.";
  }

  if (!data.consentContact) {
    errors.consentContact = "Your consent is required for the academy to contact you.";
  }

  if (!data.consentPrivacy) {
    errors.consentPrivacy = "Please acknowledge that you agree with the Privacy Policy.";
  }

  if (data.honeypot && data.honeypot.trim().length > 0) {
    // Bot detected
    errors.honeypot = "Spam detection triggered.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateContact(data: Partial<ContactSubmission>): ValidationResult<ContactSubmission> {
  const errors: Partial<Record<keyof ContactSubmission, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!data.phone || !data.phone.trim()) {
    errors.phone = "Please provide your contact number.";
  } else {
    const { isValid } = normalizePhoneNumber(data.phone);
    if (!isValid) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }
  }

  if (data.email && data.email.trim().length > 0) {
    if (!isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please write a message of at least 10 characters.";
  }

  if (!data.consentPrivacy) {
    errors.consentPrivacy = "Please acknowledge the Privacy Policy.";
  }

  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Spam detection triggered.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
