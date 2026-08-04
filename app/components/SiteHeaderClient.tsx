"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./BrandMark";

const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/journey", label: "Journey" },
  { href: "/photography", label: "Photography" },
  { href: "/for-dad", label: "For Dad" },
];

const normalizePath = (value: string) =>
  value.length > 1 ? value.replace(/\/$/, "") : value;

export function SiteHeader() {
  const pathname = normalizePath(usePathname() || "/");

  return (
    <header className="site-header">
      <Link
        className={`wordmark${pathname === "/" ? " is-active" : ""}`}
        href="/"
        aria-label="Ahmed Arfaoui — home"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        <BrandMark className="wordmark-symbol" />
        <span className="wordmark-copy">
          AHMED ARFAOUI
          <small>AI ENGINEER · TUNIS</small>
        </span>
      </Link>

      <nav aria-label="Primary navigation">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              className={isActive ? "is-active" : undefined}
              href={item.href}
              key={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="header-actions" aria-label="Download application documents">
        <a
          className="header-action"
          href="/Ahmed-Arfaoui-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <span aria-hidden="true">↓</span>
        </a>
        <a
          className="header-action"
          href="/Ahmed-Arfaoui-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
