/* eslint-disable @next/next/no-img-element -- all 25 photographs are pre-optimized WebP assets */
import type { Metadata } from "next";
import { PageShell } from "../components/SiteChrome";
import { photos } from "../content";

export const metadata: Metadata = {
  title: "Photography — Ahmed Arfaoui",
  description: "A 25-frame visual journal of roads, weather, coastlines, streets, and quiet light.",
};

export default function PhotographyPage() {
  return (
    <PageShell>
      <section className="photo-hero">
        <img
          src="/photography/01-fireline.webp"
          alt="A dramatic orange sunset over a field"
          width="1543"
          height="2063"
        />
        <div>
          <p className="eyebrow">VISUAL JOURNAL / 25 FRAMES</p>
          <h1>
            I PHOTOGRAPH
            <br />
            THE <em>in-between.</em>
          </h1>
          <p>
            Most of these photos are simple moments I noticed around Tunisia:
            changing weather, empty roads, street lights, friends, and places I
            did not want to forget.
          </p>
        </div>
      </section>

      <section className="photo-grid" aria-label="Ahmed's photography collection">
        {photos.map(([file, title, caption], index) => (
          <figure className={`photo-${(index % 7) + 1}`} key={file}>
            <img
              src={`/photography/${file}`}
              alt={title}
              loading={index > 3 ? "lazy" : "eager"}
            />
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")} / 25</span>
              <h2>{title}</h2>
              <p>{caption}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </PageShell>
  );
}
