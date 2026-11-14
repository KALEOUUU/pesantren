import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";
export function HomeCTA() {
  return (
    <section className="pb-24">
      <PageContainer>
        <div className="grid min-h-[450px] gap-8 rounded-[18px] bg-[linear-gradient(71.43702610002936deg,rgb(117,114,93)_0%,rgb(168,164,134)_46.817%,rgb(219,213,174)_100%)] px-8 py-12 text-white md:grid-cols-[1fr_auto] md:items-end md:px-[90px] md:py-[54px]">
          <div>
            <h2 className="max-w-[607px] text-4xl font-semibold leading-[1.14] tracking-[-1.92px] md:text-[48px]">
              Berikan masa depan dengan akhlakul kharimah!
            </h2>
            <p className="mt-6 max-w-[415px] text-xl leading-[normal] tracking-[-0.96px] md:text-2xl">
              Bergabung bersama keluarga Pondok Pesantren Daarul Mukhlisin
              sekarang.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="cream"
              href="/pendaftaran"
              className="rounded-[9px] px-7 py-3 text-[20px] font-medium tracking-[-0.5px]"
            >
              Daftar Sekarang
            </Button>
            <ArrowLink
              href="#kurikulum"
              className="rounded-[9px] border-cream px-7 py-3 text-[20px] font-medium tracking-[-0.5px] text-white hover:bg-white/10"
            >
              Lihat Kurikulum
            </ArrowLink>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
