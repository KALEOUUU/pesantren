import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { ArrowLink } from "@/components/ui/arrow-link";

const facilityImages = [
  { src: "/assets/home/program-3.png", alt: "Santri mengikuti kegiatan belajar bersama" },
  { src: "/assets/home/facility-4.png", alt: "Ruang kegiatan Pondok Pesantren Daarul Mukhlisin" },
  { src: "/assets/home/facility-5.png", alt: "Ruang ibadah Pondok Pesantren Daarul Mukhlisin" },
  { src: "/assets/home/program-2.png", alt: "Santri dalam kegiatan di lingkungan pesantren" },
];

export function AboutFacilities() {
  return (
    <section className="mt-[260px] pb-[190px]">
      <PageContainer>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-[64px]">
          <div className="flex flex-col items-start">
            <p className="text-[18px] font-normal leading-[1.14] text-olive-secondary md:text-[20px]">Fasilitas Kami</p>
            <h2 className="mt-6 max-w-[520px] text-[42px] font-semibold leading-[1.06] tracking-[-1.7px] md:text-[48px] md:tracking-[-1.92px]">Penunjang yang sangat modern dan berkualitas</h2>
            <p className="mt-7 max-w-[500px] text-[18px] leading-[1.18] tracking-[-0.45px] text-black/75 md:text-[20px] md:tracking-[-0.8px]">Dilengkapi sarana dan prasarana modern berkualitas tinggi untuk mendukung kenyamanan serta kelancaran proses belajar-mengajar santri.</p>
            <ArrowLink href="#fasilitas" className="mt-8 px-6 py-2 text-[17px] font-medium tracking-[-0.35px]">Lihat Semua Fasilitas</ArrowLink>
          </div>
          <div id="fasilitas" className="grid grid-cols-2 gap-5 md:gap-7">
            {facilityImages.map((facility) => (
              <Image key={facility.src} src={facility.src} alt={facility.alt} width={360} height={386} className="aspect-[0.93] h-auto w-full rounded-[9px] object-cover" />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
