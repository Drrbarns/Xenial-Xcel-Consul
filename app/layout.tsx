import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ApplyAvailableJobButton } from "@/components/layout/ApplyAvailableJobButton";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Xenium Xcel Consult",
    template: "%s | Xenium Xcel Consult",
  },
  description:
    "Xenium Xcel Consult (RL-1221) is a trusted Bangladesh manpower recruitment agency—MOEWOE consented, BAIRA member—delivering skilled and unskilled workers for employers worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full`}>
      <body className="min-h-full font-[var(--font-body)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ApplyAvailableJobButton />
        <Footer />
      </body>
    </html>
  );
}
