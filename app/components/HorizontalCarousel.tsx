"use client";

import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  ariaLabel: string;
  className?: string;
}

export function HorizontalCarousel({ children, ariaLabel, className = "" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const childElements = Array.from(scrollRef.current.children) as HTMLElement[];
    if (childElements.length > 0) {
      let closestIdx = 0;
      let minDiff = Infinity;
      childElements.forEach((el, idx) => {
        const diff = Math.abs(el.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveIndex(closestIdx);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [children]);

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <div className={`carousel-wrapper ${className}`.trim()} aria-label={ariaLabel}>
      <div className="carousel-controls" aria-label={`${ariaLabel} controls`}>
        <div className="carousel-indicators">
          {children.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot ${idx === activeIndex ? "is-active" : ""}`}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex ? "true" : "false"}
            />
          ))}
        </div>
        <div className="carousel-nav-buttons">
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => scrollTo("left")}
            disabled={!canScrollLeft}
            aria-label="Previous slide"
          >
            ← PREV
          </button>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => scrollTo("right")}
            disabled={!canScrollRight}
            aria-label="Next slide"
          >
            NEXT →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="carousel-track"
        tabIndex={0}
        role="region"
        aria-label={`${ariaLabel} scroll track`}
      >
        {children.map((child, idx) => (
          <div key={idx} className="carousel-slide">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
