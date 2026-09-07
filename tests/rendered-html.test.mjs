import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { legacyDestination, projectLanguageDestination, resumeSource } from "../app/full-route-utils.ts";
import { projectSlugs, articleSlugs } from "../scripts/static-routes.mjs";

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

async function output(route) {
  return visibleHtml(await readFile(new URL(`../out${route}/index.html`, import.meta.url), "utf8"));
}

function hasLink(html, destination, message = destination) {
  assert.ok(html.includes(`href="${destination}"`), `Missing link: ${message}`);
}

test("default and former profile entrances lead to the Chinese resume", async () => {
  for (const path of ["/", "/profile"]) {
    const response = await render(path);
    assert.ok([301, 302, 303, 307, 308].includes(response.status), `${path} must redirect`);
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname.replace(/\/$/, ""), "/zh");
    const html = await output(path === "/" ? "" : path);
    assert.match(html, /http-equiv="refresh"/);
    assert.match(html, /href="\/zh\/?"/);
  }
});

test("both resumes retain their facts, matching PDFs and language-specific full-site links", async () => {
  for (const [locale, otherLocale, school] of [["zh", "en", "中国农业大学"], ["en", "zh", "China Agricultural University"]]) {
    const response = await render(`/${locale}`);
    assert.equal(response.status, 200);
    const html = visibleHtml(await response.text());
    assert.ok(html.includes(school));
    assert.match(html, /FinalAce/);
    assert.match(html, /3\.56/);
    assert.match(html, /6\.5/);
    assert.match(html, /2024.*2028/);
    hasLink(html, "mailto:x132204x@163.com");
    hasLink(html, `/${otherLocale}/`);
    hasLink(html, `/${locale}/full/`);
    hasLink(html, `/resume-xia-shiqi-${locale}.pdf`);
    for (const slug of projectSlugs) hasLink(html, `/${locale}/full/projects/${slug}/?from=${locale}`);
    assert.doesNotMatch(html, /Narziss|PathFinder|Case study · Chinese|Full site · 中文/);
  }
});

test("both full sites publish the notebook and all project and article entrances", async () => {
  for (const locale of ["zh", "en"]) {
    const response = await render(`/${locale}/full`);
    assert.equal(response.status, 200);
    const html = visibleHtml(await response.text());
    for (const section of ["top", "main-content", "about", "projects", "collaboration", "notebook", "travel", "reading", "writing", "contact"]) {
      assert.ok(html.includes(`id="${section}"`), `Missing ${locale} section ${section}`);
    }
    hasLink(html, `/${locale}/`);
    hasLink(html, `/${locale === "zh" ? "en" : "zh"}/full/`);
    for (const slug of projectSlugs) hasLink(html, `/${locale}/full/projects/${slug}/`);
    for (const slug of articleSlugs) hasLink(html, `/${locale}/full/articles/${slug}/`);
    assert.doesNotMatch(html, /href="\/more\/?(?:#writing)?"/);
  }
});

test("all localized details render their content, collection return and language counterpart", async () => {
  for (const locale of ["zh", "en"]) {
    const other = locale === "zh" ? "en" : "zh";
    for (const [kind, slugs, section] of [["projects", projectSlugs, "projects"], ["articles", articleSlugs, "writing"]]) {
      for (const slug of slugs) {
        const route = `/${locale}/full/${kind}/${slug}`;
        const response = await render(route);
        assert.equal(response.status, 200, route);
        const html = visibleHtml(await response.text());
        assert.match(html, /<h1[^>]*>[^<]+<\/h1>/);
        assert.ok(html.includes('id="main-content"'));
        assert.ok(html.includes(`lang="${locale === "zh" ? "zh-CN" : "en"}"`));
        hasLink(html, `/${locale}/full/#${section}`);
        hasLink(html, `/${other}/full/${kind}/${slug}/`);
        hasLink(html, `https://x132204x-web.github.io${route}/`, "localized canonical URL");
        assert.doesNotMatch(html, /href="\/more\/?(?:#writing)?"/);
      }
    }
  }
});

test("exported localized documents identify their language at the HTML root", async () => {
  for (const locale of ["zh", "en"]) {
    for (const suffix of ["", "/full", ...projectSlugs.map(slug => `/full/projects/${slug}`), ...articleSlugs.map(slug => `/full/articles/${slug}`)]) {
      const html = await output(`/${locale}${suffix}`);
      assert.match(html, new RegExp(`<html\\b[^>]*lang="${locale === "zh" ? "zh-CN" : "en"}"`));
    }
  }
});

test("legacy project and more entrances expose a fallback without a competing fixed redirect", async () => {
  for (const slug of projectSlugs) {
    const response = await render(`/projects/${slug}`);
    assert.equal(response.status, 200);
    const html = visibleHtml(await response.text());
    hasLink(html, `/zh/full/projects/${slug}/`);
    assert.doesNotMatch(html, /http-equiv="refresh"/);
  }
  const more = await output("/more");
  hasLink(more, "/zh/full/#notebook");
  assert.doesNotMatch(more, /http-equiv="refresh"/);
  for (const slug of articleSlugs) {
    const response = await render(`/articles/${slug}`);
    assert.ok([301, 302, 303, 307, 308].includes(response.status));
    assert.equal(new URL(response.headers.get("location"), "http://localhost").href, `http://localhost/zh/full/articles/${slug}/`);
    hasLink(await output(`/articles/${slug}`), `/zh/full/articles/${slug}/`);
  }
});

test("legacy project redirects and language changes preserve the original resume source", () => {
  assert.equal(legacyDestination("project", "finalace", "?from=en", ""), "/en/full/projects/finalace/?from=en");
  assert.equal(legacyDestination("project", "finalace", "?from=zh", "#main-content"), "/zh/full/projects/finalace/?from=zh#main-content");
  assert.equal(legacyDestination("project", "cloud-catalog", "", ""), "/zh/full/projects/cloud-catalog/");
  assert.equal(legacyDestination("project", "finalace", "?from=other&utm_source=old", "#//external"), "/zh/full/projects/finalace/?utm_source=old");
  assert.equal(projectLanguageDestination("en", "finalace", "?from=en", "#main-content"), "/zh/full/projects/finalace/?from=en#main-content");
  assert.equal(projectLanguageDestination("zh", "finalace", "?from=en", ""), "/en/full/projects/finalace/?from=en");
  assert.equal(projectLanguageDestination("zh", "cloud-catalog", "", ""), "/en/full/projects/cloud-catalog/");
  assert.equal(resumeSource("?from=en"), "en");
  assert.equal(resumeSource("?from=other"), null);
});

test("legacy more bookmarks map to the integrated notebook", () => {
  for (const [hash, section] of [["", "notebook"], ["#writing", "writing"], ["#travel", "travel"], ["#travel-notes", "travel"], ["#reading", "reading"], ["#reading-notes", "reading"], ["#unknown", "notebook"]]) {
    assert.equal(legacyDestination("more", "", "", hash), `/zh/full/#${section}`);
  }
});

test("unknown localized and legacy details return missing-page responses", async () => {
  for (const route of ["/projects/missing", "/articles/missing", "/zh/full/projects/missing", "/en/full/projects/missing", "/zh/full/articles/missing", "/en/full/articles/missing"]) {
    assert.equal((await render(route)).status, 404, route);
  }
});
