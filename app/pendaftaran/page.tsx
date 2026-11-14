import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pendaftaran | Pesantren Daarul Mukhlisin",
  description: "Informasi penerimaan santri baru Pondok Pesantren Daarul Mukhlisin.",
};

export default function PendaftaranPage() {
  return (
    <>
      <section className="bg-[linear-gradient(105deg,#85816a_0%,#aaa78a_58%,#e2deb1_100%)] text-white">
        <div className="mx-auto grid min-h-[600px] w-full max-w-[1440px] items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-16 lg:px-[max(54px,8.75vw)] lg:py-[50px]">
          <div className="flex h-full flex-col items-start justify-between gap-10 lg:py-3">
            <div>
              <p className="mb-10 text-xl font-medium tracking-[-0.5px] sm:text-2xl">Pendaftaran Resmi</p>
              <h1 className="mb-10 text-4xl leading-[1.12] font-semibold tracking-[-1.8px] sm:text-5xl lg:text-[54px]">
                Penerimaan Santri Baru
              </h1>
              <p className="max-w-[620px] text-lg leading-[1.42] font-medium tracking-[-0.55px] sm:text-xl lg:text-2xl lg:leading-[1.43] lg:text-justify">
                Pondok Pesantren Daarul Mukhlisin membuka kesempatan bagi generasi muslim untuk menempuh pendidikan berbasis nilai keislaman, keilmuan, dan pembentukan karakter dengan sistem pendidikan pesantren modern.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pl-0 sm:gap-[27px] sm:pl-7">
              <Button
                href="#informasi-pendaftaran"
                variant="hero"
                className="px-6 py-[11px] text-lg font-semibold tracking-[-0.6px] sm:text-2xl"
              >
                Informasi PPDB
              </Button>
              <Button
                href="#informasi-pendaftaran"
                variant="cream"
                className="px-6 py-[11px] text-lg font-semibold tracking-[-0.6px] sm:text-2xl"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl lg:mx-0">
            <Image
              src="/assets/home/hero.png"
              alt="Kegiatan santri dalam acara pesantren"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover object-[50%_58%]"
            />
          </div>
        </div>
      </section>

      <section id="informasi-pendaftaran" className="px-6 py-12 text-center sm:px-10 sm:py-[50px]">
        <p className="mx-auto max-w-[1280px] text-lg leading-[1.4] font-medium tracking-[-0.55px] text-[#454545] sm:text-xl lg:text-2xl">
          Mengadaptasi nilai-nilai Pondok Pesantren Modern, Daarul Mukhlisin hadir menyiapkan generasi pemimpin
          <br className="hidden lg:block" /> yang unggul dalam akademik dan siap mengabdi di tengah masyarakat.
        </p>
      </section>
    </>
  );
}
