import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Accreditation() {
  return (
    <section className="pt-10 pb-16 md:pt-12 md:pb-20 xl:pb-[160px]">
      <PageContainer>
        <SectionHeading eyebrow="Bukti Nyata" title="Akreditasi Kami" className="text-center [&>p]:mb-2 [&>p]:text-base [&>p]:font-normal [&>p]:tracking-[-0.3px] [&>h1]:text-[34px] [&>h1]:tracking-[-1.1px] md:[&>p]:mb-3 md:[&>p]:text-[18px] md:[&>p]:tracking-[-0.45px] md:[&>h1]:text-[48px] md:[&>h1]:tracking-[-1.9px] xl:[&>p]:mb-4 xl:[&>p]:text-[20px] xl:[&>p]:tracking-[-0.5px] xl:[&>h1]:text-[64px] xl:[&>h1]:tracking-[-2.56px]" />
        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 md:gap-7 xl:mt-[68px] xl:gap-[42px]">
          <div aria-label="Dokumen akreditasi pertama" className="aspect-[1.4] w-full bg-[#d9d9d9]" />
          <div aria-label="Dokumen akreditasi kedua" className="aspect-[1.4] w-full bg-[#d9d9d9]" />
        </div>
      </PageContainer>
    </section>
  );
}
