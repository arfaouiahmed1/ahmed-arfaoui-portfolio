const projects = [
  {
    number: "01",
    title: "Open Web Catcher",
    eyebrow: "Agentic AI · Browser automation",
    description:
      "A reviewable multi-agent platform that navigates dynamic websites, activates players, traces iframe chains, and turns browser evidence into structured intelligence.",
    proof: ["150+ sites reached", "97.6% tool-call success", "126 evaluated runs"],
    stack: ["LangGraph", "LangChain", "MCP", "FastAPI", "Next.js", "PostgreSQL"],
    accent: "red",
  },
  {
    number: "02",
    title: "FarmWise",
    eyebrow: "Computer vision · Agricultural AI",
    description:
      "An end-to-end advisory platform combining crop diagnostics, weed detection, satellite vegetation signals, and a RAG assistant grounded in 1,000+ documents.",
    proof: ["95% disease accuracy", "88% YOLOv8 mAP", "1,000+ RAG documents"],
    stack: ["ResNet", "YOLOv8", "RAG", "Next.js", "Django", "NDVI"],
    accent: "lime",
    href: "https://github.com/arfaouiahmed1/Data-Farmers-FarmWise-4DS3",
  },
  {
    number: "03",
    title: "NEWSBOT AI",
    eyebrow: "NLP · Explainable intelligence",
    description:
      "A news intelligence engine for contextual summarization, bias and sentiment analysis, trend forecasting, and explanations that expose which tokens shaped each result.",
    proof: ["LoRA fine-tuning", "LIME + SHAP", "Trend forecasting"],
    stack: ["FAISS", "FLAN-T5", "Mistral", "Sentence Transformers", "XAI"],
    accent: "blue",
  },
  {
    number: "04",
    title: "Reproducible MLOps",
    eyebrow: "ML engineering · Delivery",
    description:
      "A complete model lifecycle: versioned data, tracked experiments, containerized serving, automated delivery, and live drift monitoring.",
    proof: ["80% faster delivery", "Real-time monitoring", "Reproducible runs"],
    stack: ["MLflow", "DVC", "Docker", "FastAPI", "CI/CD", "Elastic"],
    accent: "amber",
  },
];

const experience = [
  {
    year: "2025—26",
    role: "AI & Agentic Systems Engineer",
    company: "Soft Stars",
    detail:
      "Designed and evaluated Open Web Catcher, from n8n/Puppeteer prototype to a traceable multi-agent platform.",
  },
  {
    year: "2025",
    role: "Data Science Intern",
    company: "VERMEG",
    detail:
      "Automated 50+ legacy security configurations with Spring AI, reaching 90% conversion accuracy.",
  },
  {
    year: "2025",
    role: "Data Science Intern",
    company: "ESPRIT",
    detail:
      "Benchmarked six clustering methods and served the winning model through a sub-200 ms FastAPI service.",
  },
  {
    year: "2024",
    role: "BI & Data Science Intern",
    company: "CMR Tunisie",
    detail:
      "Built sales dashboards and forecasting systems with Power BI, ARIMA-family models, and Prophet.",
  },
];

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

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ahmed Arfaoui — home">
          <span>AA</span>
          <span className="wordmark-copy">
            AHMED ARFAOUI
            <small>AI ENGINEER · TUNIS</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="header-cta"
          href="/Ahmed-Arfaoui-CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download CV <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="top">
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
            <a className="circle-link" href="#work" aria-label="Explore selected work">
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
            DATA STARTED WITH RACING.<br />
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
          <span>COMPUTER VISION</span><i>◆</i>
          <span>AGENTIC AI</span><i>◆</i>
          <span>BROWSER AUTOMATION</span><i>◆</i>
          <span>MACHINE LEARNING</span><i>◆</i>
        </div>
      </div>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>BUILT TO <em>perform.</em></h2>
          </div>
          <p>
            Systems designed around real constraints, measurable outcomes, and
            the belief that a strong model is only the start of a strong product.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project project-${project.accent}`} key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
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
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    VIEW REPOSITORY <Arrow />
                  </a>
                ) : (
                  <a href="#contact">
                    DISCUSS THE CASE STUDY <Arrow />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-intro">
          <p className="eyebrow">02 / THE PERSON BEHIND THE PIPELINE</p>
          <h2>
            PART ENGINEER.
            <br />
            PART <em>OBSERVER.</em>
          </h2>
          <p className="about-lede">
            Before data was a profession, it was lap times, sector deltas, tyre
            strategies, and the tiny decisions that change a race.
          </p>
          <p>
            Photography taught me the other half: frame the right question,
            notice what others miss, and make complexity legible. Today, those
            instincts shape the AI systems I build—from autonomous browser agents
            to computer vision products and reproducible ML pipelines.
          </p>
        </div>

        <div className="aperture-card" aria-label="Ahmed's creative philosophy">
          <div className="aperture-rings" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>APERTURE / A–01</p>
          <blockquote>
            “Good engineering and good photography begin the same way:
            <strong> pay attention.</strong>”
          </blockquote>
          <div className="aperture-meta">
            <span>LIGHT<br /><b>AVAILABLE</b></span>
            <span>FOCUS<br /><b>HUMAN</b></span>
            <span>MODE<br /><b>CURIOUS</b></span>
          </div>
        </div>
      </section>

      <section className="trajectory section-shell">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">03 / TRAJECTORY</p>
            <h2>THE RACING LINE.</h2>
          </div>
          <p>
            A path through business intelligence, applied data science, generative
            AI, and production-grade agentic systems.
          </p>
        </div>

        <div className="experience-grid">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.year}`}>
              <div className="experience-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="experience-year">{item.year}</p>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit section-shell">
        <div className="toolkit-title">
          <p className="eyebrow">04 / PIT WALL</p>
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

      <section className="contact section-shell" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <p className="eyebrow">05 / OPEN CHANNEL</p>
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
            <a
              href="https://www.linkedin.com/in/ahmedarfaoui99/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN <Arrow />
            </a>
            <a
              href="https://github.com/arfaouiahmed1"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB <Arrow />
            </a>
            <a
              href="https://www.kaggle.com/ahmedarfaoui99"
              target="_blank"
              rel="noreferrer"
            >
              KAGGLE <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">AA<span>®</span></div>
        <p>AHMED ARFAOUI · AI & DATA SCIENCE ENGINEER</p>
        <p>DESIGNED WITH CURIOSITY · BUILT IN TUNIS</p>
        <a href="#top">BACK TO POLE ↑</a>
      </footer>
    </main>
  );
}
