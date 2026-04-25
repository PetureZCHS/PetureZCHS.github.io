import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SITE_NAME = "智宠合生 Peture";
const SITE_DESCRIPTION = "智宠合生 Peture - 用 AI 技术为您的宠物提供个性化服务，打造全方位智慧养宠体验";
const SITE_URL = "https://peture.com";
const SITE_KEYWORDS = "宠物,养宠,AI 宠物,宠物服务,宠物管理,宠物健康,宠物记账,AI 生图,宠物日历,智能养宠";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Peture Team" }],
  creator: "Peture Team",
  publisher: "Peture Team",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.png"],
    creator: "@peture",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/images/app-icon.png",
    apple: "/images/app-icon.png",
  },
};

const navLinks = [
  { label: "功能", href: "/features" },
  { label: "AI 实验室", href: "/ai-lab" },
  { label: "定价", href: "/pricing" },
  { label: "关于", href: "/about" },
  { label: "联系", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navbar logoText="Peture" links={navLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}