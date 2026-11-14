import type { HTMLAttributes } from "react";
export function PageContainer({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-[54px] ${className}`}
      {...props}
    />
  );
}
