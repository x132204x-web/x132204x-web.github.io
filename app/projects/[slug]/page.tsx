import { notFound } from "next/navigation";
import { fullProjects } from "../../full-content";
import FullLegacyRedirect from "../../full-legacy-redirect";
import { fullMetadata } from "../../full-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fullProjects.zh.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = fullProjects.zh.find((item) => item.slug === slug);
  if (!project) notFound();
  return fullMetadata("zh", `${project.name} | 夏诗淇`, project.summary, `/projects/${slug}`);
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!fullProjects.zh.some((project) => project.slug === slug)) notFound();
  return <FullLegacyRedirect kind="project" slug={slug} />;
}
