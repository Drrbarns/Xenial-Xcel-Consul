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
