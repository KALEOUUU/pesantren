import { PageContainer } from "@/components/layout/page-container";

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
    <section className="pt-[78px] pb-0">
      <PageContainer>
        <h2 className="text-center text-[48px] font-semibold leading-[normal] tracking-[-1.92px]">
          Motto Pesantren
        </h2>
        <div className="mx-auto mt-[64px] grid max-w-[1286px] gap-[54px] md:grid-cols-3">
          {mottos.map((motto) => (
            <article key={motto.title}>
              <h3 className="text-[40px] font-medium leading-[1.14] tracking-[-1.6px]">
                {motto.title}
              </h3>
              <p className="mt-[30px] text-[20px] leading-[normal] tracking-[-0.8px] text-black/75">
                {motto.text}
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-[72px] flex w-[479px] max-w-full flex-col gap-[18px]">
          <div className="h-px w-full bg-olive/70" />
          <div className="mx-auto h-px w-[350px] bg-olive/70" />
        </div>
      </PageContainer>
    </section>
  );
}
