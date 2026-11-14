export function AchievementStat({
  value,
  label,
  variant = "group19",
}: {
  value: string;
  label: string;
  variant?: "group18" | "group19";
}) {
  return (
    <div
      className={`flex items-baseline justify-center gap-2 whitespace-nowrap ${
        variant === "group18" ? "text-white" : "text-olive-secondary"
      } transition-colors duration-700 ease-out motion-reduce:transition-none`}
    >
      <strong className="text-[clamp(2rem,4.5vw,64px)] leading-none font-semibold tracking-[-0.055em]">
        {value}
      </strong>
      <span className="text-[clamp(1.125rem,2.8vw,40px)] leading-none font-normal italic tracking-[-0.04em]">
        {label}
      </span>
    </div>
  );
}
