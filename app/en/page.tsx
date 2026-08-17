import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../project-data";

export const metadata: Metadata = {
  title: "Ashley Xia | Product, AI & GIS",
  description:
    "Ashley Xia's personal site — selected product work, AI experiments, and the experiences shaping how she learns and builds.",
  alternates: {
    canonical: "/en/",
    languages: {
      "zh-CN": "/zh/",
      en: "/en/",
    },
  },
};

const experiences = [
  {
    period: "2025 — Present",
    title: "Student Assistant · Career & Innovation Office",
    body: "Company information review, recruitment-event operations, data organization, and coordination across companies, students, and campus teams.",
  },
  {
    period: "2026 — Present",
    title: "Product & Development · Campus 3D Printing Mini Program",
    body: "Worked on requirements, product flow, development coordination, and testing for a campus printing service.",
  },
  {
    period: "Summer 2025",
    title: "Lead · Education Volunteer Program",
    body: "Led daily documentation and reflection, and learned how environment, trust, and human connection shape learning.",
  },
];

const education = [
  {
    period: "2024 — 2028",
    school: "China Agricultural University",
    detail: "Undergraduate · Geographic Information Science",
    location: "Beijing, China",
    note: "GPA 3.56",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function EnglishHome() {
  return (
    <main className="en-page" id="top" lang="en">
      <header className="en-header">
        <Link className="en-brand" href="/en">Ashley Xia</Link>
        <nav aria-label="English navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <Link className="en-language" href="/zh/">中文</Link>
        </nav>
      </header>

      <div className="en-shell">
        <aside className="en-profile" aria-label="Profile">
          <figure className="en-profile-photo">
            <img src="/portrait-xinjiang.jpg" alt="Ashley Xia in Xinjiang" />
            <figcaption>Xinjiang · 2026</figcaption>
          </figure>
          <div className="en-profile-copy">
            <p className="en-eyebrow">HELLO, I&apos;M</p>
            <h1>Ashley Xia</h1>
            <p className="en-chinese-name">夏诗淇</p>
            <p className="en-role">Product explorer building with AI, code, and curiosity.</p>
          </div>
          <dl className="en-profile-facts">
            <div>
              <dt>Based in</dt>
              <dd>Beijing, China</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>China Agricultural University<br />GIS · 2024–2028</dd>
            </div>
            <div>
              <dt>Interested in</dt>
              <dd>AI products · Learning tools<br />Spatial intelligence</dd>
            </div>
          </dl>
          <div className="en-profile-links">
            <a href="mailto:x132204x@163.com">Email <Arrow /></a>
            <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </aside>

        <div className="en-main-column">
          <section className="en-panel en-about" id="about">
            <p className="en-eyebrow">ABOUT ME</p>
            <h2>What I have done, and who I am becoming.</h2>
            <p>
              I am Ashley Xia, a Geographic Information Science student at China Agricultural
              University. This archive brings together my education, product projects, work
              experience, and the way I approach problems.
            </p>
            <div className="en-now">
              <span>Currently</span>
              <strong>Building learning products and exploring AI agents.</strong>
            </div>
          </section>

          <section className="en-section en-education" id="education">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">EDUCATION</p>
                <h2>Where I learned to understand systems</h2>
              </div>
            </div>
            <div className="en-education-list">
              {education.map((item) => (
                <article key={item.school}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <div className="en-education-meta">
                    <span>{item.location}</span>
                    {item.note && <strong>{item.note}</strong>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="en-section" id="work">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">SELECTED WORK</p>
                <h2>Products shaped by real problems</h2>
              </div>
              <a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">
                All repositories <Arrow />
              </a>
            </div>
            <div className="en-project-list">
              {projects.map((project, index) => (
                <article className="en-project" key={project.slug}>
                  <Link className="en-project-media" href={`/projects/${project.slug}`}>
                    {project.images?.[0] || project.image ? (
                      <img
                        src={project.images?.[0] ?? project.image}
                        alt={`${project.name} product interface`}
                      />
                    ) : (
                      <div className="en-project-placeholder" aria-label="Cloud Catalog key features">
                        {["Centralized product records", "Bulk photo and spreadsheet import", "Team collaboration", "Read-only customer sharing"].map((feature) => <span key={feature}>{feature}</span>)}
                      </div>
                    )}
                    <span>0{index + 1}</span>
                  </Link>
                  <div className="en-project-copy">
                    <div className="en-project-title">
                      <div>
                        <p>{index === 0 ? "AI LEARNING PRODUCT" : "MERCHANT MINI PROGRAM"}</p>
                        <h3>{index === 0 ? project.name : "Cloud Catalog"}</h3>
                      </div>
                      <span>{index === 0 ? "Live · Iterating" : "Built · Expanding"}</span>
                    </div>
                    <p>
                      {index === 0
                        ? "An AI study workspace that turns scattered course materials into a clearer review process — from organizing knowledge to practice and reflection."
                        : "A product catalog and collaboration tool that helps small merchants organize product images, SKUs, prices, specifications, and customer-ready sharing in one place."}
                    </p>
                    <ul>
                      {(index === 0
                        ? ["Product strategy", "Learning flow", "AI workflow", "Frontend"]
                        : ["Experience mapping", "Form design", "Product import", "Team collaboration"]
                      ).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <a
                      href={project.publicUrl ?? "https://github.com/x132204x-web?tab=repositories"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.publicUrl ? "View repository" : "See more on GitHub"} <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="en-section en-process">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">HOW I WORK</p>
                <h2>Learning in practice</h2>
              </div>
            </div>
            <div className="en-process-grid">
              <article><span>01</span><h3>Notice</h3><p>Start with a specific difficulty I have experienced or observed.</p></article>
              <article><span>02</span><h3>Understand</h3><p>Look at the real task, existing tools, and what is still missing.</p></article>
              <article><span>03</span><h3>Make</h3><p>Turn the idea into a flow, interface, and working prototype quickly.</p></article>
              <article><span>04</span><h3>Improve</h3><p>Use it in real situations. Getting from usable to reliable is the longer part.</p></article>
            </div>
          </section>

          <section className="en-section" id="experience">
            <div className="en-section-heading">
              <div>
                <p className="en-eyebrow">EXPERIENCE</p>
                <h2>Work beyond independent projects</h2>
              </div>
            </div>
            <div className="en-experience-list">
              {experiences.map((item) => (
                <article key={item.title}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="en-side-column">
          <section className="en-travel-card">
            <div className="en-travel-copy">
              <p className="en-eyebrow">BEYOND WORK</p>
              <h2>Travel is one of the ways I stay curious.</h2>
              <p>I enjoy noticing how people live, the colors of unfamiliar places, and the small details that make a journey memorable.</p>
            </div>
            <div className="en-travel-grid" aria-label="A selection of Ashley's travel photos">
              <img src="/travel-georgia-mestia.jpg" alt="Hiking in Mestia, Georgia" />
              <img src="/travel-georgia-batumi.jpg" alt="By the Black Sea in Batumi, Georgia" />
              <img src="/portrait-st-petersburg-crop.jpg" alt="Visiting a museum in Saint Petersburg" />
              <img src="/travel-japan.jpg" alt="Walking through a street in Japan" />
              <img src="/travel-murmansk.jpg" alt="Winter travel in Murmansk" />
            </div>
          </section>

          <section className="en-contact">
            <p className="en-eyebrow">CONTACT</p>
            <h2>Want to know more about my work?</h2>
            <a href="mailto:x132204x@163.com">x132204x@163.com <Arrow /></a>
          </section>
        </aside>
      </div>

      <footer className="en-footer">
        <span>© 2026 Ashley Xia</span>
        <span>Learning, building, and keeping notes.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
