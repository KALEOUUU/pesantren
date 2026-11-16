import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-0 w-full overflow-hidden bg-olive-dark text-white md:h-[78svh] md:min-h-[620px] md:max-h-[820px] xl:h-[1024px] xl:min-h-0 xl:max-h-none"
      aria-labelledby="hero-title"
    >
      <div className="relative aspect-[1440/1024] w-full md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/assets/home/hero.png"
          alt="Pondok Pesantren Daarul Mukhlisin"
          fill
          priority
          className="hero-background-entrance object-contain md:object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay-entrance absolute inset-0 bg-[rgba(0,0,0,0.25)]" />
      </div>
      <div className="relative -mt-48 flex flex-col items-start gap-3 px-6 pb-8 md:absolute md:inset-x-8 md:bottom-10 md:mt-0 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-x-8 md:gap-y-4 md:px-0 md:pb-0 lg:inset-x-[7vw] xl:inset-x-0 xl:top-0 xl:bottom-auto xl:mx-auto xl:h-full xl:max-w-[1440px] xl:block">
        <h1
          id="hero-title"
          className="hero-content-entrance w-full text-[34px] font-semibold leading-[1.08] tracking-[-1.2px] md:col-span-2 md:row-start-1 md:max-w-[760px] md:text-[40px] md:leading-[1.08] md:tracking-[-1.6px] xl:absolute xl:left-[350px] xl:top-[768px] xl:col-span-1 xl:row-start-auto xl:max-w-none xl:text-[48px] xl:leading-[normal] xl:tracking-[-1.92px]"
        >
          Pondok Pesantren Daarul Mukhlisin
        </h1>
        <p className="hero-content-entrance hero-content-entrance-delay-1 w-full text-base font-medium leading-relaxed tracking-normal md:col-start-1 md:row-start-2 md:max-w-[460px] md:text-lg md:leading-[1.35] md:tracking-[-0.4px] xl:absolute xl:left-[350px] xl:top-[846px] xl:w-[443px] xl:text-[24px] xl:leading-[normal] xl:tracking-[-0.96px]">
          Berfokus pada pembentukan generasi Qur’ani, ilmu agama, dan akhlakul
          karimah.
        </p>
        <Button
          variant="hero"
          href="#kurikulum"
          className="hero-content-entrance hero-content-entrance-delay-2 self-start !px-5 !py-2 !text-base md:col-start-2 md:row-start-2 md:justify-self-end md:self-end md:!px-6 md:!py-2.5 md:!text-lg xl:absolute xl:left-[calc(50%+261px)] xl:top-[850px] xl:col-start-auto xl:row-start-auto xl:justify-self-auto xl:self-auto xl:!px-[27px] xl:!py-3 xl:!text-2xl xl:-translate-x-1/2 hover:bg-white hover:text-olive-dark"
        >
          Lihat Program
        </Button>
      </div>
    </section>
  );
}
