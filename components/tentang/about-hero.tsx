import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutHero() {
  return (
    <section className="pt-6 pb-12 md:pt-9 md:pb-16 xl:pb-[156px]">
      <PageContainer>
        <div className="grid items-start gap-7 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,1fr)] xl:gap-[128px]">
          <ScrollReveal>
            <Image
              src="/assets/home/introduction.png"
              alt="Kyai Pondok Pesantren Daarul Mukhlisin"
              width={560}
              height={560}
              priority
              className="aspect-square h-auto w-full rounded-[9px] object-cover xl:aspect-[6/7]"
            />
          </ScrollReveal>
          <ScrollReveal delayMs={140} className="h-full">
            <div className="flex min-h-0 flex-col pt-0.5 xl:min-h-[700px]">
              <p className="text-[20px] font-medium leading-[1.14] tracking-[-0.6px] text-olive-secondary">
                Tentang Kami
              </p>
              <h1 className="mt-3 max-w-[610px] text-[32px] font-semibold leading-[1.08] tracking-[-1.2px] md:mt-5 md:text-[38px] md:leading-[1.06] md:tracking-[-1.45px] xl:mt-6 xl:text-[48px] xl:leading-[1.03] xl:tracking-[-1.92px]">
                Kelas <em className="font-semibold">Berbahasa Arab</em>
                dilengkapi dengan <em>pengajar asli timur tengah.</em>
              </h1>
              <p className="mt-5 max-w-[610px] text-base leading-relaxed tracking-[-0.3px] text-black/80 md:mt-6 md:text-[19px] md:leading-[1.35] md:tracking-[-0.5px] xl:mt-10 xl:text-[24px] xl:leading-[1.2] xl:tracking-[-0.96px]">
                Program unggulan bahasa Arab yang dibimbing langsung oleh
                pengajar penutur asli (native speaker) asal Timur Tengah untuk
                menguasai komunikasi secara aktif, fasih, dan alami.
              </p>
              <div className="mt-7 flex items-center justify-between gap-8 pt-0 xl:mt-auto xl:pt-12">
                <div className="flex items-center gap-3">
                  <span className="relative block h-[58px] w-[58px] shrink-0">
                    <Image src="/assets/logo.png" alt="" fill className="object-contain" sizes="58px" />
                  </span>
                  <p className="max-w-[220px] text-[19px] font-semibold leading-[0.98] tracking-[-0.6px] text-olive-secondary">
                    Pondok Pesantren<br />Daarul Mukhlisin
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </PageContainer>
    </section>
  );
}
