import { fullArticles, fullProjects, travelEntries, readingEntries, experiments } from "./full-content";
import { resumeData, type ResumeLocale } from "./resume-data";
import { FullHeader, FullFooter } from "./full-shell";
import { NotebookAlbum, ReadingAnnotations } from "./full-interactions";
import "./full.css";
import "./portfolio.css";

const funFacts = {
  en: [
    "I went to Russia and made it back safely. The inefficiency was… memorable.",
    "I’m good at finding role models. People I admire have nudged me out of my comfort zone more than once.",
    "I’m a little obsessed with cleanliness. A messy space can distract me.",
    "I still prefer a pen to a keyboard. Putting thoughts on paper helps me think.",
    "I’m a “build first, polish later” person.",
  ],
  zh: [
    "去过一趟俄罗斯，平安回来了。一路上的低效率……也很难忘。",
    "我很会给自己找榜样。看到欣赏的人做一件事，常常会让我也走出舒适区试一试。",
    "有一点洁癖。空间一乱，我的注意力也容易跟着乱。",
    "比起打字，还是更喜欢用笔。想法落在纸上，反而更容易想清楚。",
    "我是个「先做出来，再慢慢打磨」的人。",
  ],
};

export default function FullPage({ locale }: { locale: ResumeLocale }) {
  const zh = locale === "zh";
  const data = resumeData[locale];
  const projects = fullProjects[locale];
  const internship = data.experiences.find(item => item.id === "zhijian-internship");
  const articles = fullArticles[locale];
  const base = `/${locale}/full/`;
  return (
    <main className="full-site full-home builder-home simpler-home" lang={zh ? "zh-CN" : "en"}>
      <FullHeader locale={locale} />
      <div id="main-content" tabIndex={-1}>
        <section className="pf-landing pb-wrap" aria-labelledby="pf-title">
          <div className="pf-landing-top"><div className="pf-landing-intro"><p className="pf-landing-name">{zh ? "你好，我是夏诗淇。" : "Hi, I’m Ashley."}</p>
          <h1 id="pf-title"><span>{zh ? "先做出来。" : "Build first."}</span><span>{zh ? "再慢慢打磨。" : "Polish later."}</span></h1></div>
            <figure className="pf-main-photo"><img src="/ashley-main.jpg" srcSet="/ashley-main-small.jpg 960w, /ashley-main.jpg 2304w" sizes="(max-width: 767px) calc(100vw - 88px), (max-width: 900px) 55vw, 640px" width="2304" height="1728" alt={zh ? "夏诗淇戴着绿色帽子，在街上拿着一块面包" : "Ashley in a green cap, holding a snack on a city street"} fetchPriority="high" /></figure>
          </div>
          <div className="pf-landing-bottom">
            <div><p>{zh ? "大学生。用 AI、代码和一支笔，试试脑子里的想法。" : "A university student trying out ideas with AI, code, and a pen."}</p><a href="#projects">{zh ? "看看我做的东西" : "Things I’ve made"} ↓</a></div>
            <div className="pf-landing-projects" aria-label={zh ? "项目速览" : "A quick look at my projects"}>
              <a href={`${base}projects/finalace/`}><span>FinalAce ↗</span><small>{zh ? "AI 复习工具" : "An AI study tool"}</small></a>
              <a href={`${base}projects/cloud-catalog/`}><span>{zh ? "云品册" : "Cloud Catalog"} ↗</span><small>{zh ? "商家的共享商品目录" : "A shared product catalog"}</small></a>
            </div>
          </div>
        </section>

        <section className="pf-work pb-wrap" id="projects" aria-labelledby="pf-work-title">
          <span id="lab" className="pb-anchor" /><span id="exploration" className="pb-anchor" /><span id="collaboration" className="pb-anchor" /><span id="process" className="pb-anchor" />
          <div className="pb-section-head"><h2 id="pf-work-title">{zh ? "做过的，和正在试的。" : "Things I’ve made & tried."}</h2></div>
          <div className="pf-project-grid">{projects.map(project => <article className="pf-project" key={project.slug}>
            <a className="pf-project-image" href={`${base}projects/${project.slug}/`} aria-label={zh ? `查看${project.name}项目` : `Read about ${project.name}`}>
              {project.images?.length ? <img src="/finalace-home.png" alt={zh ? "FinalAce 复习工作台首页" : "FinalAce study workspace homepage"} width="1353" height="1070" loading="lazy" />
                : <div className="pf-catalog-flow"><span>{zh ? "云品册" : "Cloud Catalog"}</span><p>{zh ? "商品资料\n↓\n团队维护\n↓\n分享给客户" : "Product details\n↓\nTeam updates\n↓\nShare with customers"}</p><small>{zh ? "工作流程示意" : "A workflow sketch"}</small></div>}
            </a>
            <div className="pf-project-heading"><h3><a href={`${base}projects/${project.slug}/`}>{project.name} ↗</a></h3><span className="pb-status">{project.status}</span></div>
            <p>{project.slug === "finalace" ? (zh ? "期末资料越堆越多，我就做了一个 AI 复习工具。上传、整理、练习，再看看哪里还没学会。" : "My lecture slides were piling up, so I built an AI study tool. Upload, organize, practice, and find what needs another look.") : (zh ? "帮商家把商品资料放在一起。我参与表单、批量导入和团队协作流程。" : "A shared product catalog for small merchants. I worked on forms, bulk import, and team flows.")}</p>
          </article>)}</div>
          <div className="pf-experiments"><h3>{zh ? "还在试这些" : "Also trying"}</h3><div>{experiments[locale].map(item => <details className="pf-experiment" key={item.id}><summary><span>{item.name}</span><small>{item.status}</small><span className="pb-plus" aria-hidden="true">＋</span></summary><p>{item.note}</p></details>)}</div></div>
          {internship ? <aside className="pf-internship" id="internship" aria-labelledby="pf-internship-title">
            <h3 id="pf-internship-title">{zh ? "实习" : "Internship"}</h3>
            <div><h4>{internship.organization}</h4><p className="pf-internship-role">{internship.role} <span>· {internship.period}</span></p><p>{internship.highlights[0]}</p></div>
          </aside> : null}
        </section>

        <section className="pf-opening pb-wrap" id="about" aria-labelledby="pf-about-title">
          <div className="pf-hello">
            <div><h2 id="pf-about-title">{zh ? "不只是在电脑前。" : "Away from the screen."}</h2><p>{zh ? "大学生。爱动手，也爱到处看看。" : "A student. Usually making or trying something."}</p></div>
            <figure><img src="/portrait-st-petersburg-crop.jpg" width="920" height="1260" alt={zh ? "夏诗淇在圣彼得堡冬宫" : "Ashley at the Hermitage in St. Petersburg"} loading="lazy" /><figcaption>{zh ? "圣彼得堡。确实去过。" : "St. Petersburg. Proof I went."}</figcaption></figure>
          </div>
          <div className="pf-facts"><h2>{zh ? "关于我的几件小事" : "A few things about me"}</h2><ol>{funFacts[locale].map(fact => <li key={fact}>{fact}</li>)}</ol></div>
          <div className="pf-photo-strip">
            <figure><img src="/portrait-xinjiang-stage.jpg" width="1255" height="760" alt={zh ? "夏诗淇在新疆的山间" : "Ashley in the mountains of Xinjiang"} loading="lazy" /><figcaption>{zh ? "新疆。换个地方看看。" : "Xinjiang. A change of scenery."}</figcaption></figure>
            <figure><img src="/teaching-workshop.jpg" width="1400" height="933" alt={zh ? "夏令营期间，在课桌旁一起准备活动" : "Preparing activities together at summer camp"} loading="lazy" /><figcaption>{zh ? "夏令营。一起动手。" : "Summer camp. Making things together."}</figcaption></figure>
          </div>
        </section>

        <section className="pb-notes pb-wrap" id="notebook" aria-labelledby="pb-notes-title">
          <div className="pb-section-head"><h2 id="pb-notes-title">{zh ? "随手记" : "Notes"}</h2></div>
          <div id="writing">{articles.slice(0, 2).map(article => <a className="pf-note-row" href={`${base}articles/${article.slug}/`} key={article.slug}><h3>{article.title}</h3><span aria-hidden="true">↗</span></a>)}
            <details className="pb-personal pf-more-notes"><summary>{zh ? "更多文字" : "More writing"}<span aria-hidden="true">＋</span></summary>{articles.slice(2).map(article => <a className="pf-note-row" href={`${base}articles/${article.slug}/`} key={article.slug}><h3>{article.title}</h3><span aria-hidden="true">↗</span></a>)}</details>
          </div>
          <details className="pb-personal pf-personal-notes"><summary>{zh ? "旅行和书页" : "Places & pages"}<span aria-hidden="true">＋</span></summary><div className="pb-personal-content"><section id="travel"><h3>{zh ? "在路上" : "On the road"}</h3><NotebookAlbum locale={locale} entries={travelEntries[locale]} /></section><section id="reading"><h3>{zh ? "读过之后留下的" : "What stayed with me"}</h3><ReadingAnnotations locale={locale} entries={readingEntries[locale]} /></section><a id="updates" className="fn-text-link" href="/updates/">{zh ? "更早的记录" : "Earlier notes (Chinese)"} ↗</a></div></details>
        </section>

        <section className="pf-contact pb-wrap" id="contact"><h2>{zh ? "来打个招呼。" : "Say hello."}</h2><a className="pb-email" href={`mailto:${data.contact.email}`}>{data.contact.email} <span aria-hidden="true">↗</span></a><a className="fn-text-link" href={data.contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗<span className="fd-sr-only">{zh ? "（在新标签页打开）" : " (opens in a new tab)"}</span></a></section>
      </div>
      <FullFooter locale={locale} />
    </main>
  );
}
