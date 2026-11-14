import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Pendaftaran | Pesantren Daarul Mukhlisin",
  description: "Informasi penerimaan santri baru Pondok Pesantren Daarul Mukhlisin.",
};

export default function PendaftaranPage() {
  return (
    <>
      <section className="hero-overlay-entrance bg-[linear-gradient(105deg,#85816a_0%,#aaa78a_58%,#e2deb1_100%)] text-white">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-6 py-8 sm:px-10 md:gap-10 lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-16 lg:px-[max(54px,8.75vw)] lg:py-[50px]">
          <div className="flex h-full flex-col items-start justify-between gap-7 lg:gap-10 lg:py-3">
            <div>
              <p className="hero-content-entrance mb-5 text-base font-medium tracking-[-0.35px] sm:mb-10 sm:text-2xl sm:tracking-[-0.5px]">
                Pendaftaran Resmi
              </p>
              <h1 className="hero-content-entrance hero-content-entrance-delay-1 mb-5 text-[32px] leading-[1.12] font-semibold tracking-[-1.1px] sm:mb-10 sm:text-5xl sm:tracking-[-1.8px] lg:text-[54px]">
                Penerimaan Santri Baru
              </h1>
              <p className="hero-content-entrance hero-content-entrance-delay-2 max-w-[620px] text-base leading-[1.4] font-medium tracking-[-0.3px] sm:text-xl sm:tracking-[-0.55px] lg:text-2xl lg:leading-[1.43] lg:text-justify">
                Pondok Pesantren Daarul Mukhlisin membuka kesempatan bagi
                generasi muslim untuk menempuh pendidikan berbasis nilai
                keislaman, keilmuan, dan pembentukan karakter dengan sistem
                pendidikan pesantren modern.
              </p>
            </div>
            <div className="hero-content-entrance hero-content-entrance-delay-3 flex flex-wrap gap-3 pl-0 sm:gap-[27px] sm:pl-7">
              <Button
                href="#informasi-pendaftaran"
                variant="hero"
                className="!px-4 !py-2 !text-base font-semibold tracking-[-0.4px] sm:!px-6 sm:!py-[11px] sm:!text-2xl sm:tracking-[-0.6px]"
              >
                Informasi PPDB
              </Button>
              <Button
                href="#informasi-pendaftaran"
                variant="cream"
                className="!px-4 !py-2 !text-base font-semibold tracking-[-0.4px] sm:!px-6 sm:!py-[11px] sm:!text-2xl sm:tracking-[-0.6px]"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
          <div className="group relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl lg:mx-0">
            <Image
              src="/assets/home/hero.png"
              alt="Kegiatan santri dalam acara pesantren"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 500px"
              className="hero-background-entrance object-cover object-[50%_58%] transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>
        </div>
      </section>

      <section id="informasi-pendaftaran" className="px-6 py-8 text-justify sm:px-10 sm:py-[50px] md:text-center">
        <ScrollReveal>
          <p className="mx-auto max-w-[1280px] text-lg leading-[1.4] font-medium tracking-[-0.55px] text-[#454545] sm:text-xl lg:text-2xl">
            Mengadaptasi nilai-nilai Pondok Pesantren Modern, Daarul Mukhlisin
            hadir menyiapkan generasi pemimpin
            <br className="hidden lg:block" /> yang unggul dalam akademik dan
            siap mengabdi di tengah masyarakat.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
