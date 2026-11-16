"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/pendaftaran", label: "Pendaftaran" },
];
export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Navigasi utama"
      className="hidden items-center gap-6 md:flex lg:gap-10 xl:gap-[54px]"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          className={`text-lg tracking-[-0.5px] transition-[color,opacity,transform] duration-200 ease-out hover:-translate-y-px hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive motion-reduce:transform-none motion-reduce:transition-none lg:text-xl lg:tracking-[-0.7px] xl:text-2xl xl:tracking-[-0.96px] ${pathname === link.href ? "font-bold opacity-100" : "font-medium opacity-75"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
