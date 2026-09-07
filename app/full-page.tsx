import { fullArticles, fullProjects, personalSummary, fieldNotes, travelEntries, readingEntries } from "./full-content";
import { resumeData, type ResumeLocale } from "./resume-data";
import { FullHeader, FullFooter } from "./full-shell";
import { HeroNotebook, ChapterBookmarks, NotebookAlbum, ReadingAnnotations } from "./full-interactions";
import "./full.css";

export default function FullPage({ locale }: { locale: ResumeLocale }) {
  const zh = locale === "zh";
  const data = resumeData[locale];
  const projects = fullProjects[locale];
  const articles = fullArticles[locale];
  const base = `/${locale}/full/`;
  const experiences = ["career-office", "summer-camp", "campus-3d-printing"].map(id => data.experiences.find(item => item.id === id)!).filter(Boolean);
  return (
    <main className="full-site full-home" lang={zh ? "zh-CN" : "en"}>
      <FullHeader locale={locale} />
      <div id="main-content">
        <section className="fn-opening" aria-labelledby="fn-title" id="about">
          <div className="fn-opening-copy">
            <p className="fn-eyebrow">A PERSONAL NOTEBOOK <span>— 2026</span></p>
            <h1 id="fn-title">{zh ? <>夏诗淇的<br /><span>工作与手记</span></> : <>Ashley Xia.<br /><span>Work & notes.</span></>}</h1>
            <p className="fn-introduction">{personalSummary[locale]}</p>
            <p className="fn-education">{data.education[0].school}<br />{data.education[0].degree} <span>· {data.education[0].period}</span></p>
            <div className="fn-opening-links"><a className="fn-button" href="#projects">{zh ? "从项目开始" : "Start with the work"} <span aria-hidden="true">↗</span></a><a className="fn-text-link" href={`/${locale}/`}>{zh ? "查看简历" : "Read my résumé"} ↗</a></div>
          </div>
          <HeroNotebook locale={locale} />
          <p className="fn-opening-foot"><span>{zh ? "几件做过的事，和一些路上的观察。" : "Things I have worked on. Things I have noticed."}</span><a href="#projects">{zh ? "往下翻" : "Keep reading"} ↓</a></p>
        </section>
        <ChapterBookmarks locale={locale} />

        <section className="fn-section fn-work" id="projects">
          <div className="fn-section-heading"><p className="fn-eyebrow">01 / SELECTED WORK</p><h2>{zh ? "从一个问题开始" : "It starts with a question."}</h2><p>{zh ? "两份项目手记，记录我做了什么，以及为什么这样做。" : "Two project notebooks: what I worked on, and the decisions behind it."}</p></div>
          {projects.map((project, index) => <article className={`fn-project fn-project-${index + 1}`} key={project.slug}>
            <div className="fn-project-copy"><div className="fn-project-meta"><span>0{index + 1}</span><span>{project.type}</span></div><h3><a href={`${base}projects/${project.slug}/`}>{project.name}<span aria-hidden="true"> ↗</span></a></h3><p className="fn-project-question">{project.question}</p><p className="fn-project-summary">{project.summary}</p><dl><div><dt>{zh ? "我参与的部分" : "My contribution"}</dt><dd>{project.role.join(zh ? " · " : " / ")}</dd></div><div><dt>{zh ? "进展" : "Status"}</dt><dd>{project.status}</dd></div></dl><a className="fn-text-link" href={`${base}projects/${project.slug}/`}>{zh ? "翻开项目手记" : "Open the project notes"} ↗</a></div>
            {project.images?.length ? <a className="fn-project-visual" href={`${base}projects/${project.slug}/`} aria-label={zh ? "查看 FinalAce 项目" : "Read the FinalAce case study"}><figure><img src="/finalace-home.png" alt={zh ? "FinalAce 产品首页：复习资料、知识整理与练习入口" : "FinalAce homepage with course materials, knowledge organization and practice"} width="1353" height="1070" loading="lazy" /><figcaption><span>FINALACE / WEB APP</span><span>{zh ? "真实产品界面" : "From the live product"}</span></figcaption></figure></a>
              : <div className="fn-catalog-note"><span className="fn-eyebrow">CLOUD CATALOG / FLOW NOTES</span><p>{zh ? <>资料有了归处，<br />协作才接得上。</> : <>A place for product details.<br />A clearer way to share them.</>}</p><ol>{project.features.map((feature, i) => <li key={feature}><span>0{i + 1}</span>{feature}<span aria-hidden="true">{i === project.features.length - 1 ? "✓" : "↓"}</span></li>)}</ol><small>{zh ? "商品资料 → 团队维护 → 客户查看" : "Product details → team updates → customer view"}</small></div>}
          </article>)}
        </section>

        <section className="fn-section fn-collaboration" id="collaboration">
          <span className="fn-anchor" id="exploration" /><span className="fn-anchor" id="process" />
          <div className="fn-section-heading"><p className="fn-eyebrow">02 / WORKING WITH PEOPLE</p><h2>{zh ? "把人与事接起来" : "Connecting people and the work."}</h2><p>{zh ? "有些工作留下了产品，有些留下了清楚的信息和顺畅的协作。" : "Some work becomes a product. Some becomes clearer information and better coordination."}</p></div>
          <div className="fn-collaboration-layout"><div className="fn-experiences">{experiences.map((item, index) => <article key={item.id}><span className="fn-eyebrow">{String(index + 1).padStart(2, "0")} / {item.period}</span><h3>{item.organization}</h3><p className="fn-experience-role">{item.role}</p><p>{item.highlights.join(" ")}</p></article>)}</div><figure className="fn-field-photo"><img src="/teaching-workshop.jpg" width="1400" height="933" alt={zh ? "公益夏令营中的团队活动" : "A group activity at the volunteer summer camp"} loading="lazy" /><figcaption>{zh ? "一份记录，也是一种参与。" : "Taking notes is a way of taking part."}<span>{zh ? "种太阳公益夏令营 · 2025" : "Volunteer summer camp · 2025"}</span></figcaption></figure></div>
        </section>

        <section className="fn-notebook" id="notebook">
          <div className="fn-section fn-notebook-opening"><p className="fn-eyebrow">03 / NOTES FROM LIFE</p><h2>{zh ? <>留几页，<br />给生活。</> : <>A few pages<br />for life.</>}</h2><p>{zh ? "路上的风景、书页里的句子，还有当时没想明白的事。" : "Places along the way, lines in a book, and questions I am still sitting with."}</p><a className="fn-text-link" href="#writing">{zh ? "直接翻到文章" : "Go to the writing"} ↓</a><span className="fn-notebook-stamp" aria-hidden="true">LIFE<br />IN THE<br />MARGINS</span></div>
          <div className="fn-section fn-album-section" id="travel"><div className="fn-subheading"><h3>{zh ? "在路上" : "On the road"}</h3><span>{zh ? "一些停下来的时刻" : "A few moments to stay with"}</span></div><NotebookAlbum locale={locale} entries={travelEntries[locale]} /></div>
          <div className="fn-section fn-fieldnotes" id="updates"><div className="fn-subheading"><h3>{zh ? "随手记下" : "In the margins"}</h3><span>{zh ? "从记录中选出的三个片段" : "Three fragments from my notes"}</span></div><div className="fn-notes-grid">{fieldNotes[locale].map((note, index) => <article key={note.id}><span className="fn-eyebrow">{note.label}</span><h4>{note.title}</h4><p>{note.body}</p><small aria-hidden="true">{String(index + 1).padStart(2, "0")} —</small></article>)}</div></div>
          <div className="fn-section fn-reading-section" id="reading"><div className="fn-subheading"><h3>{zh ? "书页旁的批注" : "Notes in the margins of books"}</h3><span>{zh ? "点开一本，看看我记住了什么" : "Open a title to see what stayed with me"}</span></div><ReadingAnnotations locale={locale} entries={readingEntries[locale]} /></div>
          <section className="fn-section fn-writing" id="writing"><div className="fn-subheading"><h3>{zh ? "写长一点" : "A little more to say"}</h3><span>ESSAYS / {String(articles.length).padStart(2, "0")}</span></div><div>{articles.map((article, index) => <a className="fn-article-row" href={`${base}articles/${article.slug}/`} key={article.slug}><span className="fn-article-number">0{index + 1}</span><div><span className="fn-eyebrow">{article.category} · {article.date}</span><h4>{article.title}</h4><p>{article.excerpt}</p></div><span className="fn-article-arrow" aria-hidden="true">↗</span></a>)}</div></section>
        </section>

        <section className="fn-section fn-contact" id="contact"><div><p className="fn-eyebrow">04 / LET’S TALK</p><h2>{zh ? <>有件想做的事？<br />聊聊看。</> : <>Something in mind?<br />Let’s talk.</>}</h2><p>{zh ? "产品梳理、AI 应用实现、内容整理或项目协作，都可以从一次具体的交流开始。" : "Product thinking, AI applications, writing or project coordination — a concrete conversation is a good place to start."}</p><a className="fn-contact-email" href={`mailto:${data.contact.email}`}>{data.contact.email}<span aria-hidden="true"> ↗</span></a></div><div className="fn-contact-note"><p>{zh ? "先认识一下我的工作" : "A quick introduction to my work"}</p><a href={`/${locale}/`}>{zh ? "查看简历版" : "Read my résumé"} ↗</a><a href={`/resume-xia-shiqi-${locale}.pdf`} download>{zh ? "下载中文简历 PDF" : "Download résumé PDF"} ↓</a><a href={data.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
      </div>
      <FullFooter locale={locale} />
    </main>
  );
}
