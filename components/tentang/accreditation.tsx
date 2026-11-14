import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Accreditation() {
  return (
    <section className="pt-12 pb-[160px]">
      <PageContainer>
        <SectionHeading eyebrow="Bukti Nyata" title="Akreditasi Kami" className="text-center [&>p]:text-[20px] [&>p]:font-normal [&>p]:tracking-[-0.5px] [&>h1]:text-[48px] [&>h1]:tracking-[-1.92px] md:[&>h1]:text-[64px] md:[&>h1]:tracking-[-2.56px]" />
        <div className="mt-[68px] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[42px]">
          <div aria-label="Dokumen akreditasi pertama" className="aspect-[1.4] w-full bg-[#d9d9d9]" />
          <div aria-label="Dokumen akreditasi kedua" className="aspect-[1.4] w-full bg-[#d9d9d9]" />
        </div>
      </PageContainer>
    </section>
  );
}
