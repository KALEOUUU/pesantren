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
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MottoSection />
      <ScrollReveal>
        <IntroductionSection />
      </ScrollReveal>
      <section id="program-akademik" className="py-12 md:py-16 xl:py-24">
        <PageContainer>
          <ScrollReveal className="text-left md:text-center">
            <p className="text-left text-base font-medium leading-[1.14] text-olive-secondary md:text-center md:text-2xl">
              Keunggulan Kami
            </p>
            <h2 className="mt-1 text-left text-4xl font-semibold tracking-[-1.6px] md:mt-2 md:text-center md:text-5xl md:tracking-[-2px] xl:text-[64px] xl:tracking-[-2.56px]">
              Program Akademik
            </h2>
          </ScrollReveal>
          <div className="mt-9 space-y-10 md:mt-8 md:space-y-7 xl:mt-16 xl:space-y-[81px]">
            {academicPrograms.map((program, index) => (
              <ScrollReveal key={program.title} delayMs={index * 100}>
                <AcademicProgram program={program} />
              </ScrollReveal>
            ))}
          </div>
        </PageContainer>
      </section>
      <AchievementSection />
      <ScrollReveal>
        <AdmissionsSection />
      </ScrollReveal>
      <TestimonialSection />
      <FacilityGallery />
      <ScrollReveal>
        <HomeCTA />
      </ScrollReveal>
    </>
  );
}
