import { resumeData, type ResumeLocale } from "./resume-data";
import "./resume.css";

const labels = {
  zh: {
    document: "个人简历", fullSite: "完整网站", pdf: "下载中文简历 PDF",
    education: "教育背景", projects: "项目实践", experience: "实践经历",
    skills: "技能与工具", contact: "联系方式", role: "我的职责",
    visit: "访问产品", caseStudy: "查看项目过程", email: "邮箱", phone: "电话 / 微信",
    github: "GitHub", skip: "跳到简历内容", nav: "简历导航", languages: "选择语言",
    more: "项目背后的过程，以及更多关于我的记录。", moreLink: "进入完整网站",
    back: "回到顶部", imageAlt: "夏诗淇在新疆旅行", footer: "夏诗淇 · 个人简历",
  },
  en: {
    document: "RÉSUMÉ", fullSite: "Full site · 中文", pdf: "Download English résumé PDF",
    education: "Education", projects: "Selected projects", experience: "Experience",
    skills: "Skills & tools", contact: "Get in touch", role: "My role",
    visit: "Visit product", caseStudy: "Case study · Chinese", email: "Email", phone: "Phone / WeChat",
    github: "GitHub", skip: "Skip to résumé", nav: "Résumé navigation", languages: "Choose language",
    more: "Project stories, reflections, and more about me.", moreLink: "Explore the full site · Chinese",
    back: "Back to top", imageAlt: "Ashley Xia in Xinjiang", footer: "Ashley Xia · Résumé",
  },
} as const;

export default function ResumePage({ locale }: { locale: ResumeLocale }) {
  const data = resumeData[locale];
  const copy = labels[locale];
  const pdf = `/resume-xia-shiqi-${locale}.pdf`;

  return (
    <main className="resume-page" lang={locale === "zh" ? "zh-CN" : "en"} id="top">
      <a className="resume-skip" href="#resume-content">{copy.skip}</a>
      <header className="resume-topbar">
        <a className="resume-brand" href={`/${locale}/`}>{data.name}<span>{copy.document}</span></a>
        <nav className="resume-version-nav" aria-label={copy.languages}>
          <div className="resume-language-switch">
            <a href="/zh/" lang="zh-CN" hrefLang="zh-CN" aria-current={locale === "zh" ? "page" : undefined}>中文</a>
            <a href="/en/" lang="en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
          </div>
          <a className="resume-full-link" href="/zh/full/">{copy.fullSite}</a>
        </nav>
      </header>

      <div className="resume-sheet" id="resume-content">
        <section className="resume-intro" aria-labelledby="resume-name">
          <div>
            <p className="resume-eyebrow">{copy.document} / ASHLEY XIA</p>
            <div className="resume-name-line"><h1 id="resume-name">{data.name}</h1><span lang={locale === "zh" ? "en" : "zh-CN"}>{data.alternateName}</span></div>
            <p className="resume-title">{data.title}</p>
            <p className="resume-summary">{data.summary}</p>
            <p className="resume-location">{data.location}</p>
            <div className="resume-intro-actions">
              <a className="resume-download" href={pdf} download>{copy.pdf}</a>
              <a className="resume-inline-link" href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </div>
          </div>
          <img className="resume-portrait" src="/portrait-xinjiang-crop.jpg" alt={copy.imageAlt} width="148" height="184" />
        </section>

        <nav className="resume-sections-nav" aria-label={copy.nav}>
          <a href="#education">{copy.education}</a>
          <a href="#work">{copy.projects}</a>
          <a href="#experience">{copy.experience}</a>
          <a href="#skills">{copy.skills}</a>
          <a href="#contact">{copy.contact}</a>
        </nav>

        <section className="resume-section" id="education" aria-labelledby="education-title">
          <h2 id="education-title">{copy.education}</h2>
          <div className="resume-section-body">
            {data.education.map((item) => (
              <article key={item.school} className="resume-entry">
                <div className="resume-entry-heading"><h3>{item.school}</h3><span>{item.period}</span></div>
                <p className="resume-subtitle">{item.degree} · {item.location}</p>
                <p className="resume-education-notes">{item.notes.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="work" aria-labelledby="work-title">
          <h2 id="work-title">{copy.projects}</h2>
          <div className="resume-section-body">
            {data.projects.map((project) => (
              <article className="resume-entry resume-project" key={project.slug}>
                <div className="resume-entry-heading"><h3>{project.name}</h3><span className="resume-status">{project.status}</span></div>
                <p className="resume-subtitle">{project.category}</p>
                <p className="resume-entry-summary">{project.summary}</p>
                <p className="resume-role"><span>{copy.role}</span>{project.role}</p>
                <ul className="resume-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="resume-project-links">
                  {project.publicUrl && <a className="resume-inline-link" href={project.publicUrl} target="_blank" rel="noreferrer">{copy.visit}</a>}
                  <a className="resume-inline-link" href={`/projects/${project.slug}/?from=${locale}`}>{copy.caseStudy}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">{copy.experience}</h2>
          <div className="resume-section-body">
            {data.experiences.map((item) => (
              <article key={item.id} className="resume-entry">
                <div className="resume-entry-heading"><h3>{item.organization}</h3><span>{item.period}</span></div>
                <p className="resume-subtitle">{item.role}</p>
                <ul className="resume-highlights">{item.highlights.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title">{copy.skills}</h2>
          <div className="resume-skills">
            {data.skills.map((item) => <div key={item.category}><h3>{item.category}</h3><p>{item.items.join(" · ")}</p></div>)}
          </div>
        </section>

        <section className="resume-section resume-contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{copy.contact}</h2>
          <dl>
            <div><dt>{copy.email}</dt><dd><a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></dd></div>
            <div><dt>{copy.phone}</dt><dd><a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a></dd></div>
            <div><dt>{copy.github}</dt><dd><a href={data.contact.github} target="_blank" rel="noreferrer">{data.contact.githubLabel}</a></dd></div>
          </dl>
        </section>
        <aside className="resume-more"><p>{copy.more}</p><a className="resume-inline-link" href="/zh/full/">{copy.moreLink}</a></aside>
      </div>
      <footer className="resume-footer"><span>© 2026 {copy.footer}</span><a href="#top">{copy.back}</a></footer>
    </main>
  );
}
