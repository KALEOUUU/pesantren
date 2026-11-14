import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

export function AboutHero() {
  return (
    <section className="pt-9 pb-[156px]">
      <PageContainer>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-[128px]">
          <Image
            src="/assets/home/introduction.png"
            alt="Kyai Pondok Pesantren Daarul Mukhlisin"
            width={560}
            height={560}
            priority
            className="aspect-[6/7] h-auto w-full rounded-[9px] object-cover"
          />
          <div className="flex min-h-[700px] flex-col pt-0.5">
            <p className="text-[20px] font-medium leading-[1.14] tracking-[-0.6px] text-olive-secondary">Tentang Kami</p>
            <h1 className="mt-6 max-w-[610px] text-[42px] font-semibold leading-[1.03] tracking-[-1.7px] md:text-[48px] md:tracking-[-1.92px]">
              Kelas <em className="font-semibold">Berbahasa Arab</em> dilengkapi dengan <em>pengajar asli timur tengah.</em>
            </h1>
            <p className="mt-10 max-w-[610px] text-[20px] leading-[1.2] tracking-[-0.6px] text-black/80 md:text-[24px] md:tracking-[-0.96px]">
              Program unggulan bahasa Arab yang dibimbing langsung oleh pengajar penutur asli (native speaker) asal Timur Tengah untuk menguasai komunikasi secara aktif, fasih, dan alami.
            </p>
            <div className="mt-auto flex items-center justify-between gap-8 pt-12">
              <div className="flex items-center gap-3">
                <span className="relative block h-[58px] w-[58px] shrink-0">
                  <Image src="/assets/logo.png" alt="" fill className="object-contain" sizes="58px" />
                </span>
                <p className="max-w-[220px] text-[19px] font-semibold leading-[0.98] tracking-[-0.6px] text-olive-secondary">Pondok Pesantren<br />Daarul Mukhlisin</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
