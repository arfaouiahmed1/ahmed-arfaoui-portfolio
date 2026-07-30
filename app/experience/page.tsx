/* eslint-disable @next/next/no-img-element -- local company marks are small static assets included in the GitHub Pages export */
import type { Metadata } from "next";
import { HeroTelemetry, PageShell } from "../components/SiteChrome";
import { internships } from "../content";

const companyProfiles: Record<
  string,
  { logo: string; alt: string; profile: string }
> = {
  "Soft Stars": {
    logo: "/companies/soft-stars.jpg",
    alt: "Soft Stars logo",
    profile: "https://www.linkedin.com/company/softstarscom",
  },
  VERMEG: {
    logo: "/companies/vermeg.jpg",
    alt: "VERMEG logo",
    profile: "https://www.linkedin.com/company/vermeg",
  },
  ESPRIT: {
    logo: "/companies/esprit.svg",
    alt: "ESPRIT logo",
    profile: "https://www.esprit.tn/",
  },
  "CMR Tunisie": {
    logo: "/companies/cmr-tunisie.jpg",
    alt: "CMR, an Amphenol company logo",
    profile: "https://www.cmr-group.com/",
  },
};

export const metadata: Metadata = {
  title: "Experience — Ahmed Arfaoui",
  description: "Detailed stories from Ahmed Arfaoui's four internships.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-experience">
        <HeroTelemetry lap="LAP 04 / 04" />
        <p className="eyebrow">EXPERIENCE / FOUR CHAPTERS</p>
        <h1>
          LEARNING BY
          <br />
          <em>shipping.</em>
        </h1>
        <p>
          Four internships took me from Power BI and forecasting to machine
          learning, generative AI, and autonomous browser agents.
        </p>
      </section>

      <section className="internship-list section-shell">
        {internships.map((internship) => {
          const companyProfile = companyProfiles[internship.company];

          return (
            <article className="internship-card" key={internship.company}>
              <div className="internship-index">{internship.number}</div>
              <div className="internship-title">
                {companyProfile ? (
                  <a
                    className="company-mark"
                    href={companyProfile.profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${internship.company}'s official profile`}
                  >
                    <span className="company-mark-label">
                      TEAM ID / {internship.number}
                    </span>
                    <span className="company-mark-plate">
                      <img
                        src={companyProfile.logo}
                        alt={companyProfile.alt}
                        width="200"
                        height="100"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="company-mark-link">
                      Official profile <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                ) : null}
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
          );
        })}
      </section>
    </PageShell>
  );
}
