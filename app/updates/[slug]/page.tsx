import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUpdate, updateEntries } from "../../update-data";
import { FullHeader, FullFooter } from "../../full-shell";
import "../../full.css";
import "../../full-detail.css";
import "../../portfolio.css";

export function generateStaticParams() { return updateEntries.map(entry => ({ slug: entry.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getUpdate(slug);
  return { title: entry ? `${entry.title}｜尝试记录` : "尝试记录｜夏诗淇", description: entry?.summary };
}
export default async function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getUpdate(slug);
  if (!entry) notFound();
  return <main className="full-site full-detail" lang="zh-CN"><FullHeader locale="zh" /><article className="fd-wrap pb-update-detail" id="main-content"><a className="fn-text-link" href="/updates/">← 所有尝试记录</a><header><p className="fd-eyebrow">{entry.date} · {entry.tags.join(" / ")}</p><h1>{entry.title}</h1><p>{entry.summary}</p></header><div className="fd-article-prose">{entry.detail.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div><a className="fn-text-link" href="/zh/full/#projects">看看项目 ↗</a></article><FullFooter locale="zh" /></main>;
}
