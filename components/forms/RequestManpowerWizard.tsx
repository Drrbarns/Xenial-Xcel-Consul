"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { company, expertiseAreas } from "@/lib/mockData";

const steps = ["Company", "Requirement", "Timeline", "Documents"];

export function RequestManpowerWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    country: "",
    sector: "",
    roles: "",
    quantity: "",
    timeline: "",
    interviewMethod: "",
    docs: "",
    notes: "",
  });

  const whatsappText = useMemo(
    () =>
      encodeURIComponent(
        `Requirement Request\nCompany: ${form.company}\nCountry: ${form.country}\nSector: ${form.sector}\nRoles: ${form.roles}\nQuantity: ${form.quantity}\nTimeline: ${form.timeline}\nInterview: ${form.interviewMethod}\nNotes: ${form.notes}`,
      ),
    [form],
  );

  const canNext = () => {
    if (step === 0) return form.company && form.email && form.country;
    if (step === 1) return form.sector && form.roles && form.quantity;
    if (step === 2) return form.timeline && form.interviewMethod;
    return true;
  };

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-[var(--font-heading)] text-2xl text-primary">
            Requirement Received
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-600">
            Thank you. Our team will coordinate with you to proceed with manpower
            planning.
          </p>
          <Button asChild variant="gold">
            <a
              href={`https://wa.me/${company.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
            >
              Send via WhatsApp
            </a>
          </Button>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline">
              <Link href="/process">View Recruitment Process</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl border-primary/10">
      <CardHeader>
        <CardTitle className="font-[var(--font-heading)] text-2xl text-primary">
          Request Manpower
        </CardTitle>
        <p className="text-sm text-muted-foreground">Step {step + 1} of 4</p>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {steps.map((item, index) => (
            <div
              key={item}
              className={`h-1 rounded-full ${index <= step ? "bg-primary" : "bg-slate-200"}`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {step === 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Company Name</Label>
              <Input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Contact Person</Label>
              <Input
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Country</Label>
              <Input
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Sector</Label>
              <Select onValueChange={(value) => setForm({ ...form, sector: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
                  {expertiseAreas.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Quantity Needed</Label>
              <Input
                type="number"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              />
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <Label>Roles Needed</Label>
              <Textarea
                value={form.roles}
                onChange={(e) => setForm({ ...form, roles: e.target.value })}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Hiring Timeline</Label>
              <Input
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Interview Method</Label>
              <Input
                value={form.interviewMethod}
                onChange={(e) => setForm({ ...form, interviewMethod: e.target.value })}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Upload Docs (UI Placeholder)</Label>
              <Input
                placeholder="Attach demand letter / requirement documents"
                value={form.docs}
                onChange={(e) => setForm({ ...form, docs: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Notes</Label>
              <Textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Previous
          </Button>
          {step < 3 ? (
            <Button type="button" onClick={() => canNext() && setStep((s) => s + 1)}>
              Next
            </Button>
          ) : (
            <Button type="button" variant="gold" onClick={() => setSubmitted(true)}>
              Submit Requirement
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
