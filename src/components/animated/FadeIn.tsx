"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionVariants = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionVariants[direction] }}
      animate={
        hasAnimated || isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionVariants[direction] }
      }
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}