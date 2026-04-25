"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  intensity?: "light" | "medium" | "dark";
  borderRadius?: "md" | "lg" | "xl";
  className?: string;
  hover?: boolean;
}

const intensities = {
  light: "bg-white/40",
  medium: "bg-white/60",
  dark: "bg-white/80",
};

const borderRadiusClasses = {
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
};

export function GlassCard({
  children,
  intensity = "medium",
  borderRadius = "lg",
  className,
  hover = false,
}: GlassCardProps) {
  const Component = hover ? motion.div : "div";
  const motionProps = hover
    ? {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={clsx(
        "backdrop-blur-md",
        intensities[intensity],
        borderRadiusClasses[borderRadius],
        "border border-white/20 shadow-card",
        hover && "cursor-pointer transition-shadow hover:shadow-lg",
        className
      )}
      {...motionProps}
    >
      {children}
    </Component>
  );
}