import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectDir = resolve(import.meta.dirname, "..");
const outputDir = resolve(projectDir, process.argv[2] ?? "out");

const routes = [
  "/",
  "/en",
  "/zh",
  "/more",
  "/profile",
  "/projects/finalace",
  "/projects/cloud-catalog",
  "/updates",
  "/updates/ai-agent-open-source",
  "/updates/ai-coding-tools",
  "/updates/finalace-start",
  "/updates/personal-company",
  "/updates/waic-2026",
  "/articles/finalace-from-zero-to-one",
  "/articles/my-ai-workflow",
  "/articles/ai-and-encounter",
  "/articles/cities-and-choices",
  "/articles/xinjiang-solo-drive",
];

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

  if (response.status !== 200) {
    throw new Error(`Failed to render ${route}: ${response.status}`);
  }

  const destination = route === "/"
    ? join(outputDir, "index.html")
    : join(outputDir, route.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, await response.text());
}

console.log(`Rendered ${routes.length} routes to ${outputDir}`);
