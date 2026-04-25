"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PawPrint } from "lucide-react";
import { clsx } from "clsx";

interface NavbarProps {
  logo?: string;
  logoText?: string;
  links?: { label: string; href: string }[];
  className?: string;
}

const defaultLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({
  logo,
  logoText = "Peture",
  links = defaultLinks,
  className,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface/90 backdrop-blur-md shadow-clay"
          : "bg-transparent",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-2">
            {logo && (
              <img src={logo} alt={logoText} className="h-8 w-8 lg:h-10 lg:w-10" />
            )}
            {!logo && (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-md transition-transform group-hover:scale-110">
                <PawPrint className="h-5 w-5" />
              </div>
            )}
            <span className="font-display text-xl font-bold text-foreground lg:text-2xl">
              {logoText}
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground-light transition-all hover:bg-primary-50 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#download"
              className="rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 text-sm font-semibold text-white shadow-fluffy transition-all hover:shadow-fluffy-hover active:shadow-fluffy-active active:translate-y-0.5"
            >
              立即下载
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-foreground transition-colors hover:bg-primary-100 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-surface shadow-clay lg:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground-light transition-colors hover:bg-primary-50 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 block rounded-full bg-gradient-to-r from-primary to-primary-light px-5 py-3 text-center text-base font-semibold text-white shadow-fluffy"
              >
                立即下载
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
