import { notFound } from "next/navigation";
import { FullProjectPage } from "../../../../full-detail";
import { fullProjects } from "../../../../full-content";
import { fullMetadata } from "../../../../full-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fullProjects.en.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = fullProjects.en.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return fullMetadata("en", `${item.name} | Ashley Xia`, item.summary, `/projects/${slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <FullProjectPage locale="en" slug={slug} />;
}
