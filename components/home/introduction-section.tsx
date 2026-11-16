import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function IntroductionSection() {
  return (
    <section className="pt-16 pb-12 md:pt-20 md:pb-16 xl:pt-[240px] xl:pb-[100px]">
      <PageContainer className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:gap-10 xl:grid-cols-[minmax(0,705px)_minmax(0,560px)] xl:gap-[67px]">
        <ScrollReveal className="order-1 lg:col-start-1 lg:row-start-1">
          <h2 className="flex flex-wrap items-baseline gap-x-2 pt-0 text-3xl font-semibold leading-[1.12] tracking-[-1.2px] md:gap-x-3 md:text-[40px] md:leading-[normal] md:tracking-[-1.6px] xl:pt-[14px] xl:text-[48px] xl:tracking-[-1.92px]">
            <span>Sambutan Kyai</span>
            <em className="text-2xl font-normal tracking-[-0.8px] md:text-[32px] md:tracking-[-1.1px] xl:text-[40px] xl:tracking-[-1.6px]">
              Muhammad Luky Keren
            </em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delayMs={140} className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Image
            src="/assets/home/introduction.png"
            alt="Sambutan Kyai Muhammad Luky Keren"
            width={560}
            height={560}
            className="aspect-square h-auto w-full max-w-[560px] justify-self-center rounded-[9px] object-cover lg:justify-self-end xl:h-[560px] xl:w-[560px]"
          />
        </ScrollReveal>
        <ScrollReveal className="order-3 max-w-[705px] text-base font-medium leading-relaxed tracking-normal text-black/75 md:text-lg md:leading-[1.5] lg:col-start-1 lg:row-start-2 lg:mt-8 xl:mt-[94px] xl:text-[24px] xl:leading-[normal] xl:tracking-[-0.96px]">
          <div className="space-y-5 md:space-y-[34px]">
            <p>
              Puji syukur ke hadirat Allah Swt. atas rahmat, taufik, dan
              hidayah-Nya, sehingga pada malam ini kita dapat berkumpul di
              kediaman Bapak/Ibu [Sebutkan Nama] untuk melaksanakan kegiatan
              [Sebutkan Nama Acara, misal: pengajian rutin] tanpa halangan
              suatu apa pun. Selawat serta salam senantiasa tercurah kepada
              junjungan kita Nabi Muhammad saw. yang telah membawa kita menuju
              cahaya kebenaran, yakni agama Islam.
            </p>
            <p>
              Mewakili pengurus [Sebutkan Nama Organisasi/Panitia], kami
              mengucapkan terima kasih kepada Bapak/Ibu Kyai [Sebutkan Nama]
              yang berkenan hadir untuk memberikan mauidhatul hasanah
              (nasihat baik) kepada kita semua.
            </p>
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
