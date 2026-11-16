import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const missions = [
  "Menyelenggarakan pendidikan pesantren terpadu yang memadukan ilmu syar’i dan umum.",
  "Membina karakter santri melalui pembiasaan ibadah, kedisiplinan, dan bahasa asing.",
  "Mengembangkan potensi dan bakat santri dalam bidang akademik, wirausaha, serta teknologi.",
];

export function VisionMission() {
  return (
    <section className="bg-[#fffdf4] py-[42px] md:py-[50px]">
      <PageContainer>
        <div className="mx-auto grid max-w-[1210px] items-center gap-7 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:grid-cols-[minmax(0,624px)_minmax(0,1fr)] xl:gap-[80px]">
          <ScrollReveal>
          <article id="visi" className="flex min-h-0 flex-col rounded-[9px] bg-[linear-gradient(105deg,#85836d_0%,#d8d4b1_100%)] px-6 py-6 text-white transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none md:min-h-[340px] md:px-8 md:py-7 xl:px-[58px] xl:py-[30px]">
            <h2 className="text-[36px] font-semibold leading-none tracking-[-1.2px] md:text-[36px] xl:text-[40px]">Visi</h2>
            <p className="mt-5 max-w-[510px] text-[18px] leading-[1.2] tracking-[-0.35px] md:mt-6 md:text-[18px] md:leading-[1.15] xl:text-[20px] xl:leading-[1.12] xl:tracking-[-0.45px]">“Menjadi lembaga pendidikan Islam unggulan yang mencetak generasi berakhlak mulia, berjiwa pemimpin, dan berdaya saing global berlandaskan Al-Qur’an dan As-Sunnah.”</p>
          </article>
          </ScrollReveal>
          <ScrollReveal delayMs={140}>
          <article id="misi" className="py-2 text-olive-secondary">
            <h2 className="text-[36px] font-semibold leading-none tracking-[-1.2px] md:text-[36px] xl:text-[40px]">Misi</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-7 text-base leading-[1.25] tracking-[-0.25px] md:mt-5 md:space-y-4 md:pl-7 md:text-[17px] md:leading-[1.2] md:tracking-[-0.3px] xl:mt-6 xl:space-y-6 xl:pl-8 xl:text-[20px] xl:leading-[1.15] xl:tracking-[-0.35px]">
              {missions.map((mission) => <li key={mission} className="pl-1">{mission}</li>)}
            </ol>
          </article>
          </ScrollReveal>
        </div>
      </PageContainer>
    </section>
  );
}
