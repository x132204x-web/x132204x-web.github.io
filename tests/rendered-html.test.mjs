import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerPromise = import(new URL("../dist/server/index.js", import.meta.url));

async function render(pathname) {
  const { default: worker } = await workerPromise;
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

function visibleHtml(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

test("default and former profile entrances lead to the Chinese resume", async () => {
  for (const path of ["/", "/profile"]) {
    const response = await render(path);
    assert.ok([301, 302, 303, 307, 308].includes(response.status), `${path} must redirect`);
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname.replace(/\/$/, ""), "/zh");
    const output = await readFile(new URL(`../out${path === "/" ? "" : path}/index.html`, import.meta.url), "utf8");
    assert.match(output, /http-equiv="refresh"/);
    assert.match(output, /href="\/zh\/?"/);
  }
});

test("both resumes publish consistent core facts with working language and download entrances", async () => {
  for (const [locale, otherLocale, school] of [["zh", "en", "中国农业大学"], ["en", "zh", "China Agricultural University"]]) {
    const response = await render(`/${locale}`);
    assert.equal(response.status, 200);
    const html = visibleHtml(await response.text());
    assert.match(html, /^<!DOCTYPE html>/i);
    assert.ok(html.includes(school));
    assert.match(html, /FinalAce/);
    assert.match(html, /3\.56/);
    assert.match(html, /6\.5/);
    assert.match(html, /2024.*2028/);
    assert.match(html, /href="mailto:x132204x@163\.com"/);
    assert.ok(html.includes(`href="/${otherLocale}/"`), "language switch must remain in the resume view");
    assert.ok(html.includes(`href="/resume-xia-shiqi-${locale}.pdf"`), "resume download must match the page language");
    assert.match(html, /href="https:\/\/finalace\.online"/);
    assert.doesNotMatch(html, /Narziss|PathFinder|View repository|travel-georgia-mestia\.jpg/);
    assert.doesNotMatch(html, /href="\/en\/full\/?"/, "do not expose an unfinished English detailed site");
  }
});

test("the detailed Chinese website remains accessible at its explicit entrance", async () => {
  const response = await render("/zh/full");
  assert.equal(response.status, 200);
  const html = visibleHtml(await response.text());
  assert.match(html, /你好👋/);
  assert.match(html, /我做过的一些尝试/);
  assert.match(html, /FinalAce/);
  assert.match(html, /云品册/);
  assert.match(html, /id="projects"/);
  assert.match(html, /href="\/zh\/?"/);
  assert.match(html, /href="\/more\/?(?:#writing)?"/);
  assert.doesNotMatch(html, /Narziss|PathFinder/);
});

test("project and writing details retain their return destinations", async () => {
  const project = await render("/projects/cloud-catalog");
  assert.equal(project.status, 200);
  const projectHtml = visibleHtml(await project.text());
  assert.match(projectHtml, /商品资料集中管理/);
  assert.match(projectHtml, /企业成员协作/);
  assert.match(projectHtml, /href="\/zh\/full\/?#projects"/);

  const article = await render("/articles/finalace-from-zero-to-one");
  assert.equal(article.status, 200);
  const articleHtml = visibleHtml(await article.text());
  assert.match(articleHtml, /五天做出 FinalAce/);
  assert.match(articleHtml, /href="\/more\/?#writing"/);
});

test("an unknown project returns an actual missing-page response", async () => {
  const response = await render("/projects/this-project-does-not-exist");
  assert.equal(response.status, 404);
});
