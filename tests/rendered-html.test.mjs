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
  assert.match(html, /ASHLEY XIA|Ashley/);
  assert.match(html, /Narziss/);
  assert.doesNotMatch(html, /云品册|PathFinder/);
  assert.match(html, /我还在寻找方向/);
  assert.match(html, /我做过的一些尝试/);
  assert.match(html, /我是如何做一个产品的/);
  assert.match(html, /Pinterest/);
  assert.match(html, /校园 3D 打印平台/);
  assert.match(html, /如果还想了解更多/);
  assert.match(html, /进入详情/);
  assert.match(html, /进入详情/);
  assert.match(html, /AI 探索记录/);
  assert.match(html, /我的思考/);
  assert.match(html, /阅读文章与思考/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders the personal interests page", async () => {
  const response = await render("/more");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /俄罗斯摩尔曼斯克/);
  assert.match(html, /读书是另一种认识世界的方式/);
  assert.match(html, /回到夏诗淇的主页/);
  assert.match(html, /返回首页/);
});

test("server-renders the English profile page", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Ashley Xia/);
  assert.match(html, /What I have done, and who I am becoming/);
  assert.match(html, /FinalAce/);
  assert.match(html, /Narziss/);
  assert.match(html, /Recent Notes/i);
  assert.match(html, /href="\/"/);
});

test("server-renders a project detail page", async () => {
  const response = await render("/projects/narziss");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /发现知识缺口/);
  assert.match(html, /解释 GitHub 项目/);
  assert.match(html, /我负责的部分/);
});

test("server-renders a writing detail page", async () => {
  const response = await render("/articles/waic-observation");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /参加 WAIC 后，我开始更关心使用场景/);
  assert.match(html, /Pebble/);
});
