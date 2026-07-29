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
    role: ["产品设计", "学习流程设计", "AI 功能设计", "前端开发", "持续迭代"],
    progress: "已经完成资料上传、知识整理、智能练习和错题复盘等核心流程，并持续根据使用反馈优化。市面上也有不少 AI 学习和题库产品，这让我更需要想清楚：FinalAce 真正应该解决的，是生成更多内容，还是帮助学生更好地判断和推进学习。",
    features: ["课程资料分析", "知识结构整理", "智能练习", "学习反馈与复盘"],
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
    publicUrl: "https://github.com/x132204x-web/Narziss",
  },
  {
    slug: "cloud-catalog",
    name: "云品册",
    type: "中小商家产品资料工具",
    status: "持续迭代",
    tone: "wheat",
    question: "分散在相册和聊天里的商品资料，能不能更容易整理？",
    summary: "这是一次从真实业务流程出发的产品实践：让商品资料更容易维护，也更方便团队使用。",
    solution:
      "不少中小商家的商品图片、价格、规格和介绍散落在手机相册、聊天记录和表格里。云品册尝试把这些资料放进同一个目录，帮助商家查找、修改和分享。我参与梳理了商品导入、企业入驻、成员邀请和客户查看等流程。",
    role: ["体验梳理", "表单设计", "商品导入", "企业协作", "小程序流程"],
    progress: "已经完成商品目录、批量导入、企业入驻、成员邀请和客户查看等主要流程，目前仍在优化表单与协作体验。",
    features: ["商品资料集中管理", "相册与聊天图片导入", "企业成员协作", "客户分享页面"],
    learning: "这段经历让我看到，业务工具不一定需要很多新功能。资料找得到、改起来不费力、交接时不混乱，本身就是重要的体验。",
  },
  {
    slug: "pathfinder",
    name: "PathFinder",
    type: "大学生 AI 职业探索",
    status: "30 天验证中",
    tone: "clay",
    question: "当我还不知道自己想做什么时，可以怎样开始探索？",
    summary: "与其急着得到一个职业答案，我更想先理解自己喜欢怎样工作，再用小规模尝试验证方向。",
    solution:
      "PathFinder 来自我自己对专业和职业选择的困惑。它通过连续对话了解用户的任务偏好、协作方式和工作环境，再整理成可以修改的工作方式画像，并给出一些成本较低的职业体验，让用户用行动补充判断，而不是只依赖一次测试结果。",
    role: ["问题设计", "对话流程", "职业方向模型", "界面设计", "原型开发"],
    progress: "已经完成动态对话、工作方式画像、方向假设和 30 天体验路线，目前仍在验证这些问题是否真的能帮助用户更了解自己。",
    features: ["动态追问", "工作方式画像", "职业方向假设", "30 天低成本实验"],
    learning: "我的专业选择本身也是一个不断排除和尝试的过程。这让我更相信，职业探索不必急着得到结论，而可以靠一次次真实体验慢慢补充证据。",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
