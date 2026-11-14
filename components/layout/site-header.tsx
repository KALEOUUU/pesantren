import Image from "next/image";
import Link from "next/link";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
export function SiteHeader() {
  return (
    <header className="bg-white">
      <PageContainer>
        <div className="flex min-h-[126px] items-center justify-between gap-8">
          <Link
            href="/"
            aria-label="Pesantren beranda"
            className="relative h-[72px] w-[75px] overflow-hidden"
          >
            <Image
              src="/assets/logo.png"
              alt="Pesantren"
              fill
              priority
              className="object-contain"
              sizes="75px"
            />
          </Link>
          <DesktopNavigation />
          <Button href="/pendaftaran" className="hidden md:inline-flex">
            Daftar Sekarang
          </Button>
          <details className="group md:hidden">
            <summary className="cursor-pointer list-none rounded-[9px] border border-olive-dark px-4 py-2 text-sm font-semibold">
              Menu
            </summary>
            <div className="absolute left-0 right-0 z-10 bg-white px-[54px] shadow-sm">
              <MobileNavigation />
            </div>
          </details>
        </div>
      </PageContainer>
    </header>
  );
}
