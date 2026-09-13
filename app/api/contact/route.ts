import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { getPremiumEmailHtml } from "@/lib/email-template";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, services } = body;

    // Simple backend validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailHtml = getPremiumEmailHtml({
      name,
      email,
      phone,
      message,
      services: services || [],
    });

    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "idealdesign.studio12@gmail.com";

    const { data, error } = await resend.emails.send({
      from: `Creative Idea <${senderEmail}>`,
      to: [receiverEmail],
      subject: `New Project Inquiry from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Contact Form Server Error:", err);
    const message = err instanceof Error ? err.message : "Internal server error occurred.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
