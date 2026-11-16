import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const testimonials = [
  { name: "Mba Ajeng", image: "/assets/home/facility-1.png", text: "Lulusan barusan bekerja di pertambangan, saya sangat bangga dengan pondok saya." },
  { name: "Mas Radel", image: "/assets/home/facility-2.png", text: "Lulusan barusan bekerja di pertambangan, saya sangat bangga dengan pondok saya." },
];

export function TestimonialSection() {
  return (
    <section className="py-12 md:py-24">
      <PageContainer>
        <ScrollReveal>
          <h2 className="text-left text-4xl font-semibold tracking-[-1.92px] md:text-center md:text-[64px]">Testimoni Alumni</h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-2 lg:gap-10 xl:mt-12 xl:gap-[80px]">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delayMs={index * 120}>
              <article className="grid items-start gap-4 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[minmax(0,375px)_minmax(0,1fr)] xl:gap-6">
                <Image src={testimonial.image} alt={testimonial.name} width={375} height={400} className="h-[230px] w-full rounded-[9px] object-cover lg:h-[280px] xl:h-[400px]" />
                <div className="flex h-full flex-col">
                  <h3 className="text-[24px] font-medium leading-[1.14] tracking-[-0.96px] md:text-[32px]">{testimonial.name}</h3>
                  <div className="mt-auto pb-1">
                    <p className="text-[12px] leading-[1.15] text-black/75 mt-2">Apa kata alumni?</p>
                    <p className="mt-3 text-[18px] leading-[1.14] tracking-[-0.45px] text-black">{testimonial.text}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
