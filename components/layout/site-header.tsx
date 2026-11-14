import Image from "next/image";
import Link from "next/link";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <PageContainer>
        <div className="flex min-h-[80px] items-center justify-between gap-8 md:min-h-[126px]">
          <Link
            href="/"
            aria-label="Pesantren beranda"
            className="relative h-[54px] w-[56px] overflow-hidden md:h-[72px] md:w-[75px]"
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
          <div className="hidden md:block">
            <Button href="/pendaftaran" variant="header">
              Daftar Sekarang
            </Button>
          </div>
          <details className="group md:hidden">
            <summary aria-label="Buka menu navigasi" className="flex h-11 w-11 cursor-pointer list-none flex-col items-center justify-center gap-[5px] rounded-[9px] [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="h-[2px] w-6 bg-olive-dark" />
              <span aria-hidden="true" className="h-[2px] w-6 bg-olive-dark" />
              <span aria-hidden="true" className="h-[2px] w-6 bg-olive-dark" />
            </summary>
            <div className="absolute left-0 right-0 z-10 border-t border-olive-dark/10 bg-white px-6 shadow-sm">
              <MobileNavigation />
            </div>
          </details>
        </div>
      </PageContainer>
    </header>
  );
}
