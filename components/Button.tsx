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
        "group inline-flex min-h-11 items-center justify-center gap-2 border px-4 py-3 text-sm font-semibold uppercase transition",
        variant === "primary"
          ? "border-red bg-red text-background hover:bg-foreground hover:text-background"
          : "border-border bg-transparent text-foreground hover:border-red hover:text-red",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
