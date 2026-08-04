/* eslint-disable @next/next/no-img-element -- supplied photography is pre-optimized for the static site */
import type { Metadata } from "next";
import { Arrow, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "My Journey — Ahmed Arfaoui",
  description:
    "From difficult preparatory years at IPEIB to graduating from ESPRIT with an excellent mention.",
};

const roadmap = ["IPEIB", "ESPRIT", "GRADUATION"];

export default function JourneyPage() {
  return (
    <PageShell>
      <section
        className="journey-opening journey-scroll-scene"
        data-scroll-scene
      >
        <div className="journey-opening-stage">
          <img
            className="journey-opening-image"
            src="/journey/ipeib-sky.png"
            alt="The landscape and tower near IPEIB"
            width="679"
            height="906"
          />
          <div className="journey-opening-wash" aria-hidden="true" />
          <div className="journey-opening-copy">
            <p className="eyebrow">MY ROUTE / THREE CHAPTERS</p>
            <h1>
              THE ROAD
              <br />
              WASN&apos;T
              <br />
              <em>straight.</em>
            </h1>
            <p>
              I struggled at IPEIB, changed direction, started again at ESPRIT,
              and finished as an engineer with an excellent mention.
            </p>
          </div>

          <div className="journey-opening-status" aria-hidden="true">
            <span>START / PREPA</span>
            <strong>KEEP SCROLLING</strong>
            <i />
          </div>

          <ol className="journey-roadmap" aria-label="Journey chapters">
            {roadmap.map((stop, index) => (
              <li key={stop}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {stop}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="journey-chapter journey-chapter-ipeib"
        data-scroll-scene
      >
        <div className="journey-chapter-stage">
          <div className="journey-chapter-media">
            <img
              src="/journey/ipeib-sky.png"
              alt="A view near IPEIB under a clear blue sky"
              width="679"
              height="906"
              loading="lazy"
              decoding="async"
            />
            <span className="journey-image-label">THE FIRST ROUTE / IPEIB</span>
          </div>

          <div className="journey-chapter-copy">
            <p className="eyebrow">CHAPTER 01 / IPEIB</p>
            <div className="education-mark journey-education-mark">
              <img
                src="/education/ipeib.png"
                alt="IPEIB logo"
                width="948"
                height="762"
                loading="lazy"
                decoding="async"
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
              Prepa was rough for me. I worked, failed more than once, and
              watched my confidence drop with every result. For a while, it felt
              like effort and progress had nothing to do with each other.
            </p>
            <p>
              I still wanted to become an engineer. The honest decision was not
              to repeat the same year in the same way. It was to find another
              route and keep going.
            </p>
          </div>

          <aside className="journey-telemetry" aria-label="IPEIB chapter notes">
            <p><span>ROUTE</span><strong>PREPA</strong></p>
            <p><span>RESULT</span><strong>FAILED</strong></p>
            <p><span>DECISION</span><strong>CONTINUE</strong></p>
          </aside>
          <span className="journey-ghost-number" aria-hidden="true">01</span>
        </div>
      </section>

      <section
        className="journey-chapter journey-chapter-esprit"
        data-scroll-scene
      >
        <div className="journey-chapter-stage">
          <div className="journey-chapter-media">
            <img
              src="/education/esprit-campus.jpg"
              alt="The ESPRIT campus"
              width="1280"
              height="853"
              loading="lazy"
              decoding="async"
            />
            <span className="journey-image-label">THE RESET / ESPRIT</span>
          </div>

          <div className="journey-chapter-copy">
            <p className="eyebrow">CHAPTER 02 / ESPRIT</p>
            <div className="education-mark journey-education-mark">
              <img
                src="/education/esprit.svg"
                alt="ESPRIT Honoris United Universities logo"
                width="472"
                height="220"
                loading="lazy"
                decoding="async"
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
              ESPRIT was not me erasing the years before it. It was me using
              what they taught me. I arrived more realistic, more disciplined,
              and finally studying in a way that worked for me.
            </p>
            <p>
              Formula 1 pulled me toward data: lap times, telemetry, tyre
              strategy, and all the decisions hidden in numbers. At ESPRIT that
              curiosity turned into software, dashboards, machine learning,
              deep learning, and eventually AI agents.
            </p>

            <div className="journey-build-line" aria-label="Skills developed at ESPRIT">
              <span>DATA</span>
              <i />
              <span>ML</span>
              <i />
              <span>DEEP LEARNING</span>
              <i />
              <span>AGENTS</span>
            </div>
          </div>

          <aside className="journey-telemetry" aria-label="ESPRIT chapter notes">
            <p><span>ROUTE</span><strong>ENGINEERING</strong></p>
            <p><span>FOCUS</span><strong>DATA + AI</strong></p>
            <p><span>MODE</span><strong>BUILDING</strong></p>
          </aside>
          <span className="journey-ghost-number" aria-hidden="true">02</span>
        </div>
      </section>

      <section
        className="journey-chapter journey-chapter-graduation"
        data-scroll-scene
      >
        <div className="journey-chapter-stage">
          <div className="journey-chapter-media">
            <img
              src="/media/graduation-with-mom-and-friends.webp"
              alt="Ahmed at ESPRIT after graduation with his mother and friends"
              width="2200"
              height="1238"
              loading="lazy"
              decoding="async"
            />
            <span className="journey-image-label">THE FINISH / JULY 2026</span>
          </div>

          <div className="journey-chapter-copy">
            <p className="eyebrow">CHAPTER 03 / GRADUATION</p>
            <h2>
              EXCELLENT
              <br />
              <em>mention.</em>
            </h2>
            <p>
              Graduation mattered because I knew exactly how close I had come
              to stopping. The failures were still part of the story, but they
              were no longer the ending.
            </p>
            <p>
              My mother and my friends were there after the presentation. I
              wanted them in this page because they were there for the difficult
              years too, not just the good photo at the end.
            </p>
            <div className="journey-result-badge">
              <span>FINAL RESULT</span>
              <strong>ENGINEERING DEGREE</strong>
              <em>EXCELLENT MENTION</em>
            </div>
          </div>

          <aside className="journey-telemetry" aria-label="Graduation chapter notes">
            <p><span>STATUS</span><strong>GRADUATED</strong></p>
            <p><span>RESULT</span><strong>EXCELLENT</strong></p>
            <p><span>NEXT</span><strong>KEEP BUILDING</strong></p>
          </aside>
          <span className="journey-ghost-number" aria-hidden="true">03</span>
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
