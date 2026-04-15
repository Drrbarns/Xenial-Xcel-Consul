import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] bg-slate-50">
      <div className="mx-auto max-w-2xl space-y-5 text-center">
        <p className="text-sm uppercase tracking-widest text-accent">Page Not Found</p>
        <h1 className="font-[var(--font-heading)] text-4xl font-semibold text-primary">
          Let us guide you to the right page
        </h1>
        <p className="text-slate-600">
          The page you are looking for is unavailable. You can continue through the main
          recruitment journey below.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/request">Request Manpower</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
