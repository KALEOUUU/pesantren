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
      className="flex flex-col gap-7 py-6 md:hidden"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          onClick={(event) => {
            const menu = event.currentTarget.closest("details");
            if (menu) menu.open = false;
          }}
          className={`text-[22px] leading-tight transition-colors duration-200 hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive motion-reduce:transition-none ${pathname === link.href ? "font-semibold text-olive" : "font-medium text-foreground"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
