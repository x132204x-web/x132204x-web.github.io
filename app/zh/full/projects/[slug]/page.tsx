import { notFound } from "next/navigation";
import { FullProjectPage } from "../../../../full-detail";
import { fullProjects } from "../../../../full-content";
import { fullMetadata } from "../../../../full-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fullProjects.zh.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = fullProjects.zh.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return fullMetadata("zh", `${item.name} | 夏诗淇`, item.summary, `/projects/${slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <FullProjectPage locale="zh" slug={slug} />;
}
