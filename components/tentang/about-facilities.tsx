import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowLink } from "@/components/ui/arrow-link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const facilityImages = [
  { src: "/assets/home/program-3.png", alt: "Santri mengikuti kegiatan belajar bersama" },
  { src: "/assets/home/facility-4.png", alt: "Ruang kegiatan Pondok Pesantren Daarul Mukhlisin" },
  { src: "/assets/home/facility-5.png", alt: "Ruang ibadah Pondok Pesantren Daarul Mukhlisin" },
  { src: "/assets/home/program-2.png", alt: "Santri dalam kegiatan di lingkungan pesantren" },
];

export function AboutFacilities() {
  return (
    <section className="mt-16 pb-12 md:mt-24 md:pb-24 lg:mt-[260px] lg:pb-[190px]">
      <PageContainer>
        <div className="grid items-start gap-7 md:gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-[64px]">
          <ScrollReveal className="flex flex-col items-start">
            <p className="text-[18px] font-normal leading-[1.14] text-olive-secondary md:text-[20px]">Fasilitas Kami</p>
            <h2 className="mt-3 max-w-[520px] text-[32px] font-semibold leading-[1.08] tracking-[-1.1px] md:mt-6 md:text-[48px] md:leading-[1.06] md:tracking-[-1.92px]">Penunjang yang sangat modern dan berkualitas</h2>
            <p className="mt-4 max-w-[500px] text-base leading-[1.35] tracking-[-0.3px] text-black/75 md:mt-7 md:text-[20px] md:leading-[1.18] md:tracking-[-0.8px]">Dilengkapi sarana dan prasarana modern berkualitas tinggi untuk mendukung kenyamanan serta kelancaran proses belajar-mengajar santri.</p>
            <ArrowLink href="#fasilitas" className="mt-5 px-5 py-2 text-base font-medium tracking-[-0.35px] md:mt-8 md:px-6 md:text-[17px]">Lihat Semua Fasilitas</ArrowLink>
          </ScrollReveal>
          <div id="fasilitas" className="grid grid-cols-2 gap-3 md:gap-7">
            {facilityImages.map((facility, index) => (
              <ScrollReveal key={facility.src} delayMs={index * 90}>
                <div className="group relative aspect-[0.93] overflow-hidden rounded-[9px]">
                  <Image
                    src={facility.src}
                    alt={facility.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 260px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
