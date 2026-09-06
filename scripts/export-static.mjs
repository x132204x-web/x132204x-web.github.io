import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { retiredRoutes, routes } from "./static-routes.mjs";

const projectDir = resolve(import.meta.dirname, "..");
const outputDir = resolve(projectDir, process.argv[2] ?? "out");

// Custom export destinations may be outside the project, but source directories
// must never be removed by the clean export step below.
const outputWithinProject = relative(projectDir, outputDir).split("/")[0] !== "..";
const outputContainsProject = relative(outputDir, projectDir).split("/")[0] !== "..";
if (outputContainsProject || (outputWithinProject && outputDir !== join(projectDir, "out"))) {
  throw new Error("Static output must be out/ or a directory outside the source tree.");
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function redirectPage(target) {
  const safeTarget = escapeHtml(target);
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${safeTarget}"><link rel="canonical" href="${safeTarget}"><title>正在跳转 · Redirecting</title></head><body><p><a href="${safeTarget}">继续浏览 · Continue</a></p></body></html>`;
}

async function writePage(route, html) {
  const destination = route === "/"
    ? join(outputDir, "index.html")
    : join(outputDir, route.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(join(projectDir, "dist/client"), outputDir, { recursive: true });
await rm(join(outputDir, "_headers"), { force: true });
await rm(join(outputDir, ".assetsignore"), { force: true });
await rm(join(outputDir, ".vite"), { recursive: true, force: true });
await writeFile(join(outputDir, ".nojekyll"), "");

const workerUrl = pathToFileURL(join(projectDir, "dist/server/index.js"));
workerUrl.searchParams.set("static", String(Date.now()));
const { default: worker } = await import(workerUrl.href);
const bindings = {
  ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
};
const context = { waitUntil() {}, passThroughOnException() {} };

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
    bindings,
    context,
  );

  if ([301, 302, 303, 307, 308].includes(response.status)) {
    const location = response.headers.get("location");
    if (!location) throw new Error(`Redirect from ${route} has no destination.`);
    const target = new URL(location, "http://localhost");
    if (target.origin !== "http://localhost") {
      throw new Error(`Unexpected external redirect from ${route}: ${target.origin}`);
    }
    await writePage(route, redirectPage(`${target.pathname}${target.search}${target.hash}`));
  } else if (response.status !== 200) {
    throw new Error(`Failed to render ${route}: ${response.status}`);
  } else {
    await writePage(route, await response.text());
  }
}

for (const [route, target] of Object.entries(retiredRoutes)) {
  await writePage(route, redirectPage(target));
}

console.log(`Rendered ${routes.length} routes and ${Object.keys(retiredRoutes).length} legacy redirects to ${outputDir}`);
