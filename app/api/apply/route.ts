import { NextResponse } from "next/server";
import { FORMS_INBOX_EMAIL } from "@/lib/forms-inbox";
import {
  getResend,
  getResendFrom,
  formatResendError,
  sanitizeEmail,
} from "@/lib/resend";
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

type ApplicationData = {
  personal: Record<string, string>;
  professional: Record<string, string>;
  roles: string[];
  otherRole?: string;
  salary: string;
  sponsorship: Record<string, string>;
  fees: Record<string, string>;
  technical: Record<string, string>;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeFilename(name: string) {
  const base = name.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 180);
  return base || "application-documents";
}

function row(label: string, value: string) {
  if (!value) return "";
  const cell = escapeHtml(value).replace(/\n/g, "<br/>");
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#0f172a;font-size:14px">${cell}</td></tr>`;
}

function sectionHtml(title: string, rows: string) {
  return `
    <div style="margin-bottom:28px">
      <h2 style="font-size:16px;color:#081833;border-bottom:2px solid #C8A45D;padding-bottom:6px;margin-bottom:0">${escapeHtml(title)}</h2>
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

  const rolesList = [...data.roles];
  if (data.otherRole && data.otherRole.trim()) {
    rolesList.push(`Other: ${data.otherRole.trim()}`);
  }
  const roles = row("Applied Roles", rolesList.join(", "));
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

function isApplicationData(data: unknown): data is ApplicationData {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.personal === "object" &&
    d.personal !== null &&
    typeof d.professional === "object" &&
    d.professional !== null &&
    Array.isArray(d.roles) &&
    typeof d.salary === "string" &&
    typeof d.sponsorship === "object" &&
    d.sponsorship !== null &&
    typeof d.fees === "object" &&
    d.fees !== null &&
    typeof d.technical === "object" &&
    d.technical !== null
  );
}

const MAX_TOTAL_ATTACHMENT_BYTES = 25 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    let data: ApplicationData;
    let files: File[] = [];

    const ct = request.headers.get("content-type") || "";
    if (ct.includes("multipart/form-data")) {
      const form = await request.formData();
      const raw = form.get("application");
      if (typeof raw !== "string") {
        return NextResponse.json(
          { success: false, message: "Invalid form submission." },
          { status: 400 },
        );
      }
      try {
        data = JSON.parse(raw) as ApplicationData;
      } catch {
        return NextResponse.json(
          { success: false, message: "Invalid application data." },
          { status: 400 },
        );
      }
      const incoming = [
        ...form.getAll("attachments"),
        ...form.getAll("attachment"),
      ];
      files = incoming.filter(
        (att): att is File => att instanceof File && att.size > 0,
      );
    } else {
      const body = await request.json();
      if (!isApplicationData(body)) {
        return NextResponse.json(
          { success: false, message: "Incomplete application." },
          { status: 400 },
        );
      }
      data = body;
    }

    if (!isApplicationData(data)) {
      return NextResponse.json(
        { success: false, message: "Incomplete application." },
        { status: 400 },
      );
    }

    const applicantName =
      data.personal["Full Name"] || data.personal["full_name"] || "Unknown";
    const applicantEmail = sanitizeEmail(
      data.personal["Email Address"] || data.personal["email"] || "",
    );

    let attachments: { filename: string; content: Buffer }[] | undefined;
    if (files.length > 0) {
      let total = 0;
      const acc: { filename: string; content: Buffer }[] = [];
      const seenNames = new Map<string, number>();
      for (const f of files) {
        if (f.size > MAX_ATTACHMENT_BYTES) {
          return NextResponse.json(
            { success: false, message: `"${f.name}" is larger than 25 MB.` },
            { status: 400 },
          );
        }
        total += f.size;
        if (total > MAX_TOTAL_ATTACHMENT_BYTES) {
          return NextResponse.json(
            { success: false, message: "Combined attachments exceed 25 MB. Please remove a file or send via WhatsApp." },
            { status: 400 },
          );
        }
        let filename = safeFilename(f.name);
        const count = seenNames.get(filename) ?? 0;
        if (count > 0) {
          const dot = filename.lastIndexOf(".");
          filename = dot > 0
            ? `${filename.slice(0, dot)}-${count}${filename.slice(dot)}`
            : `${filename}-${count}`;
        }
        seenNames.set(safeFilename(f.name), count + 1);
        acc.push({ filename, content: Buffer.from(await f.arrayBuffer()) });
      }
      attachments = acc;
    }

    let resend;
    try {
      resend = getResend();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured. Add RESEND_API_KEY to your hosting environment (e.g. Vercel → Settings → Environment Variables).",
        },
        { status: 500 },
      );
    }

    console.log("[apply] sending via Resend", {
      from: getResendFrom(),
      to: FORMS_INBOX_EMAIL,
      replyTo: applicantEmail ?? "(omitted — invalid or missing)",
      hasAttachment: Boolean(attachments?.length),
    });

    const { data: sent, error } = await resend.emails.send({
      from: getResendFrom(),
      to: [FORMS_INBOX_EMAIL],
      ...(applicantEmail ? { replyTo: applicantEmail } : {}),
      subject: `New Application: ${applicantName} — Oil & Gas (Australia)`,
      html: buildEmailHtml(data),
      ...(attachments?.length ? { attachments } : {}),
    });

    if (error) {
      console.error("Resend apply error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { success: false, message: formatResendError(error) },
        { status: 502 },
      );
    }

    console.log("[apply] Resend accepted", {
      id: sent?.id,
      to: FORMS_INBOX_EMAIL,
    });
    return NextResponse.json({ success: true, id: sent?.id ?? null });
  } catch (err) {
    console.error("API /api/apply error:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          err instanceof Error ? err.message.slice(0, 200) : "Server error.",
      },
      { status: 500 },
    );
  }
}
