import assert from "node:assert/strict";
import test from "node:test";

let worker;

async function render(path = "/") {
  if (!worker) {
    const workerUrl = new URL("../dist/server/index.js", import.meta.url);
    workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
    ({ default: worker } = await import(workerUrl.href));
  }

  return worker.fetch(
    new Request(`https://portfolio.example${path}`, {
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

async function htmlFor(path) {
  const response = await render(path);
  assert.equal(response.status, 200, `${path} should render`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("home renders Ahmed's complete multi-page portfolio entry point", async () => {
  const html = await htmlFor("/");
  assert.match(html, /AI Engineer &amp; Photographer/);
  assert.match(html, /ENGINEERING/);
  assert.match(html, /FULL THROTTLE/);
  assert.match(html, /Open Web Catcher/);
  assert.match(html, /FAILURE DID NOT/);
  assert.match(html, /Ahmed-Arfaoui-CV\.pdf/);
  assert.match(html, /photography\/15-horizon-and-me\.webp/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|SkeletonPreview/);
});

test("projects and internships expose every detailed case", async () => {
  const projects = await htmlFor("/projects");
  for (const title of [
    "Open Web Catcher",
    "NEWSBOT AI",
    "FarmWise",
    "End-to-End MLOps",
    "Speech Emotion Recognition",
    "Telecom Churn Prediction",
  ]) {
    assert.match(projects, new RegExp(title));
  }
  assert.match(projects, /THE CHALLENGE/);
  assert.match(projects, /THE APPROACH/);
  assert.match(projects, /THE OUTCOME/);

  const experience = await htmlFor("/experience");
  for (const company of ["Soft Stars", "VERMEG", "ESPRIT", "CMR Tunisie"]) {
    assert.match(experience, new RegExp(company));
  }
});

test("journey includes the graduation film, mother, and excellent mention", async () => {
  const html = await htmlFor("/journey");
  assert.match(html, /IPEIB/);
  assert.match(html, /excellent mention/i);
  assert.match(html, /graduation-presentation\.mp4/);
  assert.match(html, /graduation-with-mom-and-friends\.webp/);
  assert.match(html, /my mother and friends/i);
});

test("photography contains all 25 supplied frames", async () => {
  const html = await htmlFor("/photography");
  const photoMatches = html.match(/\/photography\/[^"]+\.webp/g) ?? [];
  assert.ok(new Set(photoMatches).size >= 25);
  assert.match(html, /25-wind-country\.webp/);
});

test("memorial renders all four family photographs with restrained language", async () => {
  const html = await htmlFor("/for-dad");
  assert.match(html, /brain strokes/i);
  assert.match(html, /Alzheimer/i);
  for (const file of [
    "01-younger-years.webp",
    "02-at-work.webp",
    "03-at-home.webp",
    "04-an-afternoon-out.webp",
  ]) {
    assert.match(html, new RegExp(file));
  }
  assert.doesNotMatch(html, /Photograph to be added later/);
});

test("public contact and navigation routes are present", async () => {
  const html = await htmlFor("/");
  for (const route of ["/projects", "/experience", "/journey", "/photography", "/for-dad"]) {
    assert.match(html, new RegExp(`href="${route}"`));
  }
  assert.match(html, /mailto:ahmedarfaoui2000@gmail\.com/);
  assert.match(html, /github\.com\/arfaouiahmed1/);
  assert.match(html, /linkedin\.com\/in\/ahmedarfaoui99/);
});
