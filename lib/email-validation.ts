/**
 * Shared email validation (used by API routes and client forms).
 * Resend enforces a strict format on from / to / replyTo.
 */
export function sanitizeEmail(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const EMAIL_RE = /^[^\s<>@,;"]+@[^\s<>@,;"]+\.[^\s<>@,;"]{2,}$/;
  return EMAIL_RE.test(trimmed) ? trimmed : undefined;
}

export function isValidEmailString(value: unknown): boolean {
  return sanitizeEmail(value) !== undefined;
}
