export const browserContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' ws://localhost:* ws://127.0.0.1:*",
  "manifest-src 'self'",
].join("; ");

export const hostedContentSecurityPolicy = [
  browserContentSecurityPolicy,
  "frame-ancestors 'none'",
].join("; ");

export const hostedSecurityHeaders: Readonly<Record<string, string>> = {
  "Content-Security-Policy": hostedContentSecurityPolicy,
  "Cross-Origin-Opener-Policy": "same-origin",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "0",
};
