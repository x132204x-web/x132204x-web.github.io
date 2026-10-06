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
        <span className="fn-monogram" aria-hidden="true">a.</span><span>ASHLEY XIA</span>
      </a>
      <nav className="fn-header-links" aria-label={zh ? "网站导航" : "Site navigation"}>
        <a href={`${base}#projects`}>{zh ? "项目" : "Work"}</a>
        <a href={`${base}#notebook`}>{zh ? "随手记" : "Notes"}</a>
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
  return (
    <footer className="fn-footer">
      <div className="pf-footer-links"><span>© 2026 Ashley Xia</span><a href={`/${locale}/`}>{zh ? "简历" : "Résumé"} ↗</a><a href="#top">{zh ? "回到页首" : "Back to top"} ↑</a></div>
    </footer>
  );
}
