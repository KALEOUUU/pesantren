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
      className="hidden items-center gap-[54px] md:flex"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          className={`text-2xl tracking-[-0.96px] transition-[color,opacity,transform] duration-200 ease-out hover:-translate-y-px hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive motion-reduce:transform-none motion-reduce:transition-none ${pathname === link.href ? "font-bold opacity-100" : "font-medium opacity-75"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
