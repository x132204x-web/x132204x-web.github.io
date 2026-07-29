export type Project = {
  slug: string;
  name: string;
  type: string;
  status: string;
  tone: "blue" | "sage" | "wheat" | "clay";
  question: string;
  summary: string;
  solution: string;
  role: string[];
  progress: string;
  features: string[];
  learning: string;
  image?: string;
  publicUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "finalace",
    name: "FinalAce",
    type: "大学生 AI 复习工作台",
    status: "已上线，持续优化",
    tone: "blue",
    question: "课程资料很多，怎样把复习真正推进下去？",
    summary: "把课程资料、提纲、练习和错题复盘放进同一套复习流程。",
    solution:
      "用户上传课程资料后，可以整理课程结构、生成提纲和练习，并把做错的题沉淀到错题复盘中。它来自我自己的期末复习需求，也一直在真实使用中被修正。",
    role: ["问题定义", "产品设计", "AI 流程", "前端开发", "持续迭代"],
    progress: "已经完成从资料上传、提纲生成、刷题到错题复盘的完整流程。",
    features: ["课程资料管理", "AI 复习提纲", "章节练习", "错题本与复盘"],
    learning: "做出来只是第一步。真正困难的是减少用户每一步的理解成本，让复习可以继续发生。",
    image: "/finalace-desktop.png",
  },
  {
    slug: "narziss",
    name: "Narziss",
    type: "AI 对话学习浏览器扩展",
    status: "已完成，可安装体验",
    tone: "sage",
    question: "和 AI 聊了很多，为什么还是不知道下一步该学什么？",
    summary: "在 AI 对话网页里识别学习缺口、推荐下一步，并记录掌握进度。",
    solution:
      "它运行在 ChatGPT、DeepSeek、Kimi 等 AI 对话网站上，用有限的本地对话记忆判断学习缺口，给出下一步学习建议；遇到 GitHub 项目链接时，也能基于仓库证据解释项目。",
    role: ["产品结构", "学习流程", "扩展开发", "本地状态", "GitHub 证据解析"],
    progress: "核心扩展已经完成，支持多个 AI 对话网站，并提供公开安装版本。",
    features: ["学习缺口提示", "下一步技能推荐", "掌握进度记录", "GitHub 项目讲解"],
    learning: "学习助手不应该替用户给出更多答案，而应该帮助用户知道自己缺了哪一块。",
    publicUrl: "https://github.com/x132204x-web/Narziss",
  },
  {
    slug: "cloud-catalog",
    name: "云品册",
    type: "中小商家产品资料工具",
    status: "持续迭代",
    tone: "wheat",
    question: "商品资料散落在相册、聊天和表格里，怎样更容易维护和分享？",
    summary: "集中维护商品图片、SKU、价格、规格和团队共享入口。",
    solution:
      "商家可以把商品资料导入同一个目录，按名称、SKU、材质、颜色等信息查找和维护，并生成适合分享给客户的产品页面。",
    role: ["体验梳理", "表单设计", "商品导入", "企业协作", "小程序流程"],
    progress: "完成商品目录、批量导入、企业入驻、成员邀请和客户只读分享等主要流程。",
    features: ["商品资料集中管理", "相册与聊天图片导入", "企业成员协作", "客户分享页面"],
    learning: "工具不需要塞进更多功能。对商家来说，资料找得到、改得动、分享方便更重要。",
  },
  {
    slug: "pathfinder",
    name: "PathFinder",
    type: "大学生 AI 职业探索",
    status: "30 天验证中",
    tone: "clay",
    question: "职业名称太抽象，怎样先理解自己适合怎样工作？",
    summary: "通过连续对话形成工作方式画像，再用低成本实验验证职业方向。",
    solution:
      "系统一次只问一个问题，从任务偏好、协作方式、工作环境和成长诉求中整理证据，形成可以随时修正的工作方式画像，并给出 30 天职业实验路线。",
    role: ["问题设计", "对话流程", "职业方向模型", "界面设计", "原型开发"],
    progress: "已经完成动态对话、方向假设、工作方式画像和 30 天验证路线。",
    features: ["动态追问", "工作方式画像", "职业方向假设", "30 天低成本实验"],
    learning: "职业探索不需要急着得到结论，更需要一个可以不断补充证据、修改判断的过程。",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
