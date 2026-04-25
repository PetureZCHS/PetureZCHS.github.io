import type { Metadata } from "next";
import Link from "next/link";
import { Wand2, Upload, ImageIcon, Smartphone, Heart } from "lucide-react";
import { GradientBackground } from "@/components/animated/GradientBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { DownloadButtons } from "@/components/ui/DownloadButtons";

export const metadata: Metadata = {
  title: "AI 实验室 | 智宠合生 Peture",
  description: "探索 Peture AI 生图实验室，一键生成宠物超萌头像和 iPhone 空间景深壁纸",
  keywords: "AI 生图,宠物头像,宠物壁纸,AI 实验室,宠物照片",
};

const DEMO_STYLES = [
  { name: "3D 可爱", image: "/images/ai-presets/1_1/3d_cute.jpg" },
  { name: "卡通治愈", image: "/images/ai-presets/1_1/cartoon_heal.jpg" },
  { name: "水墨风格", image: "/images/ai-presets/1_1/chinese_ink.jpg" },
  { name: "赛博朋克", image: "/images/ai-presets/1_1/cyberpunk.jpg" },
  { name: "胶片复古", image: "/images/ai-presets/1_1/film_retro.jpg" },
  { name: "扁平极简", image: "/images/ai-presets/1_1/flat_minimal.jpg" },
  { name: "日系治愈", image: "/images/ai-presets/1_1/japanese_heal.jpg" },
  { name: "油画艺术", image: "/images/ai-presets/1_1/oil_art.jpg" },
  { name: "Q 版萌系", image: "/images/ai-presets/1_1/q_cute.jpg" },
  { name: "水彩治愈", image: "/images/ai-presets/1_1/watercolor_heal.jpg" },
];

const MOBILE_WALLPAPERS = [
  { name: "秋日风格", image: "/images/ai-presets/9_16/autumn.jpeg" },
  { name: "市集", image: "/images/ai-presets/9_16/bazaar.jpg" },
  { name: "牛仔", image: "/images/ai-presets/9_16/cowboy.jpg" },
  { name: "探险家", image: "/images/ai-presets/9_16/explorer.jpeg" },
  { name: "格子风格", image: "/images/ai-presets/9_16/grid.jpeg" },
  { name: "奔跑", image: "/images/ai-presets/9_16/run.jpeg" },
];

const DESKTOP_WALLPAPERS = [
  { name: "3D 空间", image: "/images/ai-presets/16_9/3d_space.jpg" },
  { name: "赛博城市", image: "/images/ai-presets/16_9/cyber_city.jpg" },
  { name: "日系森林", image: "/images/ai-presets/16_9/japanese_forest.jpg" },
  { name: "油画风景", image: "/images/ai-presets/16_9/oil_landscape.jpg" },
  { name: "春日花海", image: "/images/ai-presets/16_9/spring_flower.jpg" },
  { name: "星空治愈", image: "/images/ai-presets/16_9/starry_heal.jpg" },
  { name: "温暖日落", image: "/images/ai-presets/16_9/sunset_warm.jpg" },
  { name: "窗光", image: "/images/ai-presets/16_9/window_sunlight.jpg" },
];

export default function AILabPage() {
  return (
    <div className="min-h-screen">
      <GradientBackground animated className="pt-20 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-6xl">AI 生图实验室</h1>
            <p className="mt-4 text-lg text-foreground/70 lg:text-xl">一键生成宠物超萌头像和 iPhone 空间景深壁纸</p>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-xl font-semibold text-foreground mb-8">头像风格</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {DEMO_STYLES.map((style) => (
                <div key={style.name} className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-surface shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Wand2 className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-center text-sm font-semibold text-white drop-shadow-md">{style.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-xl font-semibold text-foreground mb-8">手机壁纸</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {MOBILE_WALLPAPERS.map((style) => (
                <div key={style.name} className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-surface shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Wand2 className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-center text-sm font-semibold text-white drop-shadow-md">{style.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-xl font-semibold text-foreground mb-8">电脑壁纸</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DESKTOP_WALLPAPERS.map((style) => (
                <div key={style.name} className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-2xl bg-surface shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <Wand2 className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-center text-sm font-semibold text-white drop-shadow-md">{style.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Upload className="h-12 w-12 text-foreground/30" />
          </div>
          <p className="mt-4 text-center text-foreground/50">上传宠物照片，立即生成 AI 作品</p>
          <div className="mt-8 flex justify-center">
            <DownloadButtons />
          </div>
        </div>
      </GradientBackground>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">多场景应用</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <GlassCard hover intensity="light" borderRadius="xl" className="p-6 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ImageIcon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">社交头像</h3>
              <p className="mt-2 text-sm text-foreground/60">个性化宠物头像</p>
            </GlassCard>
            <GlassCard hover intensity="light" borderRadius="xl" className="p-6 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Smartphone className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">手机壁纸</h3>
              <p className="mt-2 text-sm text-foreground/60">iPhone 空间景深效果</p>
            </GlassCard>
            <GlassCard hover intensity="light" borderRadius="xl" className="p-6 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">纪念相册</h3>
              <p className="mt-2 text-sm text-foreground/60">珍藏每一个美好瞬间</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">和三五好友分享萌照</h2>
          <p className="mt-4 text-foreground/60">生成的图片可以一键分享到社交平台</p>
          <Link href="/pricing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity">
            查看定价
          </Link>
        </div>
      </section>
    </div>
  );
}
