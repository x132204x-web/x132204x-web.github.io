import { notFound } from "next/navigation";
import { fullArticles, fullProjects } from "./full-content";
import { ReturnToCollection } from "./full-interactions";
import { FullFooter, FullHeader } from "./full-shell";
import "./full.css";
import "./full-detail.css";

type Locale = "zh" | "en";
type DetailProps = { locale: Locale; slug: string };

const imageSizes: Record<string, { width: number; height: number }> = {
  "/finalace-home.png": { width: 1353, height: 1070 },
  "/finalace-study-path.png": { width: 2480, height: 1494 },
  "/finalace-upload.png": { width: 906, height: 1024 },
  "/finalace-quiz.png": { width: 1003, height: 1057 },
  "/teaching-class.jpg": { width: 1400, height: 933 },
  "/travel-window.jpg": { width: 1400, height: 934 },
  "/portrait-xinjiang.jpg": { width: 1255, height: 1800 },
};

const words = {
  zh: {
    case: "项目手记",
    role: "我负责的部分",
    status: "当前进展",
    context: "事情从这里开始",
    decisions: "过程中做的取舍",
    workflow: "一条实际的工作流程",
    features: "功能与流程",
    materials: "项目里的真实界面",
    viewImage: "查看大图",
    learning: "留给下一次的提醒",
    visit: "打开项目",
    newTab: "（在新标签页打开）",
    nextProject: "下一份项目手记",
    nextArticle: "继续翻一页",
    author: "夏诗淇",
    writtenBy: "写于",
    notes: "手记选页",
    imageCaptions: ["FinalAce 产品首页", "首页中的复习流程"],
  },
  en: {
    case: "Project notes",
    role: "My part",
    status: "Where it stands",
    context: "Where it began",
    decisions: "Decisions along the way",
    workflow: "A practical workflow",
    features: "Features & flow",
    materials: "Screens from the project",
    viewImage: "View full image",
    learning: "A note for next time",
    visit: "Visit the project",
    newTab: " (opens in a new tab)",
    nextProject: "The next project",
    nextArticle: "Turn to another page",
    author: "Shiqi Xia",
    writtenBy: "Written in",
    notes: "Notebook",
    imageCaptions: ["The FinalAce homepage", "The revision flow on the homepage"],
  },
} as const;

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="fd-section-heading"><span aria-hidden="true">{number}</span><h2>{children}</h2></div>;
}

export function FullProjectPage({ locale, slug }: DetailProps) {
  const collection = fullProjects[locale];
  const projectIndex = collection.findIndex((item) => item.slug === slug);
  const project = collection[projectIndex];
  if (!project) notFound();

  const w = words[locale];
  const next = collection[(projectIndex + 1) % collection.length];
  const projectImages = project.images ?? (project.image ? [project.image] : []);

  return (
    <main className="full-site full-detail" lang={locale === "zh" ? "zh-CN" : "en"}>
      <FullHeader locale={locale} page="project" slug={slug} />
      <article className="fd-project fd-wrap" id="main-content" tabIndex={-1}>
        <div className="fd-return"><ReturnToCollection locale={locale} kind="project" /></div>
        <header className="fd-project-opening">
          <div>
            <p className="fd-eyebrow">{w.case}<span aria-hidden="true"> / </span>{String(projectIndex + 1).padStart(2, "0")}</p>
            <h1>{project.name}</h1>
            <p className="fd-project-type">{project.type}</p>
          </div>
          <p className="fd-project-question">{project.question}</p>
        </header>

        <div className="fd-project-layout">
          <aside className="fd-project-margin" aria-label={w.role}>
            <div className="fd-meta-block">
              <h2>{w.role}</h2>
              <ul>{project.role.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="fd-meta-block">
              <h2>{w.status}</h2>
              <p className="fd-status"><span aria-hidden="true" />{project.status}</p>
            </div>
            {project.publicUrl && <a className="fd-text-link" href={project.publicUrl} target="_blank" rel="noopener noreferrer">{w.visit}<span aria-hidden="true"> ↗</span><span className="fd-sr-only">{w.newTab}</span></a>}
          </aside>

          <div className="fd-project-body">
            <section className="fd-prose-section">
              <SectionHeading number="01">{w.context}</SectionHeading>
              <p className="fd-lede">{project.summary}</p>
              <p>{project.solution}</p>
            </section>

            <section className="fd-prose-section">
              <SectionHeading number="02">{w.decisions}</SectionHeading>
              <div className="fd-decisions">
                {project.decisions.map((decision) => <div className="fd-decision" key={decision.title}><h3>{decision.title}</h3><p>{decision.body}</p></div>)}
              </div>
            </section>

            <section className="fd-prose-section">
              <SectionHeading number="03">{projectImages.length ? w.features : w.workflow}</SectionHeading>
              <ol className="fd-workflow">
                {project.features.map((feature, index) => <li key={feature}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{feature}</p></li>)}
              </ol>
            </section>

            <section className="fd-prose-section">
              <SectionHeading number="04">{w.status}</SectionHeading>
              <p>{project.progress}</p>
            </section>
          </div>
        </div>

        {projectImages.length > 0 && <section className="fd-materials" aria-labelledby="project-materials-title">
          <div className="fd-materials-heading"><h2 id="project-materials-title">{w.materials}</h2><span aria-hidden="true">{String(projectImages.length).padStart(2, "0")} / {locale === "zh" ? "界面记录" : "Screens"}</span></div>
          <div className="fd-screenshot-list">
            {projectImages.map((src, index) => <figure className="fd-screenshot" key={src}>
              <img src={src} {...imageSizes[src]} alt={w.imageCaptions[index] ?? `${project.name} ${locale === "zh" ? "产品界面" : "product screen"}`} loading="lazy" decoding="async" />
              <figcaption><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{w.imageCaptions[index] ?? project.name}</span><a href={src} target="_blank" rel="noopener noreferrer">{w.viewImage}<span aria-hidden="true"> ↗</span><span className="fd-sr-only">{w.newTab}</span></a></figcaption>
            </figure>)}
          </div>
        </section>}

        <aside className="fd-learning">
          <p className="fd-eyebrow">{w.learning}</p>
          <p>{project.learning}</p>
        </aside>

        <nav className="fd-endnav" aria-label={locale === "zh" ? "项目导航" : "Project navigation"}>
          <ReturnToCollection locale={locale} kind="project" />
          {next && next.slug !== slug && <a className="fd-next" href={`/${locale}/full/projects/${next.slug}/`}><span>{w.nextProject}</span><strong>{next.name}<span aria-hidden="true"> ↗</span></strong></a>}
        </nav>
      </article>
      <FullFooter locale={locale} />
    </main>
  );
}

export function FullArticlePage({ locale, slug }: DetailProps) {
  const collection = fullArticles[locale];
  const articleIndex = collection.findIndex((item) => item.slug === slug);
  const article = collection[articleIndex];
  if (!article) notFound();

  const w = words[locale];
  const next = collection[(articleIndex + 1) % collection.length];
  const isProductCover = article.cover.startsWith("/finalace-");

  return (
    <main className="full-site full-detail" lang={locale === "zh" ? "zh-CN" : "en"}>
      <FullHeader locale={locale} page="article" slug={slug} />
      <article className="fd-article fd-wrap" id="main-content" tabIndex={-1}>
        <div className="fd-return"><ReturnToCollection locale={locale} kind="article" /></div>
        <header className="fd-article-opening">
          <p className="fd-eyebrow">{w.notes}<span aria-hidden="true"> / </span>{article.category}</p>
          <h1>{article.title}</h1>
          <p className="fd-article-lede">{article.excerpt}</p>
          <p className="fd-byline"><span>{w.author}</span><span>{w.writtenBy} {article.date}</span></p>
        </header>

        <figure className={`fd-article-cover${isProductCover ? " fd-article-cover-product" : ""}`}>
          <img src={article.cover} {...imageSizes[article.cover]} alt={article.coverAlt} style={{ objectPosition: article.coverPosition ?? "center" }} decoding="async" fetchPriority="high" />
          <figcaption>{article.coverAlt}</figcaption>
        </figure>

        <div className="fd-article-reading">
          <aside className="fd-article-margin" aria-label={locale === "zh" ? "手记信息" : "Note details"}>
            <p className="fd-page-number" aria-hidden="true">{String(articleIndex + 1).padStart(2, "0")}</p>
            <p>{article.category}</p>
            <p>{article.date}</p>
          </aside>
          <div className="fd-article-prose">{article.paragraphs.map((paragraph, index) => <p key={`${slug}-${index}`}>{paragraph}</p>)}<span className="fd-end-mark" aria-hidden="true">✳</span></div>
        </div>

        <nav className="fd-endnav" aria-label={locale === "zh" ? "手记导航" : "Notebook navigation"}>
          <ReturnToCollection locale={locale} kind="article" />
          {next && next.slug !== slug && <a className="fd-next" href={`/${locale}/full/articles/${next.slug}/`}><span>{w.nextArticle}</span><strong>{next.title}<span aria-hidden="true"> ↗</span></strong></a>}
        </nav>
      </article>
      <FullFooter locale={locale} />
    </main>
  );
}
