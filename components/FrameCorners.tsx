import { cn } from "@/lib/utils";

type FrameCornersProps = {
  className?: string;
};

export function FrameCorners({ className }: FrameCornersProps) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-foreground/55" />
      <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-foreground/55" />
      <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-foreground/55" />
      <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-foreground/55" />
    </span>
  );
}
