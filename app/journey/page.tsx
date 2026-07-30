/* eslint-disable @next/next/no-img-element -- supplied photography is pre-optimized for a static GitHub Pages export */
import type { Metadata } from "next";
import { Arrow, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "My Journey — Ahmed Arfaoui",
  description: "From difficult preparatory years at IPEIB to graduating from ESPRIT with an excellent mention.",
};

export default function JourneyPage() {
  return (
    <PageShell>
      <section className="journey-opening">
        <img
          src="/photography/07-edge-of-the-wind.webp"
          alt="Ahmed at sunset beside wind turbines"
          width="2000"
          height="1125"
        />
        <div className="journey-opening-copy">
          <p className="eyebrow">A JOURNEY IN FOUR SECTORS</p>
          <h1>
            I FAILED.
            <br />
            I CHANGED.
            <br />
            I <em>continued.</em>
          </h1>
          <p>
            I struggled at IPEIB and failed more than once. I did not want that
            to be the end of my studies, so I changed direction, joined ESPRIT,
            and eventually graduated with an excellent mention.
          </p>
        </div>
      </section>

      <section className="journey-sectors section-shell">
        <article>
          <span>SECTOR 01</span>
          <div className="education-mark">
            <img
              src="/education/ipeib.png"
              alt="IPEIB logo"
              width="948"
              height="762"
              loading="lazy"
              decoding="async"
            />
            <div>
              <small>INSTITUTION 01</small>
              <strong>IPEIB</strong>
              <p>Preparatory cycle</p>
            </div>
          </div>
          <h2>IPEIB: WHEN EFFORT DID NOT LOOK LIKE PROGRESS</h2>
          <p>
            Preparatory school at IPEIB was hard for me. I was putting in the
            work, but the results were not there, and I failed more than once.
          </p>
          <p>
            It affected my confidence. It also made me accept that trying harder
            in exactly the same way was not enough. I still wanted to become an
            engineer, but I needed a different route.
          </p>
        </article>
        <article>
          <span>SECTOR 02</span>
          <div className="education-mark">
            <img
              src="/education/esprit.png"
              alt="ESPRIT Honoris United Universities logo"
              width="339"
              height="160"
              loading="lazy"
              decoding="async"
            />
            <div>
              <small>INSTITUTION 02</small>
              <strong>ESPRIT</strong>
              <p>Software engineering and data</p>
            </div>
          </div>
          <h2>THE SWITCH: CHOOSING ESPRIT AND STARTING AGAIN</h2>
          <p>
            Moving to ESPRIT was my way of starting again without pretending
            the years before it never happened. I understood myself better and
            had a clearer idea of what I wanted to study.
          </p>
          <p>
            I began connecting software engineering with data. Formula 1 had
            already taught me to love lap times, strategy, telemetry, and the
            decisions hidden inside numbers. At ESPRIT, that curiosity became a
            discipline.
          </p>
        </article>
        <article>
          <span>SECTOR 03</span>
          <h2>BUILDING: FROM DATA PROJECTS TO AGENTIC AI</h2>
          <p>
            I started with dashboards and classical machine learning. Later I
            worked on computer vision, NLP, MLOps, generative AI, and finally
            autonomous browser agents.
          </p>
          <p>
            The internships made the difference between a school project and
            work people could actually use much clearer to me. I had to think
            about latency, validation, users, and whether the result really held
            up outside a demo.
          </p>
        </article>
        <article>
          <span>SECTOR 04</span>
          <h2>THE FINISH LINE: EXCELLENT MENTION</h2>
          <p>
            Graduating with an excellent mention meant a lot because I knew how
            close I had come to giving up. The earlier failures did not
            disappear, but they no longer defined what I could finish.
          </p>
          <p>
            My mother and my friends were there for the presentation. I am glad
            these photos include them because they supported me through the
            difficult parts, not only the final day.
          </p>
        </article>
      </section>

      <section className="graduation-film section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PRESENTATION / JULY 2026</p>
            <h2>
              THE MOMENT
              <br />
              BECAME <em>real.</em>
            </h2>
          </div>
          <p>
            This is the presentation from my graduation project. It is the
            moment the degree finally felt real to me.
          </p>
        </div>
        <video
          controls
          preload="metadata"
          poster="/media/graduation-with-mom-and-friends.webp"
        >
          <source src="/media/graduation-presentation.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </section>

      <section className="graduation-photos">
        <figure>
          <img
            src="/photography/07-edge-of-the-wind.webp"
            alt="Ahmed standing alone in a wind-turbine landscape at sunset"
            width="2000"
            height="1125"
          />
          <figcaption>
            <span>PORTRAIT 01</span>
            Me on one of the trips where I took many of the photos on this site.
          </figcaption>
        </figure>
        <figure>
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

      <section className="journey-next section-shell">
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
