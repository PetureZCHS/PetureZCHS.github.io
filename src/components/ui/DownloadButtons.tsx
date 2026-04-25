"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

interface DownloadButtonsProps {
  appStoreUrl?: string;
  googlePlayUrl?: string;
  className?: string;
}

export function DownloadButtons({
  appStoreUrl = "#",
  googlePlayUrl = "#",
  className,
}: DownloadButtonsProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 sm:flex-row",
        className
      )}
    >
      <motion.a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-[48px] items-center gap-2.5 rounded-xl bg-foreground px-4 text-white shadow-[0_4px_0_#7C2D12,0_6px_12px_rgba(154,52,18,0.3)] transition-all hover:shadow-[0_6px_0_#7C2D12,0_8px_16px_rgba(154,52,18,0.4)] active:shadow-[0_2px_0_#7C2D12,0_4px_8px_rgba(154,52,18,0.3)] active:translate-y-0.5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-normal text-white/80">Download on the</span>
          <span className="text-[15px] font-semibold">App Store</span>
        </div>
      </motion.a>

      <motion.a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-[48px] items-center gap-2.5 rounded-xl bg-foreground px-4 text-white shadow-[0_4px_0_#7C2D12,0_6px_12px_rgba(154,52,18,0.3)] transition-all hover:shadow-[0_6px_0_#7C2D12,0_8px_16px_rgba(154,52,18,0.4)] active:shadow-[0_2px_0_#7C2D12,0_4px_8px_rgba(154,52,18,0.3)] active:translate-y-0.5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-normal text-white/80">GET IT ON</span>
          <span className="text-[15px] font-semibold">Google Play</span>
        </div>
      </motion.a>
    </div>
  );
}
