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
      className={`inline-flex items-center rounded-[9px] border border-olive-dark px-[27px] py-[12px] text-2xl font-semibold tracking-[-0.96px] text-olive-dark transition-colors hover:bg-cream ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}
