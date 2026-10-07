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
    "I get more joy from giving than receiving.",
  ],
  zh: [
    "去过一趟俄罗斯，平安回来了。一路上的低效率……也很难忘。",
    "我很会给自己找榜样。看到欣赏的人做一件事，常常会让我也走出舒适区试一试。",
    "有一点洁癖。空间一乱，我的注意力也容易跟着乱。",
    "比起打字，还是更喜欢用笔。想法落在纸上，反而更容易想清楚。",
    "我是个「先做出来，再慢慢打磨」的人。",
    "比起得到，我更享受付出带来的快乐。",
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
          <div className="pf-landing-top"><div className="pf-landing-intro">
          <h1 id="pf-title">{zh ? <><span>你好，</span><span>我是夏诗淇。</span></> : <><span>Hi, I’m </span><span>Ashley.</span></>}</h1>
          <nav className="pf-landing-links" aria-label={zh ? "从这里开始" : "Start here"}>
            <a href="#projects">{zh ? "我做的东西" : "Things I’ve made"} ↘</a>
            <a href="#about">{zh ? "有趣的小事" : "Fun Facts"} ↘</a>
          </nav></div>
            <figure className="pf-main-photo"><img src="/ashley-main-clean.jpg" srcSet="/ashley-main-clean-small.jpg 640w, /ashley-main-clean.jpg 1151w" sizes="(max-width: 767px) 200px, (max-width: 900px) 240px, 288px" width="1151" height="1440" alt={zh ? "夏诗淇戴着绿色帽子，在街上拿着一块面包" : "Ashley in a green cap, holding a snack on a city street"} fetchPriority="high" /></figure>
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
            <div><h2 id="pf-about-title">{zh ? "不只是在电脑前。" : "Away from the screen."}</h2></div>
            <figure><img src="/portrait-st-petersburg-crop.jpg" width="920" height="1260" alt={zh ? "夏诗淇在圣彼得堡冬宫" : "Ashley at the Hermitage in St. Petersburg"} loading="lazy" /><figcaption>{zh ? "圣彼得堡。" : "St. Petersburg."}</figcaption></figure>
          </div>
          <div className="pf-facts"><h2>{zh ? "有趣的小事" : "Fun Facts"}</h2><ol>{funFacts[locale].map(fact => <li key={fact}>{fact}</li>)}</ol></div>
          <div className="pf-photo-strip">
            <figure id="xinjiang"><img src="/portrait-xinjiang-stage.jpg" width="1255" height="760" alt={zh ? "夏诗淇在新疆的山间" : "Ashley in the mountains of Xinjiang"} loading="lazy" /><figcaption className="pf-photo-story">
              <h3>{zh ? "一场独自出发的新疆冒险。" : "A solo adventure in Xinjiang."}</h3>
              <p className="pf-photo-meta">{zh ? "新疆 · 2026 年 4 月" : "Xinjiang · April 2026"}</p>
              <p>{zh ? "第四次到新疆，终于租车好好逛了一趟。路线临时改，山慢慢爬；徒步后的一碗方便面，也能让我很满足。" : "On my fourth trip to Xinjiang, I rented a car and went exploring alone. I changed plans along the way—and found that instant noodles taste better after a hike."}</p>
            </figcaption></figure>
            <figure id="volunteering"><img src="/teaching-workshop.jpg" width="1400" height="933" alt={zh ? "夏令营期间，在课桌旁一起准备活动" : "Preparing activities together at summer camp"} loading="lazy" /><figcaption className="pf-volunteer-story">
              <h3>{zh ? "当了一回支教老师。" : "A summer on the other side of the classroom."}</h3>
              <p className="pf-volunteer-meta">{zh ? "种太阳公益夏令营 · 2025" : "Zhong Taiyang Volunteer Summer Camp · 2025"}</p>
              <p>{zh ? "我设计、试讲并教授地理、烹饪和科学课程，也负责活动记录、每日团队复盘和结项报告。" : "I designed and taught geography, cooking, and science lessons. I also led camp records, daily team reflections, and the final report."}</p>
              <p>{zh ? "孩子们让我更有耐心，也更愿意把感谢说出口。" : "The children taught me patience—and to say thank you out loud."}</p>
            </figcaption></figure>
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
