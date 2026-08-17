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
  images?: string[];
  publicUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "finalace",
    name: "FinalAce",
    type: "大学生 AI 复习工作台",
    status: "已上线，持续优化",
    tone: "blue",
    question: "从一次期末复习开始的 AI 学习助手",
    summary: "面对越来越多的资料，我们真正缺少的不是更多内容，而是对学习进度的判断，以及能否过线的底气。",
    solution:
      "期末复习时，我经常面对大量课程资料、PPT 和笔记。资料越来越多，但真正困难的是不知道什么最重要、自己是否真正掌握，也不知道下一步该学什么。于是我开始尝试用 AI 重新设计复习流程：分析课程资料、整理知识结构、生成练习，并根据学习反馈帮助用户判断下一步。",
    role: ["产品定位与需求分析", "PRD 与交互流程", "AI Workflow", "全栈开发", "版本迭代"],
    progress: "已经完成多文件上传、课程资料管理、知识整理、智能练习和错题复盘等核心流程。正在做差异化：除了把功能做出来，也让学习流程更贴近真实备考，并通过内容、体验和持续运营让更多学生看见并愿意使用。",
    features: ["多文件上传与管理", "AI 知识结构整理", "智能练习", "学习反馈与复盘"],
    learning: "一个功能能够运行，并不代表它真的对学习有帮助。我还在学习怎样减少使用负担，让反馈更接近学生真实的学习状态。",
    images: ["/finalace-home.png", "/finalace-study-path.png"],
    publicUrl: "https://finalace.online",
  },
  {
    slug: "cloud-catalog",
    name: "云品册",
    type: "中小商家产品资料与协作工具",
    status: "持续迭代",
    tone: "wheat",
    question: "商品资料散落在相册、聊天和表格里，怎样更方便地维护与分享？",
    summary: "把商品图片、SKU、价格和规格集中到一个目录里，方便团队维护，也方便分享给客户。",
    solution:
      "云品册面向需要频繁整理和发送商品资料的中小商家。商家可以把商品图片与名称、SKU、材质、颜色、价格等信息放进同一个目录，团队成员共同维护，并生成便于客户查看的分享页面。我参与梳理小程序中的商品表单、保存操作、批量导入、企业入驻和成员邀请流程。",
    role: ["需求与体验梳理", "商品表单设计", "批量导入流程", "企业协作流程", "小程序体验优化"],
    progress: "已经完成商品目录、批量导入、企业入驻、成员邀请和客户只读分享等主要流程，并继续优化录入与协作体验。",
    features: ["商品资料集中管理", "相册与表格批量导入", "企业成员协作", "客户只读分享"],
    learning: "对商家来说，重要的不是功能越多越好，而是资料找得到、改得动，临时要发给客户时不需要再翻聊天记录。",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
