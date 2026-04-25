"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      className={clsx(
        "group flex flex-col rounded-xl bg-surface p-6 shadow-card transition-shadow hover:shadow-lg lg:p-8",
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground lg:text-xl">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70 lg:text-base">{description}</p>
    </motion.div>
  );
}