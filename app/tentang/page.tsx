import type { Metadata } from "next";
import { AboutAchievements } from "@/components/tentang/about-achievements";
import { AboutFacilities } from "@/components/tentang/about-facilities";
import { AboutHero } from "@/components/tentang/about-hero";
import { Accreditation } from "@/components/tentang/accreditation";
import { VisionMission } from "@/components/tentang/vision-mission";
import { HomeCTA } from "@/components/home/home-cta";

export const metadata: Metadata = {
  title: "Tentang Kami | Pondok Pesantren Daarul Mukhlisin",
  description: "Mengenal visi, misi, akreditasi, dan fasilitas Pondok Pesantren Daarul Mukhlisin.",
};

export default function TentangPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <AboutAchievements />
      <AboutFacilities />
      <HomeCTA />
    </>
  );
}
