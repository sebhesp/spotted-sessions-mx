import { brandAssets } from "@/lib/brand";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  label?: string | null;
};

export function LogoMark({ className, label = "SPOTTED Sessions" }: LogoMarkProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label ?? undefined}
      aria-hidden={label ? undefined : true}
      className={cn("block aspect-square bg-current", className)}
      style={{
        WebkitMask: `url(${brandAssets.isotype}) center / contain no-repeat`,
        mask: `url(${brandAssets.isotype}) center / contain no-repeat`,
      }}
    />
  );
}
