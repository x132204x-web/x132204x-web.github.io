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
          <a href="#about">关于我</a>
          <a href="#projects">做过的事</a>
          <a href="#process">如何工作</a>
          <a href="#exploration">探索记录</a>
          <a href="#writing">我的思考</a>
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

      <section className="about" id="about">
        <div className="about-label">
          <p className="kicker">ABOUT ME</p>
          <span>01 / 我是谁</span>
        </div>
        <div className="about-copy">
          <h2>我是夏诗淇，<br />一个还在不断尝试的大学生。</h2>
          <p>
            我在中国农业大学学习地理信息科学。最初，我关心地图、空间数据和城市如何运转；
            后来，我开始接触 AI、产品设计和软件开发，也越来越喜欢把一个模糊的问题慢慢做成可以使用的东西。
          </p>
          <p>
            我做过的项目大多来自自己的真实经历：期末复习时的混乱、和 AI 聊完却不知道下一步学什么、
            面对职业选择时的不确定。它们不一定一开始就很完整，但我愿意先动手，再在使用和反馈中继续修改。
          </p>
          <div className="about-facts">
            <div><span>正在学习</span><strong>GIS · AI · 产品设计</strong></div>
            <div><span>关心的问题</span><strong>学习 · 职业选择 · 空间智能</strong></div>
            <div><span>目前在做</span><strong>把想法做成真实产品</strong></div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-intro">
          <p className="kicker">SELECTED WORK</p>
          <h2>我做过的事</h2>
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
          <h2>我如何工作</h2>
          <p>我没有固定的方法论，更习惯从具体问题开始，一边做，一边把问题看得更清楚。</p>
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

      <section className="growth" id="exploration">
        <div className="growth-copy">
          <p className="kicker">EXPLORATION NOTES</p>
          <h2>我的探索记录</h2>
          <p>
            这里不只有 AI 和产品。支教、旅行、参加展会，以及那些暂时没有答案的尝试，
            都在慢慢改变我理解技术和人的方式。
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
          <h2>最近在做什么</h2>
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
          <h2>我的思考</h2>
          <p>一些还没有变成结论的观察：关于 AI、产品、学习，也关于我自己。</p>
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

      <footer><span>© 2026 夏诗淇</span><span>还在学习，也还在做。</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
