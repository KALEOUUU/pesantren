type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
};
export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-4 text-2xl font-medium leading-[1.14] tracking-[-0.96px] text-olive-secondary">
          {eyebrow}
        </p>
      )}
      <h1 className="text-5xl font-semibold leading-[1.14] tracking-[-1.92px] text-black md:text-[64px] md:tracking-[-2.56px]">
        {title}
      </h1>
    </div>
  );
}
