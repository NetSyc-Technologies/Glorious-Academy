import { NextRequest, NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
import { saveContact } from "@/lib/storage";
import { notifyContactTeam } from "@/lib/notifications";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const rateCheck = checkRateLimit(`cnt_${ip}`, 5, 60 * 1000);

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

    if (body.website_hp || body.honeypot) {
      return NextResponse.json(
        { success: false, error: "Validation error" },
        { status: 400 }
      );
    }

    const validation = validateContact(body);
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

    const record = await saveContact(body);

    try {
      await notifyContactTeam(record);
    } catch (notifErr) {
      console.warn("Contact notification error:", notifErr);
    }

    return NextResponse.json(
      {
        success: true,
        referenceId: record.referenceId,
        message: "Your message has been received and saved. Please keep your reference number. For urgent assistance, call +91 7028766674.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact message submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "We could not send your message right now. Please call +91 7028766674 directly.",
      },
      { status: 500 }
    );
  }
}
