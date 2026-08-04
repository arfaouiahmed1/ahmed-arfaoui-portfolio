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
  ".case-study-rail",
  ".case-study-heading",
  ".case-summary",
  ".case-columns > div",
  ".case-footer",
  ".internship-index",
  ".internship-title > *",
  ".internship-story > *",
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

    const revealNearViewport = () => {
      const viewportHeight = window.innerHeight;

      revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.top <= viewportHeight * 1.18 && rect.bottom >= -64) {
          target.classList.add("is-visible");
        }
      });
    };

    // Progressive enhancement: anything already on screen must be visible
    // before the motion-ready CSS is allowed to hide later content.
    revealNearViewport();
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

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      motionSections.forEach((section) => section.classList.add("is-active"));

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

    revealTargets.forEach((target) => {
      if (!target.classList.contains("is-visible")) observer.observe(target);
    });

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
        const isStickyStory = scene.matches(
          ".journey-scroll-scene, .journey-chapter",
        );
        const progress = isStickyStory
          ? clamp(
              -rect.top /
                Math.max(scene.offsetHeight - window.innerHeight, 1),
            )
          : clamp(
              (window.innerHeight - rect.top) /
                Math.max(window.innerHeight + rect.height, 1),
            );
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

    const handleResize = () => {
      revealNearViewport();
      requestUpdate();
    };

    updateScrollMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
      if (frame) window.cancelAnimationFrame(frame);
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
