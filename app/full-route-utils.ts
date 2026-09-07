import type { ResumeLocale } from "./resume-data";

export function resumeSource(search: string): ResumeLocale | null {
  const from = new URLSearchParams(search).get("from");
  return from === "zh" || from === "en" ? from : null;
}

function fragment(hash: string) {
  return /^#[a-zA-Z][\w-]*$/.test(hash) ? hash : "";
}

export function projectLanguageDestination(locale: ResumeLocale, slug: string, search: string, hash: string) {
  const other = locale === "zh" ? "en" : "zh";
  const from = resumeSource(search);
  return `/${other}/full/projects/${slug}/${from ? `?from=${from}` : ""}${fragment(hash)}`;
}

export function legacyDestination(kind: "project" | "more", slug: string, search: string, hash: string) {
  if (kind === "more") {
    const sections: Record<string, string> = {
      "#writing": "writing",
      "#travel": "travel",
      "#travel-notes": "travel",
      "#reading": "reading",
      "#reading-notes": "reading",
    };
    const section = sections[hash] ?? "notebook";
    return `/zh/full/#${section}`;
  }

  const from = resumeSource(search);
  const query = new URLSearchParams(search);
  if (!from) query.delete("from");
  const suffix = query.toString();
  return `/${from ?? "zh"}/full/projects/${slug}/${suffix ? `?${suffix}` : ""}${fragment(hash)}`;
}
