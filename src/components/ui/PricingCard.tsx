"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
}

interface PricingCardProps {
  tiers: PricingTier[];
  className?: string;
}

const defaultTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "20 images per month",
      "Basic styles",
      "Standard resolution",
      "Community support",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For power users",
    features: [
      "Unlimited images",
      "All styles",
      "High resolution",
      "Priority support",
      "Custom styles",
    ],
    highlighted: true,
    buttonText: "Start Pro",
  },
  {
    name: "Team",
    price: "$29.99",
    description: "For teams and business",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "API access",
      "Dedicated support",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
  },
];

export function PricingCard({ tiers = defaultTiers, className }: PricingCardProps) {
  return (
    <div
      className={clsx(
        "grid gap-6 lg:grid-cols-3 lg:gap-8",
        className
      )}
    >
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          className={clsx(
            "relative flex flex-col rounded-xl p-6 lg:p-8",
            tier.highlighted
              ? "bg-primary shadow-lg lg:scale-105"
              : "bg-surface shadow-card"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {tier.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gradient-1 to-gradient-4 px-3 py-1 text-xs font-medium text-white">
              Popular
            </div>
          )}
          <div className="mb-4">
            <h3
              className={clsx(
                "text-lg font-semibold",
                tier.highlighted ? "text-white" : "text-foreground"
              )}
            >
              {tier.name}
            </h3>
            <p
              className={clsx(
                "mt-1 text-sm",
                tier.highlighted ? "text-white/80" : "text-foreground/70"
              )}
            >
              {tier.description}
            </p>
          </div>
          <div className="mb-6">
            <span
              className={clsx(
                "text-4xl font-bold",
                tier.highlighted ? "text-white" : "text-foreground"
              )}
            >
              {tier.price}
            </span>
            <span
              className={clsx(
                "text-sm",
                tier.highlighted ? "text-white/80" : "text-foreground/70"
              )}
            >
              /month
            </span>
          </div>
          <ul className="mb-6 flex-1 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check
                  className={clsx(
                    "h-4 w-4 flex-shrink-0",
                    tier.highlighted ? "text-white" : "text-primary"
                  )}
                />
                <span
                  className={clsx(
                    "text-sm",
                    tier.highlighted ? "text-white/90" : "text-foreground/70"
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <button
            className={clsx(
              "w-full rounded-full py-3 text-sm font-medium transition-all",
              tier.highlighted
                ? "bg-white text-primary hover:bg-white/90"
                : "bg-primary text-white hover:opacity-90"
            )}
          >
            {tier.buttonText}
          </button>
        </motion.div>
      ))}
    </div>
  );
}