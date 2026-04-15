import type { MetadataRoute } from "next";
import { concerns } from "@/lib/mockData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://xenialxcelconsult.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/process", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/concerns", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/request", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/apply-available-job", priority: 0.9, changeFrequency: "weekly" as const },
  ];

  const concernPages = concerns.map((concern) => ({
    path: `/concerns/${concern.slug}`,
    priority: 0.6 as const,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...concernPages].map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
