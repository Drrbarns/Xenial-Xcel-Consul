import { Metadata } from "next";
import { PortfolioMosaic } from "@/components/gallery/PortfolioMosaic";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCtaBand } from "@/components/layout/FinalCtaBand";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Environments We Work In"
        description="A visual tour of the settings where we partner with leadership—from the boardroom to innovation labs."
        bgImage="/images/hero_workspace_1776009199492.png"
      />
      <PortfolioMosaic />
      <FinalCtaBand
        title="Need category-specific manpower?"
        description="Share role requirements and quantity. We will align suitable worker categories for your hiring plan."
      />
    </>
  );
}
