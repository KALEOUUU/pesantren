import { Button } from "@/components/ui/button";
export function AdmissionsSection() {
  return (
    <section className="h-[345px] bg-[rgba(255,249,203,0.15)]">
      <div className="mx-auto grid h-full max-w-[1146px] items-center gap-8 px-6 md:grid-cols-[1fr_auto] md:px-0">
        <div>
          <h2 className="text-4xl font-semibold leading-[1.14] tracking-[-1.92px] md:text-[48px]">
            Penerimaan Santri &amp; Santriwati Baru
          </h2>
          <p className="mt-5 text-xl leading-[1.14] text-olive-secondary md:text-2xl">
            Pendaftaran dibuka
          </p>
          <p className="mt-5 max-w-[619px] text-xl leading-[1.14]">
            Bimbingan personal dari pembina untuk memastikan tumbuh kembang dan
            kedisiplinan setiap santri.
          </p>
        </div>
        <Button variant="primary" href="/pendaftaran">
          Informasi PPDB
        </Button>
      </div>
    </section>
  );
}
