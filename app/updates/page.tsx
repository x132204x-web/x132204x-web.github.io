import type { Metadata } from "next";
import { updateEntries } from "../update-data";
import { FullHeader, FullFooter } from "../full-shell";
import "../full.css";
import "../full-detail.css";
import "../portfolio.css";

export const metadata: Metadata = { title: "尝试记录｜夏诗淇", description: "做项目、试工具，以及从中学到的事。" };

export default function UpdatesPage() {
  return <main className="full-site full-detail" lang="zh-CN"><FullHeader locale="zh" /><section className="fd-wrap pb-update-index" id="main-content"><a className="fn-text-link" href="/zh/full/#notebook">← 返回手记</a><h1>一些尝试，记下来。</h1><p>做了什么，试了什么，以及接下来想弄明白什么。</p><div>{[...updateEntries].reverse().map(entry => <a className="pb-update-row" href={`/updates/${entry.slug}/`} key={entry.slug}><time>{entry.date}</time><div><h2>{entry.title}</h2><p>{entry.summary}</p></div><span aria-hidden="true">↗</span></a>)}</div></section><FullFooter locale="zh" /></main>;
}
