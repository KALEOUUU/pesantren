import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const mottos = [
  {
    title: "Kokoh dalam aqidah",
    text: "Memiliki keyakinan dan keimanan yang kuat kepada Allah SWT tanpa keraguan, sehingga tidak mudah terpengaruh oleh kepercayaan yang menyimpang.",
  },
  {
    title: "Istiqomah dalam syariat",
    text: "Konsisten dan disiplin dalam menjalankan aturan serta ibadah sesuai hukum Islam di kehidupan sehari-hari.",
  },
  {
    title: "Mulia dalam akhlak",
    text: "Menampilkan tutur kata, sikap, dan perilaku terpuji (akhlakul karimah) saat berinteraksi dengan sesama manusia.",
  },
];

export function MottoSection() {
  return (
    <section className="pt-12 pb-0 md:pt-[78px]">
      <PageContainer>
        <ScrollReveal>
          <h2 className="text-left text-3xl font-semibold leading-[normal] tracking-[-1.2px] md:text-center md:text-[48px] md:tracking-[-1.92px]">
            Motto Pesantren
          </h2>
        </ScrollReveal>
        <div className="mx-auto mt-9 grid max-w-[1286px] gap-7 md:mt-12 md:grid-cols-2 md:gap-8 lg:mt-[64px] lg:grid-cols-3 lg:gap-8 xl:gap-[54px]">
          {mottos.map((motto, index) => (
            <ScrollReveal
              key={motto.title}
              delayMs={index * 100}
              className={index === 2 ? "md:col-span-2 md:mx-auto md:max-w-[calc(50%-1rem)] lg:col-span-1 lg:mx-0 lg:max-w-none" : ""}
            >
              <article>
                <h3 className="text-[24px] font-medium leading-[1.14] tracking-[-0.8px] md:text-[30px] md:tracking-[-1.1px] xl:text-[40px] xl:tracking-[-1.6px]">
                  {motto.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed tracking-[-0.3px] text-black/75 md:mt-4 md:text-[17px] md:leading-[1.4] md:tracking-[-0.45px] xl:mt-[30px] xl:text-[20px] xl:leading-[normal] xl:tracking-[-0.8px]">
                  {motto.text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delayMs={250}>
          <div className="mx-auto mt-10 flex w-[479px] max-w-full flex-col gap-3 md:mt-[72px] md:gap-[18px]">
            <div className="h-px w-full bg-olive/70" />
            <div className="mx-auto h-px w-[min(350px,80%)] bg-olive/70" />
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
