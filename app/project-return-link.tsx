"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSource() {
  const from = new URLSearchParams(window.location.search).get("from");
  return from === "zh" || from === "en" ? from : null;
}

export default function ProjectReturnLink() {
  const source = useSyncExternalStore(subscribe, getSource, () => null);

  return (
    <a href={source ? `/${source}/#work` : "/zh/full/#projects"} lang={source === "en" ? "en" : "zh-CN"}>
      {source === "en" ? "Back to résumé" : source === "zh" ? "返回简历" : "返回项目"}
    </a>
  );
}
