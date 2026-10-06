import { fullArticles, fullProjects, personalSummary, travelEntries, readingEntries, experiments } from "./full-content";
import { resumeData, type ResumeLocale } from "./resume-data";
import { FullHeader, FullFooter } from "./full-shell";
import { NotebookAlbum, ReadingAnnotations } from "./full-interactions";
import "./full.css";
import "./portfolio.css";

export default function FullPage({ locale }: { locale: ResumeLocale }) {
  const zh = locale === "zh";
  const data = resumeData[locale];
  const projects = fullProjects[locale];
  const articles = fullArticles[locale];
  const base = `/${locale}/full/`;
  return (
    <main className="full-site full-home builder-home" lang={zh ? "zh-CN" : "en"}>
      <FullHeader locale={locale} />
      <div id="main-content" tabIndex={-1}>
        <section className="pb-hero pb-wrap" aria-labelledby="pb-title">
          <div className="pb-hero-copy">
            <p className="pb-intro">{zh ? "你好，我是夏诗淇。大学生，也喜欢动手做点东西。" : "Hi, I’m Ashley. A university student who makes things."}</p>
            <h1 id="pb-title">{zh ? <>把想法<span>做出来。</span><br />边做，边探索。</> : <>I build, experiment,<br />and figure<br /><span>things out.</span></>}</h1>
            <p className="pb-summary">{personalSummary[locale]}</p>
            <div className="pb-actions"><a className="fn-button" href="#projects">{zh ? "看看我做了什么" : "See what I’ve built"}<span aria-hidden="true">↓</span></a><a className="fn-text-link" href="#about">{zh ? "我是怎么想的" : "How I think"} ↗</a></div>
          </div>
          <a className="pb-hero-evidence" href={`${base}projects/finalace/`}>
            <div className="pb-evidence-label"><span>FinalAce</span><span>{zh ? "从期末复习到 AI 学习工具" : "From exam stress to a study tool"} ↗</span></div>
            <figure><img src="/finalace-study-path.png" width="2480" height="1494" alt={zh ? "我做的 FinalAce：从课程资料到练习与复盘的学习路径" : "FinalAce study path: course materials, practice, and review"} fetchPriority="high" /><figcaption>{zh ? "上传资料 → 整理知识 → 练习 → 再试一次" : "Upload → make sense of it → practice → try again"}</figcaption></figure>
            <p className="pb-evidence-note"><span aria-hidden="true">↳</span> {zh ? "我想知道：AI 能不能帮我找到下一步该学什么？" : "I wanted to know: can AI help me decide what to study next?"}</p>
          </a>
          <div className="pb-interests"><span>{zh ? "好奇心目前在这里" : "Following my curiosity through"}</span><p>AI / {zh ? "产品 / 数据 / 创意技术" : "products / data / creative technology"}</p><a href="#lab">{zh ? "还有几个小实验" : "A few experiments, too"} ↘</a></div>
        </section>

        <section className="pb-work pb-wrap" id="projects" aria-labelledby="pb-work-title">
          <div className="pb-section-head"><h2 id="pb-work-title">{zh ? "想法，做出来之后。" : "Ideas, made real."}</h2><p>{zh ? "遇到什么问题，试了什么办法，还有哪里没想明白。" : "The problem, the attempt, and what I’m still figuring out."}</p></div>
          {projects.map((project, index) => <article className="pb-project" key={project.slug}>
            <div className="pb-project-visual">
              {project.images?.length ? <a href={`${base}projects/${project.slug}/`}><figure><img src="/finalace-home.png" alt={zh ? "FinalAce 首页的资料管理、练习与复习功能" : "FinalAce homepage with materials, practice, and review"} width="1353" height="1070" loading="lazy" /><figcaption>{zh ? "真实产品界面 · FinalAce" : "Actual product screen · FinalAce"} ↗</figcaption></figure></a>
                : <figure className="pb-flow"><figcaption>{zh ? "云品册 · 工作流程示意" : "Cloud Catalog · workflow diagram"}</figcaption><p>{zh ? "资料在一个地方。\n少找几次，多用几次。" : "One place for the details.\nLess searching. More sharing."}</p><ol>{project.features.map((feature, i) => <li key={feature}><span>{String(i + 1).padStart(2, "0")}</span>{feature}<span aria-hidden="true">{i === project.features.length - 1 ? "↗" : "↓"}</span></li>)}</ol><small>{zh ? "示意图，非产品截图" : "A flow sketch, not a product screenshot"}</small></figure>}
            </div>
            <div className="pb-project-story">
              <div className="pb-project-top"><span>{String(index + 1).padStart(2, "0")} / {project.name}</span><span className="pb-status">{project.status}</span></div>
              <h3><a href={`${base}projects/${project.slug}/`}>{project.name}<span aria-hidden="true">↗</span></a></h3>
              <p className="pb-project-type">{project.type}</p>
              <dl className="pb-story">
                <div><dt>{zh ? "问题" : "Problem"}</dt><dd>{project.question}</dd></div>
                <div><dt>{zh ? "想法" : "Idea"}</dt><dd>{project.decisions[0].body}</dd></div>
                <div><dt>{zh ? "做了什么" : "Built"}</dt><dd>{project.summary}</dd></div>
                <div><dt>{zh ? "我的部分" : "My part"}</dt><dd>{project.role.join(zh ? "、" : ", ")}</dd></div>
                <div className="pb-lesson"><dt>{zh ? "学到的" : "Learned"}</dt><dd>{project.learning}</dd></div>
              </dl>
              <a className="fn-text-link" href={`${base}projects/${project.slug}/`}>{zh ? "看过程与取舍" : "See the decisions & process"} ↗</a>
            </div>
          </article>)}
        </section>

        <section className="pb-lab" id="lab" aria-labelledby="pb-lab-title"><div className="pb-wrap">
          <span id="exploration" className="pb-anchor" />
          <div className="pb-section-head"><h2 id="pb-lab-title">{zh ? "实验还在继续。" : "Room to experiment."}<span className="pb-asterisk" aria-hidden="true">✳</span></h2><p>{zh ? "有些在做，有些只是探索。先试一试，再决定要不要继续。" : "Some in progress. Some just explorations. A way to test what’s worth taking further."}</p></div>
          <div className="pb-experiment-list">{experiments[locale].map(item => <details className="pb-experiment" key={item.id}><summary><span className="pb-experiment-name">{item.name}<small>{item.area}</small></span><span className="pb-experiment-question">{item.question}</span><span className="pb-experiment-state">{item.status}</span><span className="pb-plus" aria-hidden="true">＋</span></summary><div className="pb-experiment-note"><p>{item.note}</p>{item.href && <a className="fn-text-link" href={item.href}>{zh ? "看开发记录" : "Explore the build notes"} ↗</a>}</div></details>)}</div>
        </div></section>

        <section className="pb-about pb-wrap" id="about" aria-labelledby="pb-about-title">
          <div className="pb-about-title"><img src="/portrait-xinjiang-crop.jpg" width="148" height="184" alt={zh ? "在新疆旅行的夏诗淇" : "Ashley traveling in Xinjiang"} loading="lazy" /><h2 id="pb-about-title">{zh ? "兴趣不同，\n做事的方式很像。" : "Different interests.\nA familiar pattern."}</h2></div>
          <div className="pb-about-copy"><p>{zh ? "我常常从一个小问题开始：这一步为什么这么麻烦？这个工具还能怎么用？然后去理解它，画一条流程，做个原型，找人试一试。" : "I tend to start with a small question. Why is this step so awkward? What else could this tool do? Then I try to understand it, sketch a flow, build a version, and let someone try it."}</p><p>{zh ? "我在中国农业大学读地理信息科学。它让我习惯从数据、空间和系统之间的关系看问题。做项目时，我也会碰到代码、设计、产品和商业上的问题，碰到哪一块，就学哪一块。" : "I study Geographic Information Science at China Agricultural University. It gives me a way to think about data, space, and connected systems. Projects bring me into code, design, product, and business. I learn the next piece when the work needs it."}</p><p>{zh ? "我还没有给自己选定一个职业标签。现在更想做的是，多做几个真实的尝试，看看什么值得继续，也看看自己能走到哪里。" : "I haven’t picked a single career label yet. I’m using projects to find out which problems I want to keep working on. Useful, interesting, or just a little easier for someone: that’s a good place to start."}</p><a className="fn-text-link" href={`/${locale}/`}>{zh ? "教育与经历，放在简历里" : "Education & experience, in my résumé"} ↗</a></div>
          <div className="pb-people" id="collaboration"><span id="process" className="pb-anchor" /><h3>{zh ? "也在现实里学。" : "Learning away from the screen, too."}</h3><p>{zh ? "在学校就业与创业办公室帮忙核对企业信息、安排招聘活动。在公益夏令营记录活动、整理报告、和团队一起复盘。事情能不能顺利发生，常常取决于信息是否清楚，人是否接得上。" : "At the campus career office, I help check company information and organize recruitment events. At a volunteer summer camp, I documented activities and helped the team reflect on each day. Both taught me to notice how information moves between people."}</p></div>
        </section>

        <section className="pb-notes pb-wrap" id="notebook" aria-labelledby="pb-notes-title">
          <div className="pb-section-head"><h2 id="pb-notes-title">{zh ? "边做边记。" : "Notes along the way."}</h2><p>{zh ? "产品之外，还有书、旅行，以及没想明白的事。" : "Building notes, books, places, and questions that stick around."}</p></div>
          <div id="writing">{articles.map(article => <a className="pb-writing-row" href={`${base}articles/${article.slug}/`} key={article.slug}><span>{article.category}</span><h3>{article.title}</h3><span aria-hidden="true">↗</span></a>)}</div>
          <details className="pb-personal"><summary>{zh ? "离开屏幕：旅行和书页" : "Away from the screen: places & pages"}<span aria-hidden="true">＋</span></summary><div className="pb-personal-content"><section id="travel"><h3>{zh ? "在路上" : "On the road"}</h3><NotebookAlbum locale={locale} entries={travelEntries[locale]} /></section><section id="reading"><h3>{zh ? "读过之后留下的" : "What stayed with me"}</h3><ReadingAnnotations locale={locale} entries={readingEntries[locale]} /></section><a id="updates" className="fn-text-link" href="/updates/">{zh ? "更早的项目记录" : "Earlier notes (Chinese)"} ↗</a></div></details>
        </section>

        <section className="pb-contact pb-wrap" id="contact"><div><h2>{zh ? "有个想法？\n说来听听。" : "Something on your mind?\nI’d like to hear it."}</h2><p>{zh ? "一个想解决的问题、一个小实验，或是想一起做点什么。写封邮件，我们从具体的事开始。" : "A problem you’ve noticed, a small experiment, or something we could build together. Send me a note."}</p><a className="pb-email" href={`mailto:${data.contact.email}`}>{data.contact.email} <span aria-hidden="true">↗</span></a></div><div className="pb-contact-links"><a href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗<span className="fd-sr-only">{zh ? "（在新标签页打开）" : " (opens in a new tab)"}</span></a><a href={`/${locale}/`}>{zh ? "简历" : "Résumé"} ↗</a><a href={`/resume-xia-shiqi-${locale}.pdf`} download>{zh ? "简历 PDF" : "Résumé PDF"} ↓</a></div></section>
      </div>
      <FullFooter locale={locale} />
    </main>
  );
}
