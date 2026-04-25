import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Briefcase, HelpCircle, ChevronRight } from "lucide-react";
import { GradientBackground } from "@/components/animated/GradientBackground";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "联系我们 | 智宠合生 Peture",
  description: "联系我们获取帮助、商务合作或反馈问题，Peture 团队随时为您服务",
  keywords: "联系我们,商务合作,反馈问题,客户服务",
};

const CONTACT_METHODS = [
  { title: "电子邮件", description: "工作日 24 小时内回复", detail: "peture.team@gmail.com", action: "发送邮件", href: "mailto:peture.team@gmail.com" },
  { title: "微信客服", description: "工作日 10:00-18:00", detail: "Peture 小助手", action: "添加客服", href: "#" },
  { title: "商务合作", description: "有意请发送邮件至", detail: "peture.team@gmail.com", action: "合作咨询", href: "mailto:peture.team@gmail.com" },
  { title: "帮助中心", description: "常见问题解答", detail: "帮助中心即将上线", action: "敬请期待", href: "#" },
];

const TOPICS = ["产品反馈", "功能建议", "Bug 反馈", "商务合作", "媒体采访", "加入我们"];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <GradientBackground animated className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground lg:text-5xl">联系我们</h1>
          <p className="mt-4 text-lg text-foreground/70">我们随时倾听你的声音</p>
        </div>
      </GradientBackground>

      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_METHODS.map((method) => (
              <GlassCard key={method.title} hover intensity="light" borderRadius="xl" className="p-6 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {method.title === "电子邮件" && <Mail className="h-7 w-7" />}
                  {method.title === "微信客服" && <MessageCircle className="h-7 w-7" />}
                  {method.title === "商务合作" && <Briefcase className="h-7 w-7" />}
                  {method.title === "帮助中心" && <HelpCircle className="h-7 w-7" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{method.title}</h3>
                <p className="mt-1 text-sm text-foreground/60">{method.description}</p>
                <p className="mt-2 text-sm font-medium text-primary">{method.detail}</p>
                <Link href={method.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  {method.action} <ChevronRight className="h-4 w-4" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-surface/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">反馈问题</h2>
            <p className="mt-2 text-foreground/60">选择您想反馈的问题类型</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TOPICS.map((topic) => (
              <button key={topic} className="rounded-full bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                {topic}
              </button>
            ))}
          </div>
          <form className="mt-10 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="您的邮箱" className="rounded-xl bg-surface border-0 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="您的昵称" className="rounded-xl bg-surface border-0 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary" />
            </div>
            <textarea rows={5} placeholder="请详细描述您的问题或建议..." className="w-full rounded-xl bg-surface border-0 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary" />
            <button type="submit" className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-white hover:opacity-90 transition-opacity">
              提交反馈
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}