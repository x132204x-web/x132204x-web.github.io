import Link from "next/link";
import { projects } from "./project-data";
import { updateEntries } from "./update-data";

const articles = [
  {
    category: "AI 观察",
    date: "2026.07",
    title: "参加 WAIC 后，我更关心 AI 到底解决了什么",
    excerpt: "看过 Agent、个人服务器和 AI 硬件之后，我开始把注意力从新鲜功能转向真实使用场景。",
  },
  {
    category: "成长思考",
    date: "2025.07",
    title: "AI 不能创造人与人之间的相遇",
    excerpt: "技术可以整理信息，却不能替代面对面交流中那些具体的语气、表情和共同经历。",
  },
  {
    category: "产品复盘",
    date: "2026.06",
    title: "为什么我想做一个大学生学习助手",
    excerpt: "FinalAce 不是从行业报告开始的，而是从一次很混乱的期末复习开始的。",
  },
];

const growth = [
  ["2024", "从 GIS 和空间数据开始", "学习怎样观察位置、关系和复杂系统。"],
  ["2025", "开始系统使用 AI 工具", "从研究模型原理，转向研究怎样把 AI 用进真实任务。"],
  ["2026", "持续做产品", "FinalAce、Narziss、云品册和 PathFinder 逐渐成为可以使用的产品。"],
  ["2026", "用更真实的方式推进", "参加 WAIC、成立个人科技公司，也继续记录不确定和失败。"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">夏诗淇</a>
        <nav aria-label="主要导航">
          <a href="#projects">项目</a>
          <a href="#process">方法</a>
          <a href="#growth">经历</a>
          <a href="#writing">博客</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">GIS × AI × PRODUCT</p>
          <h1>我从真实问题开始，<br />做出能被使用的产品。</h1>
          <p className="hero-intro">
            你好，我是夏诗淇，中国农业大学地理信息科学专业学生。
            我把对学习、职业选择和 AI 工具的观察，做成一个个可以验证、继续改进的产品。
          </p>
          <div className="hero-links">
            <a className="primary-link" href="#projects">看我做过的项目 <Arrow /></a>
            <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
          <p className="project-line">FinalAce · Narziss · 云品册 · PathFinder</p>
        </div>

        <div className="hero-collage" aria-label="项目与生活片段">
          <figure className="hero-product">
            <img src="/finalace-desktop.png" alt="FinalAce 产品界面" />
            <figcaption>FinalAce / 从一次期末复习开始</figcaption>
          </figure>
          <div className="field-note">
            <span>最近在想</span>
            <p>好的 AI 产品，不是回答更多，而是让下一步变得更清楚。</p>
          </div>
          <figure className="hero-life">
            <img src="/travel-sea.jpg" alt="在日本伊豆旅行" />
            <figcaption>日本伊豆 / 2025</figcaption>
          </figure>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-intro">
          <p className="kicker">SELECTED WORK</p>
          <h2>我做过的产品</h2>
          <p>不只展示结果，也说明问题从哪里来、我具体做了什么，以及它现在走到了哪里。</p>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <article className={`project-story ${project.tone}`} key={project.slug}>
              <div className="project-index">0{index + 1}</div>
              <div className="project-main">
                <div className="project-heading">
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span>{project.status}</span>
                </div>
                <blockquote>{project.question}</blockquote>
                <p className="project-summary">{project.summary}</p>
                <div className="project-facts">
                  <div><span>我做了什么</span><p>{project.role.join("、")}</p></div>
                  <div><span>现在的进展</span><p>{project.progress}</p></div>
                </div>
                <Link href={`/projects/${project.slug}`}>查看项目过程 <Arrow /></Link>
              </div>
              {project.image ? (
                <figure className="project-media">
                  <img src={project.image} alt={`${project.name} 产品界面`} />
                </figure>
              ) : (
                <div className="feature-paper" aria-label={`${project.name} 核心功能`}>
                  {project.features.map((feature, featureIndex) => (
                    <div key={feature}><span>0{featureIndex + 1}</span>{feature}</div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-intro">
          <p className="kicker">HOW I WORK</p>
          <h2>我怎样把问题做成产品</h2>
        </div>
        <div className="process-flow">
          <article>
            <span>01</span>
            <h3>先找到具体的不方便</h3>
            <p>期末复习的混乱、和 AI 聊完仍不知道下一步、职业选择太抽象——我的项目通常从自己真的遇到的问题开始。</p>
          </article>
          <article>
            <span>02</span>
            <h3>把模糊想法拆成流程</h3>
            <p>我会梳理用户要完成的任务，把它拆成信息结构、交互步骤和能够尽快验证的产品原型。</p>
          </article>
          <article>
            <span>03</span>
            <h3>做出来，再不断修正</h3>
            <p>我用真实资料和真实场景测试，记录哪里让人困惑，再决定继续、调整或暂时放下。</p>
          </article>
        </div>
        <aside className="process-note">
          <strong>我比较擅长的，不是一次给出漂亮答案。</strong>
          <p>而是面对一个还不清楚的问题，先做出可以讨论和使用的东西，再一点点把判断变准确。</p>
        </aside>
      </section>

      <section className="growth" id="growth">
        <div className="growth-copy">
          <p className="kicker">GROWING IN PUBLIC</p>
          <h2>技术之外，<br />我也在学习怎样理解人。</h2>
          <p>
            支教让我重新看见教育发生在具体的人和关系里；旅行让我愿意走出熟悉的环境。
            这些经历也影响我怎样理解学习产品：工具可以提高效率，但不能替代人的感受和选择。
          </p>
          <div className="growth-timeline">
            {growth.map(([year, title, body]) => (
              <div key={`${year}-${title}`}><time>{year}</time><strong>{title}</strong><p>{body}</p></div>
            ))}
          </div>
        </div>
        <div className="growth-photos">
          <figure className="teaching-photo">
            <img src="/teaching-class.jpg" alt="支教课堂" />
            <figcaption>支教 / 在课堂里理解学习</figcaption>
          </figure>
          <figure>
            <img src="/travel-window.jpg" alt="参观俄罗斯冬宫" />
            <figcaption>俄罗斯冬宫 / 看见日常之外</figcaption>
          </figure>
        </div>
      </section>

      <section className="updates" id="updates">
        <div className="section-intro">
          <p className="kicker">RECENT NOTES</p>
          <h2>最近的记录</h2>
        </div>
        <div className="update-strip">
          {updateEntries.map((entry) => (
            <Link href={`/updates/${entry.slug}`} key={entry.slug}>
              <time>{entry.date}</time>
              <span>{entry.icon}</span>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="writing" id="writing">
        <div className="section-intro">
          <p className="kicker">WRITING</p>
          <h2>个人博客</h2>
          <p>记录产品之外，我如何理解 AI、学习和成长。</p>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <article key={article.title}>
              <div><span>{article.category}</span><time>{article.date}</time></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="kicker">CONTACT</p>
        <h2>欢迎联系我</h2>
        <p>如果你也在做 AI 产品、教育工具，或正在探索新的合作机会，很高兴认识你。</p>
        <div className="contact-links">
          <a href="mailto:x132204x@163.com">x132204x@163.com <Arrow /></a>
          <a href="tel:13725293628">13725293628 / 微信同号 <Arrow /></a>
          <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub / x132204x-web <Arrow /></a>
        </div>
      </section>

      <footer><span>© 2026 夏诗淇</span><span>从真实问题开始，持续做出东西。</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
