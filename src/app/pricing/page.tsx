import type { Metadata } from "next";
import { Check, Shield, CreditCard } from "lucide-react";
import { GradientBackground } from "@/components/animated/GradientBackground";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "定价 | 智宠合生 Peture",
  description: "Peture 定价方案，免费版、专业版和家庭版，满足不同养宠需求",
  keywords: "宠物 APP 定价,养宠费用,宠物服务订阅,AI 宠物服务",
};

const PRICING_TIERS = [
  {
    name: "免费版",
    nameEn: "Free",
    price: "免费",
    description: "适合初次体验",
    features: ["1 个宠物档案", "基础记账功能", "提醒（限 3 条）", "基础 AI 助手"],
    highlighted: false,
    buttonText: "免费开始",
  },
  {
    name: "专业版",
    nameEn: "Pro",
    price: "¥18/月",
    priceYearly: "¥168/年",
    description: "适合宠物主人",
    features: ["无限宠物档案", "完整 AI 助手", "无限提醒", "AI 生图（50 张/月）", "成长日历"],
    highlighted: true,
    buttonText: "立即订阅",
  },
  {
    name: "家庭版",
    nameEn: "Family",
    price: "¥28/月",
    priceYearly: "¥268/年",
    description: "多宠物家庭首选",
    features: ["最多 5 只宠物", "AI 生图（100 张/月）", "商城优惠", "专属客服"],
    highlighted: false,
    buttonText: "立即订阅",
  },
];

const FAQS = [
  { q: "如何订阅？", a: "打开 Peture App，进入「我的」-「订阅会员」即可选择支付方式订阅。" },
  { q: "可以取消订阅吗？", a: "可以随时取消，自动订阅将在当前周期结束时失效。" },
  { q: "免费版可以升级吗？", a: "可以，在 App 内随时升级到付费版本。" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <GradientBackground animated className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground lg:text-5xl">定价</h1>
          <p className="mt-4 text-lg text-foreground/70">选择最适合您的方案</p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="text-sm text-foreground/60">月付</span>
            <span className="text-sm text-primary font-medium">年付（省 20%）</span>
          </div>
        </div>
      </GradientBackground>

      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <GlassCard
                key={tier.name}
                hover={tier.highlighted}
                intensity={tier.highlighted ? "medium" : "light"}
                borderRadius="xl"
                className={`flex flex-col p-6 lg:p-8 ${tier.highlighted ? "relative border-2 border-primary" : ""}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
                    最受欢迎
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{tier.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                    {tier.priceYearly && (
                      <span className="text-sm text-foreground/60"> {tier.priceYearly}</span>
                    )}
                  </div>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-xl px-6 py-3 font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-primary text-white hover:opacity-90"
                    : "bg-surface text-foreground hover:bg-primary/10"
                }`}>
                  {tier.buttonText}
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-surface/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground mb-10">常见问题</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <GlassCard key={faq.q} intensity="light" borderRadius="xl" className="p-6">
                <h3 className="font-medium text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-foreground/60">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">安全支付</h2>
          <p className="mt-2 text-foreground/60">我们支持多种安全支付方式</p>
          <div className="mt-8 flex justify-center gap-6">
            <CreditCard className="h-8 w-8 text-foreground/30" />
          </div>
        </div>
      </section>
    </div>
  );
}