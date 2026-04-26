import { Resend } from "resend";

export function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

/** Verified sender in Resend (e.g. onboarding@resend.dev for testing, or your domain). */
export function getResendFrom() {
  return (
    process.env.RESEND_FROM?.trim() ||
    "Xenium Xcel Consult <onboarding@resend.dev>"
  );
}

/** Resend SDK returns `{ message }` on failure — surface it so production issues are diagnosable. */
export function formatResendError(error: unknown): string {
  if (error == null) return "Failed to send email.";
  const e = error as { message?: string };
  if (typeof e.message === "string" && e.message.trim()) {
    const m = e.message.trim();
    return m.length > 450 ? `${m.slice(0, 447)}…` : m;
  }
  return "Failed to send email.";
}
