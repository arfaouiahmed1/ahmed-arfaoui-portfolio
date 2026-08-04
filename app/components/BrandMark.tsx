/* eslint-disable @next/next/no-img-element -- the supplied AA mark is a small static brand asset */

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={`aa-dot-mark ${className}`.trim()}
      src="/aa-dot-logo.png"
      alt=""
      width="129"
      height="99"
      aria-hidden="true"
    />
  );
}
