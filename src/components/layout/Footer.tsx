"use client";

import Link from "next/link";
import { Mail, PawPrint, Heart } from "lucide-react";
import { clsx } from "clsx";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: { icon: React.ReactNode; href: string; label: string }[];
  copyright?: string;
  className?: string;
}

const defaultSections: FooterSection[] = [
  {
    title: "产品",
    links: [
      { label: "功能介绍", href: "/features" },
      { label: "定价方案", href: "/pricing" },
      { label: "下载应用", href: "#download" },
    ],
  },
  {
    title: "公司",
    links: [
      { label: "关于我们", href: "/about" },
      { label: "AI 实验室", href: "/ai-lab" },
      { label: "联系我们", href: "/contact" },
    ],
  },
  {
    title: "支持",
    links: [
      { label: "帮助中心", href: "#help" },
      { label: "隐私政策", href: "/privacy" },
      { label: "用户协议", href: "/terms" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <GithubIcon className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
  { icon: <TwitterIcon className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Mail className="h-5 w-5" />, href: "mailto:peture_app@outlook.com", label: "Email" },
];

const defaultCopyright = `© ${new Date().getFullYear()} Peture 🐾 无限延伸认知边界，让美好触手可及 🐕🐈`;

export function Footer({
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyright = defaultCopyright,
  className,
}: FooterProps) {
  return (
    <footer className={clsx("border-t-2 border-primary-100 bg-background", className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-md transition-transform group-hover:scale-110">
                <PawPrint className="h-5 w-5" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">Peture</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-light">
              用 AI 技术为您的宠物提供个性化服务，打造全方位智慧养宠体验
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-foreground-light transition-all hover:scale-110 hover:bg-primary-100 hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm font-bold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-light transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-primary-50/50 px-6 py-6 lg:flex-row">
          <p className="flex items-center gap-2 text-sm text-foreground-light">
            {copyright}
            <Heart className="h-4 w-4 fill-red-400 text-red-400" />
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-foreground-light transition-colors hover:text-primary"
            >
              隐私政策
            </Link>
            <Link
              href="/terms"
              className="text-sm text-foreground-light transition-colors hover:text-primary"
            >
              用户协议
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
