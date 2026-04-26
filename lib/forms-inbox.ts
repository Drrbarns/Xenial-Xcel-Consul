/**
 * Single inbox for Resend deliveries: job applications, contact form, etc.
 * Set FORMS_EMAIL in production, or APPLICATION_EMAIL / CONTACT_EMAIL for compatibility.
 */
export const FORMS_INBOX_EMAIL =
  process.env.FORMS_EMAIL?.trim() ||
  process.env.APPLICATION_EMAIL?.trim() ||
  process.env.CONTACT_EMAIL?.trim() ||
  "info@xeniumxcel.com";
