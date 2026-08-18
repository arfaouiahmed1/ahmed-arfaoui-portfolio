/* eslint-disable @next/next/no-img-element -- supplied photography is pre-optimized for the static site */
import type { Metadata } from "next";
import { Arrow, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "My Journey — Ahmed Arfaoui",
  description:
    "From difficult preparatory years at IPEIB to graduating from ESPRIT with an excellent mention.",
};

export default function JourneyPage() {
  return (
    <PageShell>
      <section className="journey-canvas-container" aria-label="Interactive Journey Timeline">
        <header className="journey-canvas-header">
          <div>
            <p className="eyebrow">MY ROUTE / HORIZONTAL CANVAS</p>
            <h1>
              THE ROAD
              <br />
              WASN&apos;T <em>straight.</em>
            </h1>
          </div>
          <div className="canvas-instruction" aria-hidden="true">
            <span>SCROLL OR PAN HORIZONTALLY</span>
            <span className="arrow-indicator">→</span>
          </div>
        </header>

        <div className="journey-horizontal-track" tabIndex={0} aria-label="Chapter scroll track">
          {/* Chapter 1: IPEIB */}
          <article className="canvas-card journey-card-ipeib">
            <div className="card-media">
              <img
                src="/journey/ipeib-sky.png"
                alt="A view near IPEIB under a clear blue sky"
                width="679"
                height="906"
                loading="lazy"
              />
              <span className="card-label">CHAPTER 01 / PREPA CYCLE</span>
            </div>
            <div className="card-content">
              <div className="education-mark journey-education-mark">
                <img
                  src="/education/ipeib.png"
                  alt="IPEIB logo"
                  width="948"
                  height="762"
                  loading="lazy"
                />
                <div>
                  <small>PREPARATORY CYCLE</small>
                  <strong>IPEIB</strong>
                </div>
              </div>
              <h2>
                I TRIED.
                <br />
                I FAILED.
                <br />
                <em>I stayed.</em>
              </h2>
              <p>
                Prepa was rough for me. I worked, failed more than once, and watched my confidence drop with every result.
              </p>
              <p>
                I still wanted to become an engineer. The honest decision was to find another route and keep going.
              </p>
            </div>
            <div className="card-telemetry">
              <p><span>ROUTE</span><strong>PREPA</strong></p>
              <p><span>RESULT</span><strong>FAILED</strong></p>
              <p><span>DECISION</span><strong>CONTINUE</strong></p>
            </div>
          </article>

          {/* Chapter 2: ESPRIT */}
          <article className="canvas-card journey-card-esprit">
            <div className="card-media">
              <img
                src="/education/esprit-campus.jpg"
                alt="The ESPRIT campus"
                width="1280"
                height="853"
                loading="lazy"
              />
              <span className="card-label">CHAPTER 02 / ESPRIT</span>
            </div>
            <div className="card-content">
              <div className="education-mark journey-education-mark">
                <img
                  src="/education/esprit.svg"
                  alt="ESPRIT logo"
                  width="472"
                  height="220"
                  loading="lazy"
                />
                <div>
                  <small>SOFTWARE ENGINEERING</small>
                  <strong>ESPRIT</strong>
                </div>
              </div>
              <h2>
                A CLEAN
                <br />
                <em>restart.</em>
              </h2>
              <p>
                ESPRIT was using what those tough years taught me. I arrived disciplined and studying in a way that worked for me.
              </p>
              <p>
                Formula 1 pulled me toward data: lap times, telemetry, tyre strategy. That curiosity turned into ML and AI agents.
              </p>
              <div className="journey-build-line" aria-label="Skills developed at ESPRIT">
                <span>DATA</span>
                <i />
                <span>ML</span>
                <i />
                <span>AGENTS</span>
              </div>
            </div>
            <div className="card-telemetry">
              <p><span>ROUTE</span><strong>ENGINEERING</strong></p>
              <p><span>FOCUS</span><strong>DATA + AI</strong></p>
              <p><span>MODE</span><strong>BUILDING</strong></p>
            </div>
          </article>

          {/* Chapter 3: Graduation */}
          <article className="canvas-card journey-card-graduation">
            <div className="card-media">
              <img
                src="/media/graduation-with-mom-and-friends.webp"
                alt="Ahmed after graduation with his mother and friends"
                width="2200"
                height="1238"
                loading="lazy"
              />
              <span className="card-label">CHAPTER 03 / FINISH</span>
            </div>
            <div className="card-content">
              <h2>
                EXCELLENT
                <br />
                <em>mention.</em>
              </h2>
              <p>
                Graduation mattered because I knew how close I came to stopping. The failures were part of the story, but not the ending.
              </p>
              <p>
                My mother and friends were there after the presentation. They were there for the difficult years too.
              </p>
              <div className="journey-result-badge">
                <span>FINAL RESULT</span>
                <strong>ENGINEERING DEGREE</strong>
                <em>EXCELLENT MENTION</em>
              </div>
            </div>
            <div className="card-telemetry">
              <p><span>STATUS</span><strong>GRADUATED</strong></p>
              <p><span>RESULT</span><strong>EXCELLENT</strong></p>
            </div>
          </article>
        </div>
      </section>

      <section className="graduation-film section-shell" data-scroll-scene>
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PRESENTATION / JULY 2026</p>
            <h2>
              WHEN IT
              <br />
              FELT <em>real.</em>
            </h2>
          </div>
          <p>
            My final presentation—the point where all those detours finally
            became an engineering degree.
          </p>
        </div>
        <div className="graduation-video-shell">
          <div className="graduation-video-frame">
            <video
              controls
              preload="metadata"
              playsInline
              poster="/media/graduation-with-mom-and-friends.webp"
            >
              <source src="/media/graduation-presentation.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
          <div className="graduation-video-note">
            <span>12 SECONDS / FINAL PRESENTATION</span>
            <p>
              A small clip from the room where the years of changing direction,
              rebuilding, and learning finally became an engineering degree.
            </p>
          </div>
        </div>
      </section>

      <section className="graduation-photos" data-scroll-scene>
        <figure data-scroll-scene>
          <img
            src="/photography/07-edge-of-the-wind.webp"
            alt="Ahmed standing alone in a wind-turbine landscape at sunset"
            width="2000"
            height="1125"
          />
          <figcaption>
            <span>PORTRAIT 01</span>
            One of the trips where I took many of the photos on this site.
          </figcaption>
        </figure>
        <figure data-scroll-scene>
          <img
            src="/media/graduation-with-mom-and-friends.webp"
            alt="Ahmed at ESPRIT after his graduation presentation with his mother and friends"
            width="2200"
            height="1238"
          />
          <figcaption>
            <span>PORTRAIT 02</span>
            With my mother and friends after the presentation.
          </figcaption>
        </figure>
      </section>

      <section className="journey-next section-shell" data-scroll-scene>
        <p>WHAT I TOOK FROM IT.</p>
        <h2>FAILING DID NOT MEAN I WAS FINISHED.</h2>
        <h3>I CHANGED THE ROUTE AND KEPT GOING.</h3>
        <a href="/projects">
          SEE WHAT I BUILT ALONG THE WAY <Arrow />
        </a>
      </section>
    </PageShell>
  );
}
