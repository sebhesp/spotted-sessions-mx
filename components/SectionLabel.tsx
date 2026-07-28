import { cn } from "@/lib/utils";

type SectionLabelProps = {
  code: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ code, children, className }: SectionLabelProps) {
  return (
    <div className={cn("mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted", className)}>
      <span className="credit-type text-burnt-orange">{code}</span>
      <span className="h-px flex-1 bg-border" />
      <span>{children}</span>
    </div>
  );
}
