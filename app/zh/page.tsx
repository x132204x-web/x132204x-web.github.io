import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../project-data";

export const metadata: Metadata = {
  title: "夏诗淇 | 产品、AI 与 GIS",
  description: "夏诗淇的简约个人档案：教育背景、项目实践、工作经历与做事方式。",
  alternates: {
    canonical: "/zh/",
    languages: {
      "zh-CN": "/zh/",
      en: "/en/",
    },
  },
};

const experiences = [
  {
    period: "2025 — 至今",
    title: "学生助管 · 就业创新办公室",
    body: "负责企业信息审核、招聘活动执行与数据整理，并协助企业、学生和校内部门之间的沟通。",
  },
  {
    period: "2026 — 至今",
    title: "产品与开发 · 校园 3D 打印小程序",
    body: "参与需求梳理、产品流程、开发协作与测试，完成校园打印服务的核心使用流程。",
  },
  {
    period: "2025 夏",
    title: "Lead · 支教项目",
    body: "统筹每日记录与复盘，也在课堂和相处中理解环境、信任与人的连接如何影响学习。",
  },
];

const education = [
  {
    period: "2024 — 2028",
    school: "中国农业大学",
    detail: "本科 · 地理信息科学",
    location: "中国北京",
    note: "GPA 3.56",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ChineseLiteHome() {
  return (
    <main className="en-page zh-lite-page" id="top" lang="zh-CN">
      <header className="en-header">
        <Link className="en-brand" href="/zh/">夏诗淇</Link>
        <nav aria-label="中文简约版导航">
          <a href="#about">关于我</a>
          <a href="#education">教育背景</a>
          <a href="#work">项目</a>
          <a href="#experience">经历</a>
          <Link className="en-language" href="/en/">EN</Link>
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
            <p className="en-role">用 AI、代码和好奇心持续做产品。</p>
          </div>
          <dl className="en-profile-facts">
            <div>
              <dt>现居</dt>
              <dd>中国北京</dd>
            </div>
            <div>
              <dt>教育背景</dt>
              <dd>中国农业大学<br />地理信息科学 · 2024–2028</dd>
            </div>
            <div>
              <dt>关注方向</dt>
              <dd>AI 产品 · 学习工具<br />空间智能</dd>
            </div>
          </dl>
          <div className="en-profile-links">
            <a href="mailto:x132204x@163.com">邮箱 <Arrow /></a>
            <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </aside>

        <div className="en-main-column">
          <section className="en-panel en-about" id="about">
            <p className="en-eyebrow">关于我</p>
            <h2>在真实项目里学习、判断和动手。</h2>
            <p>
              我是夏诗淇，中国农业大学地理信息科学专业学生。这个简约档案收录我的教育背景、
              项目实践、工作经历，以及我理解和解决问题的方式。
            </p>
            <div className="en-now">
              <span>正在做</span>
              <strong>持续开发学习产品，并探索 AI Agent。</strong>
            </div>
          </section>

          <section className="en-section en-education" id="education">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">教育背景</p>
                <h2>从空间、数据与系统开始</h2>
              </div>
            </div>
            <div className="en-education-list">
              {education.map((item) => (
                <article key={item.school}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <div className="en-education-meta">
                    <span>{item.location}</span>
                    <strong>{item.note}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="en-section" id="work">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">项目实践</p>
                <h2>从真实问题出发的产品</h2>
              </div>
              <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">
                GitHub 项目 <Arrow />
              </a>
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
                      <div>
                        <p>{index === 0 ? "AI 学习产品" : "商家小程序"}</p>
                        <h3>{project.name}</h3>
                      </div>
                      <span>{index === 0 ? "已上线 · 持续迭代" : "已完成 · 持续完善"}</span>
                    </div>
                    <p>
                      {index === 0
                        ? "把散落的课程资料变成更清晰的复习流程，从知识整理、练习到错题复盘，帮助学生判断学习进度。"
                        : "帮助中小商家集中管理商品图片、SKU、价格和规格，也让团队协作与客户分享更方便。"}
                    </p>
                    <ul>
                      {(index === 0
                        ? ["产品定位", "学习流程", "AI 工作流", "全栈开发"]
                        : ["体验梳理", "表单设计", "商品导入", "团队协作"]
                      ).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <a
                      href={project.publicUrl ?? "https://github.com/x132204x-web?tab=repositories"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.publicUrl ? "访问项目" : "在 GitHub 查看"} <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="en-section en-process">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">我的工作方式</p>
                <h2>边做边学</h2>
              </div>
            </div>
            <div className="en-process-grid">
              <article><span>01</span><h3>观察</h3><p>从自己经历过或看到的具体困难开始。</p></article>
              <article><span>02</span><h3>理解</h3><p>回到真实任务，研究已有工具和仍未被解决的问题。</p></article>
              <article><span>03</span><h3>动手</h3><p>把想法快速拆成流程、界面和可以运行的版本。</p></article>
              <article><span>04</span><h3>完善</h3><p>放进真实场景中使用；从能用到稳定，才是更长的过程。</p></article>
            </div>
          </section>

          <section className="en-section" id="experience">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">实践经历</p>
                <h2>独立项目之外的工作</h2>
              </div>
            </div>
            <div className="en-experience-list">
              {experiences.map((item) => (
                <article key={item.title}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="en-side-column">
          <section className="en-travel-card">
            <div className="en-travel-copy">
              <p className="en-eyebrow">项目之外</p>
              <h2>旅行是我保持好奇的一种方式。</h2>
              <p>我喜欢观察不同地方的人怎样生活，也会记住旅途中偶然遇见的颜色、细节和人。</p>
            </div>
            <div className="en-travel-grid" aria-label="夏诗淇的旅行照片">
              <img src="/travel-georgia-mestia.jpg" alt="格鲁吉亚梅斯蒂亚徒步" />
              <img src="/travel-georgia-batumi.jpg" alt="格鲁吉亚巴统黑海边" />
              <img src="/portrait-st-petersburg-crop.jpg" alt="圣彼得堡博物馆" />
              <img src="/travel-japan.jpg" alt="日本街道" />
              <img src="/travel-murmansk.jpg" alt="俄罗斯摩尔曼斯克冬季" />
            </div>
          </section>

          <section className="en-contact">
            <p className="en-eyebrow">联系方式</p>
            <h2>想进一步了解我的工作？</h2>
            <a href="mailto:x132204x@163.com">x132204x@163.com <Arrow /></a>
          </section>
        </aside>
      </div>

      <footer className="en-footer">
        <span>© 2026 夏诗淇</span>
        <span>学习、动手，也持续记录。</span>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
