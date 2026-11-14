import { Button } from "@/components/ui/button";
export function AdmissionsSection() {
  return (
    <section className="bg-[rgba(255,249,203,0.15)] py-10 md:h-[345px] md:py-0">
      <div className="mx-auto grid max-w-[1146px] items-center gap-6 px-6 md:h-full md:grid-cols-[1fr_auto] md:gap-8 md:px-0">
        <div>
          <h2 className="text-[28px] font-semibold leading-[1.14] tracking-[-1.1px] md:text-[48px] md:tracking-[-1.92px]">
            Penerimaan Santri &amp; Santriwati Baru
          </h2>
          <p className="mt-3 text-base leading-[1.3] text-olive-secondary md:mt-5 md:text-2xl md:leading-[1.14]">
            Pendaftaran dibuka
          </p>
          <p className="mt-3 max-w-[619px] text-base leading-[1.35] md:mt-5 md:text-xl md:leading-[1.14]">
            Bimbingan personal dari pembina untuk memastikan tumbuh kembang dan
            kedisiplinan setiap santri.
          </p>
        </div>
        <Button variant="primary" href="/pendaftaran" className="!px-5 !py-2 !text-base md:!px-[27px] md:!py-3 md:!text-2xl">
          Informasi PPDB
        </Button>
      </div>
    </section>
  );
}
