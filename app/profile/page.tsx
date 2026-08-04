import Link from "next/link";

const capabilities = [
  {
    label: "产品",
    title: "从问题到可用版本",
    detail: "需求分析、用户流程、PRD、信息架构、交互设计、原型与持续迭代",
  },
  {
    label: "开发",
    title: "网站与小程序",
    detail: "Next.js、前端组件化、浏览器扩展、小程序协作、测试与上线",
  },
  {
    label: "数据",
    title: "分析与信息整理",
    detail: "Python、SQL、Excel、空间数据与结构化信息管理",
  },
  {
    label: "AI 工具",
    title: "把工具放进真实流程",
    detail: "Cursor、Codex、Prompt Engineering、AI Workflow 与快速原型",
  },
];

const experience = [
  ["2025.09 — 至今", "中国农业大学就业创新办公室", "企业信息审核、招聘会策划执行、数据整理与跨部门沟通"],
  ["2025.04 — 2025.08", "种太阳公益夏令营", "统筹活动记录、团队复盘、数据整理与结项报告"],
  ["2026.06 — 至今", "校园 3D 打印平台", "参与小程序需求分析、产品设计、开发协同与测试"],
];

export default function ProfilePage() {
  return (
    <main className="profile-page" id="top">
      <header className="site-header">
        <Link className="brand" href="/">夏诗淇</Link>
        <nav aria-label="个人资料页导航">
          <Link href="/">返回首页</Link>
          <Link href="/#projects">项目</Link>
          <a className="nav-more" href="/resume-xia-shiqi.pdf" target="_blank" rel="noreferrer">简历 PDF</a>
        </nav>
      </header>

      <section className="profile-hero">
        <p className="kicker">PROFILE / CV</p>
        <h1>教育背景<br />与能力</h1>
        <p>这页集中整理我的教育、工具与实践经历，方便快速了解我能做什么，以及这些能力从哪里来。</p>
      </section>

      <section className="profile-education">
        <div>
          <p className="kicker">EDUCATION</p>
          <h2>中国农业大学</h2>
        </div>
        <dl>
          <div><dt>专业</dt><dd>地理信息科学</dd></div>
          <div><dt>时间</dt><dd>2024 — 2028</dd></div>
          <div><dt>成绩</dt><dd>GPA 3.56 / 4.0</dd></div>
          <div><dt>语言</dt><dd>IELTS 6.5 · CET-4/6 600+</dd></div>
        </dl>
      </section>

      <section className="profile-capabilities">
        <div className="profile-section-heading">
          <p className="kicker">CAPABILITIES</p>
          <h2>我能做什么</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((item, index) => (
            <article key={item.label}>
              <span>0{index + 1} / {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-experience">
        <div className="profile-section-heading">
          <p className="kicker">EXPERIENCE</p>
          <h2>实践经历</h2>
        </div>
        <div className="profile-experience-list">
          {experience.map(([date, title, detail]) => (
            <article key={`${date}-${title}`}>
              <time>{date}</time>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-actions">
        <p>继续了解我的实际作品与过程。</p>
        <div>
          <Link href="/#projects">查看项目 ↗</Link>
          <a href="/resume-xia-shiqi.pdf" target="_blank" rel="noreferrer">打开完整简历 ↗</a>
        </div>
      </section>

      <footer><span>© 2026 夏诗淇</span><span>Exploring…</span><Link href="/">返回首页 ↑</Link></footer>
    </main>
  );
}
