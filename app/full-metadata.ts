import type { Metadata } from "next";
import type { ResumeLocale } from "./resume-data";

export function fullMetadata(locale: ResumeLocale, title: string, description: string, path = ""): Metadata {
  const suffix = path.replace(/^\/+|\/+$/g, "");
  const route = (language: ResumeLocale) => `/${language}/full/${suffix ? `${suffix}/` : ""}`;
  return {
    title,
    description,
    alternates: {
      canonical: route(locale),
      languages: { "zh-CN": route("zh"), en: route("en"), "x-default": route("zh") },
    },
    openGraph: {
      title,
      description,
      url: route(locale),
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh" ? "en_US" : "zh_CN",
      type: "website",
      images: ["/og.png"],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
