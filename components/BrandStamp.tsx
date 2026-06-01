import { cn } from "@/lib/utils";

type BrandStampProps = {
  label?: string;
  className?: string;
};

export function BrandStamp({ label = "SPOTTED / FIELD RECORD", className }: BrandStampProps) {
  return (
    <div
      className={cn(
        "display-type inline-flex rotate-[-4deg] items-center border border-red px-4 py-2 text-sm font-black uppercase text-red",
        className,
      )}
    >
      {label}
    </div>
  );
}
