import { NextRequest, NextResponse } from "next/server";
import { validateEnquiry } from "@/lib/validation";
import { saveEnquiry } from "@/lib/storage";
import { notifyAdmissionsTeam } from "@/lib/notifications";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const rateCheck = checkRateLimit(`enq_${ip}`, 5, 60 * 1000);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many submissions. Please wait ${rateCheck.resetInSeconds} seconds before trying again.`,
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Check honeypot bot trap
    if (body.website_hp || body.honeypot) {
      return NextResponse.json(
        { success: false, error: "Validation error" },
        { status: 400 }
      );
    }

    const validation = validateEnquiry(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Please correct the errors in the form.",
          validationErrors: validation.errors,
        },
        { status: 422 }
      );
    }

    // Persist to durable storage
    const record = await saveEnquiry(body);

    // Notify admissions team asynchronously
    try {
      await notifyAdmissionsTeam(record);
    } catch (notifErr) {
      console.warn("Notification dispatch failed but enquiry was safely saved:", notifErr);
    }

    return NextResponse.json(
      {
        success: true,
        referenceId: record.referenceId,
        message: "Your enquiry has been received. The academy will contact you using the details provided.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admissions enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "We could not process your enquiry right now. Please call +91 7028766674 directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Disallowed per brief: expose no public endpoint for listing enquiries
  return NextResponse.json(
    { error: "Method not allowed. Enquiry records are private." },
    { status: 405 }
  );
}
