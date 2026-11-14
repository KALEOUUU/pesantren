import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutHero() {
  return (
    <section className="pt-6 pb-12 md:pt-9 md:pb-[156px]">
      <PageContainer>
        <div className="grid items-start gap-7 md:gap-10 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-[128px]">
          <ScrollReveal>
            <Image
              src="/assets/home/introduction.png"
              alt="Kyai Pondok Pesantren Daarul Mukhlisin"
              width={560}
              height={560}
              priority
              className="aspect-square h-auto w-full rounded-[9px] object-cover lg:aspect-[6/7]"
            />
          </ScrollReveal>
          <ScrollReveal delayMs={140} className="h-full">
            <div className="flex min-h-0 flex-col pt-0.5 lg:min-h-[700px]">
              <p className="text-[20px] font-medium leading-[1.14] tracking-[-0.6px] text-olive-secondary">
                Tentang Kami
              </p>
              <h1 className="mt-3 max-w-[610px] text-[32px] font-semibold leading-[1.08] tracking-[-1.2px] md:mt-6 md:text-[48px] md:leading-[1.03] md:tracking-[-1.92px]">
                Kelas <em className="font-semibold">Berbahasa Arab</em>
                dilengkapi dengan <em>pengajar asli timur tengah.</em>
              </h1>
              <p className="mt-5 max-w-[610px] text-base leading-relaxed tracking-[-0.3px] text-black/80 md:mt-10 md:text-[24px] md:leading-[1.2] md:tracking-[-0.96px]">
                Program unggulan bahasa Arab yang dibimbing langsung oleh
                pengajar penutur asli (native speaker) asal Timur Tengah untuk
                menguasai komunikasi secara aktif, fasih, dan alami.
              </p>
              <div className="mt-7 flex items-center justify-between gap-8 pt-0 md:mt-auto md:pt-12">
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
