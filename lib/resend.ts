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

/**
 * Resend enforces a strict email format on `from` / `to` / `replyTo`.
 * Returns the trimmed address when it looks valid, otherwise `undefined`.
 * A very pragmatic regex — avoids false negatives for real-world addresses while
 * catching empty / obviously malformed values (no @, spaces, missing TLD, etc.).
 */
export function sanitizeEmail(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const EMAIL_RE = /^[^\s<>@,;"]+@[^\s<>@,;"]+\.[^\s<>@,;"]{2,}$/;
  return EMAIL_RE.test(trimmed) ? trimmed : undefined;
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
