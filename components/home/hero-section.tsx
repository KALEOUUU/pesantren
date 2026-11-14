import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative h-[1024px] w-full overflow-hidden bg-olive-dark text-white"
      aria-labelledby="hero-title"
    >
      <Image
        src="/assets/home/hero.png"
        alt="Pondok Pesantren Daarul Mukhlisin"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)]" />
      <div className="relative mx-auto h-full max-w-[1440px]">
        <h1
          id="hero-title"
          className="absolute left-[350px] top-[768px] text-[48px] font-semibold leading-[normal] tracking-[-1.92px]"
        >
          Pondok Pesantren Daarul Mukhlisin
        </h1>
        <p className="absolute left-[350px] top-[846px] w-[443px] text-[24px] font-medium leading-[normal] tracking-[-0.96px]">
          Berfokus pada pembentukan generasi Qur’ani, ilmu agama, dan akhlakul
          karimah.
        </p>
        <Button
          variant="hero"
          href="#kurikulum"
          className="absolute left-[calc(50%+261px)] top-[850px] -translate-x-1/2 text-[24px] hover:bg-white hover:text-olive-dark"
        >
          Lihat Kurikulum
        </Button>
      </div>
    </section>
  );
}
