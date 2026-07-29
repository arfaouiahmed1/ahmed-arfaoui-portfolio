/* eslint-disable @next/next/no-img-element -- family photographs are pre-optimized WebP assets */
import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "For Dad — Ahmed Arfaoui",
  description: "A quiet place in memory of Ahmed's father.",
};

export default function ForDadPage() {
  return (
    <PageShell>
      <section className="memorial-hero">
        <img
          src="/photography/24-fog-signal.webp"
          alt="Streetlights glowing through dense fog"
          width="2000"
          height="2667"
        />
        <div>
          <p className="eyebrow">A QUIET PAGE / FOR MY FATHER</p>
          <h1>
            SOME PEOPLE
            <br />
            STAY IN THE
            <br />
            <em>way we continue.</em>
          </h1>
        </div>
      </section>

      <section className="memorial-story section-shell">
        <p className="memorial-dropcap">My father struggled through brain strokes.</p>
        <p>
          Before he died, Alzheimer’s increasingly stood between him and the
          memories, words, and connections that had shaped his life. Watching
          that happen was a lesson in fragility that no classroom could teach.
        </p>
        <p>
          I do not want this page to reduce him to illness. It is here because
          his life, his struggle, and his place in mine deserve space. The
          details I carry are personal; what I can say publicly is that I
          continue with part of his story inside me.
        </p>
        <blockquote>
          Four photographs cannot contain a whole life, but they can keep its
          presence visible: a younger face, a familiar room, a day outside, and
          the person my family remembers across all of them.
        </blockquote>
      </section>

      <section className="memory-gallery section-shell" aria-label="Photographs of Ahmed's father">
        <figure className="memory-photo memory-photo-wide">
          <img
            src="/memorial/01-younger-years.webp"
            alt="Ahmed's father in his younger years"
            width="1800"
          />
          <figcaption>
            <span>FRAME 01 / FAMILY ARCHIVE</span>
            <h2>Younger years</h2>
            <p>A life existed long before illness entered the frame.</p>
          </figcaption>
        </figure>
        <figure className="memory-photo">
          <img
            src="/memorial/02-at-work.webp"
            alt="Ahmed's father standing in a busy room"
            width="1800"
          />
          <figcaption>
            <span>FRAME 02 / AMONG PEOPLE</span>
            <h2>A familiar presence</h2>
            <p>One ordinary moment preserved because ordinary moments become precious.</p>
          </figcaption>
        </figure>
        <figure className="memory-photo">
          <img
            src="/memorial/03-at-home.webp"
            alt="Ahmed's father seated at home wearing a traditional red chechia"
            width="1800"
          />
          <figcaption>
            <span>FRAME 03 / AT HOME</span>
            <h2>The red chechia</h2>
            <p>His expression, his gesture, and a room the family knows.</p>
          </figcaption>
        </figure>
        <figure className="memory-photo memory-photo-wide">
          <img
            src="/memorial/04-an-afternoon-out.webp"
            alt="Ahmed's father outside during an afternoon outing"
            width="1800"
          />
          <figcaption>
            <span>FRAME 04 / AN AFTERNOON OUT</span>
            <h2>Still part of the world</h2>
            <p>A difficult chapter, remembered with tenderness and dignity.</p>
          </figcaption>
        </figure>
      </section>

      <section className="memorial-close">
        <img
          src="/photography/16-birds-across-the-wire.webp"
          alt="Birds crossing a pastel sky beside a wire"
          width="1292"
          height="2295"
        />
        <p>
          For the strength it took to keep going.
          <br />
          For everything remembered—even when memory itself became difficult.
        </p>
      </section>
    </PageShell>
  );
}
