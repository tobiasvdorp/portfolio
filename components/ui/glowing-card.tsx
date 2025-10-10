import { GlowingEffect } from "./glowing-effect";

type CardProps = {
  title: string;
  children: React.ReactNode;
};
export const GlowingCard = ({ title, children }: CardProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-background/60 to-transparent p-6 shadow-inner relative">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <h3 className="font-display text-xl font-semibold text-foreground">
          {title}
        </h3>
        {children}
      </div>
    </>
  );
};
