import { EnquiryRecord, ContactRecord } from "./types";
import { siteConfig } from "@/content/site-config";

export interface NotificationResult {
  sent: boolean;
  logged: boolean;
  destination: string;
  error?: string;
}

// Persistence happens in the API before this adapter runs. No email transport
// is connected yet; configuring SMTP variables alone does not deliver email.
function recordPendingNotification(kind: string, referenceId: string): NotificationResult {
  const destination = process.env.ACADEMY_NOTIFY_EMAIL || siteConfig.confirmedEmail;
  console.info(`[${kind}] ${referenceId}: saved; email delivery is not configured.`);
  return { sent: false, logged: true, destination, error: "Email transport is not configured." };
}

export async function notifyAdmissionsTeam(enquiry: EnquiryRecord): Promise<NotificationResult> {
  return recordPendingNotification("Admissions", enquiry.referenceId);
}

export async function notifyContactTeam(contact: ContactRecord): Promise<NotificationResult> {
  return recordPendingNotification("Contact", contact.referenceId);
}
