import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, optedIn } = body;

    // Validate required fields
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    // Upsert into Supabase contacts table
    const supabase = getSupabase();
    const { error: dbError } = await supabase
      .from("contacts")
      .upsert(
        {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone?.trim() || null,
          message: message?.trim() || null,
          opted_in: optedIn ?? true,
          source: "website",
        },
        { onConflict: "email" }
      );

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save contact." },
        { status: 500 }
      );
    }

    // Send notification email to Danny
    const resend = getResend();
    const { error: emailError } = await resend.emails.send({
      from: "Tikkun Capital <danny@tikkun.capital>",
      to: "danny@tikkun.capital",
      subject: `New inquiry from ${firstName.trim()} ${lastName.trim()}`,
      text: [
        `Name: ${firstName.trim()} ${lastName.trim()}`,
        `Email: ${email.trim()}`,
        phone?.trim() ? `Phone: ${phone.trim()}` : null,
        message?.trim() ? `\nMessage:\n${message.trim()}` : null,
        `\nOpted in to updates: ${optedIn ? "Yes" : "No"}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      // Don't fail the request — contact was saved, email is secondary
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
