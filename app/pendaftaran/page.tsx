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
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-6 py-8 sm:px-10 lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 lg:px-12 lg:py-12 xl:grid-cols-[minmax(0,1fr)_500px] xl:gap-16 xl:px-[max(54px,8.75vw)] xl:py-[50px]">
          <div className="flex h-full flex-col items-start justify-between gap-7 lg:gap-8 xl:gap-10 xl:py-3">
            <div>
              <p className="hero-content-entrance mb-4 text-base font-medium tracking-[-0.35px] sm:mb-6 sm:text-xl sm:tracking-[-0.45px] xl:mb-10 xl:text-2xl xl:tracking-[-0.5px]">
                Pendaftaran Resmi
              </p>
              <h1 className="hero-content-entrance hero-content-entrance-delay-1 mb-4 text-[32px] leading-[1.12] font-semibold tracking-[-1.1px] sm:mb-5 sm:text-[40px] sm:tracking-[-1.4px] xl:mb-10 xl:text-[54px] xl:tracking-[-1.8px]">
                Penerimaan Santri Baru
              </h1>
              <p className="hero-content-entrance hero-content-entrance-delay-2 max-w-[620px] text-base leading-[1.4] font-medium tracking-[-0.3px] sm:text-lg sm:leading-[1.4] sm:tracking-[-0.4px] xl:text-2xl xl:leading-[1.43] xl:tracking-[-0.55px] xl:text-justify">
                Pondok Pesantren Daarul Mukhlisin membuka kesempatan bagi
                generasi muslim untuk menempuh pendidikan berbasis nilai
                keislaman, keilmuan, dan pembentukan karakter dengan sistem
                pendidikan pesantren modern.
              </p>
            </div>
            <div className="hero-content-entrance hero-content-entrance-delay-3 flex flex-wrap gap-3 pl-0 xl:gap-[27px] xl:pl-7">
              <Button
                href="#informasi-pendaftaran"
                variant="hero"
                className="!px-4 !py-2 !text-base font-semibold tracking-[-0.4px] sm:!px-5 sm:!py-2.5 sm:!text-lg sm:tracking-[-0.4px] xl:!px-6 xl:!py-[11px] xl:!text-2xl xl:tracking-[-0.6px]"
              >
                Informasi PPDB
              </Button>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSenfFS8_aLOzk14wAgZkMsp7DKVs0DZ-FUDQWGYxcUzg5jZIQ/viewform"
                variant="cream"
                className="!px-4 !py-2 !text-base font-semibold tracking-[-0.4px] sm:!px-5 sm:!py-2.5 sm:!text-lg sm:tracking-[-0.4px] xl:!px-6 xl:!py-[11px] xl:!text-2xl xl:tracking-[-0.6px]"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
          <div className="group relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl lg:mx-auto xl:mx-0">
            <Image
              src="/assets/pendaftaran/daptar.jpg"
              alt="Kegiatan pendaftaran santri Pondok Pesantren Daarul Mukhlisin"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 500px"
              className="hero-background-entrance object-cover object-[50%_58%] transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>
        </div>
      </section>

      <section id="informasi-pendaftaran" className="px-6 py-8 text-justify sm:px-10 md:py-10 md:text-center xl:py-[50px]">
        <ScrollReveal>
          <p className="mx-auto max-w-[1280px] text-lg leading-[1.4] font-medium tracking-[-0.55px] text-[#454545] sm:text-xl xl:text-2xl">
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
