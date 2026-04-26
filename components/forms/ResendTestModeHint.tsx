"use client";

/**
 * When Resend returns the "testing emails only to your own address" error, show what to do next.
 */
export function ResendTestModeHint({ message }: { message: string }) {
  const lower = message.toLowerCase();
  const isTestRestriction =
    lower.includes("only send testing emails") ||
    lower.includes("send emails to other recipients");

  if (!isTestRestriction) return null;

  const match = message.match(/\(([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\)/);
  const resendAllowedTo = match?.[1];

  return (
    <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-950 leading-relaxed space-y-2">
      <p className="font-semibold text-amber-900">How to fix this (pick one)</p>
      <ol className="list-decimal space-y-2 pl-4">
        <li>
          <strong>Production (recommended):</strong> In{" "}
          <a
            href="https://resend.com/domains"
            className="font-medium text-primary underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Resend → Domains
          </a>
          , add and verify <code className="rounded bg-amber-100/80 px-1">xeniumxcel.com</code>. Then set{" "}
          <code className="rounded bg-amber-100/80 px-1">RESEND_FROM</code> to an address on that domain (e.g.{" "}
          <code className="rounded bg-amber-100/80 px-1">hello@xeniumxcel.com</code>). After that,{" "}
          <code className="rounded bg-amber-100/80 px-1">FORMS_EMAIL=info@xeniumxcel.com</code> will work.
        </li>
        <li>
          <strong>While still on the test sender:</strong> In Vercel (or your host), set{" "}
          <code className="rounded bg-amber-100/80 px-1">FORMS_EMAIL</code> to the exact address Resend allows
          {resendAllowedTo ? (
            <>
              :{" "}
              <code className="break-all rounded bg-amber-100/80 px-1 py-0.5 text-[11px]">{resendAllowedTo}</code>
            </>
          ) : (
            <> (the address shown in the red message above)</>
          )}
          . Redeploy, submit again — then forward from that inbox to{" "}
          <code className="rounded bg-amber-100/80 px-1">info@xeniumxcel.com</code> if needed.
        </li>
      </ol>
    </div>
  );
}
