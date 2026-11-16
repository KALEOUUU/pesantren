import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RouteMotionBoundary } from "@/components/layout/route-motion-boundary";

export const metadata: Metadata = {
  title: "Pesantren",
  description: "Pondok pesantren dengan pendidikan agama dan ilmu umum.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        <div aria-hidden="true" className="h-[80px] md:h-[126px]" />
        <main>
          <RouteMotionBoundary>{children}</RouteMotionBoundary>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
