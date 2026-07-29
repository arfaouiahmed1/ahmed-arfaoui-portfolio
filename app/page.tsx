/* eslint-disable @next/next/no-img-element -- supplied photography is pre-optimized for a static GitHub Pages export */
import { Arrow, PageShell } from "./components/SiteChrome";
import { internships, projects } from "./content";

const tools = [
  "Python",
  "LangGraph",
  "LangChain",
  "MCP",
  "n8n",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "PyTorch",
  "TensorFlow",
  "Hugging Face",
  "Computer Vision",
  "RAG",
  "LoRA",
  "Docker",
  "MLflow",
  "DVC",
  "Power BI",
  "Puppeteer",
  "Playwright",
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-kicker reveal">
          <span className="status-light" />
          AVAILABLE FOR AI ENGINEERING OPPORTUNITIES
        </div>

        <div className="hero-copy">
          <p className="hero-index reveal delay-1">PORTFOLIO / 2026</p>
          <h1 className="reveal delay-1">
            ENGINEERING
            <span className="outline">INTELLIGENCE</span>
            <span className="hero-last-line">
              <em>at</em> FULL THROTTLE.
            </span>
          </h1>

          <div className="hero-bottom reveal delay-2">
            <p>
              I build AI systems that can <strong>observe</strong>,{" "}
              <strong>reason</strong>, and <strong>act</strong>—then make the
              evidence visible enough for humans to trust.
            </p>
            <a className="circle-link" href="/projects" aria-label="Explore projects">
              <span>EXPLORE</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>

        <div className="portrait-stage reveal delay-2">
          <div className="focus-mark focus-top-left" aria-hidden="true" />
          <div className="focus-mark focus-top-right" aria-hidden="true" />
          <div className="focus-mark focus-bottom-left" aria-hidden="true" />
          <div className="focus-mark focus-bottom-right" aria-hidden="true" />
          <img
            src="/ahmed-arfaoui-portrait.jpg"
            alt="Portrait of Ahmed Arfaoui"
            width="640"
            height="760"
          />
          <div className="camera-hud" aria-hidden="true">
            <span>AF-C</span>
            <span>1/250</span>
            <span>F2.8</span>
            <span>ISO 400</span>
          </div>
          <div className="portrait-caption">
            <span>01</span>
            DATA STARTED WITH RACING.
            <br />
            CURIOSITY TOOK IT EVERYWHERE.
          </div>
        </div>

        <aside className="timing-tower" aria-label="Career telemetry">
          <p className="tower-title">
            <span>LIVE</span> CAREER TELEMETRY
          </p>
          <div>
            <span className="position">P1</span>
            <p>AGENTIC AI</p>
            <strong>150+</strong>
            <small>SITES</small>
          </div>
          <div>
            <span className="position">P2</span>
            <p>TOOL CALLS</p>
            <strong>97.6</strong>
            <small>% SUCCESS</small>
          </div>
          <div>
            <span className="position">P3</span>
            <p>VISION</p>
            <strong>95</strong>
            <small>% ACCURACY</small>
          </div>
          <div>
            <span className="position">P4</span>
            <p>GEN. AUDIO</p>
            <strong>94.3</strong>
            <small>% ACCURACY</small>
          </div>
        </aside>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>AGENTIC AI</span><i>◆</i>
          <span>BROWSER AUTOMATION</span><i>◆</i>
          <span>MACHINE LEARNING</span><i>◆</i>
          <span>DATA STORYTELLING</span><i>◆</i>
          <span>PHOTOGRAPHY</span><i>◆</i>
          <span>FORMULA 1</span><i>◆</i>
          <span>AGENTIC AI</span><i>◆</i>
          <span>BROWSER AUTOMATION</span><i>◆</i>
        </div>
      </div>

      <section className="work section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              BUILT TO <em>perform.</em>
            </h2>
          </div>
          <p>
            Six systems shaped by real constraints, measurable outcomes, and the
            belief that a strong model is only the start of a strong product.
          </p>
        </div>

        <div className="project-list">
          {projects.slice(0, 4).map((project, index) => (
            <article
              className={`project project-${["red", "blue", "lime", "amber"][index]}`}
              key={project.title}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.summary}</p>
                <ul className="proof-list" aria-label={`${project.title} outcomes`}>
                  {project.proof.map((proof) => (
                    <li key={proof}>{proof}</li>
                  ))}
                </ul>
              </div>
              <div className="project-side">
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a href="/projects">
                  READ THE CASE STUDY <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>

        <a className="section-cta" href="/projects">
          EXPLORE ALL SIX PROJECTS <Arrow />
        </a>
      </section>

      <section className="about section-shell">
        <div className="about-intro">
          <p className="eyebrow">02 / THE PERSON BEHIND THE PIPELINE</p>
          <h2>
            PART ENGINEER.
            <br />
            PART <em>OBSERVER.</em>
          </h2>
          <p className="about-lede">
            Before data was a profession, it was lap times, sector deltas, tyre
            strategies, and the tiny decisions that change a Formula 1 race.
          </p>
          <p>
            Photography taught me the other half: frame the right question,
            notice what others miss, and make complexity legible. Those instincts
            now shape everything from autonomous browser agents to computer
            vision products and reproducible ML pipelines.
          </p>
        </div>

        <a className="aperture-card aperture-photo-card" href="/photography">
          <img
            src="/photography/15-horizon-and-me.webp"
            alt="Ahmed looking across a landscape of wind turbines"
            width="2000"
            height="791"
          />
          <div className="photo-card-overlay">
            <p>APERTURE / A–01</p>
            <blockquote>
              “Good engineering and good photography begin the same way:
              <strong> pay attention.</strong>”
            </blockquote>
            <span>
              OPEN THE VISUAL JOURNAL <Arrow />
            </span>
          </div>
        </a>
      </section>

      <section className="trajectory section-shell">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">03 / TRAJECTORY</p>
            <h2>THE RACING LINE.</h2>
          </div>
          <p>
            A path through business intelligence, applied data science,
            generative AI, and production-grade agentic systems.
          </p>
        </div>

        <div className="experience-grid">
          {internships.map((item) => (
            <article key={item.company}>
              <div className="experience-marker">
                <span>{item.number}</span>
              </div>
              <p className="experience-year">{item.dates}</p>
              <h3>{item.role.replace(" · Graduation Internship", "")}</h3>
              <h4>{item.company}</h4>
              <p>{item.result}</p>
            </article>
          ))}
        </div>

        <a className="section-cta dark-cta" href="/experience">
          READ EVERY INTERNSHIP STORY <Arrow />
        </a>
      </section>

      <section className="journey-teaser">
        <img
          src="/photography/07-edge-of-the-wind.webp"
          alt="Ahmed at sunset beside wind turbines"
          width="2000"
          height="1125"
        />
        <div className="journey-teaser-copy">
          <p className="eyebrow">04 / THE ROAD HERE</p>
          <h2>
            FAILURE DID NOT
            <br />
            GET THE <em>last word.</em>
          </h2>
          <p>
            I struggled and failed more than once at IPEIB. I changed direction,
            joined ESPRIT, kept working, and reached graduation with an excellent
            mention. The detour is not hidden from this portfolio—it is part of it.
          </p>
          <a href="/journey">
            READ THE FULL JOURNEY <Arrow />
          </a>
        </div>
      </section>

      <section className="toolkit section-shell">
        <div className="toolkit-title">
          <p className="eyebrow">05 / PIT WALL</p>
          <h2>THE TOOLKIT.</h2>
          <p>Chosen for the problem. Connected for the outcome.</p>
        </div>
        <div className="tool-cloud">
          {tools.map((tool, index) => (
            <span key={tool}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="contact section-shell">
        <div className="contact-grid" aria-hidden="true" />
        <p className="eyebrow">06 / OPEN CHANNEL</p>
        <h2>
          HAVE A HARD
          <br />
          PROBLEM?
          <br />
          <em>LET’S BUILD.</em>
        </h2>
        <div className="contact-bottom">
          <p>
            I’m looking for ambitious AI engineering work—especially agentic
            systems, applied machine learning, and products where intelligence
            meets a real operational challenge.
          </p>
          <div className="contact-links">
            <a href="mailto:ahmedarfaoui2000@gmail.com">
              EMAIL <Arrow />
            </a>
            <a href="https://www.linkedin.com/in/ahmedarfaoui99/" target="_blank" rel="noopener noreferrer">
              LINKEDIN <Arrow />
            </a>
            <a href="https://github.com/arfaouiahmed1" target="_blank" rel="noopener noreferrer">
              GITHUB <Arrow />
            </a>
            <a href="https://www.kaggle.com/ahmedarfaoui99" target="_blank" rel="noopener noreferrer">
              KAGGLE <Arrow />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
