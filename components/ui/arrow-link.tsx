import Link from "next/link";
type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
export function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-[9px] border border-olive-dark px-[27px] py-[12px] text-2xl font-semibold tracking-[-0.96px] text-olive-dark transition-[color,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-cream active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive motion-reduce:transform-none motion-reduce:transition-none ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}
