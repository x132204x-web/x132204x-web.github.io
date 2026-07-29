import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "夏诗淇｜从真实问题开始做产品",
  description: "中国农业大学 GIS 学生，持续探索 AI、产品设计与空间智能。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://x132204x-web.github.io"),
  openGraph: {
    title: "夏诗淇｜从真实问题开始做产品",
    description: "中国农业大学 GIS 学生，持续探索 AI、产品设计与空间智能。",
    images: ["/og.png"],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "夏诗淇｜从真实问题开始做产品",
    description: "中国农业大学 GIS 学生，持续探索 AI、产品设计与空间智能。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
