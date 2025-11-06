import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

type CardProps = {
  title?: string;
  gradient?: boolean;
  children: React.ReactNode;
};
export const GlowingCard = ({
  title,
  gradient = true,
  children,
}: CardProps) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-5 rounded-3xl border border-white/10 p-6 shadow-inner relative",
          {
            "bg-gradient-to-br from-white/5 via-background/60 to-transparent":
              gradient,
          }
        )}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {title && (
          <h3 className="font-display text-xl font-semibold text-foreground">
            {title}
          </h3>
        )}
        {children}
      </div>
    </>
  );
};
