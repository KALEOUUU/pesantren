import Image from "next/image";
import { facilities } from "@/data/home";
import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FacilityGallery() {
  return (
    <section className="py-12 md:py-24">
      <PageContainer className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:grid-cols-[minmax(0,486px)_minmax(0,1fr)] xl:gap-[64px]">
        <ScrollReveal className="flex flex-col items-start xl:min-h-[846px]">
          <p className="text-[18px] font-normal leading-[1.14] text-olive-secondary md:text-[24px]">
            Pendaftaran dibuka
          </p>
          <h2 className="mt-1 text-[36px] font-semibold leading-[1.08] tracking-[-1.3px] md:mt-2 md:text-[64px] md:tracking-[-2.56px]">
            Galeri Kegiatan
          </h2>
          <div className="mt-5 xl:mt-auto">
            <p className="max-w-[420px] text-[18px] leading-[1.2] tracking-[-0.4px] text-black/75 md:text-[20px]">
              Kegiatan yang diadakan bukan cuma untuk senang-senang, tetapi
              untuk kebutuhan para santri.
            </p>
          </div>
        </ScrollReveal>
        <div id="galeri" className="space-y-7 md:space-y-9 xl:space-y-[63px]">
          {facilities.map((facility, index) => (
            <ScrollReveal key={facility.title} delayMs={index * 100}>
              <article className="grid items-start gap-3 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none xl:grid-cols-[minmax(0,355px)_minmax(0,1fr)] xl:gap-9">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  width={355}
                  height={240}
                  className="aspect-[355/240] h-auto w-full rounded-[9px] object-cover xl:h-[240px] xl:w-[355px]"
                />
                <div className="flex min-h-0 flex-col items-start xl:min-h-[240px]">
                  <h3 className="text-[24px] font-medium leading-[1.08] tracking-[-0.8px] md:text-[32px] md:tracking-[-1.28px]">
                    {facility.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-none text-black/70">
                    {facility.date}
                  </p>
                  <p className="mt-3 pt-0 text-base leading-[1.3] tracking-[-0.3px] text-black/85 xl:mt-auto xl:pt-5 xl:text-[20px] xl:leading-[1.2] xl:tracking-[-0.8px]">
                    {facility.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
