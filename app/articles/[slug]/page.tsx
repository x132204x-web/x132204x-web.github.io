import { notFound, permanentRedirect } from "next/navigation";
import { fullArticles } from "../../full-content";

export function generateStaticParams() {
  return fullArticles.zh.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!fullArticles.zh.some((article) => article.slug === slug)) notFound();
  permanentRedirect(`/zh/full/articles/${slug}/`);
}
