import fs from "fs/promises";
import path from "path";
import { EnquirySubmission, EnquiryRecord, ContactSubmission, ContactRecord } from "./types";
import { normalizePhoneNumber } from "./validation";

const DATA_DIR = path.join(process.cwd(), "data");
const ENQUIRIES_FILE = path.join(DATA_DIR, "enquiries.json");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error("Could not create data directory", error);
  }
}

function generateReferenceId(prefix: string = "GA"): string {
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(10000 + Math.random() * 90000); // 5 digits
  return `${prefix}-${year}-${randomSuffix}`;
}

export async function saveEnquiry(submission: EnquirySubmission): Promise<EnquiryRecord> {
  await ensureDataDir();

  let existing: EnquiryRecord[] = [];
  try {
    const raw = await fs.readFile(ENQUIRIES_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  const { normalized } = normalizePhoneNumber(submission.mobileNumber);

  const newRecord: EnquiryRecord = {
    ...submission,
    id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceId: generateReferenceId("GA"),
    mobileNumber: normalized,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  existing.unshift(newRecord);

  // Write atomically
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), "utf-8");

  return newRecord;
}

export async function saveContact(submission: ContactSubmission): Promise<ContactRecord> {
  await ensureDataDir();

  let existing: ContactRecord[] = [];
  try {
    const raw = await fs.readFile(CONTACTS_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  const { normalized } = normalizePhoneNumber(submission.phone);

  const newRecord: ContactRecord = {
    ...submission,
    id: `cnt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceId: generateReferenceId("GAC"),
    phone: normalized,
    createdAt: new Date().toISOString(),
  };

  existing.unshift(newRecord);

  await fs.writeFile(CONTACTS_FILE, JSON.stringify(existing, null, 2), "utf-8");

  return newRecord;
}
