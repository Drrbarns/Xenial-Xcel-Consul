"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, PhoneCall } from "lucide-react";
import { navLinks, company, servicesMenu } from "@/lib/mockData";
import { SITE_LOGO_PATH } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const isServicesActive =
    isActive("/services") || isActive("/process") || isActive("/concerns");

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-primary text-primary-foreground">
        <Container className="flex min-h-10 items-center justify-center text-center text-[11px] sm:text-xs md:text-sm">
          {company.topBarLine}
        </Container>
      </div>

      <div className="border-b border-border/80 bg-white/95 backdrop-blur-sm">
        <Container className="flex h-20 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="shrink-0 outline-none ring-offset-2 transition-opacity hover:opacity-90 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Image
              src={SITE_LOGO_PATH}
              alt={`${company.name} — ${company.tagline}`}
              width={612}
              height={479}
              className="h-9 w-auto sm:h-10 md:h-11"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    className="group relative"
                  >
                    <Link
                      href="/services"
                      className={cn(
                        "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary",
                        isServicesActive && "text-primary",
                      )}
                      aria-haspopup="menu"
                    >
                      {link.label}
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                        aria-hidden
                      />
                    </Link>

                    <div
                      className="invisible absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                      role="menu"
                    >
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_60px_-24px_rgba(8,24,51,0.25)]">
                        {servicesMenu.map((item) => {
                          const active = isActive(item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              role="menuitem"
                              className={cn(
                                "block rounded-xl px-4 py-3 transition-colors hover:bg-slate-50",
                                active && "bg-slate-50",
                              )}
                            >
                              <p
                                className={cn(
                                  "font-[var(--font-heading)] text-sm font-semibold text-primary",
                                  active && "text-accent",
                                )}
                              >
                                {item.label}
                              </p>
                              <p className="mt-0.5 text-xs text-slate-500">
                                {item.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary",
                    isActive(link.href) && "text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${company.phoneLinks[0]}`}
              className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-700 xl:flex"
            >
              <PhoneCall className="h-4 w-4 text-accent" />
              {company.phones[0]}
            </a>
            <Button
              asChild
              size="sm"
              className="whitespace-nowrap rounded-full px-4 shadow-premium"
            >
              <Link href="/apply-available-job">Apply for Job</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="gold"
              className="whitespace-nowrap rounded-full px-4 shadow-premium"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile trigger */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="sm" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex flex-col gap-1 border-b border-slate-200 pb-6">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="mx-auto block w-fit outline-none ring-offset-2 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Image
                      src={SITE_LOGO_PATH}
                      alt={`${company.name} — ${company.tagline}`}
                      width={612}
                      height={479}
                      className="h-12 w-auto"
                    />
                  </Link>
                </SheetClose>
              </div>
              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => {
                  if (link.href === "/services") {
                    return (
                      <div key={link.href} className="space-y-1">
                        <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                          {link.label}
                        </p>
                        {servicesMenu.map((item) => (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary",
                                isActive(item.href) && "bg-slate-100 text-primary",
                              )}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        ))}
                        <div className="mx-3 my-3 h-px bg-slate-200" />
                      </div>
                    );
                  }
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary",
                          isActive(link.href) && "bg-slate-100 text-primary",
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}

                <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
                  <Button asChild className="w-full rounded-full shadow-premium">
                    <Link href="/apply-available-job">APPLY AVAILABLE JOB</Link>
                  </Button>
                  <Button
                    asChild
                    variant="gold"
                    className="w-full rounded-full shadow-premium"
                  >
                    <Link href="/contact">Contact us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-primary/20"
                  >
                    <Link href="/request">Request manpower</Link>
                  </Button>
                  <a
                    href={`tel:${company.phoneLinks[0]}`}
                    className="flex items-center justify-center gap-2 rounded-full border border-dashed border-primary/20 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <PhoneCall className="h-4 w-4 text-accent" />
                    {company.phones[0]}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </Container>
      </div>
    </header>
  );
}
