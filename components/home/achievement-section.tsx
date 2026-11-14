"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function AchievementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const baseImageRef = useRef<HTMLImageElement>(null);
  const changedImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const baseImage = baseImageRef.current;
    const changedImage = changedImageRef.current;
    if (!section || !sticky || !baseImage || !changedImage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollRange = section.offsetHeight - sticky.offsetHeight;
        const stickyOffset = (window.innerHeight - sticky.offsetHeight) / 2;
        const progress =
          scrollRange > 0
            ? Math.min(
                1,
                Math.max(
                  0,
                  (stickyOffset - section.getBoundingClientRect().top) / scrollRange,
                ),
              )
            : 0;

        baseImage.style.opacity = String(1 - progress);
        changedImage.style.opacity = String(progress);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Pencapaian Pondok"
      className="relative my-4 h-[34svh] md:my-10 md:h-[105svh]"
    >
      <div
        ref={stickyRef}
        className="sticky top-[12svh] flex h-[20svh] items-center justify-center md:top-[17.5svh] md:h-[65svh]"
      >
        <div className="relative left-1/2 aspect-[1550/413] w-screen max-w-[1550px] -translate-x-1/2 overflow-hidden">
        <Image
          ref={baseImageRef}
          src="/assets/home/pencapaian1.png"
          alt="Pencapaian Pondok: 54236 siswa, 32659 prestasi, 21547 pengajar"
          fill
          sizes="100vw"
          loading="eager"
          style={{ opacity: 1 }}
          className="object-contain"
        />
        <Image
          ref={changedImageRef}
          src="/assets/home/pencapaian2.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          loading="eager"
          style={{ opacity: 0 }}
          className="object-contain"
        />
        </div>
      </div>
    </section>
  );
}
