"use client";

import { jsPDF } from "jspdf";
import autoTable, { type RowInput } from "jspdf-autotable";
import { SITE_LOGO_PATH, SITE_NAME } from "./seo";

export type ApplicationPdfData = {
  personal: Record<string, string>;
  professional: Record<string, string>;
  roles: string[];
  otherRole?: string;
  salary: string;
  sponsorship: Record<string, string>;
  fees: Record<string, string>;
  technical: Record<string, string>;
};

const NAVY: [number, number, number] = [8, 24, 51];
const GOLD: [number, number, number] = [200, 164, 93];
const SLATE_DARK: [number, number, number] = [15, 23, 42];
const SLATE_MUTED: [number, number, number] = [100, 116, 139];

async function loadLogoDataUrl(): Promise<{
  dataUrl: string;
  width: number;
  height: number;
} | null> {
  try {
    const res = await fetch(SITE_LOGO_PATH);
    if (!res.ok) return null;
    const blob = await res.blob();
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result));
      r.onerror = () => reject(r.error);
      r.readAsDataURL(blob);
    });
    const dims = await new Promise<{ width: number; height: number }>(
      (resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
        img.onerror = () => reject(new Error("logo image failed to load"));
        img.src = dataUrl;
      },
    );
    return { dataUrl, ...dims };
  } catch {
    return null;
  }
}

function rowsFromRecord(record: Record<string, string>): RowInput[] {
  return Object.entries(record)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => [k, v]);
}

export async function generateApplicationPdf(data: ApplicationPdfData) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const logo = await loadLogoDataUrl();
  let cursorY = 36;

  if (logo) {
    const maxLogoHeight = 56;
    const ratio = logo.width / logo.height;
    const logoHeight = maxLogoHeight;
    const logoWidth = logoHeight * ratio;
    const logoX = (pageWidth - logoWidth) / 2;
    doc.addImage(logo.dataUrl, "PNG", logoX, cursorY, logoWidth, logoHeight);
    cursorY += logoHeight + 12;
  }

  doc.setFont("helvetica", "bold");
  doc.setTextColor(...NAVY);
  doc.setFontSize(18);
  doc.text(SITE_NAME, pageWidth / 2, cursorY, { align: "center" });
  cursorY += 18;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(...SLATE_MUTED);
  doc.setFontSize(11);
  doc.text(
    "Oil & Gas Employment Application — Australia Sponsorship",
    pageWidth / 2,
    cursorY,
    { align: "center" },
  );
  cursorY += 14;

  const submittedAt = new Date().toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  doc.setFontSize(9);
  doc.text(`Submitted: ${submittedAt}`, pageWidth / 2, cursorY, { align: "center" });
  cursorY += 16;

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(1.5);
  doc.line(56, cursorY, pageWidth - 56, cursorY);
  cursorY += 18;

  const sections: { title: string; rows: RowInput[] }[] = [
    { title: "Personal Information", rows: rowsFromRecord(data.personal) },
    { title: "Professional Background", rows: rowsFromRecord(data.professional) },
  ];

  const rolesValue = [
    data.roles.join(", "),
    data.otherRole?.trim() ? `Other: ${data.otherRole.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const roleSalaryRows: RowInput[] = [];
  if (rolesValue) roleSalaryRows.push(["Applied Roles", rolesValue]);
  if (data.salary) roleSalaryRows.push(["Expected Salary", data.salary]);
  if (roleSalaryRows.length > 0) {
    sections.push({ title: "Job Role & Salary", rows: roleSalaryRows });
  }

  sections.push(
    { title: "Sponsorship Package & Terms", rows: rowsFromRecord(data.sponsorship) },
    { title: "Fees & Payment Terms", rows: rowsFromRecord(data.fees) },
    { title: "Technical & Industry Questions", rows: rowsFromRecord(data.technical) },
  );

  for (const section of sections) {
    if (section.rows.length === 0) continue;

    if (cursorY > pageHeight - 120) {
      doc.addPage();
      cursorY = 56;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...NAVY);
    doc.text(section.title, 56, cursorY);
    cursorY += 6;

    autoTable(doc, {
      startY: cursorY,
      head: [],
      body: section.rows,
      theme: "grid",
      styles: {
        font: "helvetica",
        fontSize: 9,
        cellPadding: 6,
        textColor: SLATE_DARK,
        lineColor: [226, 232, 240],
        lineWidth: 0.5,
        valign: "top",
      },
      columnStyles: {
        0: {
          cellWidth: 170,
          fontStyle: "bold",
          textColor: SLATE_MUTED,
          fillColor: [248, 250, 252],
        },
        1: { cellWidth: "auto" },
      },
      margin: { left: 56, right: 56 },
    });

    type AutoTableDoc = jsPDF & {
      lastAutoTable?: { finalY: number };
    };
    cursorY = ((doc as AutoTableDoc).lastAutoTable?.finalY ?? cursorY) + 18;
  }

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...SLATE_MUTED);
    doc.text(
      `${SITE_NAME} • xeniumxcel.com • Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 24,
      { align: "center" },
    );
  }

  const safeName = (data.personal["Full Name"] || "Applicant")
    .replace(/[^a-zA-Z0-9 _-]/g, "")
    .trim()
    .replace(/\s+/g, "_") || "Applicant";
  const filename = `Xenium_Xcel_Application_${safeName}.pdf`;
  doc.save(filename);
}
