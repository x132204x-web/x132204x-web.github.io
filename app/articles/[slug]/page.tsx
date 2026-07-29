import Link from "next/link";
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
        <Link className="brand" href="/">夏诗淇</Link>
        <nav><Link href="/#writing">返回文章</Link><Link href="/#contact">联系</Link></nav>
      </header>
      <article className="article-detail">
        <p className="kicker">{article.category} · {article.date}</p>
        <h1>{article.title}</h1>
        <p className="article-lede">{article.excerpt}</p>
        <div className="article-body">
          {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link className="writing-entry" href="/#writing">← 返回我的思考</Link>
      </article>
    </main>
  );
}
