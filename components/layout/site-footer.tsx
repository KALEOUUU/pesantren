import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  { title: "Program Unggulan", items: ["Bahasa Arab & Bahasa Inggris", "International Class", "30 Juz satu semester"] },
  { title: "Tentang", items: ["Kurikulum", "Pengajar", "Alamat"] },
  { title: "Kontak", items: ["Whatsapp", "Instagram", "Email"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-white pt-12 pb-10 md:pt-20 md:pb-16 xl:pt-[144px] xl:pb-[112px]">
      <div className="mx-auto w-full max-w-[1152px] px-6 xl:px-0">
        <div className="grid gap-8 md:grid-cols-[minmax(250px,0.85fr)_minmax(0,1.15fr)] md:gap-8 xl:grid-cols-[minmax(360px,1fr)_minmax(0,1.15fr)] xl:gap-16">
          <div>
            <Link href="/" aria-label="Pesantren beranda" className="flex w-fit items-center gap-3">
              <span className="relative block h-[72px] w-[72px] shrink-0">
                <Image src="/assets/logo.png" alt="" fill className="object-contain" sizes="72px" />
              </span>
              <span className="max-w-[260px] text-[22px] font-semibold leading-[0.95] tracking-[-0.8px]">Pondok Pesantren<br />Daarul Mukhlisin</span>
            </Link>
            <p className="mt-6 max-w-[330px] text-[14px] leading-[1.1] tracking-[-0.35px] text-black/55">Pondok Pesantren Daarul Mukhlisin pondok dengan kearifan lokal dan pengajaran yang sangat oke!!.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.65fr)_minmax(0,0.7fr)] sm:gap-8">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-[17px] font-semibold tracking-[-0.4px] sm:text-[18px] xl:whitespace-nowrap xl:text-[22px] xl:tracking-[-0.5px]">{group.title}</h2>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.1] tracking-[-0.3px] text-black/55 md:mt-8 md:space-y-3">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-[13px] leading-[1.15] tracking-[-0.3px] text-black/50 md:mt-12 md:flex-row md:items-center md:justify-between xl:mt-[84px]">
          <p>© 2026 Pondok Pesantren Daarul Mukhlisin. All Rights Reserved</p>
          <div className="flex gap-8"><span>Privacy Policy</span><span>Terms and Condition</span></div>
        </div>
      </div>
    </footer>
  );
}
