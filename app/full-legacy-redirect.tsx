"use client";

import { useEffect } from "react";
import { legacyDestination } from "./full-route-utils";

export default function FullLegacyRedirect({ kind, slug = "" }: { kind: "project" | "more"; slug?: string }) {
  const fallback = legacyDestination(kind, slug, "", "");

  useEffect(() => {
    window.location.replace(legacyDestination(kind, slug, window.location.search, window.location.hash));
  }, [kind, slug]);

  return (
    <main className="legacy-entrance" lang="zh-CN">
      <h1>这份记录有了新的位置。</h1>
      <p><a href={fallback}>继续浏览 · Continue reading</a></p>
    </main>
  );
}
