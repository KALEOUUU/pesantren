import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

export function IntroductionSection() {
  return (
    <section className="pt-[240px] pb-[100px]">
      <PageContainer className="grid items-start gap-[67px] md:grid-cols-[705px_560px]">
        <div className="pt-[14px]">
          <h2 className="flex flex-wrap items-baseline gap-x-3 text-[48px] font-semibold leading-[normal] tracking-[-1.92px]">
            <span>Sambutan Kyai</span>
            <em className="text-[40px] font-normal tracking-[-1.6px]">
              Muhammad Luky Keren
            </em>
          </h2>
          <div className="mt-[94px] max-w-[705px] space-y-[34px] text-[24px] font-medium leading-[normal] tracking-[-0.96px] text-black/75">
            <p>
              Puji syukur ke hadirat Allah Swt. atas rahmat, taufik, dan
              hidayah-Nya, sehingga pada malam ini kita dapat berkumpul di
              kediaman Bapak/Ibu [Sebutkan Nama] untuk melaksanakan kegiatan
              [Sebutkan Nama Acara, misal: pengajian rutin] tanpa halangan suatu
              apa pun. Selawat serta salam senantiasa tercurah kepada junjungan
              kita Nabi Muhammad saw. yang telah membawa kita menuju cahaya
              kebenaran, yakni agama Islam.
            </p>
            <p>
              Mewakili pengurus [Sebutkan Nama Organisasi/Panitia], kami
              mengucapkan terima kasih kepada Bapak/Ibu Kyai [Sebutkan Nama]
              yang berkenan hadir untuk memberikan mauidhatul hasanah (nasihat
              baik) kepada kita semua.
            </p>
          </div>
        </div>
        <Image
          src="/assets/home/introduction.png"
          alt="Sambutan Kyai Muhammad Luky Keren"
          width={560}
          height={560}
          className="h-[560px] w-[560px] rounded-[9px] object-cover"
        />
      </PageContainer>
    </section>
  );
}
