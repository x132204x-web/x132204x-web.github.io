export type UpdateEntry = {
  slug: string;
  date: string;
  icon: string;
  title: string;
  summary: string;
  detail: string[];
  tags: string[];
};

const updateEntriesSource: UpdateEntry[] = [
  {
    slug: "finalace-start",
    date: "2026.05",
    icon: "🚀",
    title: "开发 FinalAce AI 学习助手",
    summary: "从自己的期末复习需求出发，尝试把课程资料、练习和反馈放进同一套学习流程。",
    detail: [
      "最早的版本只是一个为自己做的刷题工具。后来，我慢慢补上资料整理、知识点提取和复习反馈，也开始考虑其他学生真正会怎样使用它。",
      "这个过程让我看到，“能够运行”和“真正好用”之间还有很长的距离，而我仍在学习怎样缩短它。",
    ],
    tags: ["FinalAce", "产品实践", "AI 学习"],
  },
  {
    slug: "ai-agent-open-source",
    date: "2026.04",
    icon: "🤖",
    title: "探索 AI Agent 与 GitHub 开源项目",
    summary: "持续体验新的 AI 工具，思考它们怎样从回答问题逐渐走向完成任务。",
    detail: [
      "刚开始接触 AI 时，我花了很多时间了解模型怎样训练。后来，我更想知道：它能不能进入一个真实流程，帮我完成一件具体的事。",
      "我持续体验 GitHub 上的 Agent 项目，记录哪些地方真正有用，也留意它们在权限、边界和可靠性上的问题。",
    ],
    tags: ["AI Agent", "GitHub", "学习记录"],
  },
  {
    slug: "personal-company",
    date: "2026.07",
    icon: "🏢",
    title: "创办个人科技公司",
    summary: "尝试用更正式的方式推进个人项目，也开始接触产品之外的流程、协作与责任。",
    detail: [
      "成立公司并不代表项目已经成功，它更像一次新的尝试：把个人项目放进更真实的环境里继续检验。",
      "从申请、资料和流程，到后续的产品推进，我开始接触许多过去没有考虑过的事情，也更理解一个想法落地需要的耐心。",
    ],
    tags: ["创业记录", "产品推进", "成长"],
  },
  {
    slug: "waic-2026",
    date: "2026.07",
    icon: "🌏",
    title: "参加世界人工智能大会 WAIC",
    summary: "近距离体验 AI 软件、个人服务器、Agent 和硬件产品，观察技术正在往哪里走。",
    detail: [
      "现场有许多 AI Agent 工作台、个人服务器、模型服务、AI 眼镜、机器人和 3D 打印产品。它们让我看到 AI 与现实世界结合的不同可能。",
      "相比单纯关注技术有多强，我开始更关心：它最后会进入什么场景，普通人为什么会愿意长期使用。",
    ],
    tags: ["WAIC", "行业观察", "AI 硬件"],
  },
  {
    slug: "ai-coding-tools",
    date: "2026.06",
    icon: "💻",
    title: "用 Cursor、Codex 开发产品原型",
    summary: "尝试把 AI 放进真实开发流程，观察它能够帮助我完成什么，也记录它做不到什么。",
    detail: [
      "Cursor 和 Codex 让我第一次感受到，许多原本只能停留在脑子里的想法，可以很快变成可点击、可测试的原型。",
      "但我也逐渐发现，工具不会替我决定做什么。真正困难的仍然是把问题想清楚、做出取舍，并对最终结果负责。",
    ],
    tags: ["Cursor", "Codex", "原型开发"],
  },
];

export const updateEntries = [...updateEntriesSource].sort((a, b) => a.date.localeCompare(b.date));

export function getUpdate(slug: string) {
  return updateEntries.find((entry) => entry.slug === slug);
}
