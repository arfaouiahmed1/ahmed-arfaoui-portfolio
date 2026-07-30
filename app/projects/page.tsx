import type { Metadata } from "next";
import { Arrow, HeroTelemetry, PageShell } from "../components/SiteChrome";
import { projects } from "../content";

export const metadata: Metadata = {
  title: "Projects — Ahmed Arfaoui",
  description: "Six detailed AI, machine learning, and data engineering case studies.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-projects">
        <HeroTelemetry lap="LAP 01 / 06" />
        <p className="eyebrow">PROJECT ARCHIVE / 01—06</p>
        <h1>
          SYSTEMS WITH
          <br />
          <em>evidence.</em>
        </h1>
        <p>
          Here are six projects I worked on, what each one was trying to solve,
          how I approached it, and what came out of the work.
        </p>
      </section>

      <section className="case-study-list section-shell">
        {projects.map((project) => (
          <article className="case-study" key={project.title}>
            <div className="case-study-rail">
              <span>{project.number}</span>
              <p>{project.category}</p>
            </div>
            <div className="case-study-body">
              <h2>{project.title}</h2>
              <p className="case-summary">{project.summary}</p>
              <div className="case-columns">
                <div>
                  <h3>THE CHALLENGE</h3>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <h3>THE APPROACH</h3>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <h3>THE OUTCOME</h3>
                  <p>{project.outcome}</p>
                </div>
              </div>
              <div className="case-footer">
                <ul className="proof-list">
                  {project.proof.map((proof) => (
                    <li key={proof}>{proof}</li>
                  ))}
                </ul>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    VIEW REPOSITORY <Arrow />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
