import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./pages.css";
import { browserContentSecurityPolicy } from "./security";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const metadataBase = host ? new URL(`${protocol}://${host}`) : undefined;

  return {
    metadataBase,
    title: "Ahmed Arfaoui — AI Engineer & Photographer",
    description:
      "My projects, internships, photography, and the road from IPEIB to graduating from ESPRIT.",
    icons: {
      icon: "/aa-dot-logo.png",
      shortcut: "/aa-dot-logo.png",
      apple: "/aa-dot-logo.png",
    },
    openGraph: {
      title: "Ahmed Arfaoui — Intelligence at Full Throttle",
      description:
        "My AI projects, internship experience, photography, and personal journey.",
      type: "website",
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ahmed Arfaoui — Intelligence at Full Throttle",
      description:
        "AI engineer, data science graduate, Formula 1 fan, and photographer.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={browserContentSecurityPolicy}
        />
        <meta name="referrer" content="no-referrer" />
      </head>
      <body>{children}</body>
    </html>
  );
}
