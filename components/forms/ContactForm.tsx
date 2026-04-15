"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const topics = [
  { value: "manpower", label: "Manpower / vacancy" },
  { value: "demand", label: "Demand letter & compliance" },
  { value: "services", label: "Services & sectors" },
  { value: "ticketing", label: "Travel / ticketing" },
  { value: "training", label: "Training center" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const org = String(fd.get("organization") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !topic || !message) return;

    const topicLabel = topics.find((t) => t.value === topic)?.label ?? topic;
    const subject = encodeURIComponent(`[${topicLabel}] Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org || "—"}\nPhone: ${phone || "—"}\nTopic: ${topicLabel}\n\nMessage:\n${message}\n`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name</Label>
          <Input id="contact-name" name="name" required autoComplete="name" placeholder="Jordan Lee" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Work email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-org">Organization</Label>
          <Input id="contact-org" name="organization" autoComplete="organization" placeholder="Company or fund name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone (optional)</Label>
          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 …" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-topic">What can we help with?</Label>
        <Select value={topic} onValueChange={setTopic}>
          <SelectTrigger id="contact-topic" className="h-11">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          minLength={20}
          placeholder="Share context, timeline, and how you’d like to engage. We respond within one business day."
          className="min-h-[140px] resize-y"
        />
      </div>
      <p className="text-xs leading-relaxed text-slate-500">
        Submitting opens your email app with a pre-filled message to {company.email}. Prefer not to use mail? Call{" "}
        <a href={`tel:${company.phoneLinks[0]}`} className="font-medium text-primary hover:underline">
          {company.phones[0]}
        </a>
        .
      </p>
      <Button type="submit" size="lg" className="w-full rounded-full shadow-premium sm:w-auto sm:px-10" variant="gold">
        Send inquiry
      </Button>
      {status === "sent" && (
        <p className="text-sm font-medium text-primary" role="status">
          If your mail client did not open, email us directly at {company.email}.
        </p>
      )}
    </form>
  );
}
