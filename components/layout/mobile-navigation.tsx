"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function MobileNavigation() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/pendaftaran", label: "Pendaftaran" },
  ];
  return (
    <nav
      aria-label="Navigasi mobile"
      className="flex flex-col gap-5 border-t border-olive-dark/15 py-5 md:hidden"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          className={`text-lg ${pathname === link.href ? "font-bold" : "font-medium"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
