import { resumeData } from "./resume-data";
import { ProjectLanguageLink } from "./project-return-link";
import { HomeLanguageLink } from "./full-interactions";

type Locale = "zh" | "en";

export function FullHeader({ locale, page = "home", slug }: { locale: Locale; page?: "home" | "project" | "article"; slug?: string }) {
  const zh = locale === "zh";
  const base = `/${locale}/full/`;
  const other = zh ? "en" : "zh";
  return (
    <header className="fn-header" id="top">
      <a className="fn-skip" href="#main-content">{zh ? "跳到正文" : "Skip to content"}</a>
      <a className="fn-brand" href={base} aria-label={zh ? "夏诗淇的项目与探索" : "Ashley Xia — builder & explorer"}>
        <span className="fn-monogram" aria-hidden="true">a.</span><span>ASHLEY XIA<small>{zh ? "边做边探索" : "BUILDING & EXPLORING"}</small></span>
      </a>
      <nav className="fn-header-links" aria-label={zh ? "网站导航" : "Site navigation"}>
        <a href={`${base}#projects`}>{zh ? "项目" : "Work"}</a>
        <a href={`${base}#lab`}>{zh ? "实验" : "Lab"}</a>
        <a href={`${base}#about`}>{zh ? "关于" : "About"}</a>
        <a href={`${base}#contact`}>{zh ? "联系" : "Contact"}</a>
        <span className="fn-language">
          {page === "project" && slug ? <ProjectLanguageLink locale={locale} slug={slug}>{zh ? "EN" : "中文"}</ProjectLanguageLink>
            : page === "article" && slug ? <a href={`/${other}/full/articles/${slug}/`} hrefLang={other === "zh" ? "zh-CN" : "en"}>{zh ? "EN" : "中文"}</a>
              : <HomeLanguageLink locale={locale} />}
        </span>
      </nav>
    </header>
  );
}

export function FullFooter({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const data = resumeData[locale];
  return (
    <footer className="fn-footer">
      <p>{zh ? "下一个想法，继续动手试。" : "Still curious. Still making things."}<span>{zh ? "下次见，" : "See you around,"} Ashley</span></p>
      <div><a href={`mailto:${data.contact.email}`}>{data.contact.email}</a><a href={`/${locale}/`}>{zh ? "查看简历" : "Read my résumé"} ↗</a><a href="#top">{zh ? "回到页首" : "Back to top"} ↑</a></div>
      <small>© 2026 ASHLEY XIA <span>{zh ? "还在探索，也还在做。" : "A work in progress, myself included."}</span></small>
    </footer>
  );
}
