import type { Metadata } from "next";
import { updateEntries } from "../update-data";

export const metadata: Metadata = {
  title: "成长日志｜夏诗淇",
  description: "夏诗淇的项目进展、AI 探索和个人经历记录。",
};

export default function UpdatesPage() {
  return (
    <main className="archive-page">
      <header className="site-header"><a className="brand" href="/zh/full/">夏诗淇</a><nav className="nav archive-nav"><a href="/zh/full/">返回首页</a><a className="nav-contact" href="/updates">成长日志 <span className="arrow">↗</span></a></nav></header>
      <section className="archive-hero section"><p className="eyebrow">PERSONAL ARCHIVE / LATEST UPDATES</p><h1>最近，<em>正在发生。</em></h1><p>项目进展、AI 探索和人生节点。<br />把正在发生的事情留下来，方便以后回看。</p></section>
      <section className="updates-full section-wide"><div className="update-timeline">{updateEntries.map((entry) => <a className="update-item" href={`/updates/${entry.slug}`} key={entry.slug}><time>{entry.date}</time><span className="update-icon">{entry.icon}</span><div><h3>{entry.title}</h3><p>{entry.summary}</p><small>{entry.tags.join(" · ")}</small></div><span className="arrow">↗</span></a>)}</div></section>
      <footer><span>© 2026 夏诗淇</span><a href="/zh/full/">回到首页 ↑</a></footer>
    </main>
  );
}
