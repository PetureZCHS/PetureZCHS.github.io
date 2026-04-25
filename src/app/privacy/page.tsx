import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "智宠合生 Peture 隐私政策，了解我们如何收集、使用和保护您的个人信息",
};

const sections = [
  {
    title: "一、引言",
    content: `本隐私政策旨在帮助您了解智宠合生 Peture（以下简称"We"、"我们的"或"Peture"）如何收集、使用、存储和保护您的个人信息。我们高度重视您的隐私，并致力于通过本政策说明我们如何处理您的数据。请在使用我们的服务前仔细阅读本政策。通过使用 Peture 服务，即表示您同意本政策所述的数据处理方式。`,
  },
  {
    title: "二、信息收集",
    content: `我们收集以下类型的个人信息：
      
      • 账户信息：当您创建 Peture 账户时，我们收集您的电子邮箱地址和账户凭据。
      • 宠物档案信息：您添加的宠物基本信息，包括名字、品种、出生日期、健康状态等。
      • 使用数据：您与 Peture 服务交互时产生的数据，包括功能使用偏好、设置配置等。
      • 设备信息：设备类型、操作系统版本、唯一设备标识符等技术信息。
      • 日志数据：服务使用过程中自动生成的日志信息，包括访问时间、页面浏览记录等。`,
  },
  {
    title: "三、信息使用",
    content: `我们收集的个人信息用于以下目的：
      
      • 提供服务：为您创建和管理宠物档案，提供 AI 助手、智能提醒、记账等功能。
      • 个性化体验：根据您的使用习惯优化服务体验，提供个性化推荐。
      • 改进服务：分析使用数据，持续改进产品功能和用户体验。
      • 安全防护：检测和预防安全风险，保护账户安全。
      • 沟通联系：通过您提供的联系方式发送服务通知和更新信息。`,
  },
  {
    title: "四、信息保护",
    content: `我们采取以下安全措施保护您的个人信息：
      
      • 加密存储：敏感数据采用加密存储，包括数据库加密和传输加密。
      • 访问控制：严格控制员工访问权限，仅授予必要的系统访问权。
      • 安全审计：定期进行安全审计和漏洞扫描，及时发现和修复安全隐患。
      • 数据备份：定期备份数据，确保数据可恢复性。
      • 尽管我们采取合理的安全措施，但无法保证任何数据传输的绝对安全。请您也采取适当的账户保护措施。`,
  },
  {
    title: "五、第三方服务",
    content: `Peture 使用以下第三方服务提供商来支持我们的服务：
      
      • Supabase：提供后端数据库和用户认证服务。我们将您的账户信息和宠物数据存储在 Supabase 托管的数据库中。
      • Dify：提供 AI 助手功能，包括自然语言处理和智能回复。
      •  analytics 服务：用于分析服务使用情况，提升用户体验。
      
      这些第三方服务提供商仅根据我们的指示处理数据，并遵守本隐私政策。我们已与这些提供商签订数据处理协议，确保其提供适当的安全保护。`,
  },
  {
    title: "六、用户权利",
    content: `根据适用法律，您享有以下权利：
      
      • 访问权：您有权请求获取我们持有的关于您的个人信息的副本。
      • 更正权：您有权请求更正不准确的个人信息。
      • 删除权：您有权请求删除您的个人信息。
      • 数据导出：您有权请求导出您的个人数据��
      • 撤销同意：您有权撤销您之前给予的数据处理同意。
      
      如需行使上述权利，请通过本政策末尾提供的联系方式与我们联系。`,
  },
  {
    title: "七、政策更新",
    content: `我们可能会不时更新本隐私政策。更新后的政策将在 Peture 网站上公布，并注明"最后更新日期"。重大变更时，我们将通过电子邮件或服务内通知的方式告知您。
      
      建议您定期查看本隐私政策，以了解我们如何保护您的信息。继续使用我们的服务即表示您接受更新后的政策。`,
  },
  {
    title: "八、联系我们",
    content: `如果您对本隐私政策有任何疑问或疑虑，请通过以下方式联系我们：
      
      • 电子邮件：peture.team@gmail.com
      • 网站：https://peture.com/contact
      
      我们将在收到您的请求后尽快回复。通常情况下，我们将在 30 天内回复。`,
  },
];

export default function PrivacyPage() {
  const lastUpdated = "2025年4月25日";

  return (
    <div className="min-h-screen">
      <div className="gradient-mesh pt-24 lg:pt-32">
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              隐私政策
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
              我们重视您的隐私，致力于保护您的个人信息安全
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