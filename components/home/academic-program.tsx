import Image from "next/image";
import type { AcademicProgram as AcademicProgramData } from "@/data/home";

export function AcademicProgram({ program }: { program: AcademicProgramData }) {
  return (
    <article
      id={program.href.slice(1)}
      className="grid items-start gap-4 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none md:grid-cols-2 md:gap-8 xl:grid-cols-[700px_422px] xl:gap-[210px]"
    >
      <Image
        src={program.image}
        alt={program.title}
        width={700}
        height={360}
        className="aspect-[700/360] h-auto w-full rounded-[9px] object-cover xl:h-[360px] xl:w-[700px]"
      />
      <div className="flex min-h-full flex-col items-start pt-0.5 md:min-h-[360px]">
        <h3 className="text-[22px] font-medium leading-[1.14] tracking-[-0.8px] md:text-[28px] md:tracking-[-1.12px] xl:text-[40px] xl:tracking-[-1.6px]">
          {program.title}
        </h3>
        <p className="mt-2 max-w-[420px] text-[15px] leading-[1.35] tracking-[-0.3px] text-black/75 md:mt-4 md:text-base md:leading-[1.14] md:tracking-[-0.5px] xl:mt-5 xl:text-[20px] xl:tracking-[-0.8px]">
          {program.description}
        </p>
      </div>
    </article>
  );
}
