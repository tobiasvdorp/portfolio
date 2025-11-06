import { cn } from "@/lib/utils";

type EyebrowProps = {
  label: string;
  variant?: "bold" | "regular";
  size?: "sm" | "lg";
  className?: string;
};

export const Eyebrow = ({
  label,
  variant = "regular",
  size = "sm",
  className,
}: EyebrowProps) => (
  <p
    className={cn(
      "inline-flex items-center gap-2 rounded-full border border-muted bg-muted/50 px-3 py-1 uppercase tracking-[0.3em] text-muted-foreground",
      {
        "font-bold": variant === "bold",
        "text-xs": size === "sm",
        "text-sm": size === "lg",
      },
      className
    )}
  >
    <span className="h-1 w-1 rounded-full bg-muted-foreground" aria-hidden />
    {label}
  </p>
);
