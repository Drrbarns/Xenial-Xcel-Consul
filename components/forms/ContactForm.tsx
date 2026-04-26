"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Paperclip, X } from "lucide-react";
import { company } from "@/lib/mockData";
import { ResendTestModeHint } from "@/components/forms/ResendTestModeHint";
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
  { value: "visa", label: "Visa processing" },
  { value: "sponsorship", label: "Australia sponsorship" },
  { value: "services", label: "Services & sectors" },
  { value: "ticketing", label: "Travel / ticketing" },
  { value: "training", label: "Training preparation" },
  { value: "other", label: "Other" },
];

const MAX_FILE_BYTES = 15 * 1024 * 1024;

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function ContactForm() {
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    if (!f) {
      setFile(null);
      setFileError(null);
      return;
    }
    if (f.size > MAX_FILE_BYTES) {
      setFile(null);
      setFileError("Attachment is larger than 15 MB. Please share via cloud link in the message.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setFileError(null);
    setFile(f);
  }

  function clearFile() {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!topic) {
      setErrorMessage("Please select a topic.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    const fd = new FormData(form);
    fd.set("topic", topic);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setTopic("");
      clearFile();
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="topic" value={topic} readOnly aria-hidden />

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
          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+233 …" />
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

      <div className="space-y-2">
        <Label htmlFor="contact-attachment">Attachment (optional)</Label>
        <div className="flex flex-wrap items-center gap-3">
          <input
            ref={fileInputRef}
            id="contact-attachment"
            name="attachment"
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.png,.jpg,.jpeg,.webp,.zip"
          />
          <Button
            type="button"
            variant="outline"
            className="rounded-full border-primary/20 px-5"
            onClick={() => fileInputRef.current?.click()}
          >
            <Paperclip className="mr-2 h-4 w-4" />
            {file ? "Replace file" : "Attach a file"}
          </Button>
          {file && (
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
              <span className="max-w-[180px] truncate" title={file.name}>
                {file.name}
              </span>
              <span className="text-slate-400">·</span>
              <span className="tabular-nums text-slate-500">{formatBytes(file.size)}</span>
              <button
                type="button"
                onClick={clearFile}
                className="rounded-full p-0.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                aria-label="Remove attachment"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}
        </div>
        <p className="text-xs text-slate-500">
          PDF, DOC, image, or zip. Max 15 MB. Files are sent securely with your message via email.
        </p>
        {fileError && (
          <p className="text-xs font-medium text-red-600" role="alert">
            {fileError}
          </p>
        )}
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        Your inquiry is delivered to {company.email} by email (Resend). We usually reply within one business day.
      </p>
      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full shadow-premium sm:w-auto sm:px-10"
        variant="gold"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </Button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-700" role="status">
          Thank you — your message was sent. We will get back to you soon.
        </p>
      )}
      {status === "error" && errorMessage && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
          <p className="font-medium text-red-700">{errorMessage}</p>
          <ResendTestModeHint message={errorMessage} />
        </div>
      )}
    </form>
  );
}
