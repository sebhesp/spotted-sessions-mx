import { cn } from "@/lib/utils";

type ArtistCodeTagProps = {
  code: string;
  status?: string;
  className?: string;
};

export function ArtistCodeTag({ code, status, className }: ArtistCodeTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-border bg-card px-2.5 py-1 text-[11px] uppercase text-muted",
        className,
      )}
    >
      <span className="text-foreground">{code}</span>
      {status ? <span className="text-red">{status}</span> : null}
    </span>
  );
}
