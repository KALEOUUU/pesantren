import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";

const testimonials = [
  { name: "Mba Ajeng", image: "/assets/home/facility-1.png", text: "Lulusan barusan bekerja di pertambangan, saya sangat bangga dengan pondok saya." },
  { name: "Mas Radel", image: "/assets/home/facility-2.png", text: "Lulusan barusan bekerja di pertambangan, saya sangat bangga dengan pondok saya." },
];

export function TestimonialSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <h2 className="text-center text-4xl font-semibold tracking-[-1.92px] md:text-[64px]">Testimoni Alumni</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-[80px]">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="grid items-start gap-6 sm:grid-cols-[minmax(0,375px)_minmax(0,1fr)]">
              <Image src={testimonial.image} alt={testimonial.name} width={375} height={400} className="h-[300px] w-full rounded-[9px] object-cover md:h-[400px]" />
              <div className="flex h-full flex-col">
                <h3 className="text-[24px] font-medium leading-[1.14] tracking-[-0.96px] md:text-[32px]">{testimonial.name}</h3>
                <div className="mt-auto pb-1">
                  <p className="text-[12px] leading-[1.15] text-black/75">Apa kata alumni?</p>
                  <p className="mt-1 text-[18px] leading-[1.14] tracking-[-0.45px] text-black">{testimonial.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
