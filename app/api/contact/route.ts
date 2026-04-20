import { NextResponse } from "next/server";
import { getResend, getResendFrom } from "@/lib/resend";

const TO_EMAIL =
  process.env.CONTACT_EMAIL?.trim() ||
  process.env.APPLICATION_EMAIL?.trim() ||
  "info@xeniumxcel.com";

const MAX_ATTACHMENT_BYTES = 15 * 1024 * 1024;

const TOPIC_LABELS: Record<string, string> = {
  manpower: "Manpower / vacancy",
  visa: "Visa processing",
  sponsorship: "Australia sponsorship",
  services: "Services & sectors",
  ticketing: "Travel / ticketing",
  training: "Training preparation",
  other: "Other",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildContactHtml(fields: {
  name: string;
  email: string;
  org: string;
  phone: string;
  topicLabel: string;
  message: string;
}) {
  const e = escapeHtml;
  const rows = [
    ["Name", e(fields.name)],
    ["Email", e(fields.email)],
    ["Organization", fields.org ? e(fields.org) : "—"],
    ["Phone", fields.phone ? e(fields.phone) : "—"],
    ["Topic", e(fields.topicLabel)],
    ["Message", e(fields.message).replace(/\n/g, "<br/>")],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#0f172a;font-size:14px">${v}</td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:680px;margin:0 auto;padding:24px;background:#f8fafc">
  <div style="background:#081833;color:white;padding:24px 28px;border-radius:12px 12px 0 0">
    <h1 style="margin:0;font-size:20px">Website contact inquiry</h1>
    <p style="margin:6px 0 0;opacity:0.7;font-size:13px">${escapeHtml(fields.topicLabel)}</p>
  </div>
  <div style="background:white;padding:24px 28px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
    <table style="width:100%;border-collapse:collapse">${rows}</table>
    <p style="font-size:12px;color:#94a3b8;margin-top:32px;text-align:center">Submitted from xeniumxcel.com contact form</p>
  </div>
</body></html>`;
}

function safeFilename(name: string) {
  const base = name.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 180);
  return base || "attachment";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const org = String(formData.get("organization") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const topicKey = String(formData.get("topic") ?? "").trim();

    if (!name || !email || !message || !topicKey) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        { success: false, message: "Message is too short." },
        { status: 400 },
      );
    }

    const topicLabel = TOPIC_LABELS[topicKey] || topicKey;

    const file = formData.get("attachment");
    let attachments:
      | { filename: string; content: Buffer }[]
      | undefined;

    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_ATTACHMENT_BYTES) {
        return NextResponse.json(
          { success: false, message: "Attachment must be 15 MB or smaller." },
          { status: 400 },
        );
      }
      const buf = Buffer.from(await file.arrayBuffer());
      attachments = [{ filename: safeFilename(file.name), content: buf }];
    }

    const resend = getResend();

    const { error } = await resend.emails.send({
      from: getResendFrom(),
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[${topicLabel}] Inquiry from ${name}`,
      html: buildContactHtml({
        name,
        email,
        org,
        phone,
        topicLabel,
        message,
      }),
      attachments,
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API /api/contact error:", err);
    const message =
      err instanceof Error && err.message.includes("RESEND_API_KEY")
        ? "Email service is not configured."
        : "Server error.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
