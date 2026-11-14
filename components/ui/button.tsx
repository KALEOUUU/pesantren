import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "cream" | "outline" | "hero";
};
const variants = {
  primary: "bg-olive-secondary text-white",
  cream: "bg-cream text-olive-secondary",
  outline: "border border-olive-dark text-olive-dark",
  hero: "bg-white/20 text-white ring-1 ring-white/70",
};
export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-[9px] px-[27px] py-[12px] text-2xl font-semibold tracking-[-0.96px] transition-colors ${variants[variant]} ${variant === "outline" ? "hover:bg-cream" : "hover:bg-olive-dark"} ${className}`}
      {...props}
    />
  );
}
