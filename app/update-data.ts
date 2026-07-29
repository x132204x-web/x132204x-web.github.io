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
    summary: "从自己的期末复习需求出发，把课程资料做成可以真正使用的学习工具。",
    detail: [
      "这是一次从 0 到 1 的产品实践。我先用自己的备考方法做出刷题工具，再慢慢补上资料整理、知识点提取和复习反馈。",
      "过程中最重要的变化，是开始理解“能做出来”和“真正好用”之间还有很长的距离。",
    ],
    tags: ["FinalAce", "产品实践", "AI 学习"],
  },
  {
    slug: "ai-agent-open-source",
    date: "2026.04",
    icon: "🤖",
    title: "探索 AI Agent 与 GitHub 开源项目",
    summary: "持续体验新 AI 工具，记录它们如何从回答问题走向调用工具和完成任务。",
    detail: [
      "我开始把注意力从“大模型是怎么训练出来的”转向“它能不能真的帮我完成一件事”。",
      "每天试用一些 GitHub 上的 Agent 项目，把有用的留下来，也记录它们在权限、边界和可靠性上的问题。",
    ],
    tags: ["AI Agent", "GitHub", "学习记录"],
  },
  {
    slug: "personal-company",
    date: "2026.07",
    icon: "🏢",
    title: "创办个人科技公司",
    summary: "开始以企业形式推进 AI 产品开发，也开始面对真实的协作、运营和责任。",
    detail: [
      "成立公司不是一个“完成了”的终点，而是把个人项目放进更真实的环境里继续验证。",
      "从申请、资料、流程到后续产品推进，我开始学习如何和更多人建立连接，如何让想法逐渐变成可持续的事情。",
    ],
    tags: ["创业记录", "产品推进", "成长"],
  },
  {
    slug: "waic-2026",
    date: "2026.07",
    icon: "🌏",
    title: "参加世界人工智能大会 WAIC",
    summary: "体验 AI 软件、个人服务器、Agent 与硬件终端，并记录行业观察。",
    detail: [
      "现场看到很多 AI Agent 工作台、个人服务器、模型聚合服务、AI 眼镜、机器人和 3D 打印产品。",
      "这次经历让我更确定：真正能留下来的产品，不只是功能更多，而是找到了明确、高频、必要的使用场景。",
    ],
    tags: ["WAIC", "行业观察", "AI 硬件"],
  },
  {
    slug: "ai-coding-tools",
    date: "2026.06",
    icon: "💻",
    title: "用 Cursor、Codex 开发产品原型",
    summary: "把 AI 工具放进真实开发流程，从想法、界面到调试都留下可回看的过程。",
    detail: [
      "AI 让我第一次感受到，很多原本只能停留在脑子里的想法，都可以很快变成可点击、可测试的原型。",
      "我也开始意识到，真正重要的不只是生成代码，而是能不能把问题拆清楚、持续验证和做出取舍。",
    ],
    tags: ["Cursor", "Codex", "原型开发"],
  },
];

export const updateEntries = [...updateEntriesSource].sort((a, b) => a.date.localeCompare(b.date));

export function getUpdate(slug: string) {
  return updateEntries.find((entry) => entry.slug === slug);
}
