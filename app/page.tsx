import { PageContainer } from "@/components/layout/page-container";
import { AchievementSection } from "@/components/home/achievement-section";
import { AcademicProgram } from "@/components/home/academic-program";
import { AdmissionsSection } from "@/components/home/admissions-section";
import { FacilityGallery } from "@/components/home/facility-gallery";
import { HeroSection } from "@/components/home/hero-section";
import { HomeCTA } from "@/components/home/home-cta";
import { IntroductionSection } from "@/components/home/introduction-section";
import { MottoSection } from "@/components/home/motto-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { academicPrograms } from "@/data/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MottoSection />
      <IntroductionSection />
      <section id="program-akademik" className="py-24">
        <PageContainer>
          <p className="text-center text-2xl font-medium leading-[1.14] text-olive-secondary">
            Keunggulan Kami
          </p>
          <h2 className="mt-2 text-center text-5xl font-semibold tracking-[-2.56px] md:text-[64px]">
            Program Akademik
          </h2>
          <div className="mt-16 space-y-16 md:space-y-[81px]">
            {academicPrograms.map((program) => (
              <AcademicProgram key={program.title} program={program} />
            ))}
          </div>
        </PageContainer>
      </section>
      <AchievementSection />
      <AdmissionsSection />
      <TestimonialSection />
      <FacilityGallery />
      <HomeCTA />
    </>
  );
}
