import Image from "next/image";
import { facilities } from "@/data/home";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowLink } from "@/components/ui/arrow-link";

export function FacilityGallery() {
  return (
    <section className="py-24">
      <PageContainer className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,486px)_minmax(0,1fr)] lg:gap-[64px]">
        <div className="flex flex-col items-start lg:min-h-[846px]">
          <p className="text-[18px] font-normal leading-[1.14] text-olive-secondary md:text-[24px]">
            Pendaftaran dibuka
          </p>
          <h2 className="mt-2 text-[40px] font-semibold leading-[1.08] tracking-[-1.6px] md:text-[64px] md:tracking-[-2.56px]">
            Galeri Kegiatan
          </h2>
          <div className="mt-10 lg:mt-auto">
            <p className="max-w-[420px] text-[18px] leading-[1.2] tracking-[-0.4px] text-black/75 md:text-[20px]">
              Kegiatan yang diadakan bukan cuma untuk senang-senang, tetapi
              untuk kebutuhan para santri.
            </p>
            <ArrowLink
              href="#galeri"
              className="mt-8 px-5 py-2 text-[18px] font-medium tracking-[-0.4px]"
            >
              Lihat Galeri
            </ArrowLink>
          </div>
        </div>
        <div id="galeri" className="space-y-9 lg:space-y-[63px]">
          {facilities.map((facility) => (
            <article
              key={facility.title}
              className="grid items-start gap-5 sm:grid-cols-[minmax(0,355px)_minmax(0,1fr)] lg:gap-9"
            >
              <Image
                src={facility.image}
                alt={facility.title}
                width={355}
                height={240}
                className="aspect-[355/240] h-auto w-full rounded-[9px] object-cover lg:h-[240px] lg:w-[355px]"
              />
              <div className="flex min-h-[180px] flex-col items-start lg:min-h-[240px]">
                <h3 className="text-[24px] font-medium leading-[1.08] tracking-[-0.8px] md:text-[32px] md:tracking-[-1.28px]">
                  {facility.title}
                </h3>
                <p className="mt-1 text-[13px] leading-none text-black/70">
                  {facility.date}
                </p>
                <p className="mt-auto pt-5 text-[18px] leading-[1.2] tracking-[-0.45px] text-black/85 md:text-[20px] md:tracking-[-0.8px]">
                  {facility.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
