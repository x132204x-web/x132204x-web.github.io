import { spawnSync } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { resumeData } from "../app/resume-data.ts";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const temporaryDirectory = await mkdtemp(path.join(tmpdir(), "personal-site-resume-"));

try {
  const dataPath = path.join(temporaryDirectory, "resume-data.json");
  await writeFile(dataPath, JSON.stringify(resumeData), "utf8");
  const result = spawnSync(
    process.env.RESUME_PYTHON || "python3",
    [
      path.join(projectRoot, "scripts/render-resume-pdfs.py"),
      "--data", dataPath,
      "--output-dir", path.join(projectRoot, "public"),
    ],
    { stdio: "inherit", cwd: projectRoot, env: process.env },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`Resume PDF generation failed (exit ${result.status ?? result.signal}).`);
  }
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
