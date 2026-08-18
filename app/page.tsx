/* eslint-disable @next/next/no-img-element -- supplied photography is pre-optimized for a static GitHub Pages export */
import type { CSSProperties } from "react";
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
      <section className="hero" data-scroll-scene>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-kicker reveal">
          <span className="status-light" />
          AVAILABLE FOR AI ENGINEERING OPPORTUNITIES
        </div>

        <div className="hero-copy">
          <p className="hero-index reveal delay-1">PORTFOLIO / 2026</p>
          <h1 className="reveal delay-1">
            <span className="hero-word">ENGINEERING</span>
            <span className="outline">INTELLIGENCE</span>
            <span className="hero-last-line">
              <em>at</em> FULL THROTTLE.
            </span>
          </h1>

          <div className="hero-bottom reveal delay-2">
            <p>
              I build AI systems that use tools, browse the web, and leave
              enough evidence behind for people to check what happened.
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

      <section className="work section-shell" data-scroll-scene>
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              BUILT TO <em>perform.</em>
            </h2>
          </div>
          <p>
            These are six projects I spent real time on. I included what I
            built, the results I measured, and the tools I actually used.
          </p>
        </div>

        <div className="project-list">
          {projects.slice(0, 4).map((project, index) => (
            <article
              className={`project project-${["red", "blue", "lime", "amber"][index]}`}
              key={project.title}
              data-scroll-scene
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

      <section className="intelligence-lab section-shell" data-scroll-scene>
        <div className="section-heading lab-heading">
          <div>
            <p className="eyebrow">02 / DATA + INTELLIGENCE</p>
            <h2>
              FROM RAW SIGNAL
              <br />
              TO <em>working systems.</em>
            </h2>
          </div>
          <p>
            The interesting part is not the label on a model. It is the work
            around it: understanding the data, choosing the right method,
            testing the result, and making it useful to someone else.
          </p>
        </div>

        <div className="lab-grid">
          <article className="lab-module lab-module-data" data-scroll-scene>
            <div className="lab-module-top">
              <span>01</span>
              <p>DATA ANALYSIS</p>
            </div>
            <div className="data-visual" aria-hidden="true">
              <div className="data-bars">
                {[42, 68, 51, 86, 73, 94, 77, 100].map((height, index) => (
                  <i
                    key={height}
                    style={{
                      "--bar-height": `${height}%`,
                      "--bar-delay": `${index * 90}ms`,
                    } as CSSProperties}
                  />
                ))}
              </div>
              <div className="data-readout">
                <span>INPUT / 08</span>
                <strong>94.7</strong>
                <small>SIGNAL QUALITY</small>
              </div>
            </div>
            <h3>QUESTION THE DATA FIRST.</h3>
            <p>
              I clean it, check what it can support, compare baselines, and
              explain what actually changed.
            </p>
          </article>

          <article className="lab-module lab-module-viz" data-scroll-scene>
            <div className="lab-module-top">
              <span>02</span>
              <p>VISUALISATION</p>
            </div>
            <div className="viz-dial" aria-hidden="true">
              <div className="viz-dial-ring">
                <span>DELTA</span>
                <strong>-1.82</strong>
                <small>vs baseline</small>
              </div>
              <div className="viz-split">
                <i />
                <i />
                <i />
              </div>
            </div>
            <h3>MAKE THE SIGNAL VISIBLE.</h3>
            <p>
              A good chart should make the next question obvious without
              hiding uncertainty behind decoration.
            </p>
          </article>

          <article className="lab-module lab-module-agents" data-scroll-scene>
            <div className="lab-module-top">
              <span>03</span>
              <p>AI AGENTS</p>
            </div>
            <div className="agent-trace" aria-hidden="true">
              <div className="agent-trace-head">
                <span>RUN / AA-042</span>
                <span className="agent-trace-live">
                  <i />
                  LIVE
                </span>
              </div>
              <div className="agent-trace-body">
                <div className="agent-trace-route">
                  <i />
                  <b />
                </div>
                <ol className="agent-trace-events">
                  <li>
                    <span>01</span>
                    <div>
                      <strong>OBSERVE</strong>
                      <small>CONTEXT SYNCED</small>
                    </div>
                    <em>14 MS</em>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <strong>PLAN</strong>
                      <small>ROUTE SELECTED</small>
                    </div>
                    <em>08 MS</em>
                  </li>
                  <li className="agent-trace-active">
                    <span>03</span>
                    <div>
                      <strong>ACT</strong>
                      <small>TOOL CALL / BROWSER</small>
                    </div>
                    <em>LIVE</em>
                  </li>
                  <li>
                    <span>04</span>
                    <div>
                      <strong>VERIFY</strong>
                      <small>OUTPUT CHECK</small>
                    </div>
                    <em>QUEUED</em>
                  </li>
                </ol>
                <div className="agent-tool-bus">
                  <p>TOOL BUS</p>
                  <div>
                    <span>MEMORY</span>
                    <i />
                    <strong>READY</strong>
                  </div>
                  <div>
                    <span>RECOVERY</span>
                    <i />
                    <strong>ARMED</strong>
                  </div>
                </div>
              </div>
            </div>
            <h3>TOOLS, STATE, ROUTING, RECOVERY.</h3>
            <p>
              For me, an agent is a controlled system that can act, verify,
              remember, and recover when the first route fails.
            </p>
          </article>

          <article className="lab-module lab-module-llm" data-scroll-scene>
            <div className="lab-module-top">
              <span>04</span>
              <p>LLMs</p>
            </div>
            <div className="token-stream" aria-hidden="true">
              {["RAG", "LoRA", "EVAL", "JSON", "TOOLS", "TRACE"].map(
                (token, index) => (
                  <span
                    key={token}
                    style={{ "--token-delay": `${index * 130}ms` } as CSSProperties}
                  >
                    {token}
                  </span>
                ),
              )}
            </div>
            <h3>MAKE GENERATION DEPENDABLE.</h3>
            <p>
              I have worked with retrieval, fine-tuning, structured output,
              evaluation, and the guardrails around them.
            </p>
          </article>

          <article className="lab-module lab-module-deep" data-scroll-scene>
            <div className="lab-module-top">
              <span>05</span>
              <p>DEEP LEARNING</p>
            </div>
            <div className="neural-field" aria-hidden="true">
              {[0, 1, 2, 3].map((column) => (
                <div key={column}>
                  {[0, 1, 2, 3, 4].map((node) => (
                    <i
                      key={node}
                      style={{
                        "--node-delay": `${(column * 5 + node) * 60}ms`,
                      } as CSSProperties}
                    />
                  ))}
                </div>
              ))}
            </div>
            <h3>THE PIPELINE MATTERS TOO.</h3>
            <p>
              I have trained vision, text, and speech models. The input
              pipeline and evaluation matter as much as the final metric.
            </p>
          </article>
        </div>
      </section>

      <section className="about section-shell" data-scroll-scene>
        <div className="about-intro">
          <p className="eyebrow">03 / THE PERSON BEHIND THE PIPELINE</p>
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
            Photography made me more patient and more attentive to small
            details. I bring that same habit to my work, whether I am debugging
            a browser agent, training a vision model, or building an ML pipeline.
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
              “I like engineering and photography for the same reason:
              <strong> both make you pay attention.</strong>”
            </blockquote>
            <span>
              OPEN THE VISUAL JOURNAL <Arrow />
            </span>
          </div>
        </a>
      </section>

      <section className="trajectory section-shell" data-scroll-scene aria-label="Career Trajectory Timeline">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">04 / TRAJECTORY</p>
            <h2>THE RACING LINE.</h2>
          </div>
          <p>
            I started with business intelligence, moved into machine learning,
            and kept going until I was building agentic systems.
          </p>
        </div>

        <div className="trajectory-horizontal-track" tabIndex={0} aria-label="Career trajectory cards">
          {internships.map((item) => (
            <article className="trajectory-card" key={item.company} data-scroll-scene>
              <div className="trajectory-card-header">
                <span className="trajectory-number">{item.number}</span>
                <p className="trajectory-year">{item.dates}</p>
              </div>
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

      <section className="journey-teaser" data-scroll-scene>
        <img
          src="/photography/07-edge-of-the-wind.webp"
          alt="Ahmed at sunset beside wind turbines"
          width="2000"
          height="1125"
        />
        <div className="journey-teaser-copy">
          <p className="eyebrow">05 / THE ROAD HERE</p>
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

      <section className="toolkit section-shell" data-scroll-scene>
        <div className="toolkit-title">
          <p className="eyebrow">06 / PIT WALL</p>
          <h2>THE TOOLKIT.</h2>
          <p>Tools I have used across projects, internships, and my final-year work.</p>
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

      <section className="contact section-shell" data-scroll-scene>
        <div className="contact-grid" aria-hidden="true" />
        <p className="eyebrow">07 / OPEN CHANNEL</p>
        <h2>
          HAVE A HARD
          <br />
          PROBLEM?
          <br />
          <em>LET’S BUILD.</em>
        </h2>
        <div className="contact-bottom">
          <p>
            I am looking for AI engineering work, especially around agents,
            applied machine learning, and products that solve a real problem.
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
