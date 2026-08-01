import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "border-burnt-orange bg-burnt-orange text-black hover:border-cream hover:bg-cream"
          : "border-cream/28 bg-cream/5 text-cream hover:border-cream",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
