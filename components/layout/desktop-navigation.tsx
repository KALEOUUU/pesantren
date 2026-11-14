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
          className={`text-2xl tracking-[-0.96px] transition-opacity ${pathname === link.href ? "font-bold opacity-100" : "font-medium opacity-75"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
