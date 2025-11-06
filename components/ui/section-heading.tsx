import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "space-y-4",
      align === "center" ? "text-center" : "text-left",
      className
    )}
  >
    {label ? <Eyebrow label={label} /> : null}
    <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">
        {description}
      </p>
    ) : null}
  </div>
);

export default SectionHeading;
