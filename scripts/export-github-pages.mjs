import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "out");
const projectBase = "/Ahmed-Arfaoui-Portfolio/";
const routes = ["/", "/projects", "/experience", "/journey", "/photography", "/for-dad"];
const workerUrl = pathToFileURL(path.join(root, "dist/server/index.js"));
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);

async function renderRoute(route) {
  const response = await worker.fetch(
    new Request(`https://arfaouiahmed1.github.io${route}`, {
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
    throw new Error(`Static export failed for ${route} with HTTP ${response.status}`);
  }

  return (await response.text())
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*rel=["']modulepreload["'])[^>]*>/gi, "")
    .replaceAll('href="/', `href="${projectBase}`)
    .replaceAll('src="/', `src="${projectBase}`)
    .replaceAll('poster="/', `poster="${projectBase}`)
    .replaceAll(
      "https://arfaouiahmed1.github.io/",
      `https://arfaouiahmed1.github.io${projectBase}`,
    );
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

console.log(`GitHub Pages export ready at ${output} with ${routes.length} routes`);
