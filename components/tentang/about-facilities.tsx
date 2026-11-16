import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const facilityImages = [
  { src: "/assets/tentang/kelas.jpg", alt: "Ruang kelas Pondok Pesantren Daarul Mukhlisin" },
  { src: "/assets/tentang/lab.jpg", alt: "Laboratorium Pondok Pesantren Daarul Mukhlisin" },
  { src: "/assets/tentang/meetingroom.jpg", alt: "Ruang rapat Pondok Pesantren Daarul Mukhlisin" },
  { src: "/assets/tentang/podcast.jpg", alt: "Studio podcast Pondok Pesantren Daarul Mukhlisin" },
];

export function AboutFacilities() {
  return (
    <section className="mt-16 pb-12 md:mt-20 md:pb-20 xl:mt-[260px] xl:pb-[190px]">
      <PageContainer>
        <div className="grid items-start gap-7 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10 xl:grid-cols-[minmax(0,520px)_minmax(0,1fr)] xl:gap-[64px]">
          <ScrollReveal className="flex flex-col items-start">
            <p className="text-[18px] font-normal leading-[1.14] text-olive-secondary md:text-[20px]">Fasilitas Kami</p>
            <h2 className="mt-3 max-w-[520px] text-[32px] font-semibold leading-[1.08] tracking-[-1.1px] md:mt-5 md:text-[38px] md:leading-[1.06] md:tracking-[-1.45px] xl:mt-6 xl:text-[48px] xl:tracking-[-1.92px]">Penunjang yang sangat modern dan berkualitas</h2>
            <p className="mt-4 max-w-[500px] text-base leading-[1.35] tracking-[-0.3px] text-black/75 md:mt-5 md:text-[18px] md:leading-[1.25] md:tracking-[-0.4px] xl:mt-7 xl:text-[20px] xl:leading-[1.18] xl:tracking-[-0.8px]">Dilengkapi sarana dan prasarana modern berkualitas tinggi untuk mendukung kenyamanan serta kelancaran proses belajar-mengajar santri.</p>
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
