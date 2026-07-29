import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "out");
const isVercel = process.argv.includes("--target=vercel");
const projectBase = isVercel ? "/" : "/Ahmed-Arfaoui-Portfolio/";
const requestOrigin = isVercel
  ? "https://ahmed-arfaoui-portfolio.vercel.app"
  : "https://arfaouiahmed1.github.io";
const routes = ["/", "/projects", "/experience", "/journey", "/photography", "/for-dad"];
const staticContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'none'",
  "connect-src 'none'",
  "manifest-src 'self'",
].join("; ");
const workerUrl = pathToFileURL(path.join(root, "dist/server/index.js"));
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);

async function renderRoute(route) {
  const response = await worker.fetch(
    new Request(`${requestOrigin}${route}`, {
      headers: {
        accept: "text/html",
        host: new URL(requestOrigin).host,
        "x-forwarded-host": new URL(requestOrigin).host,
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route} with HTTP ${response.status}`);
  }

  let html = (await response.text())
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*rel=["']modulepreload["'])[^>]*>/gi, "")
    .replace(
      /<meta\b(?=[^>]*http-equiv=["']Content-Security-Policy["'])[^>]*>/gi,
      "",
    )
    .replace(
      "<head>",
      `<head><meta http-equiv="Content-Security-Policy" content="${staticContentSecurityPolicy}">`,
    )
    .replaceAll('href="/', `href="${projectBase}`)
    .replaceAll('src="/', `src="${projectBase}`)
    .replaceAll('poster="/', `poster="${projectBase}`);

  if (!isVercel) {
    html = html.replaceAll(
      "https://arfaouiahmed1.github.io/",
      `https://arfaouiahmed1.github.io${projectBase}`,
    );
  }

  return html;
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist/client"), output, { recursive: true });

let homeHtml = "";
for (const route of routes) {
  const html = await renderRoute(route);
  const routeDirectory = route === "/" ? output : path.join(output, route.slice(1));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), html, "utf8");
  if (route === "/") homeHtml = html;
}

await writeFile(path.join(output, "404.html"), homeHtml, "utf8");
await writeFile(path.join(output, ".nojekyll"), "", "utf8");

if (isVercel) {
  const vercelConfig = {
    headers: [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: staticContentSecurityPolicy },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ],
  };

  await writeFile(
    path.join(output, "vercel.json"),
    `${JSON.stringify(vercelConfig, null, 2)}\n`,
    "utf8",
  );
}

const targetName = isVercel ? "Vercel" : "GitHub Pages";
console.log(`${targetName} export ready at ${output} with ${routes.length} routes`);
