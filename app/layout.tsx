import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const metadataBase = host ? new URL(`${protocol}://${host}`) : undefined;

  return {
    metadataBase,
    title: "Ahmed Arfaoui — AI Engineer",
    description:
      "AI engineer building agentic systems, browser automation, computer vision products, and end-to-end machine learning platforms.",
    icons: {
      icon: "/ahmed-arfaoui-portrait.jpg",
      apple: "/ahmed-arfaoui-portrait.jpg",
    },
    openGraph: {
      title: "Ahmed Arfaoui — Intelligence at Full Throttle",
      description:
        "Agentic AI, browser automation, data science, and machine learning products engineered for measurable performance.",
      type: "website",
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ahmed Arfaoui — Intelligence at Full Throttle",
      description:
        "AI engineer building intelligent systems that observe, reason, and act.",
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
      <body>{children}</body>
    </html>
  );
}
