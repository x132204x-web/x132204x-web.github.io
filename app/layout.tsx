import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "夏诗淇｜个人简历与成长记录",
  description: "中国农业大学 GIS 学生，记录我对 AI、产品与技术的探索，以及把想法做成产品的过程。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://x132204x-web.github.io"),
  openGraph: {
    title: "夏诗淇｜个人简历与成长记录",
    description: "记录我对 AI、产品与技术的探索，以及把想法做成产品的过程。",
    images: ["/og.png"],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "夏诗淇｜个人简历与成长记录",
    description: "记录我对 AI、产品与技术的探索，以及把想法做成产品的过程。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
