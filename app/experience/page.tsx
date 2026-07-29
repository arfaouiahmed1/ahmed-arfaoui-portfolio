import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { internships } from "../content";

export const metadata: Metadata = {
  title: "Experience — Ahmed Arfaoui",
  description: "Detailed stories from Ahmed Arfaoui's four internships.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-experience">
        <p className="eyebrow">EXPERIENCE / FOUR CHAPTERS</p>
        <h1>
          LEARNING BY
          <br />
          <em>shipping.</em>
        </h1>
        <p>
          From business intelligence and forecasting to enterprise generative
          AI and autonomous browser systems—each internship moved the boundary.
        </p>
      </section>

      <section className="internship-list section-shell">
        {internships.map((internship) => (
          <article className="internship-card" key={internship.company}>
            <div className="internship-index">{internship.number}</div>
            <div className="internship-title">
              <p>{internship.dates}</p>
              <h2>{internship.company}</h2>
              <h3>{internship.role}</h3>
            </div>
            <div className="internship-story">
              <p className="internship-context">{internship.context}</p>
              <ul>
                {internship.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <blockquote>{internship.result}</blockquote>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
