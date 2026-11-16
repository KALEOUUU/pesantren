import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export function HomeCTA() {
  return (
    <section className="pb-12 md:pb-24">
      <PageContainer>
        <div className="relative isolate grid min-h-[340px] grid-cols-1 gap-7 overflow-hidden rounded-[18px] bg-[linear-gradient(100deg,#86846e_0%,#aaa78a_50%,#d9d4ae_100%)] px-6 py-7 text-white md:min-h-[380px] md:gap-6 lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_auto] lg:grid-rows-[1fr_auto] lg:gap-8 lg:px-12 lg:py-12 xl:min-h-[450px] xl:px-[90px] xl:py-[54px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/home/patterb.png')] bg-repeat opacity-[0.19] [background-size:133px_145px]"
          />
          <h2 className="relative z-10 max-w-[700px] text-[28px] font-semibold leading-[1.14] tracking-[-1.1px] md:text-[36px] md:tracking-[-1.4px] lg:col-span-2 lg:row-start-1 lg:text-[42px] lg:tracking-[-1.7px] xl:text-[48px] xl:tracking-[-1.92px]">
            Berikan masa depan dengan akhlakul kharimah!
          </h2>
          <p className="relative z-10 max-w-[480px] self-end text-base leading-relaxed tracking-normal md:text-lg md:leading-[1.4] md:tracking-[-0.4px] lg:col-start-1 lg:row-start-2 lg:text-xl xl:text-2xl xl:leading-[normal] xl:tracking-[-0.96px]">
            Bergabung bersama keluarga Pondok Pesantren Daarul Mukhlisin
            sekarang.
          </p>
          <div className="relative z-10 flex flex-wrap items-center gap-3 md:gap-4 lg:col-start-2 lg:row-start-2 lg:justify-self-end">
            <Button
              variant="cream"
              href="https://docs.google.com/forms/d/e/1FAIpQLSenfFS8_aLOzk14wAgZkMsp7DKVs0DZ-FUDQWGYxcUzg5jZIQ/viewform"
              className="rounded-[9px] !bg-cream !px-5 !py-2 !text-base font-medium tracking-[-0.5px] !text-olive-secondary lg:!px-6 lg:!py-2.5 lg:!text-lg xl:!px-7 xl:!py-3 xl:!text-xl"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
