import { notFound } from "next/navigation";
import { FullArticlePage } from "../../../../full-detail";
import { fullArticles } from "../../../../full-content";
import { fullMetadata } from "../../../../full-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fullArticles.en.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = fullArticles.en.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return fullMetadata("en", `${item.title} | Ashley Xia`, item.excerpt, `/articles/${slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <FullArticlePage locale="en" slug={slug} />;
}
