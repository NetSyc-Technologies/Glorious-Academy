export type VerificationStatus = "legacy" | "pending" | "approved" | "archived";

export interface SiteSettings {
  brandName: string;
  legalName: string;
  tagline: string;
  primaryPhone: string;
  altPhone?: string;
  confirmedEmail: string;
  canonicalDomain: string;
  socialUrls: {
    youtube?: string;
    facebook?: string;
    instagram?: string;
    telegram?: string;
  };
  announcement?: {
    enabled: boolean;
    text: string;
    linkText?: string;
    linkHref?: string;
  };
}

export interface ProgramVariant {
  id: string;
  name: string;
  duration: string;
  mode: "Classroom Offline" | "Online Live" | "Self-Study Hybrid";
  targetClass: string;
  batchStatus: string;
  keyInclusions: string[];
  feeNotice: string;
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  summary: string;
  academicCue: "engineering" | "medical" | "state-entrance" | "foundations";
  colorTheme: {
    primary: string;
    bgSubtle: string;
    border: string;
  };
  targetAudience: string;
  subjects: string[];
  availableModes: string[];
  keySupportFeatures: string[];
  detailedInclusions: {
    title: string;
    description: string;
  }[];
  learningProcess: {
    step: number;
    title: string;
    description: string;
  }[];
  variants: ProgramVariant[];
  faqs: {
    question: string;
    answer: string;
  }[];
  centresAvailable: string[];
}

export interface Centre {
  slug: string;
  name: string;
  shortName: string;
  fullAddress: string;
  landmark?: string;
  city: string;
  pin: string;
  phone: string;
  altPhone?: string;
  directionsUrl: string;
  operatingHours: string;
  offeredCourseSlugs: string[];
  features: string[];
}

export interface StudentResult {
  id: string;
  studentName: string;
  exam: "JEE Main & Adv" | "NEET" | "MHT-CET" | "Class 10 CBSE" | "Class 12 CBSE";
  year: string;
  scoreOrMetric: string;
  metricType: "Score / Percentage" | "Percentile" | "Rank";
  destinationOrSchool?: string;
  verificationStatus: VerificationStatus;
}

export interface Testimonial {
  id: string;
  studentName: string;
  examOrClass: string;
  quote: string;
  year?: string;
  scoreContext?: string;
  verificationStatus: VerificationStatus;
}

export interface ResourcePaper {
  id: string;
  title: string;
  exam: "JEE Main" | "JEE Advanced" | "NEET" | "MHT-CET" | "CBSE Class 10" | "CBSE Class 12";
  year: number;
  subjectOrSession: string;
  type: "Question Paper" | "Answer Key & Solution";
  fileSize: string;
  format: "PDF";
  downloadFileName: string;
  sourceAttribution: string;
  verificationStatus: VerificationStatus;
}

export interface FAQItem {
  id: string;
  category: "Courses" | "Centres" | "Admissions & Fees" | "Learning Support" | "Resources";
  question: string;
  answer: string;
  relatedRoute?: string;
}

export interface EnquirySubmission {
  studentName: string;
  mobileNumber: string;
  email?: string;
  preferredCourse: string;
  preferredCentre: string;
  currentClass?: string;
  parentName?: string;
  message?: string;
  consentPrivacy: boolean;
  consentContact: boolean;
  marketingOptIn?: boolean;
  honeypot?: string;
}

export interface EnquiryRecord extends EnquirySubmission {
  id: string;
  referenceId: string;
  createdAt: string;
  status: "new" | "contacted" | "enrolled" | "archived";
}

export interface ContactSubmission {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  consentPrivacy: boolean;
  honeypot?: string;
}

export interface ContactRecord extends ContactSubmission {
  id: string;
  referenceId: string;
  createdAt: string;
}
