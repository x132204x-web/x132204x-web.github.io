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
    slug: "narziss",
    name: "Narziss",
    type: "基于人类知识树创建的 AI 学习浏览器扩展",
    status: "已完成，可安装体验",
    tone: "sage",
    question: "让 AI 对话真正成为学习过程",
    summary: "",
    solution:
      "我经常使用 AI 解决问题，但后来发现，很多知识只停留在一次对话里，没有变成自己的理解，也没有自然地通向下一步。Narziss 是一次关于长期学习伙伴的探索。它以浏览器扩展的形式运行在 AI 对话网页中，尝试发现知识缺口、整理后续学习方向，并记录一段时间内的学习过程。",
    role: ["产品结构设计", "AI 交互设计", "浏览器扩展开发", "学习流程设计"],
    progress: "核心浏览器扩展已经完成。现在正在加入记忆检索、个性化设计和人类知识树引导，让它不只保存对话，也能帮助用户看见自己还缺什么、下一步可以学什么。",
    features: ["发现知识缺口", "整理学习路径", "记录学习进展"],
    learning: "我逐渐意识到，学习伙伴的价值不在于给出更多答案，而在于帮助一个人把零散的对话慢慢变成自己的理解。",
    publicUrl: "https://github.com/x132204x-web/Narziss",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
