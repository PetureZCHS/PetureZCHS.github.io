/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "隐私政策 | 智宠合生 Peture",
  description: "智宠合生 Peture 隐私政策，了解我们如何收集、使用和保护您的个人信息",
};

export default function PrivacyPage() {
  const lastUpdated = "2026年5月14日";
  const effectiveDate = "2026年5月14日";

  return (
    <div className="min-h-screen">
      <div className="gradient-mesh pt-24 lg:pt-32">
        <SectionWrapper>
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              Peture（智宠合生）隐私政策
            </h1>
            <p className="mt-4 text-sm text-foreground/50">
              更新日期：{lastUpdated}
            </p>
            <p className="mt-1 text-sm text-foreground/50">
              生效日期：{effectiveDate}
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-8 text-foreground/80 leading-relaxed md:pb-20">
          <p>
            欢迎您使用“Peture（智宠合生）”（以下简称“本应用”或“我们”）。我们非常重视您的个人信息和隐私保护。本隐私政策将帮助您了解我们如何收集、使用、存储和保护您的个人信息。请您在使用本应用前,仔细阅读并充分理解本隐私政策。
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">重要提示（首次使用需同意）</h2>
            <p className="mb-4">在您首次使用本应用时,我们将通过弹窗形式向您展示本隐私政策,您需点击“同意”后方可继续使用应用的全部功能。</p>
            <p className="mb-4">本应用收集的<strong className="text-foreground">手机号码、交易记录、宠物医疗记录、宠物健康信息、地理位置信息</strong>属于敏感个人信息，我们将严格按照法律法规要求进行保护，仅在为提供服务所必需的最小范围内收集和使用，并会通过独立弹窗获取您的单独同意。</p>
            <p className="mb-4">如您不同意本政策,您将无法使用核心服务（如登录、AI问诊、数据存储等）。</p>
            <p className="mb-2"><strong className="text-foreground">单独同意提示：</strong>对于以下高风险个人信息处理活动，我们将通过<strong className="text-foreground">独立弹窗</strong>获取您的单独书面同意，不会将该同意与其他用户协议捆绑：</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>跨境数据传输；</li>
              <li>处理敏感个人信息（如宠物医疗记录、地理位置信息）；</li>
              <li>将您的输入内容用于 AI 模型训练。</li>
            </ul>
            <p className="mb-4">您有权随时撤回上述同意，撤回后我们将立即停止相关处理活动，但不影响此前基于同意已进行的处理活动的效力。</p>
            <p>对于地理位置信息等非必要敏感信息，您有权拒绝授权，拒绝后仅会影响对应功能的使用，不会影响本应用核心服务的正常运行。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">一、我们收集的信息</h2>
            <p className="mb-4">在您使用本应用过程中,我们可能会收集以下类型的信息:</p>
            
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">1. 账户与身份信息</h3>
            <p className="mb-2">当您注册或登录时,我们可能收集:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong className="text-foreground">手机号码</strong>（用于手机号登录）</li>
              <li>邮箱地址（用于邮箱登录）</li>
              <li>用户ID（系统自动生成）</li>
              <li>登录凭证（Token、Session）</li>
              <li>基本资料：昵称、头像、性别、年龄（用于完善用户画像）</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">2. 宠物档案信息（由您主动提供）</h3>
            <p className="mb-2">为了提供宠物管理服务,我们会收集您填写的宠物信息:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>基本信息:名称、类型、品种、性别、年龄</li>
              <li><strong className="text-foreground">健康信息:医疗记录、疫苗记录、体重记录</strong></li>
              <li>其他信息:出生日期、绝育状态、宠物头像</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">3. AI 对话与问诊数据</h3>
            <p className="mb-2">当您使用“AI 智能问诊”功能时:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>您输入的文本内容</li>
              <li>AI 返回内容</li>
              <li>对话上下文及记录</li>
            </ul>
            <p className="mb-4 text-sm bg-muted/50 p-3 rounded-md">重要说明: 上述内容将通过网络传输至第三方 AI 服务用于生成回复（详见第六条）。</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">4. 设备与日志信息（自动收集）</h3>
            <p className="mb-2">为保障系统安全与稳定运行,我们可能收集:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>设备标识符（如IMEI、Android ID、IDFA、OAID等）</li>
              <li>操作系统版本</li>
              <li>应用版本号</li>
              <li>IP 地址（通过网络请求间接获取）</li>
              <li>崩溃日志与运行日志</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">5. 使用记录信息</h3>
            <p className="mb-2">在您使用应用过程中,我们可能收集:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>功能使用记录（如使用 AI 问诊、记录宠物信息等）</li>
              <li>页面访问记录（用于优化体验）</li>
              <li><strong className="text-foreground">交易记录</strong>（用于订单管理和售后）</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">6. 本地存储信息</h3>
            <p className="mb-2">为了支持离线功能和多设备数据同步，我们采用 "本地优先 + 可选云端同步" 的存储机制：</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li><strong className="text-foreground">默认本地存储：</strong>您的对话记录、宠物日记、费用数据等内容默认仅存储在您的设备本地数据库中，不会主动上传至云端（因使用AI问诊功能产生的必要网络传输除外，详见第三部分）；</li>
              <li><strong className="text-foreground">可选云端同步：</strong>您可在「设置 - 数据同步」中手动开启云端同步功能，开启后上述数据将加密上传至 Supabase 云端服务器，实现多设备数据同步；</li>
              <li><strong className="text-foreground">同步控制权：</strong>您可随时关闭云端同步功能，关闭后新产生的数据将仅存储在本地，已上传至云端的数据您可申请删除。</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">7. 图片信息</h3>
            <p className="mb-4">当您上传宠物头像时,我们会访问您的设备相册,并处理您选择的图片。您上传的宠物头像仅用于展示，我们不会将其用于任何其他用途；您可随时删除已上传的头像。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">二、我们如何使用您的信息</h2>
            <p className="mb-2">我们收集信息用于以下目的:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>提供宠物管理与记录功能</li>
              <li>实现 AI 智能问诊服务</li>
              <li>保存和同步您的数据</li>
              <li>提供提醒功能（疫苗、用药等）</li>
              <li>优化产品体验与性能</li>
              <li>保障系统安全与稳定运行</li>
              <li>为您展示个性化内容：基于您的宠物信息及使用习惯，向您推荐可能感兴趣的内容或商品广告。您有权在应用的「设置 - 隐私管理 - 个性化推荐」中随时关闭该功能，关闭后我们将不再基于您的个人偏好推送特定内容。</li>
            </ul>
            <p>经您<strong className="text-foreground">单独书面同意</strong>后，将您在 AI 问诊中输入的内容用于模型优化训练，以提升 AI 服务质量；您可随时在「设置 - AI 服务设置」中关闭 "允许将我的对话用于模型训练" 功能，关闭后我们将立即停止使用您的相关数据进行训练，但已完成去标识化处理并融入模型的部分除外。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">三、Cookie 与类似技术</h2>
            <p className="mb-2">在 Web 端或相关服务中,我们可能使用 Cookie 或类似技术用于:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>维持登录状态</li>
              <li>提升用户体验</li>
              <li>分析使用情况</li>
            </ul>
            <p>您可以通过浏览器设置管理或禁用 Cookie。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">四、我们如何存储您的信息</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">1. 存储方式</h3>
            <p className="mb-2">您的信息可能存储于:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>本地设备（SQLite 数据库）</li>
              <li>云端服务器（Supabase 提供）</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">2. 存储期限</h3>
            <p className="mb-2">我们仅在实现目的所需的最短时间内保留您的信息：</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>账户基本信息：保留至您注销账号后 7 个工作日；</li>
              <li>交易记录：自交易完成之日起保留不少于 3 年（符合《电子商务法》要求）；</li>
              <li>系统日志：保留不少于 6 个月（符合《网络安全法》要求）；</li>
              <li>AI 对话记录：保留至您主动删除或注销账号后 15 个工作日，注销账号后，已用于 AI 模型训练的对话数据将进行不可逆的去标识化处理；</li>
              <li>法律法规另有规定的，从其规定。</li>
            </ol>
            <p className="mb-4">存储期限届满后，我们将立即对您的个人信息进行删除或去标识化处理。</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">3. 数据安全措施</h3>
            <p className="mb-2">我们采取包括但不限于以下措施:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>HTTPS 加密传输</li>
              <li>数据访问权限控制</li>
              <li>身份认证机制</li>
              <li>数据库安全策略（如 RLS）</li>
            </ul>
            <p>响应时限：如发生信息泄露等安全事件，我们将立即启动应急预案。我们将依照法律法规要求，在 72小时内 以站内信、邮件或短信等方式将事件情况、影响范围、风险等级及应对措施告知受影响用户，并依法向监管部门报告。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">五、信息共享、转让与公开披露</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">1. 信息共享</h3>
            <p className="mb-2">我们不会出售您的个人信息,但在以下情况下可能共享:</p>
            <p className="mb-2">（1）第三方服务提供商</p>
            <p className="mb-2">为实现功能,我们可能向以下服务提供必要信息:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>数据存储服务</li>
              <li>用户认证服务</li>
              <li>AI 服务</li>
            </ul>
            <p className="mb-4">详见第六条。</p>
            <p className="mb-2">（2）法律要求</p>
            <p className="mb-4">在法律法规要求或政府机关要求下,我们可能披露您的信息。</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">2. 信息转让</h3>
            <p className="mb-4">如发生合并、收购或资产转让,我们会确保您的信息继续受到保护。</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">3. 信息公开披露</h3>
            <p>除法律要求外,我们不会公开披露您的个人信息。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">六、第三方服务说明（SDK / API）</h2>
            <div className="bg-muted/30 p-6 rounded-xl overflow-x-auto border border-border/50 text-sm">
              <p className="mb-4">为保障本应用功能的实现，我们接入了以下第三方服务提供商。我们仅会向第三方提供为实现服务所必需的最小范围信息，并要求第三方严格遵守数据保护义务。</p>
              
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="py-3 pr-4 font-semibold text-foreground">SDK 名称</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">公司名称</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">处理目的</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-[30%]">收集的信息项</th>
                    <th className="py-3 font-semibold text-foreground">隐私政策链接</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50 text-foreground/80">
                  <tr>
                    <td className="py-3 pr-4">Supabase</td>
                    <td className="py-3 pr-4">Supabase, Inc.</td>
                    <td className="py-3 pr-4">云端数据存储与同步</td>
                    <td className="py-3 pr-4">用户 ID、宠物档案信息、对话记录、交易记录、设备标识符</td>
                    <td className="py-3"><a href="https://supabase.com/privacy" className="text-primary hover:underline" target="_blank" rel="noreferrer">查看链接</a></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">LeanCloud</td>
                    <td className="py-3 pr-4">北京易捷思达科技发展有限公司</td>
                    <td className="py-3 pr-4">用户身份认证、验证码发送</td>
                    <td className="py-3 pr-4"><strong className="text-foreground">手机号码、邮箱地址、设备标识符（IMEI、Android ID、IDFA）、设备厂商、设备型号、操作系统版本、网络类型</strong></td>
                    <td className="py-3"><a href="https://leancloud.cn/docs/privacy_policy.html" className="text-primary hover:underline" target="_blank" rel="noreferrer">查看链接</a></td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Dify</td>
                    <td className="py-3 pr-4">Dify, Inc.</td>
                    <td className="py-3 pr-4">AI 智能问诊服务</td>
                    <td className="py-3 pr-4">对话文本、上下文信息、宠物健康信息</td>
                    <td className="py-3"><a href="https://dify.ai/privacy" className="text-primary hover:underline" target="_blank" rel="noreferrer">查看链接</a></td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-4">第三方 SDK 的独立数据收集、使用行为由其开发者负责，您可通过上述隐私政策链接查阅其详细的个人信息处理规则。</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">七、您的权利</h2>
            <p className="mb-2">您对自己的个人信息享有以下权利：</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>查询与复制：您有权通过应用内个人资料页查阅信息，并可请求获得副本。</li>
              <li>更正与补充：发现信息不准确时，您有权自行或联系我们进行修正。</li>
              <li>删除权：在法定情形下（如注销、停止服务），您有权要求我们删除您的数据。</li>
              <li>撤回同意：您可随时更改授权范围或撤回您的授权。您可以通过「设置-隐私管理」直接关闭相关权限或撤回已授权的同意。</li>
              <li>注销账户：您有权随时申请注销，我们将在7个工作日内完成审核。</li>
              <li>解释说明权：您有权要求我们就个人信息处理规则进行解释说明。</li>
              <li>转移权（携带权）：符合国家网信部门规定条件的，我们将提供便捷的转移途径将您的信息转移至您指定的第三方。</li>
            </ol>
            <p>如需行使上述权利,请通过下方联系方式与我们联系。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">八、未成年人保护</h2>
            <p className="mb-4">我们特别重视未成年人个人信息保护。</p>
            <p className="mb-4">14 周岁以上未满 18 周岁的未成年人，应在监护人指导下阅读本政策，并在监护人同意后使用本服务。</p>
            <p>不满 14 周岁的未成年人保护规则详见本政策第九条。</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">九、儿童个人信息保护规则</h2>
            <p className="mb-4">本章节适用于不满 14 周岁的未成年人（以下简称 "儿童"）。</p>
            <div className="space-y-4">
              <p>9.1 我们不会主动收集儿童的个人信息。若您是儿童的监护人，在为儿童注册使用本服务前，请您仔细阅读本规则及本隐私政策的其他内容，并在取得您的明确书面同意后，方可允许儿童使用本服务。</p>
              <p>9.2 我们仅收集为提供服务所必需的儿童个人信息，包括：监护人的手机号码、儿童的宠物档案信息。我们不会收集儿童的面部识别信息、地理位置信息等敏感个人信息，除非监护人明确同意且为提供服务所必需，收集儿童的任何敏感个人信息前，必须取得监护人的单独书面同意。</p>
              <p>9.3 儿童的个人信息仅用于提供本应用服务，不会用于任何商业推广或第三方共享，也不会用于 AI 模型训练。</p>
              <p>9.4 监护人有权随时查询、更正、删除儿童的个人信息，或注销儿童的账号。如需行使上述权利，请通过本协议提供的联系方式与我们联系。</p>
              <p>9.5 若我们发现用户为不满 14 周岁的儿童且未获得监护人同意，将立即停止为其提供服务，并删除其所有个人信息。</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">十、权限说明</h2>
            <p className="mb-2">本应用可能申请以下权限:</p>
            
            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">1. 存储权限</h3>
            <p className="mb-4">用于上传图片、缓存数据</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">2. 网络权限</h3>
            <p className="mb-4">用于数据同步与 AI 服务</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">3. 通知权限（可选）</h3>
            <p>用于提醒功能（疫苗、用药等）</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">十一、跨境数据传输说明</h2>
            <p className="mb-4">为实现部分服务功能，我们需要将您的部分个人信息传输至境外服务器进行处理。根据《中华人民共和国个人信息保护法》第三十八条规定，我们将严格履行个人信息出境义务，并通过<strong className="text-foreground">独立弹窗</strong>获取您的<strong className="text-foreground">单独书面同意</strong>。您有权随时撤回该同意，撤回后相关功能可能无法正常使用，但不影响其他服务的使用。</p>
            
            <p className="mb-4">境外接收方详细信息如下：</p>
            
            <div className="overflow-x-auto border border-border/50 rounded-xl mb-6 text-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-muted/30">
                  <tr className="border-b border-border/50">
                    <th className="py-3 px-4 font-semibold text-foreground">境外接收方名称</th>
                    <th className="py-3 px-4 font-semibold text-foreground">注册地址</th>
                    <th className="py-3 px-4 font-semibold text-foreground">联系方式</th>
                    <th className="py-3 px-4 font-semibold text-foreground">处理目的</th>
                    <th className="py-3 px-4 font-semibold text-foreground">处理方式</th>
                    <th className="py-3 px-4 font-semibold text-foreground">传输的信息种类</th>
                    <th className="py-3 px-4 font-semibold text-foreground min-w-[200px]">用户行使权利的方式</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr>
                    <td className="py-3 px-4">Supabase, Inc.</td>
                    <td className="py-3 px-4">美国加利福尼亚州旧金山</td>
                    <td className="py-3 px-4">support@supabase.com</td>
                    <td className="py-3 px-4">提供云端数据存储与同步服务</td>
                    <td className="py-3 px-4">加密存储、数据同步</td>
                    <td className="py-3 px-4">用户 ID、宠物档案信息、对话记录、交易记录</td>
                    <td className="py-3 px-4">1. 通过本应用「设置 - 数据同步」关闭云端同步；<br/>2. 联系我们申请删除已上传的数据；<br/>3. 直接通过 Supabase 官方邮箱行使权利</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Dify, Inc.</td>
                    <td className="py-3 px-4">美国加利福尼亚州旧金山</td>
                    <td className="py-3 px-4">support@dify.ai</td>
                    <td className="py-3 px-4">提供 AI 智能问诊服务</td>
                    <td className="py-3 px-4">数据传输、模型推理</td>
                    <td className="py-3 px-4">对话文本、上下文信息、宠物健康信息</td>
                    <td className="py-3 px-4">1. 联系我们申请删除您的对话记录；<br/>2. 直接通过 Dify 官方邮箱行使权利</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-2">我们将采取以下措施保障跨境数据传输安全：</p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>采用 HTTPS 加密传输所有数据；</li>
              <li>与境外接收方签订数据处理协议，明确其数据保护责任；</li>
              <li>定期对境外接收方的数据安全状况进行评估。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">十二、AI 服务说明与免责声明</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">AI 生成内容局限性</strong>：本应用提供的 AI 智能问诊服务仅为线上初步建议，不构成专业兽医诊断、治疗方案或处方，不能替代执业兽医的当面诊疗。若您的宠物出现健康问题，请及时咨询线下执业兽医。</li>
              <li><strong className="text-foreground">AI 内容标识</strong>：所有 AI 生成的内容均会进行<strong className="text-foreground">双重标识</strong>：显式标识（文字标注 "AI 生成"）和隐式标识（嵌入文件元数据），用户不得删除或篡改该标识。</li>
              <li><strong className="text-foreground">有害内容举报</strong>：若您发现 AI 生成了违法、违规或有害内容，请通过以下路径一键举报：「设置 - 帮助与反馈 - AI 内容举报」，或发送邮件至 support@peture.app。我们将在 24 小时内响应，7 个工作日内完成处理并删除相关内容。</li>
              <li><strong className="text-foreground">责任划分</strong>：因 AI 生成内容侵犯第三方合法权益的，由我们承担相应法律责任，但因您提供的输入内容违法或侵权导致的除外。</li>
              <li><strong className="text-foreground">知识产权说明</strong>：本应用 AI 生成的文字、图像等内容的知识产权归我们所有，您仅享有个人非商业使用的权利；未经我们书面许可，不得将 AI 生成内容用于商业用途。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">十三、隐私政策更新</h2>
            <p className="mb-2">我们可能不定期更新本隐私政策:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>更新后将在应用内展示</li>
              <li>重大变更将重新征得您的同意</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">十四、隐私政策入口说明（App 内）</h2>
            <p className="mb-2">您可以随时通过以下路径查看本隐私政策:</p>
            <p className="bg-muted/50 inline-block px-3 py-1 rounded-md text-sm">设置页面 → 关于 / 隐私政策</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">十五、联系我们</h2>
            <p className="mb-4">如您对本隐私政策有任何疑问或请求,请联系:</p>
            <ul className="list-none space-y-2 mb-6 text-foreground/90">
              <li className="flex items-center gap-2">📧 <span className="font-semibold">联系邮箱：</span><a href="mailto:peture_app@outlook.com" className="text-primary hover:underline">peture_app@outlook.com</a></li>
              <li className="flex items-center gap-2">🏢 <span className="font-semibold">开发者/团队名称：</span>智宠合生开发团队</li>
              <li className="flex items-center gap-2">📱 <span className="font-semibold">应用名称：</span>Peture（智宠合生）</li>
            </ul>
            <p className="p-4 bg-primary/10 rounded-lg text-primary-foreground/90">我们将在收到您的有效投诉、咨询或建议后的<strong className="text-foreground">24 小时内给予首次响应</strong>（确认已收到您的请求），并在<strong className="text-foreground">7 个工作日内完成核查并给出最终处理结果</strong>；情况复杂的，处理期限可适当延长，但最长不超过 15 个工作日，我们将提前告知您延期原因。</p>
          </section>

          <section className="pt-8 border-t border-border/50 text-sm text-foreground/60">
            <h3 className="font-bold mb-4 text-foreground/80 md:text-base">完整合规说明</h3>
            <p className="mb-2">本隐私政策已依据以下法律法规制定：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>《中华人民共和国个人信息保护法》</li>
              <li>《中华人民共和国个人信息保护法实施条例》（2025 年版）</li>
              <li>《中华人民共和国网络安全法》</li>
              <li>《中华人民共和国数据安全法》</li>
              <li>《生成式人工智能服务管理暂行办法》（2025 年修订版）</li>
            </ul>
          </section>

        </div>
      </SectionWrapper>
    </div>
  );
}
