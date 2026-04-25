import type { Metadata } from "next";
import Link from "next/link";
import { Users, Eye, Target, ArrowRight, Mail, MapPin, Brain, Lightbulb, Sparkles, Heart } from "lucide-react";
import { GradientBackground } from "@/components/animated/GradientBackground";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "关于我们 | 智宠合生 Peture",
  description: "了解 Peture 的使命愿景：无限延伸人类的认知边界，让全球每一个人因我们的存在有更美好的生活。以人为本，去幻求真，知行合一。",
  keywords: "智宠合生,Peture,认知科技,AI 创新,以人为本,去幻求真,知行合一,使命愿景",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <GradientBackground animated className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">关于智宠合生 Peture</h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">用科技让养宠更简单、更快乐</p>
          </div>
        </div>
      </GradientBackground>

      {/* Mission Section */}
      {/* Mission Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">我们的使命</span>
            </div>
            <GlassCard intensity="light" borderRadius="xl" className="p-8 sm:p-12 max-w-3xl mx-auto">
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-relaxed">
                无限延伸人类的认知边界
              </p>
              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
                我们相信，认知是通向美好生活的钥匙。通过科技与 AI 的力量，我们致力于帮助每个人突破认知的局限，看见更广阔的世界。
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 sm:py-32 bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary-100 px-4 py-2">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">我们的愿景</span>
            </div>
            <GlassCard intensity="light" borderRadius="xl" className="p-8 sm:p-12 max-w-3xl mx-auto">
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-relaxed">
                让全球每一个人，因我们的存在，有更美好的生活
              </p>
              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
                这不是一句空洞的口号，而是我们每一个产品决策的北极星。从智宠合生开始，我们将持续创造能够真正改善人们生活的产品与服务。
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 sm:py-32 bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">我们的愿景</h2>
            <GlassCard intensity="light" borderRadius="xl" className="p-8 sm:p-12 max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed font-medium">让全球每一个人，因我们的存在，有更美好的生活</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-32 bg-surface/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">我们的故事</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">从认知出发</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>智宠合生诞生于一个深刻的洞察：宠物不仅是陪伴，更是人类认知世界、理解生命的一扇窗口。</p>
                <p>我们发现，当宠物主人真正&ldquo;理解&rdquo;自己的宠物——了解它们的健康状况、行为习惯、情绪需求——养宠体验会从&ldquo;照顾任务&rdquo;升华为&ldquo;共同成长&rdquo;。</p>
                <p>这种认知的提升，正是我们使命的起点：帮助人类延伸对生命的理解边界。</p>
              </div>
            </div>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary-100 px-4 py-2">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">为什么是 Peture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">以人为本的起点</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>创始团队中有资深养宠人、AI 研究员、产品设计师。我们既是技术的创造者，也是用户本身。</p>
                <p>我们深刻理解：真正的技术不是炫技，而是让复杂变得简单，让模糊变得清晰。</p>
                <p>Peture 是我们践行&ldquo;知行合一&rdquo;的第一步——用 AI 技术延伸人类对宠物健康的认知，让每一位主人都能更好地守护自己的家人。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">核心价值观</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">以人为本 · 去幻求真 · 知行合一</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">这三句话是我们一切行动的准则，也是 Peture 精神的基石</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <GlassCard hover intensity="light" borderRadius="xl" className="p-8 text-center h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 text-primary mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">以人为本</h3>
              <p className="text-foreground/70 leading-relaxed">技术服务于人，而非反之。我们始终回归人的真实需求，从用户的真实痛点出发，创造真正有价值的产品。</p>
            </GlassCard>
            <GlassCard hover intensity="light" borderRadius="xl" className="p-8 text-center h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-200 text-secondary mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">去幻求真</h3>
              <p className="text-foreground/70 leading-relaxed">穿透表象的迷雾，直达问题的本质。我们拒绝华丽的包装和空洞的概念，追求真相与实质，用数据和事实说话。</p>
            </GlassCard>
            <GlassCard hover intensity="light" borderRadius="xl" className="p-8 text-center h-full">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">知行合一</h3>
              <p className="text-foreground/70 leading-relaxed">认知与行动的合一。我们不仅思考，更将洞察转化为行动，将想法落地为产品，让每一个决策都能产生真实的影响。</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-32 bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">我们的团队</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">🐕🐈 践行使命的同路人 🐾</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">一群相信技术可以改变生活、认知可以创造价值的人</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard hover intensity="light" borderRadius="xl" className="p-6 h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">AI 研究团队</h3>
              <p className="text-sm text-primary mb-3">认知智能</p>
              <p className="text-sm text-foreground/60">深耕大模型与认知计算，用前沿 AI 技术延伸人类的理解边界。</p>
            </GlassCard>
            <GlassCard hover intensity="light" borderRadius="xl" className="p-6 h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-4 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">产品工程团队</h3>
              <p className="text-sm text-primary mb-3">技术实现</p>
              <p className="text-sm text-foreground/60">追求极致的工程实现，将复杂技术转化为简单优雅的产品体验。</p>
            </GlassCard>
            <GlassCard hover intensity="light" borderRadius="xl" className="p-6 h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">用户体验团队</h3>
              <p className="text-sm text-primary mb-3">人文设计</p>
              <p className="text-sm text-foreground/60">深入理解用户需求，用设计语言传递温暖与关怀。</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">🐾 与我们同行 🐕🐈</h2>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto">无论是合作还是交流，我们期待与您一起探索认知的边界</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity">
              联系我们
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              peture.team@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              中国 · 合肥
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}