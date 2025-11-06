"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const FadeIn = ({
  className,
  children,
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeInProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.3 }}
    transition={{ delay, duration, ease: "easeOut" }}
    variants={fadeInVariants}
    className={cn("will-change-transform", className)}
  >
    {children}
  </motion.div>
);

export default FadeIn;
