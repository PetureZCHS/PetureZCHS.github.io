"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  range?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  className,
  range = 10,
  duration = 3,
}: FloatingElementProps) {
  return (
    <motion.div
      className={clsx(className)}
      animate={{
        y: [0, -range, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}