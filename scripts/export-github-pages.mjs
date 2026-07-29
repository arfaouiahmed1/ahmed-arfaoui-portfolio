import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "out");
const workerUrl = pathToFileURL(path.join(root, "dist/server/index.js"));
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://arfaouiahmed1.github.io/", {
    headers: {
      accept: "text/html",
      host: "arfaouiahmed1.github.io",
      "x-forwarded-host": "arfaouiahmed1.github.io",
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
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

let html = await response.text();

// This portfolio is intentionally interaction-light, so GitHub Pages receives
// a resilient static snapshot without the server-only RSC runtime.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b(?=[^>]*rel=["']modulepreload["'])[^>]*>/gi, "")
  .replaceAll('href="/', 'href="./')
  .replaceAll('src="/', 'src="./')
  .replaceAll(
    'content="https://arfaouiahmed1.github.io/og.png"',
    'content="https://arfaouiahmed1.github.io/Ahmed-Arfaoui-Portfolio/og.png"',
  )
  .replaceAll(
    'href="https://arfaouiahmed1.github.io/ahmed-arfaoui-portrait.jpg"',
    'href="./ahmed-arfaoui-portrait.jpg"',
  );

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist/client"), output, { recursive: true });
await writeFile(path.join(output, "index.html"), html, "utf8");
await writeFile(path.join(output, "404.html"), html, "utf8");
await writeFile(path.join(output, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages export ready at ${output}`);
