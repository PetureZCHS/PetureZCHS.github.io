# Peture 项目 AI 长期记忆

> 本文件用于存储项目的长期规则和标准，帮助 AI 保持一致的开发实践。

---

## 1. 代码规范

### 1.1 TypeScript/React 规范
- 使用函数式组件和 Hooks
- Props 类型使用 interface 定义
- 避免使用 `any` 类型
- 使用可选链操作符 `?.` 替代深层判断

### 1.2 组件开发规范
- 组件文件使用 PascalCase 命名
- 组件内逻辑抽离为自定义 Hooks
- 使用 `clsx` 处理条件类名
- 动画使用 `framer-motion` 实现

---

## 2. 样式与 UI 规范

### 2.1 设计系统
- 使用项目定义的 design-system 中的规范
- 颜色变量使用 Tailwind 配置中的自定义颜色
- 阴影使用项目中定义的 `shadow-fluffy` 等自定义阴影
- 圆角遵循 Claymorphism 风格（16-24px）

### 2.2 图标规范
- **严禁使用 Emoji 作为图标**
- 统一使用 `lucide-react` 图标库
- 图标尺寸保持一致（默认 24px，按钮内 20px）

### 2.3 排版规范
- **中英文混排必须添加空格**：中文和英文/数字之间需要有空格
- 正确示例：`使用 AI 技术`、`Peture App`、`7×24 小时`
- 错误示例：`使用AI技术`、`PetureApp`、`7×24小时`

---

## 3. 内容规范

### 3.1 文案风格
- 保持温暖、友好的语气
- 避免使用过于技术化的术语
- 用户-facing 的文案需要简洁明了

### 3.2 企业理念（Mission/Vision/Values）
- **使命**：无限延伸人类的认知边界
- **愿景**：让全球每一个人，因我们的存在，有更美好的生活
- **价值观**：以人为本 · 去幻求真 · 知行合一

---

## 4. SEO 规范

### 4.1 页面元数据
- 每个页面必须定义 `Metadata`
- Title 格式：`页面名 | 智宠合生 Peture`
- Description 控制在 120 字以内
- Keywords 使用中文逗号分隔

### 4.2 图片规范
- 使用有意义的 alt 文本
- OG 图片尺寸：1200×630

---

## 5. 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页
│   ├── about/page.tsx     # 关于页面
│   ├── features/page.tsx  # 功能页面
│   ├── pricing/page.tsx   # 定价页面
│   ├── ai-lab/page.tsx    # AI 实验室
│   ├── contact/page.tsx   # 联系页面
│   ├── privacy/page.tsx   # 隐私政策
│   └── terms/page.tsx     # 服务条款
├── components/
│   ├── ui/                # 基础 UI 组件
│   ├── layout/            # 布局组件（Navbar/Footer）
│   ├── animated/          # 动画组件
│   └── seo/               # SEO 相关组件
├── lib/                   # 工具函数
└── styles/               # 全局样式
```

---

## 6. 依赖清单

### 核心依赖
- `next`: 14.2.35
- `react`: ^18
- `react-dom`: ^18
- `typescript`: ^5
- `tailwindcss`: ^3.4.1

### UI/动画
- `framer-motion`: 动画库
- `lucide-react`: 图标库
- `class-variance-authority`: 组件变体管理
- `clsx`: 条件类名合并
- `tailwind-merge`: Tailwind 类名合并

---

## 7. 注意事项

### 7.1 构建前检查
- 运行 `npm run build` 确保无编译错误
- 检查是否有未使用的导入
- 验证所有页面的 Metadata 是否完整

### 7.2 Git 提交规范
- 使用语义化提交信息
- 格式：`type(scope): subject`
- 示例：`feat(about): 更新使命愿景价值观`

## 8. 联系信息

- **总部**：中国 · 合肥
- **邮箱**：peture_app@outlook.com
- **网站**：https://peture.com

---

*最后更新：2026-04-25*
