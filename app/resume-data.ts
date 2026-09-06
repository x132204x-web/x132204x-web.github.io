export type ResumeLocale = "zh" | "en";

export type ResumeEducation = {
  school: string;
  degree: string;
  period: string;
  location: string;
  notes: readonly string[];
};

export type ResumeProject = {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  role: string;
  highlights: readonly string[];
  publicUrl?: string;
};

export type ResumeExperience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  highlights: readonly string[];
};

export type ResumeData = {
  name: string;
  alternateName: string;
  title: string;
  summary: string;
  location: string;
  education: readonly ResumeEducation[];
  projects: readonly ResumeProject[];
  experiences: readonly ResumeExperience[];
  skills: readonly { category: string; items: readonly string[] }[];
  contact: {
    email: string;
    phone: string;
    wechat: string;
    github: string;
    githubLabel: string;
  };
};

// Both resume pages and their print views use this module. Facts come from the
// existing home/profile pages and project-data.ts; no impact metrics are added.
const contact: ResumeData["contact"] = {
  email: "x132204x@163.com",
  phone: "13725293628",
  wechat: "13725293628",
  github: "https://github.com/x132204x-web",
  githubLabel: "x132204x-web",
};

const universityPeriod = "2024 — 2028";
const finalAceUrl = "https://finalace.online";

export const resumeData: Record<ResumeLocale, ResumeData> = {
  zh: {
    name: "夏诗淇",
    alternateName: "Ashley Xia",
    title: "产品实践 · AI 应用 · 全栈开发",
    summary:
      "中国农业大学地理信息科学本科生。围绕学习工具和商家协作开展产品实践，把需求拆成用户流程、界面和可运行的产品；使用 AI 辅助开发，并持续测试、迭代。",
    location: "北京，中国",
    education: [
      {
        school: "中国农业大学",
        degree: "本科 · 地理信息科学",
        period: universityPeriod,
        location: "北京",
        notes: ["GPA 3.56 / 4.0", "IELTS 6.5 · 大学英语四、六级 600+"],
      },
    ],
    projects: [
      {
        slug: "finalace",
        name: "FinalAce",
        category: "大学生 AI 复习工作台",
        status: "已上线，持续迭代",
        summary: "将分散的课程资料转化为知识整理、练习和错题复盘的学习流程。",
        role: "产品定位与需求分析 · PRD 与交互流程 · AI Workflow · 全栈开发",
        highlights: [
          "围绕期末复习场景梳理需求、产品定位与用户流程，并完成产品实现与上线。",
          "完成多文件上传、课程资料管理、AI 知识整理、智能练习和错题复盘等核心流程，持续优化学习反馈与使用体验。",
        ],
        publicUrl: finalAceUrl,
      },
      {
        slug: "cloud-catalog",
        name: "云品册",
        category: "中小商家产品资料与协作工具",
        status: "持续迭代",
        summary: "集中管理商品图片、SKU、价格和规格，支持团队维护与客户只读分享。",
        role: "需求与体验梳理 · 商品表单设计 · 批量导入与企业协作流程",
        highlights: [
          "参与梳理小程序的商品表单、保存操作、批量导入、企业入驻和成员邀请流程。",
          "产品已完成商品目录、批量导入、成员协作与客户只读分享等主要流程，持续优化录入和协作体验。",
        ],
      },
    ],
    experiences: [
      {
        id: "campus-3d-printing",
        organization: "校园 3D 打印平台",
        role: "产品与开发",
        period: "2026.06 — 至今",
        highlights: [
          "参与小程序需求分析、产品设计、开发协同与测试，梳理从文件上传、系统处理到连接 3D 打印机的服务流程。",
        ],
      },
      {
        id: "career-office",
        organization: "中国农业大学就业创新办公室",
        role: "学生助管",
        period: "2025.09 — 至今",
        highlights: [
          "负责企业信息审核、招聘会策划执行与数据整理，对接企业、师生和校内部门。",
        ],
      },
      {
        id: "summer-camp",
        organization: "种太阳公益夏令营",
        role: "队记总负责人",
        period: "2025.04 — 2025.08",
        highlights: [
          "统筹全程活动记录、数据整理和结项报告，每日组织团队复盘，参与问题处理与团队协作。",
        ],
      },
    ],
    skills: [
      {
        category: "产品与设计",
        items: ["需求分析", "PRD", "用户流程与信息架构", "交互设计与原型"],
      },
      {
        category: "开发与 AI",
        items: ["Next.js", "前端组件化", "Cursor / Codex", "Prompt Engineering / AI Workflow"],
      },
      {
        category: "数据与协作",
        items: ["Python（基础）/ SQL", "Excel", "空间数据", "结构化信息管理"],
      },
    ],
    contact,
  },
  en: {
    name: "Ashley Xia",
    alternateName: "夏诗淇",
    title: "Product development · AI applications · Full-stack development",
    summary:
      "Geographic Information Science undergraduate at China Agricultural University. I build learning tools and merchant collaboration products, turning requirements into user flows, interfaces, and working software with AI-assisted development, testing, and iteration.",
    location: "Beijing, China",
    education: [
      {
        school: "China Agricultural University",
        degree: "Undergraduate · Geographic Information Science",
        period: universityPeriod,
        location: "Beijing, China",
        notes: ["GPA 3.56 / 4.0", "IELTS 6.5 · CET-4 / CET-6: 600+"],
      },
    ],
    projects: [
      {
        slug: "finalace",
        name: "FinalAce",
        category: "AI study workspace for university students",
        status: "Live · Iterating",
        summary: "Turns scattered course materials into a study flow for organizing knowledge, practicing, and reviewing mistakes.",
        role: "Product definition and requirements · PRD and interaction flows · AI workflow · Full-stack development",
        highlights: [
          "Defined requirements, product positioning, and user flows around exam preparation, then built and launched the product.",
          "Implemented multi-file upload, course material management, AI knowledge organization, practice, and mistake review; continue to refine learning feedback and usability.",
        ],
        publicUrl: finalAceUrl,
      },
      {
        slug: "cloud-catalog",
        name: "Cloud Catalog",
        category: "Product catalog and collaboration tool for small merchants",
        status: "Iterating",
        summary: "Centralizes product images, SKUs, prices, and specifications for team maintenance and read-only customer sharing.",
        role: "Requirements and experience mapping · Product forms · Bulk import and team collaboration flows",
        highlights: [
          "Contributed to product forms, save interactions, bulk import, business onboarding, and member invitation flows in the mini program.",
          "The product supports catalogs, bulk import, member collaboration, and read-only customer sharing, with ongoing improvements to data entry and collaboration.",
        ],
      },
    ],
    experiences: [
      {
        id: "campus-3d-printing",
        organization: "Campus 3D Printing Platform",
        role: "Product & Development",
        period: "Jun 2026 — Present",
        highlights: [
          "Contribute to mini-program requirements, product design, development coordination, and testing, mapping the service flow from file upload and processing to printer connection.",
        ],
      },
      {
        id: "career-office",
        organization: "Career & Innovation Office, China Agricultural University",
        role: "Student Assistant",
        period: "Sep 2025 — Present",
        highlights: [
          "Review company information, plan and support recruitment events, organize data, and coordinate with companies, students, faculty, and campus departments.",
        ],
      },
      {
        id: "summer-camp",
        organization: "Zhong Taiyang Volunteer Summer Camp",
        role: "Documentation Lead",
        period: "Apr 2025 — Aug 2025",
        highlights: [
          "Coordinated activity documentation, data organization, and the final report; facilitated daily team reflections and helped resolve issues with the team.",
        ],
      },
    ],
    skills: [
      {
        category: "Product & Design",
        items: ["Requirements analysis", "PRDs", "User flows and information architecture", "Interaction design and prototyping"],
      },
      {
        category: "Development & AI",
        items: ["Next.js", "Frontend components", "Cursor / Codex", "Prompt engineering / AI workflows"],
      },
      {
        category: "Data & Collaboration",
        items: ["Python (basic) / SQL", "Excel", "Spatial data", "Structured information management"],
      },
    ],
    contact,
  },
};
