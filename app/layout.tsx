import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "夏诗淇｜个人成长档案与作品集",
  description: "一个大学生如何利用 AI 不断学习、创造和实践。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
