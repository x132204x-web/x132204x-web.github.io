import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../project-data";

export const metadata: Metadata = {
  title: "夏诗淇｜简约个人简历",
  description: "夏诗淇的简约中文个人页面，包含教育背景、项目实践、工作方式与校园经历。",
  alternates: {
    canonical: "/zh/",
    languages: { "zh-CN": "/zh/", en: "/en/" },
  },
};

const experiences = [
  {
    period: "2025 — 至今",
    title: "就业创新办公室 · 学生助管",
    body: "负责企业信息审核、招聘活动执行、数据整理，以及企业、学生与校内团队之间的沟通协调。",
  },
  {
    period: "2026 — 至今",
    title: "校园 3D 打印小程序 · 产品与开发",
    body: "参与需求分析、产品流程、开发协同与测试，梳理从文件上传到连接打印机的完整服务流程。",
  },
  {
    period: "2025 暑期",
    title: "教育公益项目 · Lead",
    body: "负责每日记录与团队复盘，也更具体地理解环境、信任和人与人之间的连接如何影响学习。",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ChineseProfile() {
  return (
    <main className="en-page zh-profile-page" id="top" lang="zh-CN">
      <header className="en-header">
        <Link className="en-brand" href="/zh/">夏诗淇</Link>
        <nav aria-label="简约中文版导航">
          <a href="#about">关于</a>
          <a href="#education">教育</a>
          <a href="#work">项目</a>
          <a href="#experience">经历</a>
          <Link href="/">完整中文版</Link>
          <Link className="en-language" href="/en/">English</Link>
        </nav>
      </header>

      <div className="en-shell">
        <aside className="en-profile" aria-label="个人信息">
          <figure className="en-profile-photo">
            <img src="/portrait-xinjiang.jpg" alt="夏诗淇在新疆旅行" />
            <figcaption>新疆 · 2026</figcaption>
          </figure>
          <div className="en-profile-copy">
            <p className="en-eyebrow">你好，我是</p>
            <h1>夏诗淇</h1>
            <p className="en-chinese-name">Ashley Xia</p>
            <p className="en-role">用 AI、代码和持续实践，把模糊问题做成可以使用的结果。</p>
          </div>
          <dl className="en-profile-facts">
            <div><dt>所在城市</dt><dd>中国 · 北京</dd></div>
            <div><dt>教育背景</dt><dd>中国农业大学<br />地理信息科学 · 2024—2028</dd></div>
            <div><dt>关注方向</dt><dd>AI 产品 · 学习工具<br />空间智能</dd></div>
          </dl>
          <div className="en-profile-links">
            <a href="mailto:x132204x@163.com">邮箱 <Arrow /></a>
            <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </aside>

        <div className="en-main-column">
          <section className="en-panel en-about" id="about">
            <h2 className="zh-resume-title">个人简介</h2>
            <p>我在真实项目中学习新工具、验证判断，并把需求拆成流程、界面和可运行的产品。目前正在推进 AI 创业实践。</p>
            <div className="en-now"><span>现在</span><strong>持续开发学习产品，并探索 AI Agent 的实际应用。</strong></div>
          </section>

          <section className="en-section en-education" id="education">
            <div className="en-section-heading"><h2 className="zh-resume-title">教育经历</h2></div>
            <div className="en-education-list">
              <article>
                <span>2024 — 2028</span>
                <div><h3>中国农业大学</h3><p>本科 · 地理信息科学</p></div>
                <div className="en-education-meta"><span>北京</span><strong>GPA 3.56 / 4.0</strong></div>
              </article>
            </div>
          </section>

          <section className="en-section" id="work">
            <div className="en-section-heading">
              <h2 className="zh-resume-title">项目实践</h2>
              <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </div>
            <div className="en-project-list">
              {projects.map((project, index) => (
                <article className="en-project" key={project.slug}>
                  <Link className="en-project-media" href={`/projects/${project.slug}`}>
                    {project.images?.[0] || project.image ? (
                      <img src={project.images?.[0] ?? project.image} alt={`${project.name} 产品界面`} />
                    ) : (
                      <div className="en-project-placeholder" aria-label="云品册核心功能">
                        {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                      </div>
                    )}
                    <span>0{index + 1}</span>
                  </Link>
                  <div className="en-project-copy">
                    <div className="en-project-title">
                      <div><p>{project.type}</p><h3>{project.name}</h3></div>
                      <span>{project.status}</span>
                    </div>
                    <p>{project.summary}</p>
                    <ul>{project.role.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
                    {project.publicUrl ? (
                      <a href={project.publicUrl} target="_blank" rel="noreferrer">访问产品 <Arrow /></a>
                    ) : (
                      <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">查看相关实践 <Arrow /></a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="en-section en-process">
            <div className="en-section-heading"><h2 className="zh-resume-title">工作方式</h2></div>
            <div className="en-process-grid">
              <article><span>01</span><h3>观察</h3><p>从自己经历过或看到的具体困难开始。</p></article>
              <article><span>02</span><h3>理解</h3><p>梳理真实任务、现有方案与仍未被解决的部分。</p></article>
              <article><span>03</span><h3>动手</h3><p>快速把想法拆成流程、界面和可运行原型。</p></article>
              <article><span>04</span><h3>完善</h3><p>放进真实场景使用，让“能用”逐渐变成“可靠”。</p></article>
            </div>
          </section>

          <section className="en-section" id="experience">
            <div className="en-section-heading"><h2 className="zh-resume-title">实践经历</h2></div>
            <div className="en-experience-list">
              {experiences.map((item) => (
                <article key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>
              ))}
            </div>
          </section>
        </div>

        <aside className="en-side-column">
          <section className="en-travel-card">
            <div className="en-travel-copy"><p className="en-eyebrow">工作之外</p><h2>旅行是我保持好奇的一种方式。</h2><p>我喜欢观察陌生地方的生活、颜色，以及人与人之间偶然发生的连接。</p></div>
            <div className="en-travel-grid" aria-label="旅行照片">
              <img src="/travel-georgia-mestia.jpg" alt="格鲁吉亚梅斯蒂亚徒步" />
              <img src="/travel-georgia-batumi.jpg" alt="格鲁吉亚巴统黑海边" />
              <img src="/portrait-st-petersburg-crop.jpg" alt="圣彼得堡博物馆" />
              <img src="/travel-japan.jpg" alt="日本旅行" />
              <img src="/travel-murmansk.jpg" alt="俄罗斯摩尔曼斯克" />
            </div>
          </section>
          <section className="en-contact"><p className="en-eyebrow">联系方式</p><h2>如果想进一步了解我的项目与经历</h2><a href="mailto:x132204x@163.com">x132204x@163.com <Arrow /></a></section>
        </aside>
      </div>

      <footer className="en-footer"><span>© 2026 夏诗淇</span><span>Exploring…</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
