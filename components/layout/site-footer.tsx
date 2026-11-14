import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  { title: "Program Unggulan", items: ["Bahasa Arab & Bahasa Inggris", "International Class", "30 Juz satu semester"] },
  { title: "Tentang", items: ["Kurikulum", "Pengajar", "Alamat"] },
  { title: "Kontak", items: ["Whatsapp", "Instagram", "Email"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-white pt-24 pb-16 md:pt-[144px] md:pb-[112px]">
      <div className="mx-auto w-full max-w-[1152px] px-6 md:px-0">
        <div className="grid gap-12 md:grid-cols-[minmax(360px,1fr)_minmax(0,1.15fr)] md:gap-16">
          <div>
            <Link href="/" aria-label="Pesantren beranda" className="flex w-fit items-center gap-3">
              <span className="relative block h-[72px] w-[72px] shrink-0">
                <Image src="/assets/logo.png" alt="" fill className="object-contain" sizes="72px" />
              </span>
              <span className="max-w-[260px] text-[22px] font-semibold leading-[0.95] tracking-[-0.8px]">Pondok Pesantren<br />Daarul Mukhlisin</span>
            </Link>
            <p className="mt-6 max-w-[330px] text-[14px] leading-[1.1] tracking-[-0.35px] text-black/55">Pondok Pesantren Daarul Mukhlisin pondok dengan kearifan lokal dan pengajaran yang sangat oke!!.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="whitespace-nowrap text-[18px] font-semibold tracking-[-0.5px] md:text-[22px]">{group.title}</h2>
                <ul className="mt-8 space-y-3 text-[14px] leading-[1.1] tracking-[-0.3px] text-black/55">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 text-[13px] leading-[1.15] tracking-[-0.3px] text-black/50 md:mt-[84px] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Pondok Pesantren Daarul Mukhlisin. All Rights Reserved</p>
          <div className="flex gap-8"><span>Privacy Policy</span><span>Terms and Condition</span></div>
        </div>
      </div>
    </footer>
  );
}
