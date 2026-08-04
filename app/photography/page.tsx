/* eslint-disable @next/next/no-img-element -- supplied photography is pre-optimized and keeps its original framing */
import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { motionFrames, photos } from "../content";

const frameCount = photos.length + motionFrames.length;

export const metadata: Metadata = {
  title: "Photography — Ahmed Arfaoui",
  description:
    "Ahmed Arfaoui's visual journal: 53 photographs and one short film from roads, weather, coastlines, streets, and quiet light.",
};

export default function PhotographyPage() {
  return (
    <PageShell>
      <section className="photo-hero photo-hero-editorial">
        <div className="photo-hero-copy">
          <p className="eyebrow">VISUAL JOURNAL / 53 STILLS + 1 FILM</p>
          <h1>
            I PHOTOGRAPH
            <br />
            THE <em>in-between.</em>
          </h1>
          <p>
            I usually carry a camera when I am out. These are the frames I kept:
            changing weather, Tunisian streets, long roads, friends, and the
            places I wanted to remember exactly as they were.
          </p>
          <div className="photo-hero-index" aria-label="Journal summary">
            <span>
              <strong>53</strong> STILLS
            </span>
            <span>
              <strong>01</strong> FILM
            </span>
            <span>
              <strong>TN</strong> MOSTLY TUNISIA
            </span>
          </div>
        </div>

        <figure className="photo-hero-portrait">
          <img
            src="/photography/39-self-portrait-above-the-sea.webp"
            alt="Ahmed smiling above the sea"
            width="1209"
            height="1616"
          />
          <figcaption>
            <span>SELF-PORTRAIT / CAP SERRAT</span>
            Usually I am on the other side of the camera.
          </figcaption>
        </figure>
      </section>

      <div className="photo-contact-strip" aria-hidden="true">
        <span>PORTRAIT</span>
        <i />
        <span>LANDSCAPE</span>
        <i />
        <span>NIGHT</span>
        <i />
        <span>COAST</span>
        <i />
        <span>STREET</span>
      </div>

      <section className="photo-grid" aria-label="Ahmed's photography collection">
        {photos.map((photo, index) => (
          <figure className="photo-frame" key={photo.file}>
            <img
              src={`/photography/${photo.file}`}
              alt={photo.title}
              width={photo.width}
              height={photo.height}
              loading={index > 5 ? "lazy" : "eager"}
              decoding="async"
            />
            <figcaption>
              <span>
                {String(index + 1).padStart(2, "0")} / {frameCount}
              </span>
              <h2>{photo.title}</h2>
              <p>{photo.caption}</p>
            </figcaption>
          </figure>
        ))}

        {motionFrames.map((frame, index) => (
          <figure className="photo-frame photo-frame-motion" key={frame.file}>
            <video
              controls
              playsInline
              preload="metadata"
              poster={`/photography/${frame.poster}`}
              width={frame.width}
              height={frame.height}
              aria-label={frame.title}
            >
              <source src={`/photography/${frame.file}`} type="video/mp4" />
              Your browser does not support this video.
            </video>
            <figcaption>
              <span>
                {String(photos.length + index + 1).padStart(2, "0")} / {frameCount}
                {" · "}MOTION
              </span>
              <h2>{frame.title}</h2>
              <p>{frame.caption}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </PageShell>
  );
}
