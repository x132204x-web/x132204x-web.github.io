import Link from "next/link";
import { projects } from "./project-data";
import { articles } from "./article-data";

const growth = [
  ["2025.09 - 至今", "中国农业大学就业创新办公室 · 学生助管", "负责企业信息审核、招聘会策划执行与数据整理，并对接企业、师生和校内部门。"],
  ["2025.04 - 2025.08", "种太阳公益夏令营 · 队记总负责人", "统筹全程活动记录、数据整理和结项报告；每日组织团队复盘，参与问题处理与团队协作。"],
  ["2026.06 - 至今", "校园 3D 打印平台 · 开发设计者", "参与需求分析、产品设计、开发协同与测试，完成“上传打印对象—系统处理—连接 3D 打印机”的流程。"],
];

const explorationNotes = [
  {
    date: "DAILY",
    icon: "⌁",
    title: "每日信息搜集",
    summary: "浏览 AI 产品、开源项目和行业动态，把值得继续追踪的问题记进 Notion。",
  },
  {
    date: "WEEKLY",
    icon: "↺",
    title: "每周整理与复盘",
    summary: "把零散链接按主题归档，补充试用感受，并记录自己的判断发生了什么变化。",
  },
  {
    date: "2026.07",
    icon: "◉",
    title: "世界人工智能大会 WAIC",
    summary: "现场体验 AI 软件、Agent、个人服务器与硬件产品，观察它们如何进入真实场景。",
  },
  {
    date: "EVENT",
    icon: "◇",
    title: "OPC 大会",
    summary: "从现场分享和产品展示中了解新的工具、开发方式与应用方向。",
  },
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
          <a className="lang-link" href="/en">EN</a>
          <a className="nav-more" href="/more">了解更多</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">ASHLEY XIA · PERSONAL ARCHIVE</p>
          <h1>你好👋，我是夏诗淇</h1>
          <p className="hero-intro">Ashley 的 Personal Archive，收录实习经历、项目实践和个人博客。</p>
          <div className="hero-links">
            <a className="primary-link" href="#exploration">查看经历 <Arrow /></a>
            <a href="#projects">浏览项目 <Arrow /></a>
            <Link href="/profile">教育与能力 <Arrow /></Link>
          </div>
        </div>

        <div className="hero-portraits" aria-label="夏诗淇的个人照片">
          <figure className="hero-portrait-main">
            <img className="portrait-scan-image" src="/portrait-xinjiang-crop.jpg" alt="夏诗淇在新疆旅行" />
          </figure>
          <figure className="hero-portrait-secondary">
            <img src="/portrait-st-petersburg-crop.jpg" alt="夏诗淇在圣彼得堡参观博物馆" />
          </figure>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-label">
          <p className="kicker">ABOUT ME</p>
          <span>01 / 我是谁</span>
        </div>
        <div className="about-copy">
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
          <Link className="profile-entry" href="/profile">查看教育背景与能力 <Arrow /></Link>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="section-intro">
          <p className="kicker">SELECTED WORK</p>
          <h2>我做过的一些尝试</h2>
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
                {project.summary ? <p className="project-summary">{project.summary}</p> : null}
                <div className="project-facts">
                  <div><span>我做了什么</span><p>{project.role.join("、")}</p></div>
                  <div><span>现在的进展</span><p>{project.progress}</p></div>
                </div>
                <Link href={`/projects/${project.slug}`}>查看项目过程 <Arrow /></Link>
              </div>
              {project.images ? (
                <figure className="project-media project-gallery">
                  {project.images.map((image, imageIndex) => <img key={image} src={image} alt={`${project.name} 产品界面 ${imageIndex + 1}`} />)}
                </figure>
              ) : project.image ? (
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
            <article><span>01 / AI 网站</span><strong>FinalAce 学习平台</strong><p>从期末复习中的资料混乱出发，完成学习流程、AI 功能和网站开发，持续优化到可以使用。</p></article>
            <article><span>02 / 浏览器扩展</span><strong>Narziss 学习工具</strong><p>围绕 AI 对话中的知识缺口，设计浏览器扩展、学习引导和后续记忆检索方向。</p></article>
            <article><span>03 / 校园小程序</span><strong>3D 打印服务平台</strong><p>参与需求分析、产品设计、开发协同和测试，梳理上传文件、系统处理和打印机连接流程。</p></article>
            <article><span>04 / 个人网站</span><strong>个人作品与成长记录</strong><p>完成信息架构、页面设计、前端实现、响应式适配和发布，持续整理自己的项目与经历。</p></article>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-intro">
          <p className="kicker">HOW I WORK</p>
          <h2>我是如何做一个产品的</h2>
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
            <div className="process-visual process-question" aria-label="从表面现象追问到真实需求">
              <small>表面现象</small>
              <i>↓</i>
              <strong>为什么会这样？</strong>
              <i>↓</i>
              <b>真正需要解决的事</b>
            </div>
          </article>
          <article>
            <span>03</span>
            <h3>寻找已有方案</h3>
            <p>我会看看市场上是否已有类似产品，了解它们解决了什么、哪里做得很好，以及还有哪些体验没有被照顾到。也会留意生活中遇到的产品方案，想想它为什么让人愿意使用，再把值得借鉴的部分带回自己的项目。</p>
          </article>
          <article>
            <span>04</span>
            <h3>寻找视觉方向</h3>
            <p>我会在 Pinterest、Mobbin、Behance 等网站整理参考，也会留意旅行、展览、街道和日常生活里让我停下来的颜色与排版，再把这些感受变成可使用的配色和视觉规范。</p>
            <div className="process-visual process-moodboard" aria-label="我的视觉参考照片">
              <img src="/travel-lake-mountain.jpg" alt="湖水与雪山的蓝绿色参考" />
              <img src="/travel-evergreen.jpg" alt="松针深绿色参考" />
              <img src="/travel-lakeside.jpg" alt="湖岸浅蓝色参考" />
              <img src="/palette-stones.jpg" alt="石头的灰紫、米白和褐色配色参考" />
            </div>
          </article>
          <article>
            <span>05</span>
            <h3>设计和开发</h3>
            <p>先画用户流程和页面结构，再完成低保真原型。方向明确后，我会借助 Cursor、Codex 等工具实现功能，并保持组件、状态和数据结构清楚。</p>
          </article>
          <article>
            <span>06</span>
            <h3>持续完善</h3>
            <p>从零做到一个能用的版本，往往只需要几小时；但从“能用”走到上线、稳定使用并被更多人看见，通常需要几个月。后半段更考验细节、反馈、推广和持续投入。</p>
          </article>
        </div>
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
            <img src="/campus-career-fair.jpg" alt="中国农业大学春季校园招聘会工作人员合照" />
            <figcaption>校园经历 / 春季招聘会组织与执行</figcaption>
          </figure>
          <figure className="teaching-workshop-photo"><img src="/teaching-workshop.jpg" alt="支教活动中的团队协作" /><figcaption>支教 / 和伙伴们一起做点什么</figcaption></figure>
          <figure className="teaching-night-photo"><img src="/teaching-night.jpg" alt="支教活动中的团队生活" /><figcaption>支教 / 和伙伴们一起生活</figcaption></figure>
        </div>
      </section>

      <section className="updates" id="updates">
        <div className="section-intro">
          <p className="kicker">RECENT NOTES</p>
          <h2>探索日记</h2>
          <p>每日的信息搜集工作流，以及我在活动现场留下的观察。</p>
        </div>
        <div className="update-strip" aria-label="可横向滑动的探索日记">
          {explorationNotes.map((entry) => (
            <article key={`${entry.date}-${entry.title}`} tabIndex={0}>
              <time>{entry.date}</time>
              <span aria-hidden="true">{entry.icon}</span>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="writing" id="writing">
        <div className="section-intro">
          <p className="kicker">WRITING</p>
          <h2>博客</h2>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <article key={article.title}>
              <div><span>{article.category}</span><time>{article.date}</time></div>
              <h3><Link href={`/articles/${article.slug}`}>{article.title} <Arrow /></Link></h3>
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

      <section className="more-teaser">
        <div>
          <p className="kicker">BEYOND WORK</p>
          <h2>如果还想了解更多</h2>
          <Link href="/more">进入详情 <Arrow /></Link>
        </div>
      </section>

      <footer><span>© 2026 夏诗淇</span><span>Exploring…</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
