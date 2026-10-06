import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "夏诗淇｜动手做，继续探索",
  description: "大学生，喜欢动手做、试想法、解决小问题。记录我在 AI、产品、数据与创意技术之间的探索。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://x132204x-web.github.io"),
  openGraph: {
    title: "夏诗淇｜动手做，继续探索",
    description: "记录我对 AI、产品与技术的探索，以及把想法做成产品的过程。",
    images: ["/og-builder.png"],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "夏诗淇｜动手做，继续探索",
    description: "记录我对 AI、产品与技术的探索，以及把想法做成产品的过程。",
    images: ["/og-builder.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
