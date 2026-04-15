import { Hero } from "@/components/home/Hero";
import { ValueTrio } from "@/components/home/ValueTrio";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { MissionVisionPassion } from "@/components/home/MissionVisionPassion";
import { ManpowerRoles } from "@/components/home/ManpowerRoles";
import { QualityServices } from "@/components/home/QualityServices";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { StatsStrip } from "@/components/home/StatsStrip";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { HomeCta } from "@/components/home/HomeCta";
export default function Home() {
  return (
    <>
      <Hero />
      <ValueTrio />
      <WhoWeAre />
      <MissionVisionPassion />
      <ManpowerRoles />
      <QualityServices />
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
