"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function ScrollReveal({ children, className = "", delayMs = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("scroll-reveal-visible");
      return;
    }
    if (!("IntersectionObserver" in window)) {
      element.classList.add("scroll-reveal-visible");
      return;
    }

    element.classList.add("scroll-reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.remove("scroll-reveal-pending");
        element.classList.add("scroll-reveal-visible");
        observer.unobserve(element);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
