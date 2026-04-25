import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/SectionWrapper";
import { DownloadButtons } from "@/components/ui/DownloadButtons";
import { 
  Brain, 
  Wallet, 
  Bell, 
  Calendar, 
  Image, 
  Sparkles,
  ChevronRight,
  Star,
  Shield,
  Zap,
  Heart,
  PawPrint
} from "lucide-react";

export const metadata: Metadata = {
  title: "智宠合生 Peture | 宠物 AI 服务平台",
  description: "用 AI 技术为您的宠物提供个性化服务，打造全方位智慧养宠体验",
  keywords: "宠物,养宠,AI 宠物,宠物服务,宠物管理,宠物健康,宠物记账,AI 生图",
};

const features = [
  {
    icon: Brain,
    title: "AI 助手",
    description: "7×24 小时在线的专属医疗顾问，实时响应日常疑问",
    color: "from-pink-100 to-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: Wallet,
    title: "智能记账",
    description: "精细化记录养宠开销，自动生成成本追踪与趋势分析",
    color: "from-green-100 to-emerald-100",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Bell,
    title: "智能提醒",
    description: "疫苗接种、定期驱虫、按时用药全方位覆盖",
    color: "from-blue-100 to-cyan-100",
    iconBg: "bg-cyan-100",
  },
  {
    icon: Calendar,
    title: "成长日历",
    description: "AI 生成宠物第一人称视角日记，珍藏陪伴点滴",
    color: "from-purple-100 to-violet-100",
    iconBg: "bg-violet-100",
  },
  {
    icon: Image,
    title: "AI 生图",
    description: "一键生成宠物超萌头像和 iPhone 空间景深壁纸",
    color: "from-orange-100 to-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: Sparkles,
    title: "PetClaw",
    description: "宠物独立人格互动系统，萌小圈社交与幽默吐槽",
    color: "from-yellow-100 to-lime-100",
    iconBg: "bg-lime-100",
  },
];

const testimonials = [
  {
    content: "Peture 的 AI 助手帮我解决了好多养宠问题，深夜有状况也不怕了！",
    author: "李女士",
    role: "金毛主人",
    avatar: "🐕",
  },
  {
    content: "记账功能太实用了，终于知道每个月在主子身上花了多少钱。",
    author: "王先生",
    role: "布偶猫主人",
    avatar: "🐱",
  },
  {
    content: "AI 生成的壁纸超好看，现在锁屏就是我家的猫咪！",
    author: "张小姐",
    role: "英短主人",
    avatar: "🐈",
  },
];

const stats = [
  { value: "10 万+", label: "宠物主人", icon: Heart },
  { value: "50 万+", label: "宠物档案", icon: PawPrint },
  { value: "99%", label: "好评率", icon: Star },
  { value: "7×24", label: "AI 在线", icon: Zap },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="gradient-mesh relative min-h-screen pt-20 lg:pt-0">
        {/* Floating Paw Prints */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-float absolute left-[10%] top-[20%] text-6xl opacity-10">🐾</div>
          <div className="animate-float absolute right-[15%] top-[30%] text-4xl opacity-10" style={{ animationDelay: "1s" }}>🐾</div>
          <div className="animate-float absolute left-[20%] bottom-[25%] text-5xl opacity-10" style={{ animationDelay: "2s" }}>🐾</div>
          <div className="animate-float absolute right-[25%] bottom-[35%] text-3xl opacity-10" style={{ animationDelay: "0.5s" }}>🐾</div>
        </div>

        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex animate-bounce-soft items-center gap-2 rounded-full border-2 border-primary-200 bg-white/80 px-5 py-2.5 shadow-lg backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                AI 驱动的智能养宠平台
              </span>
            </div>
            
            {/* Title */}
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-8xl">
              <span className="inline-block animate-float">智</span>
              <span className="inline-block animate-float" style={{ animationDelay: "0.1s" }}>宠</span>
              <span className="inline-block animate-float" style={{ animationDelay: "0.2s" }}>合</span>
              <span className="inline-block animate-float" style={{ animationDelay: "0.3s" }}>生</span>
              <span className="mt-2 block text-primary">Peture</span>
            </h1>
            
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">无限延伸认知边界，让美好触手可及</span>
            </div>


            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-light lg:text-xl">
              用 AI 技术为您的宠物提供个性化服务
              <br className="hidden sm:block" />
              打造全方位智慧养宠体验
            </p>
            
            {/* Mission Tagline */}
            <p className="mx-auto mt-3 text-sm text-foreground/50 italic">
              无限延伸认知边界，让美好触手可及
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DownloadButtons />
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground-light">
              <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-medium">数据安全</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span className="font-medium">AI 驱动</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 backdrop-blur-sm">
                <Star className="h-4 w-4 text-primary" />
                <span className="font-medium">好评如潮</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-5 rounded-full border-2 border-foreground/30">
            <div className="mx-auto mt-2 h-1.5 w-1.5 rounded-full bg-foreground/50" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <SectionWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="clay-card group p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-display text-3xl font-bold text-primary lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground-light">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper id="features" className="bg-gradient-to-b from-background to-primary-50/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center lg:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2">
              <PawPrint className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">核心功能</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-5xl">
              全方位养宠功能
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground-light">
              实用工具与趣味体验，一站式满足你和毛孩子的所有需求
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="clay-card group p-6 lg:p-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-primary shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-foreground-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-white shadow-fluffy transition-all hover:shadow-fluffy-hover active:shadow-fluffy-active active:translate-y-1"
            >
              <span className="font-display font-semibold">查看全部功能</span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* AI Lab Preview Section */}
      <SectionWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary-100 px-4 py-2">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">AI 实验室</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-5xl">
                一键生成
                <br />
                专属宠物艺术照
              </h2>
              <p className="mt-4 text-lg text-foreground-light">
                基于先进的 AI 图像生成技术，只需上传一张宠物照片，即可生成：
              </p>
              <ul className="mt-6 space-y-3 text-foreground-light">
                <li className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
                  <span>超萌宠物头像，适配各社交平台</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
                  <span>iPhone 空间景深效果锁屏壁纸</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
                  <span>多种艺术风格随心切换</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/ai-lab"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-secondary-light px-8 py-4 text-white shadow-[0_6px_0_#1D4ED8,0_8px_16px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_8px_0_#1D4ED8,0_12px_24px_rgba(37,99,235,0.4)] active:shadow-[0_2px_0_#1D4ED8,0_4px_8px_rgba(37,99,235,0.3)] active:translate-y-1"
                >
                  <span className="font-display font-semibold">立即体验</span>
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent blur-2xl" />
              <div className="clay-card relative p-6">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 animate-bounce-soft items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-4xl shadow-lg">
                        🎨
                      </div>
                      <p className="font-display text-xl font-semibold text-foreground">
                        AI 生图预览
                      </p>
                      <p className="mt-1 text-sm text-foreground-light">
                        上传照片，生成专属艺术照
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="bg-gradient-to-b from-primary-50/30 to-background">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700">用户评价</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-5xl">
              用户怎么说
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground-light">
              来自真实用户的反馈
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="clay-card p-6 lg:p-8"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground-light leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-foreground-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="mx-auto max-w-4xl">
          <div className="clay-card relative overflow-hidden p-8 text-center lg:p-12">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute left-4 top-4 text-4xl opacity-20">🐕</div>
            <div className="pointer-events-none absolute bottom-4 right-4 text-4xl opacity-20">🐱</div>
            <div className="pointer-events-none absolute right-8 top-8 text-3xl opacity-10">🐾</div>
            
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-5xl">
              开启智能养宠新体验
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground-light">
              下载 Peture App，让养宠变得更简单、更有趣
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DownloadButtons />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/pricing"
                className="rounded-full px-4 py-2 text-foreground-light transition-colors hover:bg-primary-50 hover:text-primary"
              >
                查看定价
              </Link>
              <span className="text-foreground/20">|</span>
              <Link
                href="/contact"
                className="rounded-full px-4 py-2 text-foreground-light transition-colors hover:bg-primary-50 hover:text-primary"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
