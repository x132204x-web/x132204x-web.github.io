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
      <a className="fn-brand" href={base} aria-label={zh ? "夏诗淇的工作与手记" : "Ashley Xia — work & notes"}>
        <span className="fn-monogram" aria-hidden="true">a.</span><span>ASHLEY XIA<small>{zh ? "工作与手记" : "WORK & NOTES"}</small></span>
      </a>
      <nav className="fn-header-links" aria-label={zh ? "网站导航" : "Site navigation"}>
        <a href={`/${locale}/`}>{zh ? "简历" : "Résumé"}<span aria-hidden="true"> ↗</span></a>
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
      <p>{zh ? "谢谢你翻到这里。" : "Thanks for spending a little time here."}<span>{zh ? "下次见，" : "Until next time,"} Ashley</span></p>
      <div><a href={`mailto:${data.contact.email}`}>{data.contact.email}</a><a href={`/${locale}/`}>{zh ? "查看简历" : "Read my résumé"} ↗</a><a href="#top">{zh ? "回到页首" : "Back to top"} ↑</a></div>
      <small>© 2026 ASHLEY XIA <span>{zh ? "工作在继续，手记也是。" : "Work in progress. Notes, too."}</span></small>
    </footer>
  );
}
