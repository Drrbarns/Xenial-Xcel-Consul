import { Metadata } from "next";
import { buildOgMeta } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { ValueTrio } from "@/components/home/ValueTrio";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { MissionVisionPassion } from "@/components/home/MissionVisionPassion";
import { ManpowerRoles } from "@/components/home/ManpowerRoles";
import { QualityServices } from "@/components/home/QualityServices";
import { VisaProcessingFeature } from "@/components/home/VisaProcessingFeature";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { StatsStrip } from "@/components/home/StatsStrip";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { HomeCta } from "@/components/home/HomeCta";

export const metadata: Metadata = buildOgMeta({
  title: "Xenium Xcel Consult — Recruitment Excellence",
  description:
    "Ghana-based recruitment and travel agency. Independent, registered, and regulated for over five years. Skilled and unskilled workers, oil & gas placements, and visa processing for overseas employers.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ValueTrio />
      <WhoWeAre />
      <MissionVisionPassion />
      <ManpowerRoles />
      <QualityServices />
      <VisaProcessingFeature />
      <ExpertiseGrid />
      <GalleryPreview />
      <StatsStrip />
      <PartnersStrip />
      <Testimonials />
      <FAQ limit={4} />

      <HomeCta />
    </>
  );
}
