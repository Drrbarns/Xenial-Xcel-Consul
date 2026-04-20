import { NextResponse } from "next/server";
import { getResend, getResendFrom } from "@/lib/resend";

const TO_EMAIL = process.env.APPLICATION_EMAIL || "info@xeniumxcel.com";

type ApplicationData = {
  personal: Record<string, string>;
  professional: Record<string, string>;
  roles: string[];
  salary: string;
  sponsorship: Record<string, string>;
  fees: Record<string, string>;
  technical: Record<string, string>;
};

function row(label: string, value: string) {
  if (!value) return "";
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#0f172a;font-size:14px">${value}</td></tr>`;
}

function sectionHtml(title: string, rows: string) {
  return `
    <div style="margin-bottom:28px">
      <h2 style="font-size:16px;color:#081833;border-bottom:2px solid #C8A45D;padding-bottom:6px;margin-bottom:0">${title}</h2>
      <table style="width:100%;border-collapse:collapse">${rows}</table>
    </div>`;
}

function buildEmailHtml(data: ApplicationData): string {
  const personal = Object.entries(data.personal)
    .map(([k, v]) => row(k, v))
    .join("");

  const professional = Object.entries(data.professional)
    .map(([k, v]) => row(k, v))
    .join("");

  const roles = row("Applied Roles", data.roles.join(", "));
  const salary = row("Expected Salary", data.salary);

  const sponsorship = Object.entries(data.sponsorship)
    .map(([k, v]) => row(k, v))
    .join("");

  const fees = Object.entries(data.fees)
    .map(([k, v]) => row(k, v))
    .join("");

  const technical = Object.entries(data.technical)
    .map(([k, v]) => row(k, v))
    .join("");

  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"></head>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:680px;margin:0 auto;padding:24px;background:#f8fafc">
    <div style="background:#081833;color:white;padding:24px 28px;border-radius:12px 12px 0 0">
      <h1 style="margin:0;font-size:20px">New Job Application Received</h1>
      <p style="margin:6px 0 0;opacity:0.7;font-size:13px">Oil &amp; Gas Employment — Australia Sponsorship</p>
    </div>
    <div style="background:white;padding:24px 28px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
      ${sectionHtml("Personal Information", personal)}
      ${sectionHtml("Professional Background", professional)}
      ${sectionHtml("Job Role & Salary", roles + salary)}
      ${sectionHtml("Sponsorship Package & Terms", sponsorship)}
      ${sectionHtml("Fees & Payment Terms", fees)}
      ${sectionHtml("Technical & Industry Questions", technical)}
      <p style="font-size:12px;color:#94a3b8;margin-top:32px;text-align:center">
        Submitted from xeniumxcel.com application form
      </p>
    </div>
  </body>
  </html>`;
}

export async function POST(request: Request) {
  try {
    const data: ApplicationData = await request.json();

    const applicantName =
      data.personal["Full Name"] || data.personal["full_name"] || "Unknown";
    const applicantEmail =
      data.personal["Email Address"] || data.personal["email"] || "";

    const resend = getResend();

    const { error } = await resend.emails.send({
      from: getResendFrom(),
      to: [TO_EMAIL],
      replyTo: applicantEmail || undefined,
      subject: `New Application: ${applicantName} — Oil & Gas (Australia)`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API /api/apply error:", err);
    return NextResponse.json(
      { success: false, message: "Server error." },
      { status: 500 }
    );
  }
}
