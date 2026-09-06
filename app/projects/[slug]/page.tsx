import { notFound } from "next/navigation";
import { getProject, projects } from "../../project-data";
import ProjectReturnLink from "../../project-return-link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className={`project-detail-page ${project.tone}`}>
      <header className="site-header">
        <a className="brand" href="/zh/full/">夏诗淇</a>
        <nav><ProjectReturnLink /><a href="/zh/full/#contact">联系</a></nav>
      </header>

      <article className="project-detail">
        <div className="detail-hero">
          <p className="kicker">{project.type}</p>
          <h1>{project.name}</h1>
          <blockquote>{project.question}</blockquote>
          {project.summary ? <p>{project.summary}</p> : null}
          <span>{project.status}</span>
        </div>

        {project.images ? <figure className="detail-image detail-gallery">{project.images.map((image, index) => <img key={image} src={image} alt={`${project.name} 产品界面 ${index + 1}`} />)}</figure> : project.image && <figure className="detail-image"><img src={project.image} alt={`${project.name} 产品界面`} /></figure>}

        <div className="detail-grid">
          <section>
            <p className="kicker">THE PROBLEM</p>
            <h2>我想解决什么</h2>
            <p>{project.question}</p>
          </section>
          <section>
            <p className="kicker">THE PRODUCT</p>
            <h2>我做了什么</h2>
            <p>{project.solution}</p>
          </section>
          <section>
            <p className="kicker">MY ROLE</p>
            <h2>我负责的部分</h2>
            <ul>{project.role.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <p className="kicker">CURRENT STATE</p>
            <h2>现在的进展</h2>
            <p>{project.progress}</p>
          </section>
        </div>

        <section className="feature-section">
          <p className="kicker">KEY FEATURES</p>
          <h2>核心功能</h2>
          <div>{project.features.map((feature, index) => <article key={feature}><span>0{index + 1}</span><h3>{feature}</h3></article>)}</div>
        </section>

        <aside className="learning-card">
          <p className="kicker">WHAT I LEARNED</p>
          <blockquote>{project.learning}</blockquote>
        </aside>

        <div className="detail-actions">
          {project.publicUrl && <a href={project.publicUrl} target="_blank" rel="noreferrer">查看公开项目 ↗</a>}
          <ProjectReturnLink />
        </div>
      </article>
    </main>
  );
}
