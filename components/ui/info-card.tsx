import { cn } from "@/lib/utils";

type InfoCardProps = {
  label: string;
  description: string;
  className?: string;
};

const InfoCard = ({ label, description, className }: InfoCardProps) => (
  <div
    className={cn(
      "rounded-2xl border border-white/10 bg-background/60 p-4",
      className
    )}
  >
    <p className="text-xs uppercase tracking-[0.25em] text-highlight">
      {label}
    </p>
    <p className="mt-1 font-medium text-foreground">{description}</p>
  </div>
);

export default InfoCard;
