/* eslint-disable @next/next/no-img-element -- local company marks are small static assets included in the GitHub Pages export */
import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { internships } from "../content";

const companyProfiles: Record<
  string,
  {
    logo: string;
    alt: string;
    profile: string;
    visual: string;
    visualAlt: string;
    visualFit?: "cover" | "contain";
    sourceLabel: string;
  }
> = {
  "Soft Stars": {
    logo: "/companies/soft-stars.jpg",
    alt: "Soft Stars logo",
    profile: "https://www.linkedin.com/company/softstarscom",
    visual: "/companies/soft-stars-cover.jpg",
    visualAlt: "Soft Stars company cover artwork",
    sourceLabel: "COMPANY PROFILE / SOFT STARS",
  },
  VERMEG: {
    logo: "/companies/vermeg.svg",
    alt: "VERMEG logo",
    profile: "https://www.linkedin.com/company/vermeg",
    visual: "/companies/vermeg.svg",
    visualAlt: "VERMEG official brand mark",
    visualFit: "contain",
    sourceLabel: "OFFICIAL BRAND / VERMEG",
  },
  ESPRIT: {
    logo: "/companies/esprit.svg",
    alt: "ESPRIT logo",
    profile: "https://www.esprit.tn/",
    visual: "/education/esprit-campus.jpg",
    visualAlt: "ESPRIT campus building",
    sourceLabel: "OFFICIAL CAMPUS / ESPRIT",
  },
  "CMR Tunisie": {
    logo: "/companies/cmr.png",
    alt: "CMR, an Amphenol company logo",
    profile: "https://www.cmr-group.com/",
    visual: "/companies/cmr-work.jpg",
    visualAlt: "A locomotive featuring CMR engineering systems",
    sourceLabel: "OFFICIAL FIELD IMAGE / CMR",
  },
};

export const metadata: Metadata = {
  title: "Experience — Ahmed Arfaoui",
  description: "Detailed stories from Ahmed Arfaoui's four internships.",
};

function ExperienceCircuit() {
  return (
    <aside className="experience-circuit" aria-hidden="true">
      <div className="experience-circuit-head">
        <span>CAREER CIRCUIT / TUNIS</span>
        <strong>04 / 04</strong>
      </div>

      <div className="experience-circuit-board">
        <svg
          className="experience-circuit-track"
          viewBox="0 0 520 500"
          role="presentation"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="experience-track-shadow"
            d="M86 418C40 348 64 274 141 250C225 224 187 120 286 87C376 56 473 123 450 214C428 304 318 274 298 363C279 445 163 470 86 418Z"
          />
          <path
            className="experience-track-line"
            d="M86 418C40 348 64 274 141 250C225 224 187 120 286 87C376 56 473 123 450 214C428 304 318 274 298 363C279 445 163 470 86 418Z"
          />
          <path
            className="experience-track-progress"
            pathLength="100"
            d="M86 418C40 348 64 274 141 250C225 224 187 120 286 87C376 56 473 123 450 214C428 304 318 274 298 363C279 445 163 470 86 418Z"
          />
          <g className="experience-track-point experience-track-point-1">
            <circle cx="88" cy="419" r="14" />
            <circle cx="88" cy="419" r="4" />
          </g>
          <g className="experience-track-point experience-track-point-2">
            <circle cx="145" cy="248" r="14" />
            <circle cx="145" cy="248" r="4" />
          </g>
          <g className="experience-track-point experience-track-point-3">
            <circle cx="290" cy="86" r="14" />
            <circle cx="290" cy="86" r="4" />
          </g>
          <g className="experience-track-point experience-track-point-4">
            <circle cx="446" cy="214" r="18" />
            <circle cx="446" cy="214" r="5" />
          </g>
        </svg>

        <div className="experience-pit experience-pit-1">
          <span>01</span>
          <div>
            <strong>CMR</strong>
            <small>BI / FORECASTING</small>
          </div>
        </div>
        <div className="experience-pit experience-pit-2">
          <span>02</span>
          <div>
            <strong>ESPRIT</strong>
            <small>MACHINE LEARNING</small>
          </div>
        </div>
        <div className="experience-pit experience-pit-3">
          <span>03</span>
          <div>
            <strong>VERMEG</strong>
            <small>GENERATIVE AI</small>
          </div>
        </div>
        <div className="experience-pit experience-pit-4">
          <span>04</span>
          <div>
            <strong>SOFT STARS</strong>
            <small>AGENT SYSTEMS</small>
          </div>
        </div>

        <div className="experience-circuit-status">
          <span>NOW</span>
          <strong>BUILDING END-TO-END</strong>
          <small>DATA → MODELS → AGENTS</small>
        </div>
      </div>
    </aside>
  );
}

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="page-hero page-hero-experience" data-scroll-scene>
        <ExperienceCircuit />
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

      <section className="internship-list section-shell" data-scroll-scene>
        {internships.map((internship) => {
          const companyProfile = companyProfiles[internship.company];

          return (
            <article
              className="internship-card"
              key={internship.company}
              data-scroll-scene
            >
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
                    <span
                      className={`company-visual company-visual-${companyProfile.visualFit ?? "cover"}`}
                    >
                      <img
                        src={companyProfile.visual}
                        alt={companyProfile.visualAlt}
                        width="1200"
                        height="700"
                        loading="lazy"
                        decoding="async"
                      />
                      <small>{companyProfile.sourceLabel}</small>
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
