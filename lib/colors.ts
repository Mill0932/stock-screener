/**
 * Semantic color tokens mapped to Tailwind utility classes.
 * Use these in components instead of hard-coded hex values.
 */
export const colors = {
  bg: {
    app: "bg-bg-app",
    surface: "bg-bg-surface",
    inverse: "bg-bg-inverse",
    primarySoft: "bg-primary-soft",
    marketUpSoft: "bg-market-up-soft",
    marketDownSoft: "bg-market-down-soft",
  },
  text: {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
    primaryBrand: "text-primary",
    warning: "text-warning",
    danger: "text-danger",
    ai: "text-ai",
    marketUp: "text-market-up",
    marketDown: "text-market-down",
  },
  border: {
    default: "border-border",
    input: "border-border-input",
  },
} as const;

export const semanticTokens = [
  { token: "--bg-app", tailwind: "bg-bg-app", use: "页面底色" },
  { token: "--bg-surface", tailwind: "bg-bg-surface", use: "卡片、表格、表单" },
  { token: "--bg-inverse", tailwind: "bg-bg-inverse", use: "顶栏、登录左栏" },
  { token: "--border", tailwind: "border-border", use: "分隔线、卡片描边" },
  {
    token: "--border-input",
    tailwind: "border-border-input",
    use: "输入框默认边框",
  },
  { token: "--text-primary", tailwind: "text-text-primary", use: "标题、数字" },
  {
    token: "--text-secondary",
    tailwind: "text-text-secondary",
    use: "正文、说明",
  },
  { token: "--text-muted", tailwind: "text-text-muted", use: "占位符、时间戳" },
  {
    token: "--primary",
    tailwind: "text-primary / bg-primary",
    use: "主按钮、链接",
  },
  {
    token: "--primary-hover",
    tailwind: "hover:bg-primary-hover",
    use: "主按钮 hover",
  },
  { token: "--primary-soft", tailwind: "bg-primary-soft", use: "选中项浅底" },
  { token: "--up", tailwind: "text-market-up", use: "上涨（跟随市场习惯）" },
  {
    token: "--down",
    tailwind: "text-market-down",
    use: "下跌（跟随市场习惯）",
  },
  { token: "--warning", tailwind: "text-warning", use: "RSI 超卖、数据过期" },
  { token: "--danger", tailwind: "text-danger", use: "表单错误、删除提醒" },
  { token: "--ai", tailwind: "text-ai", use: "AI 总结入口与卡片" },
] as const;
