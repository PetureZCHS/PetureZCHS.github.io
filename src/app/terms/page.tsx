import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "服务条款",
  description: "智宠合生 Peture 服务条款，使用我们的服务前请仔细阅读",
};

const sections = [
  {
    title: "一、接受条款",
    content: `欢迎使用智宠合生 Peture（以下简称"Peture"）。通过访问或使用我们的服务，即表示您同意遵守本服务条款（以下简称"条款"）的所有规定。
      
      若您不同意这些条款，请勿使用我们的服务。我们保留随时修改这些条款的权利。`,
  },
  {
    title: "二、服务描述",
    content: `Peture 是一款宠物 AI 服务平台，为宠物主人提供以下服务：
      
      • 宠物档案管理：创建和管理宠物数字档案
      • AI 助手服务：智能宠物护理建议和咨询服务
      • 智能提醒：疫苗接种、驱虫等重要事项提醒
      • 智能记账：记录养宠支出和成本分析
      • AI 生图：生成宠物创意图片和日历
      • 其他宠物相关服务
      
      我们持续改进服务，保留随时调整服务内容的权利。`,
  },
  {
    title: "三、用户责任",
    content: `使用 Peture 服务时，您同意：
      
      • 提供真实、准确的个人信息和宠物信息
      • 保持账户凭据的安全和保密
      • 对账户下所有活动负责
      • 不进行任何违法或有害行为
      • 不尝试干扰或破坏服务正常运行
      • 不复制、修改或分发服务内容
      • 不使用服务进行任何商业用途（除非获得许可）
      
      若违反这些责任，我们有权暂停或终止您的账户。`,
  },
  {
    title: "四、知识产权",
    content: `Peture 服务及其内容（包括但不限于软件、设计、文本、图形、标识）的知识产权归 Peture 或其许可方所有。
      
      用户在使用服务过程中创建的宠物档案、生成的图片等内容（以下称"用户内容"），其所有权归用户所有。
      
      您授予 Peture 使用用户内容的权利，用于提供和改进我们的服务。我们不会将您的用户内容用于商业目的。`,
  },
  {
    title: "五、免责声明",
    content: `服务按"原样"提供，不提供任何明示或暗示的保证。
      
      Peture 不保证服务无错误、不中断或完全安全。AI 助手提供的信息仅供参考，不构成专业医疗建议。
      
      对于宠物健康相关问题，请咨询专业兽医。我们不对任何因使用服务导致的损失负责，包括但不限于直接、间接、偶然或惩罚性损害。`,
  },
  {
    title: "六、责任限制",
    content: `在适用法律允许的最大范围内，Peture 不对任何间接、特殊、偶然或后果性损害负责。
      
      您同意赔偿并保护 Peture 及其关联公司、员工、代理人免受因您使用服务或违反条款导致的任何索赔或要求。`,
  },
  {
    title: "七、条款变更",
    content: `我们保留随时修改这些条款的权利。修改后的条款将在服务中公布，继续使用服务即表示您接受修改后的条款。
      
      重大变更时，我们将通过服务内通知或电子邮件的方式告知您。建议您定期查看条款。`,
  },
  {
    title: "八、适用法律",
    content: `这些条款受中华人民共和国法律管辖。
      
      因本条款产生的或与本条款相关的任何争议，应提交至有管辖权的法院解决。`,
  },
];

export default function TermsPage() {
  const lastUpdated = "2025年4月25日";

  return (
    <div className="min-h-screen">
      <div className="gradient-mesh pt-24 lg:pt-32">
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              服务条款
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
              使用 Peture 服务前请仔细阅读以下条款
            </p>
            <p className="mt-2 text-sm text-foreground/50">
              最后更新日期：{lastUpdated}
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-2 text-base text-foreground/70 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}