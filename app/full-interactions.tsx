"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import ProjectReturnLink from "./project-return-link";

type Locale = "zh" | "en";
type TravelEntry = { id: string; image: string; alt: string; place: string; date: string; note: string; position?: string };
type ReadingEntry = { id: string; title: string; author?: string; note: string };

function subscribeHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => { window.removeEventListener("hashchange", callback); window.removeEventListener("popstate", callback); };
}

export function HomeLanguageLink({ locale }: { locale: Locale }) {
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash, () => "");
  const allowed = ["top", "about", "projects", "collaboration", "exploration", "process", "notebook", "travel", "reading", "writing", "updates", "contact"];
  const safeHash = allowed.includes(hash.slice(1)) ? hash : "";
  return <a href={`/${locale === "zh" ? "en" : "zh"}/full/${safeHash}`} hrefLang={locale === "zh" ? "en" : "zh-CN"}>{locale === "zh" ? "EN" : "中文"}</a>;
}

export function ReturnToCollection({ locale, kind }: { locale: Locale; kind: "project" | "article" }) {
  return kind === "project" ? <ProjectReturnLink locale={locale} /> : <a href={`/${locale}/full/#writing`}>← {locale === "zh" ? "返回手记目录" : "Back to the notebook"}</a>;
}

export function HeroNotebook({ locale }: { locale: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const images = Array.from(root.current?.querySelectorAll("img") ?? []);
    const deadline = setTimeout(() => { if (!cancelled) setReady(true); }, 1800);
    Promise.allSettled(images.map(img => img.decode())).then(() => {
      clearTimeout(deadline);
      if (!cancelled) setReady(true);
    });
    return () => { cancelled = true; clearTimeout(deadline); };
  }, []);
  const zh = locale === "zh";
  return (
    <div ref={root} className={`fn-hero-notebook${ready ? " is-ready" : ""}`} aria-label={zh ? "生活与项目的三张照片" : "Three photographs from life and work"}>
      <noscript><style>{`.fn-hero-notebook .fn-hero-photo { transform: rotate(var(--photo-turn)); animation: none; }`}</style></noscript>
      <span className="fn-hero-margin" aria-hidden="true">WORK / LIFE / IN BETWEEN</span>
      <figure className="fn-hero-photo fn-hero-photo-one"><img src="/portrait-xinjiang-stage.jpg" alt={zh ? "夏诗淇在新疆的山间" : "Ashley in the mountains of Xinjiang"} width="1255" height="760" fetchPriority="high" /><figcaption><span>{zh ? "在山里" : "In the mountains"}</span><small>XINJIANG / 2026</small></figcaption></figure>
      <figure className="fn-hero-photo fn-hero-photo-two"><img src="/portrait-st-petersburg-crop.jpg" alt={zh ? "在圣彼得堡冬宫看展" : "A visit to the Hermitage in St Petersburg"} width="920" height="1260" /><figcaption><span>{zh ? "慢慢看" : "Taking it in"}</span><small>ST. PETERSBURG</small></figcaption></figure>
      <figure className="fn-hero-photo fn-hero-photo-three"><img src="/finalace-home.png" alt={zh ? "我参与设计与开发的 FinalAce" : "FinalAce, a product I designed and built"} width="1353" height="1070" /><figcaption><span>{zh ? "动手做" : "Making things"}</span><small>FINALACE</small></figcaption></figure>
      <span className="fn-hero-handnote" aria-hidden="true">{zh ? "从屏幕前，也从路上。" : "At my desk. Out in the world."}<span>↖</span></span>
    </div>
  );
}

export function ChapterBookmarks({ locale }: { locale: Locale }) {
  const sections = ["projects", "collaboration", "notebook", "contact"];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const targets = ["projects", "collaboration", "notebook", "contact"];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(targets.indexOf(visible[0].target.id));
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    targets.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  const labels = locale === "zh" ? ["项目", "协作", "手记", "联系"] : ["Work", "Together", "Notebook", "Contact"];
  return <nav className="fn-bookmarks" aria-label={locale === "zh" ? "章节书签" : "Chapter bookmarks"}><div><span className="fn-bookmark-marker" aria-hidden="true" style={{ transform: `translateX(${active * 100}%)` }} />{sections.map((id, index) => <a key={id} href={`#${id}`} aria-current={active === index ? "location" : undefined} onClick={() => setActive(index)}><small aria-hidden="true">0{index + 1}</small>{labels[index]}</a>)}</div></nav>;
}

export function NotebookAlbum({ locale, entries }: { locale: Locale; entries: TravelEntry[] }) {
  const zh = locale === "zh";
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [pending, setPending] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const activeRef = useRef(0);
  const requestedRef = useRef(0);
  const requestId = useRef(0);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => () => { requestId.current++; if (exitTimer.current) clearTimeout(exitTimer.current); }, []);

  async function choose(index: number) {
    const next = (index + entries.length) % entries.length;
    requestedRef.current = next;
    const request = ++requestId.current;
    setError(false);
    if (next === activeRef.current) { setPending(null); return; }
    setPending(next);
    const picture = new Image();
    picture.src = entries[next].image;
    try { await picture.decode(); }
    catch { if (request === requestId.current) { setPending(null); setError(true); requestedRef.current = activeRef.current; } return; }
    if (request !== requestId.current) return;
    if (exitTimer.current) clearTimeout(exitTimer.current);
    setPrevious(activeRef.current);
    activeRef.current = next;
    setActive(next);
    setPending(null);
    exitTimer.current = setTimeout(() => setPrevious(null), 320);
  }
  const item = entries[active];
  const oldItem = previous === null ? null : entries[previous];
  return <div className="fn-album">
    <div className="fn-album-stage" aria-busy={pending !== null}
      onPointerDown={event => { if (event.pointerType !== "mouse") pointerStart.current = { x: event.clientX, y: event.clientY }; }}
      onPointerCancel={() => { pointerStart.current = null; }}
      onPointerUp={event => { const start = pointerStart.current; pointerStart.current = null; if (start && Math.abs(event.clientX - start.x) > 45 && Math.abs(event.clientX - start.x) > Math.abs(event.clientY - start.y) * 1.5) void choose(requestedRef.current + (event.clientX < start.x ? 1 : -1)); }}>
      {oldItem && <img className="fn-album-photo fn-album-exit" src={oldItem.image} alt="" style={{ objectPosition: oldItem.position ?? "center" }} aria-hidden="true" />}
      <img className={`fn-album-photo${oldItem ? " fn-album-enter" : ""}`} key={item.id} src={item.image} alt={item.alt} width="1400" height="1000" loading="lazy" style={{ objectPosition: item.position ?? "center" }} />
      <span className="fn-album-count">{String(active + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}</span>
    </div>
    <div className="fn-album-caption" aria-live="polite" aria-atomic="true"><div><p className="fn-eyebrow">{item.date || (zh ? "旅行手记" : "TRAVEL NOTES")}</p><h4>{item.place}</h4><p>{item.note}</p>{error && <small role="status">{zh ? "这张照片暂时没能加载，请再试一次。" : "This photo did not load. Please try again."}</small>}</div><div className="fn-album-controls"><button type="button" onClick={() => void choose(requestedRef.current - 1)} aria-label={zh ? "上一张照片" : "Previous photo"}>←</button><button type="button" onClick={() => void choose(requestedRef.current + 1)} aria-label={zh ? "下一张照片" : "Next photo"}>→</button></div></div>
    <div className="fn-album-thumbnails" aria-label={zh ? "选择旅行照片" : "Choose a travel photo"}>{entries.map((entry, index) => <button type="button" key={entry.id} aria-label={`${zh ? "查看" : "View"} ${entry.place}`} aria-pressed={active === index} onClick={() => void choose(index)}><img src={entry.image} alt="" loading="lazy" width="140" height="100" /><span>{entry.place}</span></button>)}</div>
  </div>;
}

export function ReadingAnnotations({ locale, entries }: { locale: Locale; entries: ReadingEntry[] }) {
  return <div className="fn-reading-list">{entries.map((entry, index) => <details key={entry.id} name="reading-notes" className="fn-reading-entry"><summary><span className="fn-reading-number">0{index + 1}</span><span><strong>{entry.title}</strong>{entry.author && <small>{entry.author}</small>}</span><span className="fn-reading-toggle" aria-hidden="true">＋</span></summary><div className="fn-reading-annotation"><span>{locale === "zh" ? "我记住的是" : "WHAT STAYED WITH ME"}</span><p>{entry.note}</p></div></details>)}</div>;
}
