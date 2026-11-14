import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
export function HomeCTA() {
  return (
    <section className="pb-12 md:pb-24">
      <PageContainer>
        <div className="grid gap-6 rounded-[18px] bg-[linear-gradient(71.43702610002936deg,rgb(117,114,93)_0%,rgb(168,164,134)_46.817%,rgb(219,213,174)_100%)] px-6 py-8 text-white md:min-h-[450px] md:grid-cols-[1fr_auto] md:items-end md:gap-8 md:px-[90px] md:py-[54px]">
          <div>
            <h2 className="max-w-[607px] text-[28px] font-semibold leading-[1.14] tracking-[-1.1px] md:text-[48px] md:tracking-[-1.92px]">
              Berikan masa depan dengan akhlakul kharimah!
            </h2>
            <p className="mt-4 max-w-[415px] text-base leading-relaxed tracking-normal md:mt-6 md:text-2xl md:leading-[normal] md:tracking-[-0.96px]">
              Bergabung bersama keluarga Pondok Pesantren Daarul Mukhlisin
              sekarang.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button
              variant="cream"
              href="/pendaftaran"
              className="rounded-[9px] !px-5 !py-2 !text-base font-medium tracking-[-0.5px] md:!px-7 md:!py-3 md:!text-xl"
            >
              Daftar Sekarang
            </Button>
            <Button
              variant="kurikulum"
              href="#kurikulum"
              className="rounded-[9px] !px-5 !py-2 !text-base font-medium tracking-[-0.5px] md:!px-7 md:!py-3 md:!text-xl"
            >
              Lihat Kurikulum
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
