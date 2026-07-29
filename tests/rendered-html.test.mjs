import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: {
        accept: "text/html",
        host: "portfolio.example",
        "x-forwarded-host": "portfolio.example",
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
}

test("server-renders Ahmed Arfaoui's complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ahmed Arfaoui — AI Engineer<\/title>/i);
  assert.match(html, /ENGINEERING/);
  assert.match(html, /INTELLIGENCE/);
  assert.match(html, /FULL THROTTLE/);
  assert.match(html, /Open Web Catcher/);
  assert.match(html, /FarmWise/);
  assert.match(html, /NEWSBOT AI/);
  assert.match(html, /Ahmed-Arfaoui-CV\.pdf/);
  assert.match(html, /ahmed-arfaoui-portrait\.jpg/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|SkeletonPreview/);
});

test("portfolio exposes the expected navigation and public contact routes", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="#work"/);
  assert.match(html, /href="#about"/);
  assert.match(html, /href="#contact"/);
  assert.match(html, /mailto:ahmedarfaoui2000@gmail\.com/);
  assert.match(html, /github\.com\/arfaouiahmed1/);
  assert.match(html, /linkedin\.com\/in\/ahmedarfaoui99/);
});
