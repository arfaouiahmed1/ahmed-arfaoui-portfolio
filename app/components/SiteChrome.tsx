const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/journey", label: "Journey" },
  { href: "/photography", label: "Photography" },
  { href: "/for-dad", label: "For Dad" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ahmed Arfaoui — home">
        <span>AA</span>
        <span className="wordmark-copy">
          AHMED ARFAOUI
          <small>AI ENGINEER · TUNIS</small>
        </span>
      </Link>

      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        href="/Ahmed-Arfaoui-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV <span aria-hidden="true">↓</span>
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-mark">
        AA<span>®</span>
      </div>
      <p>AHMED ARFAOUI · AI & DATA SCIENCE ENGINEER</p>
      <p>DESIGNED WITH CURIOSITY · BUILT IN TUNIS</p>
      <nav className="footer-links" aria-label="Security and page controls">
        <a href="/.well-known/security.txt">SECURITY</a>
        <a href="#top">BACK TO POLE ↑</a>
      </nav>
    </footer>
  );
}

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
import Link from "next/link";
