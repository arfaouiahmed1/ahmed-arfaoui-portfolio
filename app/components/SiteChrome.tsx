/* eslint-disable @next/next/no-img-element -- the supplied AA mark is a small static brand asset */
import Link from "next/link";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/journey", label: "Journey" },
  { href: "/photography", label: "Photography" },
  { href: "/for-dad", label: "For Dad" },
];

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={`aa-dot-mark ${className}`.trim()}
      src="/aa-dot-logo.png"
      alt=""
      width="129"
      height="99"
      aria-hidden="true"
    />
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ahmed Arfaoui — home">
        <BrandMark className="wordmark-symbol" />
        <span className="wordmark-copy">
          AHMED ARFAOUI
          <small>AI ENGINEER · TUNIS</small>
        </span>
      </Link>

      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        href="/Ahmed-Arfaoui-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <BrandMark className="footer-mark" />
      <p>AHMED ARFAOUI · AI & DATA SCIENCE ENGINEER</p>
      <p>DESIGNED WITH CURIOSITY · BUILT IN TUNIS</p>
      <nav className="footer-links" aria-label="Page controls">
        <a href="#top">BACK TO POLE ↑</a>
      </nav>
    </footer>
  );
}

export function HeroTelemetry({ lap }: { lap: string }) {
  return (
    <aside className="page-telemetry" aria-hidden="true">
      <div className="telemetry-orbit">
        <BrandMark className="telemetry-mark" />
        <span className="telemetry-lap">{lap}</span>
        <small className="telemetry-data">RACE DATA</small>
      </div>
      <div className="telemetry-sectors">
        <p className="telemetry-sector">
          <span>S1</span>
          <i />
          <strong>29.441</strong>
        </p>
        <p className="telemetry-sector">
          <span>S2</span>
          <i />
          <strong>31.807</strong>
        </p>
        <p className="telemetry-sector">
          <span>S3</span>
          <i />
          <strong>27.114</strong>
        </p>
      </div>
    </aside>
  );
}

function RaceIntro() {
  return (
    <div className="start-sequence" aria-hidden="true">
      <BrandMark className="start-sequence-mark" />
      <div className="start-lights">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <span>LIGHTS OUT / DATA MODE</span>
    </div>
  );
}

function RaceRail() {
  return (
    <div className="race-rail" aria-hidden="true">
      <div className="race-sector">
        <span>S1</span>
        <i />
      </div>
      <div className="race-sector">
        <span>S2</span>
        <i />
      </div>
      <div className="race-sector">
        <span>S3</span>
        <i />
      </div>
      <div className="race-sweep">
        <b />
      </div>
    </div>
  );
}

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="top">
      <div className="grain" aria-hidden="true" />
      <RaceIntro />
      <SiteHeader />
      <RaceRail />
      {children}
      <SiteFooter />
    </main>
  );
}
