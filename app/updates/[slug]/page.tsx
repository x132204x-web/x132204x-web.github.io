import type { Metadata } from "next";
import { getUpdate, updateEntries } from "../../update-data";

export function generateStaticParams() {
  return updateEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getUpdate(slug);
  return { title: entry ? `${entry.title}｜成长日志` : "成长日志｜夏诗淇", description: entry?.summary };
}

export default async function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getUpdate(slug);
  if (!entry) return <main className="not-found"><h1>这条记录还没有写下。</h1><a href="/updates">回到成长日志</a></main>;
  return (
    <main className="archive-page">
      <header className="site-header"><a className="brand" href="/zh/full/">夏诗淇</a><nav className="nav archive-nav"><a href="/zh/full/">返回首页</a><a className="nav-contact" href="/updates">全部日志 <span className="arrow">↗</span></a></nav></header>
      <article className="update-detail section"><a className="back-link" href="/updates">← 所有成长记录</a><div className="detail-meta"><time>{entry.date}</time><span>{entry.icon}</span><div>{entry.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div><h1>{entry.title}</h1><p className="detail-summary">{entry.summary}</p><div className="detail-body">{entry.detail.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="detail-next"><span>继续浏览</span><a href="/updates">回到成长日志 <span className="arrow">↗</span></a></div></article>
      <footer><span>© 2026 夏诗淇</span><a href="/zh/full/">回到首页 ↑</a></footer>
    </main>
  );
}
