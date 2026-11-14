import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative min-h-0 w-full overflow-hidden bg-olive-dark text-white md:h-[1024px] md:min-h-0"
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
      <div className="relative -mt-48 flex flex-col items-start gap-3 px-6 pb-8 md:absolute md:inset-x-0 md:top-0 md:mx-auto md:mt-0 md:h-full md:max-w-[1440px] md:px-0 md:pb-0">
        <h1
          id="hero-title"
          className="hero-content-entrance w-full text-[34px] font-semibold leading-[1.08] tracking-[-1.2px] md:absolute md:left-[350px] md:top-[768px] md:w-auto md:text-[48px] md:leading-[normal] md:tracking-[-1.92px]"
        >
          Pondok Pesantren Daarul Mukhlisin
        </h1>
        <p className="hero-content-entrance hero-content-entrance-delay-1 w-full text-base font-medium leading-relaxed tracking-normal md:absolute md:left-[350px] md:top-[846px] md:w-[443px] md:text-[24px] md:leading-[normal] md:tracking-[-0.96px]">
          Berfokus pada pembentukan generasi Qur’ani, ilmu agama, dan akhlakul
          karimah.
        </p>
        <Button
          variant="hero"
          href="#kurikulum"
          className="hero-content-entrance hero-content-entrance-delay-2 self-start !px-5 !py-2 !text-base md:absolute md:left-[calc(50%+261px)] md:top-[850px] md:self-auto md:!px-[27px] md:!py-3 md:!text-2xl md:-translate-x-1/2 hover:bg-white hover:text-olive-dark"
        >
          Lihat Kurikulum
        </Button>
      </div>
    </section>
  );
}
