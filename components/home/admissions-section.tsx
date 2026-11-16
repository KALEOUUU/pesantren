import { Button } from "@/components/ui/button";
export function AdmissionsSection() {
  return (
    <section className="bg-[rgba(255,249,203,0.15)] py-10 md:py-12 lg:h-[345px] lg:py-0">
      <div className="mx-auto grid w-full max-w-[1146px] items-center gap-6 px-6 md:px-10 lg:h-full lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6 lg:px-8 xl:gap-8 xl:px-0">
        <div>
          <h2 className="text-[28px] font-semibold leading-[1.14] tracking-[-1.1px] lg:text-[36px] lg:tracking-[-1.4px] xl:text-[48px] xl:tracking-[-1.92px]">
            Penerimaan Santri &amp; Santriwati Baru
          </h2>
          <p className="mt-3 text-base leading-[1.3] text-olive-secondary lg:mt-4 lg:text-xl xl:mt-5 xl:text-2xl xl:leading-[1.14]">
            Pendaftaran dibuka
          </p>
          <p className="mt-3 max-w-[619px] text-base leading-[1.35] lg:mt-4 lg:text-lg lg:leading-[1.25] xl:mt-5 xl:text-xl xl:leading-[1.14]">
            Bimbingan personal dari pembina untuk memastikan tumbuh kembang dan
            kedisiplinan setiap santri.
          </p>
        </div>
        <Button variant="primary" href="/pendaftaran" className="w-fit !px-5 !py-2 !text-base lg:!px-5 lg:!py-2.5 lg:!text-lg xl:!px-[27px] xl:!py-3 xl:!text-2xl">
          Informasi PPDB
        </Button>
      </div>
    </section>
  );
}
