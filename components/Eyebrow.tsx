import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("credit-type text-xs uppercase tracking-[0.2em] text-burnt-orange", className)}>
      {children}
    </p>
  );
}
