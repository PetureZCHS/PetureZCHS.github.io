import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Brain, Wallet, Bell, Volume2, ShoppingBag, Calendar, Image, MessageCircle, Sparkles, ChevronRight, PawPrint, Shield } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { DownloadButtons } from "@/components/ui/DownloadButtons";

export const metadata: Metadata = {
  title: "功能介绍 | 智宠合生 Peture",
  description: "了解 Peture 的全方位养宠解决方案，包括宠物档案、AI 助手、智能记账、提醒等功能",
  keywords: "宠物功能,AI 助手,智能记账,宠物提醒,宠物档案,养宠工具",
};

const practicalFeatures = [
  { title: "信息档案", description: "宠物全生命周期数字档案，整合基本信息与健康数据，支持一键导出打印", tags: ["数据可视化", "永久存储"] },
  { title: "AI 助手", description: "7×24 小时在线的专属医疗顾问，基于海量宠物医疗数据", tags: ["AI 驱动", "7×24 在线"] },
  { title: "智能记账", description: "精细化记录养宠开销，自动生成成本追踪与趋势分析", tags: ["数据可视化", "智能分析"] },
  { title: "智能提醒", description: "全方位覆盖疫苗接种、定期驱虫、按时用药等关键节点", tags: ["AI 驱动", "多场景覆盖"] },
  { title: "响片训练", description: "专业响片训练法数字化呈现，智能统计训练成功率", tags: ["科学训练", "数据追踪"] },
  { title: "宠物商城", description: "AI Agent 智能购物管家，全网甄选最优商品", tags: ["AI 驱动", "全网优选"] },
];

const funFeatures = [
  { title: "成长日历", description: "AI 生成宠物第一人称视角日记，支持导出专属日历本", tags: ["AI 生成", "可导出"] },
  { title: "AI 生图实验室", description: "一键生成宠物超萌头像和 iPhone 空间景深壁纸", tags: ["AI 生成", "创意无限"] },
  { title: "PetClaw", description: "宠物独立人格互动系统，萌小圈社交与幽默吐槽", tags: ["社交互动", "趣味无穷"] },
];

const ICONS = {
  FileText: FileText,
  Brain: Brain,
  Wallet: Wallet,
  Bell: Bell,
  Volume2: Volume2,
  ShoppingBag: ShoppingBag,
  Calendar: Calendar,
  Image: Image,
  MessageCircle: MessageCircle,
  Sparkles: Sparkles,
  PawPrint: PawPrint,
  Shield: Shield,
};

const practicalIcons = [ICONS.FileText, ICONS.Brain, ICONS.Wallet, ICONS.Bell, ICONS.Volume2, ICONS.ShoppingBag];
const funIcons = [ICONS.Calendar, ICONS.Image, ICONS.MessageCircle];
const stepIcons = [ICONS.PawPrint, ICONS.Shield, ICONS.Sparkles];

function FeatureItem({ feature, index }: { feature: typeof practicalFeatures[0]; index: number }) {
  const Icon = practicalIcons[index];
  const isEven = index % 2 === 1;
  return (
    <div className={`flex flex-col gap-8 lg:flex-row lg:items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-2xl bg-surface p-8 shadow-card hover:shadow-lg">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground lg:text-2xl">{feature.title}</h3>
          <p className="mt-3 text-base text-foreground/70">{feature.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {feature.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden flex-1 lg:block">
        <div className="flex aspect-square items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 scale-150 rounded-full bg-primary/10 blur-3xl" />
            <Icon className="relative h-24 w-24 text-primary/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <div className="gradient-mesh pt-24 lg:pt-32">
        <SectionWrapper>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-6xl">🐾 全方位养宠解决方案 🐕🐈</h1>
            <p className="mt-4 text-lg text-foreground/70 lg:text-xl">实用工具与趣味功能，满足你和毛孩子的所有需求</p>
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper id="practical">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">实用功能</h2>
            <p className="mt-3 text-base text-foreground/70 lg:text-lg">科学养宠的智能基座</p>
          </div>
          <div className="space-y-12 lg:space-y-20">
            {practicalFeatures.map((feature, index) => (
              <FeatureItem key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
      <div className="bg-surface">
        <SectionWrapper id="fun">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center lg:mb-16">
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">趣味功能</h2>
              <p className="mt-3 text-base text-foreground/70 lg:text-lg">情绪拉满的互动体验</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {funFeatures.map((feature, index) => {
                const Icon = funIcons[index];
                return (
                  <FeatureCard 
                    key={feature.title} 
                    icon={<Icon className="h-6 w-6" />} 
                    title={feature.title} 
                    description={feature.description} 
                    className="h-full" 
                  />
                );
              })}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/ai-lab" className="group flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-primary transition-all hover:bg-primary hover:text-white">
                <span className="font-medium">探索更多趣味功能</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className="gradient-mesh py-16 lg:py-24">
        <SectionWrapper>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">How It Works</h2>
            <p className="mt-3 text-base text-foreground/70 lg:text-lg">三步开启智能养宠之旅</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
            {[
              { title: "添加宠物", description: "一键录入宠物基本信息" },
              { title: "开启智能守护", description: "AI 自动追踪健康状况" },
              { title: "享受养宠乐趣", description: "记录成长点滴" },
            ].map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  {index < 2 && <div className="absolute left-[calc(50%+28px)] top-10 hidden h-px w-full bg-primary/20 md:block" />}
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{step.description}</p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground lg:text-4xl">开启智能养宠新体验</h2>
          <p className="mt-3 text-base text-foreground/70 lg:text-lg">下载 Peture App，让养宠变得更简单</p>
          <div className="mt-8 flex justify-center lg:mt-10">
            <DownloadButtons />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/pricing" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">查看定价</Link>
            <span className="text-foreground/30">•</span>
            <Link href="/ai-lab" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">AI 实验室</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}