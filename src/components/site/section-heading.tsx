import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#476a60]">
          <Icon className="size-3.5" />
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-normal text-foreground">
          {title}
        </h2>
      </div>
    </div>
  );
}
