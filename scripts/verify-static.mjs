import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
import { retiredRoutes, routes } from "./static-routes.mjs";

const outputDir = resolve(import.meta.dirname, "..", process.argv[2] ?? "out");
const htmlByPath = new Map();
const errors = [];

async function collectHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collectHtml(path);
    else if (entry.name.endsWith(".html")) htmlByPath.set(path, await readFile(path, "utf8"));
  }
}

const unescape = (value) => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const routeFile = (route) => join(outputDir, route.replace(/^\//, ""), "index.html");

await collectHtml(outputDir);
for (const route of [...routes, ...Object.keys(retiredRoutes)]) {
  assert.ok(htmlByPath.has(routeFile(route)), `Missing exported route: ${route}`);
}

let checkedLinks = 0;
for (const [file, rawHtml] of htmlByPath) {
  // Ignore serialized React payloads; verify the actual rendered markup.
  const html = rawHtml.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  const pageUrl = new URL(file.slice(outputDir.length).replace(/index\.html$/, ""), "http://localhost");
  for (const [, attribute, value] of html.matchAll(/\b(href|src|poster)="([^"]+)"/g)) {
    const target = new URL(unescape(value), pageUrl);
    if (target.origin !== pageUrl.origin) continue;
    const pathname = decodeURIComponent(target.pathname);
    let destination = join(outputDir, pathname);
    try {
      if ((await stat(destination)).isDirectory()) destination = join(destination, "index.html");
      await stat(destination);
      checkedLinks++;
      if (attribute === "href" && target.hash && htmlByPath.has(destination)) {
        const id = decodeURIComponent(target.hash.slice(1));
        const destinationHtml = htmlByPath.get(destination).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
        const ids = [...destinationHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => unescape(match[1]));
        if (!ids.includes(id)) errors.push(`${pageUrl.pathname}: missing fragment ${value}`);
      }
    } catch {
      errors.push(`${pageUrl.pathname}: missing ${attribute} ${value}`);
    }
  }
}

for (const language of ["zh", "en"]) {
  try {
    const pdf = await readFile(join(outputDir, `resume-xia-shiqi-${language}.pdf`));
    if (pdf.subarray(0, 5).toString() !== "%PDF-") errors.push(`Invalid ${language} resume PDF`);
  } catch {
    errors.push(`Missing ${language} resume PDF`);
  }
}

assert.deepEqual(errors, [], `Static site has broken local links:\n${errors.join("\n")}`);
console.log(`Verified ${htmlByPath.size} HTML pages, ${checkedLinks} local links/assets, and both resume PDFs.`);
