"use client";

import { useEffect } from "react";

const revealSelector = [
  ".hero-copy > *",
  ".hero-bottom > *",
  ".section-heading > *",
  ".project",
  ".lab-module",
  ".about > *",
  ".experience-grid article",
  ".toolkit > *",
  ".contact > *",
  ".page-hero > .eyebrow",
  ".page-hero > h1",
  ".page-hero > p:last-child",
  ".case-study",
  ".internship-card",
  ".photo-hero-copy > *",
  ".photo-hero-portrait",
  ".photo-frame",
  ".graduation-film > *",
  ".graduation-photos figure",
  ".journey-opening-copy > *",
  ".journey-opening-status",
  ".journey-roadmap li",
  ".journey-chapter-copy > *",
  ".journey-chapter-media",
  ".journey-telemetry",
  ".journey-next > *",
  ".memorial-story > *",
  ".memory-photo",
  ".memorial-close > *",
].join(",");

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

export function MotionSystem() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-scene]"),
    );
    const motionSections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );

    motionSections.forEach((section, index) => {
      section.classList.add("motion-scene");
      section.style.setProperty("--motion-index", String(index));
    });

    revealTargets.forEach((target, index) => {
      target.dataset.reveal = "";
      target.style.setProperty("--reveal-delay", `${(index % 6) * 55}ms`);
    });

    root.dataset.motionReady = "true";

    if (reducedMotion) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      root.style.setProperty("--page-scroll", "1");
      scenes.forEach((scene) =>
        scene.style.setProperty("--scene-progress", "0.5"),
      );
      motionSections.forEach((section) => {
        section.classList.add("is-active");
        section.style.setProperty("--section-progress", "0.5");
      });

      return () => {
        delete root.dataset.motionReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8%",
        threshold: 0.08,
      },
    );

    revealTargets.forEach((target) => observer.observe(target));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      {
        rootMargin: "-18% 0px -18%",
        threshold: 0.01,
      },
    );

    motionSections.forEach((section) => sectionObserver.observe(section));

    let frame = 0;
    const updateScrollMotion = () => {
      frame = 0;
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      root.style.setProperty(
        "--page-scroll",
        clamp(window.scrollY / scrollRange).toFixed(4),
      );

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const sceneRange = Math.max(scene.offsetHeight - window.innerHeight, 1);
        const progress = clamp(-rect.top / sceneRange);
        scene.style.setProperty("--scene-progress", progress.toFixed(4));
      });

      motionSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = clamp(
          (window.innerHeight - rect.top) /
            Math.max(window.innerHeight + rect.height, 1),
        );
        section.style.setProperty("--section-progress", progress.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrollMotion);
    };

    updateScrollMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
