"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import type { ResumeLocale } from "./resume-data";
import { projectLanguageDestination, resumeSource } from "./full-route-utils";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}

function getLocation() {
  return window.location.search + window.location.hash;
}

export default function ProjectReturnLink({ locale = "zh", className }: { locale?: ResumeLocale; className?: string }) {
  const location = useSyncExternalStore(subscribe, getLocation, () => "");
  const source = resumeSource(location.split("#")[0]);
  const label = locale === "zh"
    ? source === "en" ? "返回英文简历" : source === "zh" ? "返回中文简历" : "返回项目"
    : source === "zh" ? "Back to Chinese résumé" : source === "en" ? "Back to résumé" : "Back to projects";

  return (
    <a className={className} href={source ? `/${source}/#work` : `/${locale}/full/#projects`} lang={locale === "en" ? "en" : "zh-CN"}>
      {label}
    </a>
  );
}

export function ProjectLanguageLink({ locale, slug, className, children }: {
  locale: ResumeLocale;
  slug: string;
  className?: string;
  children?: ReactNode;
}) {
  const location = useSyncExternalStore(subscribe, getLocation, () => "");
  const split = location.indexOf("#");
  const search = split < 0 ? location : location.slice(0, split);
  const hash = split < 0 ? "" : location.slice(split);
  const otherLanguage = locale === "zh" ? "en" : "zh-CN";
  return (
    <a className={className} href={projectLanguageDestination(locale, slug, search, hash)} lang={otherLanguage} hrefLang={otherLanguage}>
      {children ?? (locale === "zh" ? "EN" : "中文")}
    </a>
  );
}
