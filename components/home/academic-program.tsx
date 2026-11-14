import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import type { AcademicProgram as AcademicProgramData } from "@/data/home";

export function AcademicProgram({ program }: { program: AcademicProgramData }) {
  return (
    <article
      id={program.href.slice(1)}
      className="grid items-start gap-6 md:grid-cols-2 md:gap-12 xl:grid-cols-[700px_422px] xl:gap-[210px]"
    >
      <Image
        src={program.image}
        alt={program.title}
        width={700}
        height={360}
        className="aspect-[700/360] h-auto w-full rounded-[9px] object-cover xl:h-[360px] xl:w-[700px]"
      />
      <div className="flex min-h-full flex-col items-start pt-0.5 md:min-h-[360px]">
        <h3 className="text-[28px] font-medium leading-[1.14] tracking-[-1.12px] xl:text-[40px] xl:tracking-[-1.6px]">
          {program.title}
        </h3>
        <p className="mt-4 max-w-[420px] text-[16px] leading-[1.14] tracking-[-0.5px] text-black/75 xl:mt-5 xl:text-[20px] xl:tracking-[-0.8px]">
          {program.description}
        </p>
        <ArrowLink
          href={program.href}
          className="mt-auto border-0 px-0 py-0 text-[14px] font-normal tracking-[-0.2px] text-olive-secondary hover:bg-transparent"
        >
          Selengkapnya
        </ArrowLink>
      </div>
    </article>
  );
}
