import { notFound } from "next/navigation";
import { articles, getArticle } from "../../article-data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="article-page">
      <header className="site-header">
        <a className="brand" href="/zh/full/">夏诗淇</a>
        <nav><a href="/more/#writing">返回博客</a><a href="/zh/full/#contact">联系</a></nav>
      </header>
      <article className="article-detail">
        <p className="kicker">{article.category} · {article.date}</p>
        <h1>{article.title}</h1>
        <p className="article-lede">{article.excerpt}</p>
        <figure className="article-detail-cover">
          <img
            src={article.cover}
            alt={article.coverAlt}
            style={{ objectPosition: article.coverPosition ?? "center" }}
          />
        </figure>
        <div className="article-body">
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <a className="writing-entry" href="/more/#writing">← 返回博客</a>
      </article>
    </main>
  );
}
