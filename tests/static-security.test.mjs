import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const rootUrl = new URL("../out/", import.meta.url);

test("the GitHub Pages export is script-free and locked to local content", async () => {
  const html = await readFile(new URL("index.html", rootUrl), "utf8");

  assert.doesNotMatch(html, /<script\b/i);
  assert.match(
    html,
    /http-equiv="Content-Security-Policy"[^>]*content="[^"]*script-src 'none'/i,
  );
  assert.match(html, /connect-src 'none'/i);
  assert.match(html, /object-src 'none'/i);
  assert.match(html, /name="referrer" content="no-referrer"/i);
  assert.doesNotMatch(
    html,
    /target="_blank"(?![^>]*rel="noopener noreferrer")/i,
  );
});

test("the public vulnerability reporting file ships with the export", async () => {
  const securityText = await readFile(
    new URL(".well-known/security.txt", rootUrl),
    "utf8",
  );

  assert.match(securityText, /^Contact: mailto:/m);
  assert.match(securityText, /^Expires: /m);
  assert.match(securityText, /^Canonical: https:\/\//m);
  assert.match(securityText, /^Preferred-Languages: /m);
});
