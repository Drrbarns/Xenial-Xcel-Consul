"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall } from "lucide-react";
import { navLinks, company } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-primary text-primary-foreground">
        <Container className="flex min-h-10 items-center justify-center text-center text-xs md:text-sm">
          {company.topBarLine}
        </Container>
      </div>
      <div className="border-b border-border/80 bg-white/95 backdrop-blur-sm">
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="space-y-0.5">
            <p className="font-[var(--font-heading)] text-lg font-bold text-primary tracking-tight">
              {company.name}
            </p>
            <p className="text-xs text-accent uppercase tracking-widest font-semibold">{company.tagline}</p>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-slate-600 transition-colors hover:text-primary",
                  pathname === link.href && "text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild className="rounded-full shadow-premium">
              <Link href="/apply-available-job">APPLY AVAILABLE JOB</Link>
            </Button>
            <a
              href={`tel:${company.phoneLinks[0]}`}
              className="flex items-center gap-2 text-sm text-slate-700 font-medium"
            >
              <PhoneCall className="h-4 w-4 text-accent" />
              {company.phones[0]}
            </a>
            <Button asChild variant="gold" className="rounded-full shadow-premium">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-10 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link href={link.href} className="text-base font-medium text-slate-700">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <Button asChild className="mt-2 rounded-full shadow-premium" variant="gold">
                  <Link href="/contact">Contact</Link>
                </Button>
                <Button asChild className="rounded-full shadow-premium">
                  <Link href="/apply-available-job">APPLY AVAILABLE JOB</Link>
                </Button>
                <SheetClose asChild>
                  <Link href="/request" className="text-sm text-slate-700">
                    Request manpower
                  </Link>
                </SheetClose>
                <a
                  href={`tel:${company.phoneLinks[0]}`}
                  className="text-sm text-muted-foreground"
                >
                  {company.phones[0]}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </Container>
      </div>
    </header>
  );
}
