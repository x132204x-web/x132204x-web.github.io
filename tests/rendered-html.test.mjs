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
  assert.match(html, /你好👋/);
  assert.match(html, /广东广州/);
  assert.match(html, /广州市执信中学/);
  assert.match(html, /2021 — 2024/);
  assert.match(html, /北京/);
  assert.doesNotMatch(html, /portrait-scan-image/);
  assert.match(html, /Narziss/);
  assert.doesNotMatch(html, /云品册|PathFinder/);
  assert.match(html, /我做过的一些尝试/);
  assert.match(html, /我是如何思考与工作的/);
  assert.match(html, /Pinterest/);
  assert.match(html, /校园 3D 打印平台/);
  assert.match(html, /如果还想了解更多/);
  assert.match(html, /进入详情/);
  assert.match(html, /进入详情/);
  assert.match(html, /AI 工作流/);
  assert.match(html, /https:\/\/finalace\.online/);
  assert.match(html, /finalace-study-path\.png/);
  assert.match(html, /FinalAce 产品界面轮播/);
  assert.match(html, /查看下一张 FinalAce 界面/);
  assert.match(html, /全栈开发/);
  assert.doesNotMatch(html, /解释 GitHub 项目/);
  assert.match(html, /每日信息搜集/);
  assert.match(html, /OPC 大会/);
  assert.doesNotMatch(html, /<h2>博客<\/h2>/);
  assert.doesNotMatch(html, /查看教育背景与能力/);
  assert.doesNotMatch(html, /阅读文章与思考/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders the education and capabilities page", async () => {
  const response = await render("/profile");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /教育背景/);
  assert.match(html, /GPA 3.56 \/ 4.0/);
  assert.match(html, /IELTS 6.5/);
  assert.match(html, /我能做什么/);
  assert.match(html, /网站与小程序/);
});

test("server-renders the personal interests page", async () => {
  const response = await render("/more");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /格鲁吉亚 · 梅斯蒂亚/);
  assert.match(html, /格鲁吉亚 · 巴统/);
  assert.match(html, /\/reading-photo\.jpg/);
  assert.match(html, /俄罗斯摩尔曼斯克/);
  assert.match(html, /新疆伊犁/);
  assert.match(html, /读书是另一种认识世界的方式/);
  assert.match(html, /回到主页/);
  assert.match(html, /返回首页/);
  assert.match(html, /<h2>博客<\/h2>/);
  assert.match(html, /五天做出 FinalAce/);
  assert.match(html, /持续筛选 AI 工具/);
  assert.match(html, /AI 不能创造人与人之间的相遇/);
  assert.match(html, /城市怎样影响一个年轻人的选择/);
  assert.match(html, /42 小时、2250 公里/);
  assert.match(html, /finalace-home\.png/);
  assert.match(html, /portrait-xinjiang\.jpg/);
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
  assert.match(html, /人类知识树/);
  assert.doesNotMatch(html, /解释 GitHub 项目/);
  assert.match(html, /我负责的部分/);
});

test("server-renders a writing detail page", async () => {
  const response = await render("/articles/finalace-from-zero-to-one");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /五天做出 FinalAce/);
  assert.match(html, /Beta 1.0/);
  assert.match(html, /返回博客/);
  assert.match(html, /finalace-home\.png/);
});
