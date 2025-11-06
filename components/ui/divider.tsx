import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
};

const Divider = ({ className }: DividerProps) => {
  return <hr className={cn("bg-border h-px w-full border-t-0", className)} />;
};

export default Divider;
