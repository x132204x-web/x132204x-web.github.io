import Link from "next/link";
import { projects } from "./project-data";
import { updateEntries } from "./update-data";

const articles = [
  {
    category: "AI 观察",
    date: "2026.07",
    title: "参加 WAIC 后，我开始更关心使用场景",
    excerpt: "看过 Agent、个人服务器和 AI 硬件后，我开始思考：这些技术最后会怎样进入普通人的工作和生活。",
  },
  {
    category: "成长思考",
    date: "2025.07",
    title: "AI 不能创造人与人之间的相遇",
    excerpt: "AI 可以记住很多信息，但它无法替代面对面交流时的语气、表情，以及两个人真正共同经历的时间。",
  },
  {
    category: "产品复盘",
    date: "2026.06",
    title: "为什么我想做一个大学生学习助手",
    excerpt: "FinalAce 并不是一个提前规划好的方向。它来自一次有些混乱的期末复习，也随着我的学习不断改变。",
  },
];

const growth = [
  ["2025.09 - 至今", "中国农业大学就业创新办公室 · 学生助管", "负责企业信息审核、招聘会策划执行与数据整理，并对接企业、师生和校内部门。"],
  ["2025.04 - 2025.08", "种太阳公益夏令营 · 队记总负责人", "统筹全程活动记录、数据整理和结项报告；每日组织团队复盘，参与问题处理与团队协作。"],
  ["2026.06 - 至今", "校园 3D 打印平台 · 小程序开发负责人", "参与需求分析、产品设计、开发协同与测试，完成“上传打印对象—系统处理—连接 3D 打印机”的流程。"],
  ["2026.07", "世界人工智能大会 WAIC", "近距离体验 AI 软件、Agent、个人服务器与硬件产品，并记录它们如何进入真实使用场景。"],
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
          <a href="/more">更多</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">GIS × AI × PRODUCT</p>
          <h1>我喜欢发现问题，<br />然后做点什么。</h1>
          <p className="hero-intro">
            你好，我是夏诗淇，中国农业大学地理信息科学专业学生。
            最开始选择 GIS 时，我还不知道自己未来真正想做什么。后来接触 AI，我第一次感受到：
            许多原本只存在于脑中的想法，可以通过工具很快变成现实。
          </p>
          <div className="hero-links">
            <a className="primary-link" href="#projects">看我做过的项目 <Arrow /></a>
            <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="/more">旅行与读书 <Arrow /></a>
          </div>
          <p className="project-line">2024 - 2028 · GPA 3.56 / 4.0 · GIS · AI · 产品</p>
        </div>

        <div className="hero-collage" aria-label="项目与生活片段">
          <figure className="hero-product">
            <img src="/finalace-desktop.png" alt="FinalAce 产品界面" />
            <figcaption>FinalAce / 从一次期末复习开始</figcaption>
          </figure>
          <div className="field-note">
            <span>最近在想</span>
            <p>比起很快找到答案，我更想知道自己能不能把问题看清楚，再真正做点什么。</p>
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
          <h2>我还在寻找方向，<br />也在一次次尝试中认识自己。</h2>
          <p>
            进入大学时，我并不知道自己真正喜欢什么。选专业的过程更像一次排除：
            GIS 是当时那个我不讨厌、也愿意继续了解的方向。学习过程中，我接触到数据、空间和系统思维，
            也开始习惯从关系和整体中理解问题。
          </p>
          <p>
            后来接触 AI，我发现它吸引我的不只是效率，而是它缩短了想法与现实之间的距离。
            我开始学习新的工具、做产品原型，也逐渐体会到 Build 的快乐：
            观察一个问题，试着解决它，再把不成熟的想法一点点改得更完整。
          </p>
          <div className="about-facts">
            <div><span>教育背景</span><strong>中国农业大学 · 地理信息科学<br />2024 - 2028 · GPA 3.56 / 4.0</strong></div>
            <div><span>工具与技术</span><strong>Python · SQL · Excel · Notion<br />Cursor · Codex · Prompt Engineering</strong></div>
            <div><span>其他能力</span><strong>网站与小程序开发<br />IELTS 6.5 · CET-4/6 高分</strong></div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-intro">
          <p className="kicker">SELECTED WORK</p>
          <h2>我做过的一些尝试</h2>
          <p>这些项目并不是一开始就规划好的方向。它们来自学习、生活和观察中的一些问题，我试着用技术寻找答案。</p>
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
        <div className="build-experience">
          <div>
            <p className="kicker">BUILD EXPERIENCE</p>
            <h3>网站与小程序开发经验</h3>
          </div>
          <div className="build-experience-list">
            <article>
              <span>Web</span>
              <strong>从需求到上线</strong>
              <p>可以独立完成产品定位、需求分析、PRD、信息架构、交互设计、前端实现、测试与发布。</p>
            </article>
            <article>
              <span>Mini Program</span>
              <strong>校园 3D 打印平台</strong>
              <p>参与需求分析、产品设计、开发协同和测试，梳理上传对象、系统处理与打印机连接流程。</p>
            </article>
            <article>
              <span>AI Workflow</span>
              <strong>快速验证 MVP</strong>
              <p>熟悉用 Prompt Engineering、Cursor 和 Codex 生成原型，并通过真实任务持续调整。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-intro">
          <p className="kicker">HOW I WORK</p>
          <h2>我是如何做一个产品的</h2>
          <p>这不是一套固定的方法论，只是我在几次实践中慢慢形成的个人习惯。</p>
        </div>
        <div className="process-flow">
          <article>
            <span>01</span>
            <h3>发现问题</h3>
            <p>很多项目都来自生活中的小问题。可能是一次学习困难、一次 AI 使用体验，或者一个长期存在的不方便。</p>
          </article>
          <article>
            <span>02</span>
            <h3>分析问题</h3>
            <p>我会先问自己：问题为什么存在？真正需要被解决的是什么？有时最先想到的功能，并不是问题的答案。</p>
          </article>
          <article>
            <span>03</span>
            <h3>寻找已有方案</h3>
            <p>我会看看市场上是否已有类似产品，了解它们解决了什么、哪里做得很好，以及还有哪些体验没有被照顾到。</p>
          </article>
          <article>
            <span>04</span>
            <h3>寻找视觉方向</h3>
            <p>我会在 Pinterest、Mobbin、Behance 等网站整理参考，关注信息层级、排版和交互；再从图片、品牌或使用场景里提取配色，形成简单的视觉规范。</p>
          </article>
          <article>
            <span>05</span>
            <h3>设计和开发</h3>
            <p>先画用户流程和页面结构，再完成低保真原型。方向明确后，我会借助 Cursor、Codex 等工具实现功能，并保持组件、状态和数据结构清楚。</p>
          </article>
          <article>
            <span>06</span>
            <h3>持续完善</h3>
            <p>我会用真实任务走完整流程，记录卡住、误解或重复操作的地方，再调整文案、交互和功能。第一次完成的版本通常只是下一轮判断的开始。</p>
          </article>
        </div>
        <aside className="process-note">
          <strong>我通常不是从答案开始，而是从一个还没想明白的问题开始。</strong>
          <p>先观察，先学习，再动手做出一点东西。很多时候，方向是在这个过程中才慢慢清楚的。</p>
        </aside>
      </section>

      <section className="growth" id="exploration">
        <div className="growth-copy">
          <p className="kicker">EXPLORATION NOTES</p>
          <h2>校园与实践经历</h2>
          <p>
            除了独立开发产品，我也在校园工作和团队项目中学习沟通、执行与协作。
            这些经历让我更理解：一个项目真正落地，不只需要想法和技术。
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

      <section className="more-teaser">
        <div>
          <p className="kicker">BEYOND WORK</p>
          <h2>如果还想了解更多</h2>
          <p>工作和项目之外，我也喜欢旅行、读书，以及记录那些偶然发生的相遇。</p>
          <Link href="/more">看看我的另一面 <Arrow /></Link>
        </div>
        <figure>
          <img src="/travel-murmansk.jpg" alt="在俄罗斯摩尔曼斯克旅行" />
          <figcaption>俄罗斯摩尔曼斯克 / 冬天</figcaption>
        </figure>
      </section>

      <section className="updates" id="updates">
        <div className="section-intro">
          <p className="kicker">RECENT NOTES</p>
          <h2>AI 探索记录</h2>
          <p>记录我体验过的 AI 工具、GitHub 项目，以及一些还没有形成结论的技术探索。</p>
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
          <p>写下一些阶段性的理解。它们可能还不成熟，也会随着新的经历继续改变。</p>
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
        <h2>找到我</h2>
        <p>如果你想了解我的项目、经历，或者我正在探索的方向，可以通过以下方式找到我。</p>
        <div className="contact-links">
          <a href="mailto:x132204x@163.com">x132204x@163.com <Arrow /></a>
          <a href="tel:13725293628">13725293628 / 微信同号 <Arrow /></a>
          <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub / x132204x-web <Arrow /></a>
          <a href="/resume-xia-shiqi.pdf" target="_blank" rel="noreferrer">个人简历 PDF <Arrow /></a>
        </div>
      </section>

      <footer><span>© 2026 夏诗淇</span><span>还没有找到所有答案，但会继续观察、学习和动手。</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
