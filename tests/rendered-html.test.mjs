import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the personal lab homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /夏诗淇/);
  assert.match(html, /FinalAce/);
  assert.match(html, /我从真实问题开始/);
  assert.match(html, /Narziss/);
  assert.match(html, /PathFinder/);
  assert.match(html, /我怎样把问题做成产品/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders a project detail page", async () => {
  const response = await render("/projects/narziss");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /学习缺口提示/);
  assert.match(html, /GitHub 项目讲解/);
  assert.match(html, /我负责的部分/);
});
