import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "cream" | "outline" | "hero" | "header" | "kurikulum";
};
const variants = {
  primary: "bg-olive-secondary text-white",
  cream: "bg-cream text-olive-secondary",
  outline: "border border-olive-dark text-olive-dark",
  hero: "bg-white/20 text-white ring-1 ring-white/70",
  header:
    "group relative overflow-hidden bg-[linear-gradient(110deg,#d0ceb9_0%,#c1bfa9_48%,#aaa890_100%)] text-olive-secondary hover:text-white focus-visible:text-white",
  kurikulum:
    "group relative overflow-hidden border border-cream bg-[linear-gradient(110deg,#b0ad91_0%,#9d9b80_100%)] text-white",
};
export function Button({
  className = "",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-[9px] px-[27px] py-[12px] text-2xl font-semibold tracking-[-0.96px] transition-[color,background-color,border-color,opacity,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive motion-reduce:transform-none motion-reduce:transition-none ${variants[variant]} ${variant === "outline" ? "hover:bg-cream" : variant === "header" || variant === "kurikulum" ? "" : "hover:bg-olive-dark"} ${className}`}
      {...props}
    >
      {(variant === "header" || variant === "kurikulum") && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none ${
            variant === "header"
              ? "bg-[linear-gradient(110deg,#4d4b3c_0%,#3d3b2f_100%)]"
              : "bg-[linear-gradient(110deg,#4d4b3c_0%,#5b5948_100%)]"
          }`}
        />
      )}
      <span className={variant === "header" || variant === "kurikulum" ? "relative z-10" : undefined}>
        {children}
      </span>
    </Link>
  );
}
