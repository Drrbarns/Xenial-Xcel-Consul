"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company } from "@/lib/mockData";

export function RequestManpowerMini() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    industry: "",
    count: "",
    notes: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      company: form.company,
      contact: form.name,
      email: form.email,
      country: form.country,
      sector: form.industry,
      quantity: form.count,
      notes: form.notes,
    });
    router.push(`/request?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-white/20 bg-white p-6 text-slate-700 shadow-premium"
    >
      <div className="grid gap-2 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="mini-name">Name</Label>
          <Input
            id="mini-name"
            placeholder="Your name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="mini-company">Company</Label>
          <Input
            id="mini-company"
            placeholder="Company name"
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
          />
        </div>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="mini-email">Email</Label>
          <Input
            id="mini-email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="mini-country">Country</Label>
          <Input
            id="mini-country"
            placeholder="Country"
            value={form.country}
            onChange={(event) => setForm({ ...form, country: event.target.value })}
          />
        </div>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="mini-industry">Industry</Label>
          <Input
            id="mini-industry"
            placeholder="Industry"
            value={form.industry}
            onChange={(event) => setForm({ ...form, industry: event.target.value })}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="mini-count">Manpower Count</Label>
          <Input
            id="mini-count"
            type="number"
            placeholder="e.g. 50"
            value={form.count}
            onChange={(event) => setForm({ ...form, count: event.target.value })}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="mini-notes">Notes</Label>
        <Textarea
          id="mini-notes"
          placeholder="Share requirement brief..."
          value={form.notes}
          onChange={(event) => setForm({ ...form, notes: event.target.value })}
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="gold">
          Send Requirement
        </Button>
        <Button type="button" asChild variant="outline">
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello, I want to request manpower.")}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp/Call
          </a>
        </Button>
      </div>
    </form>
  );
}
