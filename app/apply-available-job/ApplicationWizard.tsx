"use client";

import {
  useState,
  useCallback,
  useRef,
  type ChangeEvent,
  type RefObject,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  User,
  Briefcase,
  Target,
  DollarSign,
  Handshake,
  CreditCard,
  Wrench,
  Upload,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const STEPS = [
  { label: "About", icon: FileText },
  { label: "Personal", icon: User },
  { label: "Professional", icon: Briefcase },
  { label: "Role", icon: Target },
  { label: "Salary", icon: DollarSign },
  { label: "Sponsorship", icon: Handshake },
  { label: "Fees", icon: CreditCard },
  { label: "Technical", icon: Wrench },
  { label: "Upload", icon: Upload },
];

const documentChecklist = [
  "Valid Passport",
  "Current Passport Photograph",
  "Updated CV & Cover Letter",
  "Technical/Trade Certificate",
  "English Proficiency Letter (from last school attended)",
  "Medical Certificate, Bosiet Etc.",
];

const roleOptions = [
  "Onshore / Offshore Operations",
  "Engineering & Technical",
  "Welding",
  "Drilling",
  "Mechanical",
  "Electrical Engineering/Electrician",
  "Safety Engineering",
];

const paymentOptions = [
  "Immediately",
  "At the office now",
  "On the day of biometric appointment at the Australian Visa Biometric Center (VFS)",
];

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;

type FormData = {
  personal: Record<string, string>;
  professional: Record<string, string>;
  roles: string[];
  salary: string;
  sponsorship: Record<string, string>;
  fees: Record<string, string>;
  technical: Record<string, string>;
};

const initialFormData: FormData = {
  personal: {},
  professional: {},
  roles: [],
  salary: "",
  sponsorship: {},
  fees: {},
  technical: {},
};

type FieldProps = {
  formData: FormData;
  update: (section: keyof FormData, key: string, value: string) => void;
  toggleRole: (role: string) => void;
  setSalary: (value: string) => void;
};

function YesNo({
  label,
  section,
  fieldKey,
  formData,
  update,
}: {
  label: string;
  section: keyof FormData;
  fieldKey: string;
  formData: FormData;
  update: (section: keyof FormData, key: string, value: string) => void;
}) {
  const current = (formData[section] as Record<string, string>)[fieldKey] || "";
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-slate-700">{label}</legend>
      <div className="flex gap-6 text-sm text-slate-700">
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={current === "Yes"}
            onChange={() => update(section, fieldKey, "Yes")}
            className="h-4 w-4 accent-[#081833]"
          />
          Yes
        </label>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={current === "No"}
            onChange={() => update(section, fieldKey, "No")}
            className="h-4 w-4 accent-[#081833]"
          />
          No
        </label>
      </div>
    </fieldset>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium text-slate-700">{children}</p>;
}

function Field({
  label,
  section,
  fieldKey,
  formData,
  update,
  type = "text",
  placeholder,
  multiline = false,
  colSpan = false,
}: {
  label: string;
  section: keyof FormData;
  fieldKey: string;
  formData: FormData;
  update: (section: keyof FormData, key: string, value: string) => void;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  colSpan?: boolean;
}) {
  const value = (formData[section] as Record<string, string>)[fieldKey] || "";
  return (
    <div className={`space-y-1.5 ${colSpan ? "md:col-span-2" : ""}`}>
      <FieldLabel>{label}</FieldLabel>
      {multiline ? (
        <Textarea
          value={value}
          onChange={(e) => update(section, fieldKey, e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <Input
          type={type}
          value={value}
          onChange={(e) => update(section, fieldKey, e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export function ApplicationWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [combinedFile, setCombinedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const totalSteps = STEPS.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = useCallback(
    (section: keyof FormData, key: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [section]: { ...(prev[section] as Record<string, string>), [key]: value },
      }));
    },
    []
  );

  const toggleRole = useCallback((role: string) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }));
  }, []);

  const setSalary = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, salary: value }));
  }, []);

  function goNext() {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  }

  function goPrev() {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("application", JSON.stringify(formData));
      if (combinedFile) {
        fd.append("attachment", combinedFile, combinedFile.name);
      }

      const res = await fetch("/api/apply", {
        method: "POST",
        body: fd,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setError(result.message || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  }

  const fieldProps: FieldProps = { formData, update, toggleRole, setSalary };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="premium-border rounded-2xl p-10 text-center space-y-6"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-primary">
          Application Submitted
        </h2>
        <p className="mx-auto max-w-md text-slate-600">
          Thank you for applying. Our team will review your application and contact you
          within 3–5 business days regarding next steps.
        </p>
        <p className="text-xs text-slate-500">
          Note: 3 to 5 weeks to complete your offer, then biometric fingerprint. After
          biometric, it takes 60 days to receive your visa.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Button asChild variant="gold" size="lg" className="rounded-full px-8">
            <a
              href="https://wa.me/233200000000?text=Hello%2C%20I%20just%20submitted%20my%20Oil%20%26%20Gas%20job%20application."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-primary">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-muted-foreground">{STEPS[step].label}</span>
        </div>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-primary"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </div>
        <div
          className="hidden gap-1 md:grid"
          style={{ gridTemplateColumns: `repeat(${totalSteps}, 1fr)` }}
        >
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === step;
            const isDone = i < step;
            return (
              <button
                key={s.label}
                type="button"
                onClick={() => {
                  setDirection(i > step ? 1 : -1);
                  setStep(i);
                }}
                className={`flex flex-col items-center gap-1 rounded-lg p-2 text-[10px] font-medium transition-all ${
                  isActive
                    ? "bg-primary/5 text-primary"
                    : isDone
                      ? "text-accent"
                      : "text-slate-400"
                }`}
              >
                <Icon className="h-4 w-4" />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="premium-border relative min-h-[420px] overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="p-6 md:p-8"
          >
            {step === 0 && <StepAbout />}
            {step === 1 && <StepPersonal {...fieldProps} />}
            {step === 2 && <StepProfessional {...fieldProps} />}
            {step === 3 && <StepRole {...fieldProps} />}
            {step === 4 && <StepSalary {...fieldProps} />}
            {step === 5 && <StepSponsorship {...fieldProps} />}
            {step === 6 && <StepFees {...fieldProps} />}
            {step === 7 && <StepTechnical {...fieldProps} />}
            {step === 8 && (
              <StepUpload
                file={combinedFile}
                fileError={uploadError}
                inputRef={uploadInputRef}
                onFileChange={(file) => {
                  setUploadError(null);
                  if (!file) {
                    setCombinedFile(null);
                    return;
                  }
                  if (file.size > MAX_UPLOAD_BYTES) {
                    setCombinedFile(null);
                    setUploadError("Please use a combined document under 25 MB, or email us a download link.");
                    if (uploadInputRef.current) uploadInputRef.current.value = "";
                    return;
                  }
                  setCombinedFile(file);
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 space-y-2">
          <p className="font-medium">{error}</p>
          <p className="text-xs text-red-700/90 leading-relaxed">
            Common fixes: add <code className="rounded bg-red-100 px-1">RESEND_API_KEY</code> on your host; verify your
            domain in Resend and set <code className="rounded bg-red-100 px-1">RESEND_FROM</code> to that domain; with
            Resend&apos;s test sender, the inbox env (<code className="rounded bg-red-100 px-1">FORMS_EMAIL</code> /{" "}
            <code className="rounded bg-red-100 px-1">APPLICATION_EMAIL</code> /{" "}
            <code className="rounded bg-red-100 px-1">CONTACT_EMAIL</code>) must be an address Resend allows until
            your domain is verified.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={goPrev}
          disabled={step === 0}
          className="gap-2 rounded-full px-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>

        {step < totalSteps - 1 ? (
          <Button type="button" onClick={goNext} className="gap-2 rounded-full px-6">
            Next Step
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            variant="gold"
            onClick={handleSubmit}
            disabled={submitting}
            className="gap-2 rounded-full px-8 shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Submit Application
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

/* ───────────────────── Step Components ───────────────────── */

function StepHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[var(--font-heading)] text-2xl font-bold text-primary mb-5">
      {children}
    </h2>
  );
}

function StepAbout() {
  return (
    <div className="space-y-5">
      <StepHeading>About This Programme</StepHeading>
      <div className="rounded-xl bg-slate-50 p-5 space-y-3 text-sm text-slate-600 leading-relaxed">
        <p>
          Xenial Xcel Consult is a travel and recruitment agency based in Accra. We
          assist qualified candidates in securing employment opportunities in Australia
          within the oil and gas sector and other jobs.
        </p>
        <p>
          Selected applicants may receive employer sponsorship, with structured repayment
          terms agreed upon before relocation.
        </p>
      </div>
      <div className="space-y-3">
        <FieldLabel>Required Documents (combine into ONE file before uploading):</FieldLabel>
        <ul className="grid gap-2 md:grid-cols-2">
          {documentChecklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-primary/10 bg-white p-3 text-sm text-slate-600"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepPersonal({ formData, update }: FieldProps) {
  return (
    <div className="space-y-5">
      <StepHeading>Personal Information</StepHeading>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name (as on passport)" section="personal" fieldKey="Full Name" formData={formData} update={update} placeholder="John Doe" />
        <Field label="Gender" section="personal" fieldKey="Gender" formData={formData} update={update} placeholder="Male / Female" />
        <Field label="Nationality" section="personal" fieldKey="Nationality" formData={formData} update={update} placeholder="e.g. Ghanaian" />
        <Field label="Passport Number" section="personal" fieldKey="Passport Number" formData={formData} update={update} placeholder="e.g. G12345678" />
        <Field label="Residential Address" section="personal" fieldKey="Residential Address" formData={formData} update={update} placeholder="House number, street" colSpan />
        <Field label="City" section="personal" fieldKey="City" formData={formData} update={update} placeholder="e.g. Accra" />
        <Field label="Country" section="personal" fieldKey="Country" formData={formData} update={update} placeholder="e.g. Ghana" />
        <Field label="Phone Number (WhatsApp preferred)" section="personal" fieldKey="Phone (WhatsApp)" formData={formData} update={update} placeholder="+233 xxx xxx xxxx" />
        <Field label="Other Phone Number" section="personal" fieldKey="Other Phone" formData={formData} update={update} placeholder="Optional" />
        <Field label="Valid Email Address" section="personal" fieldKey="Email Address" formData={formData} update={update} type="email" placeholder="you@email.com" colSpan />
      </div>
    </div>
  );
}

function StepProfessional({ formData, update }: FieldProps) {
  return (
    <div className="space-y-5">
      <StepHeading>Professional Background</StepHeading>
      <div className="space-y-4">
        <Field label="Current occupation in the Oil & Gas industry" section="professional" fieldKey="Current Occupation" formData={formData} update={update} />
        <Field label="Briefly describe your knowledge of the Oil & Gas field" section="professional" fieldKey="Oil & Gas Knowledge" formData={formData} update={update} multiline />
        <Field label="Main role or specialization" section="professional" fieldKey="Specialization" formData={formData} update={update} />
        <Field label="Total years of working experience" section="professional" fieldKey="Years of Experience" formData={formData} update={update} type="number" />
        <Field label="Previous companies worked with (if any)" section="professional" fieldKey="Previous Companies" formData={formData} update={update} multiline />
        <YesNo label="Have you worked offshore before?" section="professional" fieldKey="Worked Offshore" formData={formData} update={update} />
      </div>
    </div>
  );
}

function StepRole({ formData, toggleRole }: FieldProps) {
  return (
    <div className="space-y-5">
      <StepHeading>Job Role Selection</StepHeading>
      <FieldLabel>Which role are you applying for? (select one or more)</FieldLabel>
      <div className="grid gap-3 md:grid-cols-2">
        {roleOptions.map((role) => (
          <label
            key={role}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm text-slate-700 transition-colors hover:bg-slate-50 ${
              formData.roles.includes(role)
                ? "border-primary bg-primary/5"
                : "border-primary/10 bg-white"
            }`}
          >
            <input
              type="checkbox"
              checked={formData.roles.includes(role)}
              onChange={() => toggleRole(role)}
              className="h-4 w-4 accent-[#081833]"
            />
            {role}
          </label>
        ))}
      </div>
    </div>
  );
}

function StepSalary({ formData, setSalary }: FieldProps) {
  return (
    <div className="space-y-5">
      <StepHeading>Salary Expectation</StepHeading>
      <div className="space-y-1.5">
        <FieldLabel>What is your expected salary for this role in Australia?</FieldLabel>
        <Input
          value={formData.salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="e.g. AUD 85,000 per year"
        />
      </div>
    </div>
  );
}

function StepSponsorship({ formData, update }: FieldProps) {
  return (
    <div className="space-y-5">
      <StepHeading>Sponsorship Package & Terms</StepHeading>
      <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600 leading-relaxed">
        Successful candidates will receive employer sponsorship covering job placement
        and relocation to Australia. The sponsorship cost will be repaid under agreed
        terms after employment begins.
      </div>
      <div className="space-y-4">
        <YesNo label="1. Xenium Xcel Consult will assist you in securing this role in Australia. Do you agree?" section="sponsorship" fieldKey="Assist Agreement" formData={formData} update={update} />
        <YesNo label="2. Employers in Australia will sponsor your employment, and you will repay the sponsorship cost. Do you agree?" section="sponsorship" fieldKey="Sponsor Repayment Agreement" formData={formData} update={update} />
        <YesNo label="3. The total sponsorship cost is USD 12,000, to be repaid after employment. Do you agree?" section="sponsorship" fieldKey="USD 12,000 Agreement" formData={formData} update={update} />
        <Field label="4. How long would be convenient for you to repay this amount?" section="sponsorship" fieldKey="Repayment Duration" formData={formData} update={update} placeholder="e.g. 12 months" />
        <YesNo label="5. Is all your documents ready to upload and submit?" section="sponsorship" fieldKey="Documents Ready" formData={formData} update={update} />
        <YesNo label="6. Have you violated any travel work and pay repayment before?" section="sponsorship" fieldKey="Prior Violation" formData={formData} update={update} />
      </div>
    </div>
  );
}

function StepFees({ formData, update }: FieldProps) {
  const currentPaymentMethod =
    (formData.fees as Record<string, string>)["Payment Method"] || "";
  return (
    <div className="space-y-5">
      <StepHeading>Fees & Payment Terms</StepHeading>
      <div className="space-y-4">
        <YesNo label="1. We do not take processing advance payment without clear proof of job placement, but we charge administration fees. Do you agree?" section="fees" fieldKey="Admin Fees Agreement" formData={formData} update={update} />
        <YesNo label="2. Registration fee (not exceeding GH₵ 1,000) payable at our office as partaking fee. Do you accept?" section="fees" fieldKey="Registration Fee Acceptance" formData={formData} update={update} />
        <YesNo label="3. Service fee of GH₵ 20,000 is required before travel. Do you agree?" section="fees" fieldKey="Service Fee Agreement" formData={formData} update={update} />
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-slate-700">
            4. How would you prefer to pay the service fee of GH₵ 20,000?
          </legend>
          <div className="grid gap-2">
            {paymentOptions.map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm text-slate-700 transition-colors hover:bg-slate-50 ${
                  currentPaymentMethod === option
                    ? "border-primary bg-primary/5"
                    : "border-primary/10 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="payment-method"
                  checked={currentPaymentMethod === option}
                  onChange={() => update("fees", "Payment Method", option)}
                  className="h-4 w-4 accent-[#081833]"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
        <Field label="5. How soon are you ready to travel to Australia?" section="fees" fieldKey="Travel Readiness" formData={formData} update={update} placeholder="e.g. Within 2 months" />
      </div>
    </div>
  );
}

function StepTechnical({ formData, update }: FieldProps) {
  return (
    <div className="space-y-5">
      <StepHeading>Technical & Industry-Specific Questions</StepHeading>
      <div className="space-y-4">
        <Field label="1. Equipment or machinery you are experienced in operating within Oil & Gas" section="technical" fieldKey="Equipment Experience" formData={formData} update={update} multiline />
        <YesNo label="2. Are you familiar with offshore safety standards and procedures?" section="technical" fieldKey="Offshore Safety Familiar" formData={formData} update={update} />
        <Field label="If yes, please specify" section="technical" fieldKey="Safety Standards Detail" formData={formData} update={update} />
        <YesNo label="3. Do you have experience working in high-risk environments?" section="technical" fieldKey="High-Risk Experience" formData={formData} update={update} />
        <Field label="If yes, briefly describe your experience" section="technical" fieldKey="High-Risk Detail" formData={formData} update={update} multiline />
        <Field label="4. Which industry certifications do you currently hold?" section="technical" fieldKey="Certifications" formData={formData} update={update} />
        <YesNo label="5. Are you comfortable working in remote/isolated locations for extended periods?" section="technical" fieldKey="Remote Comfort" formData={formData} update={update} />
        <YesNo label="6. Have you been involved in incident reporting or safety compliance procedures?" section="technical" fieldKey="Incident Reporting" formData={formData} update={update} />
        <Field label="If yes, explain your role" section="technical" fieldKey="Incident Role Detail" formData={formData} update={update} multiline />
        <YesNo label="7. Are you medically fit for offshore or physically demanding environments?" section="technical" fieldKey="Medically Fit" formData={formData} update={update} />
        <YesNo label="8. Do you have experience working with multinational teams?" section="technical" fieldKey="Multinational Teams" formData={formData} update={update} />
        <YesNo label="9. Are you willing to undergo additional training or certification by Australian employers?" section="technical" fieldKey="Additional Training" formData={formData} update={update} />
        <Field label="10. What is the meaning of travelling sponsorship? List as many as you know." section="technical" fieldKey="Sponsorship Meaning" formData={formData} update={update} multiline />
        <div className="rounded-xl bg-accent/10 border border-accent/20 p-4 text-sm text-slate-700">
          <strong>Note:</strong> We use 3 to 5 weeks to complete this offer for biometric
          fingerprint. After biometric, it takes 60 days to receive your visa.
        </div>
      </div>
    </div>
  );
}

function StepUpload({
  file,
  fileError,
  inputRef,
  onFileChange,
}: {
  file: File | null;
  fileError: string | null;
  inputRef: RefObject<HTMLInputElement | null>;
  onFileChange: (file: File | null) => void;
}) {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    onFileChange(f);
  }

  return (
    <div className="space-y-5">
      <StepHeading>Upload Documents & Submit</StepHeading>
      <p className="text-sm text-slate-600">
        Combine all documents below into <strong>one file</strong> before uploading:
      </p>
      <ol className="grid gap-2 md:grid-cols-2">
        {documentChecklist.map((item, i) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-primary/10 bg-white p-4 text-sm text-slate-600"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ol>
      <div className="space-y-2">
        <FieldLabel>Upload Combined Document File</FieldLabel>
        <input
          ref={inputRef}
          id="application-combined-file"
          type="file"
          className="sr-only"
          accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg,.webp"
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/20 bg-slate-50 p-10 text-center transition-colors hover:border-primary/40 hover:bg-slate-100/80"
        >
          <Upload className="mx-auto h-8 w-8 text-slate-400" />
          <p className="mt-2 text-sm text-slate-600">
            <span className="font-medium text-primary">Browse files</span>
            <span className="text-slate-500"> — PDF, DOC, ZIP, or images</span>
          </p>
          <p className="text-xs text-slate-400">Max 25 MB — attached to your application email</p>
        </button>
        {file && (
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-primary/15 bg-white px-4 py-3 text-sm text-slate-700">
            <span className="min-w-0 truncate font-medium" title={file.name}>
              {file.name}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="shrink-0 rounded-full"
              onClick={() => {
                if (inputRef.current) inputRef.current.value = "";
                onFileChange(null);
              }}
            >
              Remove
            </Button>
          </div>
        )}
        {fileError && (
          <p className="text-xs font-medium text-red-600" role="alert">
            {fileError}
          </p>
        )}
      </div>
    </div>
  );
}
