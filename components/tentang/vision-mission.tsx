import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

const missions = [
  "Menyelenggarakan pendidikan pesantren terpadu yang memadukan ilmu syar’i dan umum.",
  "Membina karakter santri melalui pembiasaan ibadah, kedisiplinan, dan bahasa asing.",
  "Mengembangkan potensi dan bakat santri dalam bidang akademik, wirausaha, serta teknologi.",
];

export function VisionMission() {
  return (
    <section className="bg-[#fffdf4] py-[42px] md:py-[50px]">
      <PageContainer>
        <div className="mx-auto grid max-w-[1210px] items-center gap-12 lg:grid-cols-[minmax(0,624px)_minmax(0,1fr)] lg:gap-[80px]">
          <article id="visi" className="flex min-h-[340px] flex-col rounded-[9px] bg-[linear-gradient(105deg,#85836d_0%,#d8d4b1_100%)] px-10 py-7 text-white md:px-[58px] md:py-[30px]">
            <h2 className="text-[36px] font-semibold leading-none tracking-[-1.2px] md:text-[40px]">Visi</h2>
            <p className="mt-6 max-w-[510px] text-[18px] leading-[1.12] tracking-[-0.45px] md:text-[20px]">“Menjadi lembaga pendidikan Islam unggulan yang mencetak generasi berakhlak mulia, berjiwa pemimpin, dan berdaya saing global berlandaskan Al-Qur’an dan As-Sunnah.”</p>
            <Button href="#misi" variant="primary" className="mt-auto self-end rounded-[9px] bg-olive-dark px-7 py-3 text-[18px] font-medium tracking-[-0.5px] hover:bg-olive-dark">Baca Selengkapnya</Button>
          </article>
          <article id="misi" className="py-2 text-olive-secondary">
            <h2 className="text-[36px] font-semibold leading-none tracking-[-1.2px] md:text-[40px]">Misi</h2>
            <ol className="mt-6 list-decimal space-y-5 pl-8 text-[17px] leading-[1.15] tracking-[-0.35px] md:text-[20px] md:space-y-6">
              {missions.map((mission) => <li key={mission} className="pl-1">{mission}</li>)}
            </ol>
          </article>
        </div>
      </PageContainer>
    </section>
  );
}
