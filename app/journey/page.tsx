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
            This is not a straight-line success story. It is the story of
            struggling at IPEIB, refusing to surrender, changing direction, and
            eventually graduating from ESPRIT with an excellent mention.
          </p>
        </div>
      </section>

      <section className="journey-sectors section-shell">
        <article>
          <span>SECTOR 01</span>
          <h2>IPEIB: WHEN EFFORT DID NOT LOOK LIKE PROGRESS</h2>
          <p>
            Preparatory school at IPEIB was difficult for me. I struggled, I
            failed more than once, and I had to confront the gap between how
            hard I was trying and the results I was seeing.
          </p>
          <p>
            Those years hurt my confidence, but they also forced me to learn
            endurance. Failure stopped being a verdict and became information:
            something in the route had to change, not the destination.
          </p>
        </article>
        <article>
          <span>SECTOR 02</span>
          <h2>THE SWITCH: CHOOSING ESPRIT AND STARTING AGAIN</h2>
          <p>
            Moving to ESPRIT was not erasing what came before. It was a decision
            to keep going with a different environment, a clearer sense of what
            interested me, and more maturity about how I learn.
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
            Project by project, I moved from dashboards and classical machine
            learning into computer vision, NLP, MLOps, generative AI, and
            eventually autonomous browser agents.
          </p>
          <p>
            Internships made the work real: forecasts had audiences, APIs had
            latency, generated configurations needed validation, and agents
            needed evidence. I was no longer trying only to pass. I was learning
            how to build.
          </p>
        </article>
        <article>
          <span>SECTOR 04</span>
          <h2>THE FINISH LINE: EXCELLENT MENTION</h2>
          <p>
            The graduation result mattered because of the road behind it. I
            finished with an excellent mention—not because the earlier failures
            disappeared, but because I did not let them decide the ending.
          </p>
          <p>
            My mother and my friends were there. Their presence in these photos
            makes the achievement feel complete: the finish line belongs to
            everyone who kept believing while I rebuilt.
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
            The presentation video marks the closing chapter of the degree and
            the opening chapter of the engineer I am becoming.
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
            Me alone—a pause before the next horizon.
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
        <p>THE NEXT SECTOR IS OPEN.</p>
        <h2>THE LESSON WAS NEVER “DO NOT FAIL.”</h2>
        <h3>IT WAS “DO NOT LET FAILURE MAKE THE FINAL DECISION.”</h3>
        <a href="/projects">
          SEE WHAT I BUILT ALONG THE WAY <Arrow />
        </a>
      </section>
    </PageShell>
  );
}
