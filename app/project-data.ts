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
    question: "从一次期末复习开始的 AI 学习助手",
    summary: "面对越来越多的资料，我真正缺少的不是更多内容，而是对学习进度的判断。",
    solution:
      "期末复习时，我经常面对大量课程资料、PPT 和笔记。资料越来越多，但真正困难的是不知道什么最重要、自己是否真正掌握，也不知道下一步该学什么。于是我开始尝试用 AI 重新设计复习流程：分析课程资料、整理知识结构、生成练习，并根据学习反馈帮助用户判断下一步。",
    role: ["产品定位与需求分析", "PRD 与交互流程", "AI Workflow", "前端开发", "版本迭代"],
    progress: "已经完成多文件上传、课程资料管理、知识整理、智能练习和错题复盘等核心流程，并持续根据使用反馈优化。市面上也有不少 AI 学习和题库产品，这让我更需要想清楚：FinalAce 真正应该解决的，是生成更多内容，还是帮助学生更好地判断和推进学习。",
    features: ["多文件上传与管理", "AI 知识结构整理", "智能练习", "学习反馈与复盘"],
    learning: "一个功能能够运行，并不代表它真的对学习有帮助。我还在学习怎样减少使用负担，让反馈更接近学生真实的学习状态。",
    image: "/finalace-desktop.png",
  },
  {
    slug: "narziss",
    name: "Narziss",
    type: "AI 对话学习浏览器扩展",
    status: "已完成，可安装体验",
    tone: "sage",
    question: "让 AI 对话真正成为学习过程",
    summary: "一个问题得到答案，并不代表真正学会了。我想知道，一次次对话能否逐渐形成自己的理解。",
    solution:
      "我经常使用 AI 解决问题，但后来发现，很多知识只停留在一次对话里，没有变成自己的理解，也没有自然地通向下一步。Narziss 是一次关于长期学习伙伴的探索。它以浏览器扩展的形式运行在 AI 对话网页中，尝试发现知识缺口、整理后续学习方向，并记录一段时间内的学习过程。",
    role: ["产品结构设计", "AI 交互设计", "浏览器扩展开发", "学习流程设计"],
    progress: "核心浏览器扩展已经完成，可以在多个 AI 对话网站中使用。目前仍在观察：怎样记录学习才不会增加负担，怎样给出建议才不会替用户做判断。",
    features: ["发现知识缺口", "整理学习路径", "记录学习进展", "解释 GitHub 项目"],
    learning: "我逐渐意识到，学习伙伴的价值不在于给出更多答案，而在于帮助一个人把零散的对话慢慢变成自己的理解。",
    image: "/narziss-popup.jpg",
    publicUrl: "https://github.com/x132204x-web/Narziss",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
