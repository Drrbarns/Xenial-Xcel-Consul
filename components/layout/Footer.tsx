import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, footerExtraLinks, navLinks } from "@/lib/mockData";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#081833] text-slate-100">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-white mb-2">
            {company.name}
          </h3>
          <p className="text-sm text-slate-300 max-w-sm leading-relaxed">{company.positioning}</p>
          <p className="text-xs uppercase tracking-widest text-[#C8A45D] font-semibold mt-4">
            RL-1221 · MOEWOE Bangladesh · BAIRA
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Useful links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            {footerExtraLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Contact</h4>
          <div className="space-y-2 text-sm text-slate-300">
            <a
              href={`tel:${company.phoneLinks[0]}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#C8A45D]" />
              {company.phones[0]}
            </a>
            <a
              href={`tel:${company.phoneLinks[1]}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-[#C8A45D]" />
              {company.phones[1]}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-[#C8A45D]" />
              {company.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-[#C8A45D]" />
              {company.address}
            </p>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
