"use client";

import { clsx } from "clsx";

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function GradientBackground({
  children,
  className,
  animated = true,
}: GradientBackgroundProps) {
  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <div
        className={clsx(
          "absolute inset-0 -z-10",
          animated
            ? "bg-gradient-to-br from-gradient-1 via-gradient-2 via-gradient-3 via-gradient-4 to-gradient-1"
            : "bg-gradient-to-br from-gradient-1 via-gradient-2 to-gradient-3"
        )}
        style={
          animated
            ? {
                backgroundSize: "400% 400%",
                animation: "gradient-shift 15s ease infinite",
              }
            : {}
        }
      />
      {animated && (
        <style jsx>{`
          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      )}
      {children}
    </div>
  );
}