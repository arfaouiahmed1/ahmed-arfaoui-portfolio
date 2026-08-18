import { BrandMark } from "./BrandMark";
import { MotionSystem } from "./MotionSystem";
import { SiteHeader } from "./SiteHeaderClient";

export { BrandMark } from "./BrandMark";

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
    <aside className="page-telemetry" aria-label="Race telemetry overview">
      <div className="telemetry-hud">
        <div className="telemetry-badge">
          <BrandMark className="telemetry-mark" />
          <div className="telemetry-meta">
            <span className="telemetry-lap">{lap}</span>
            <small className="telemetry-data">RACE DATA / TELEMETRY</small>
          </div>
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
      <MotionSystem />
      <div className="grain" aria-hidden="true" />
      <div className="site-atmosphere" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="page-scroll-meter" aria-hidden="true" />
      <RaceIntro />
      <SiteHeader />
      <RaceRail />
      {children}
      <SiteFooter />
    </main>
  );
}
