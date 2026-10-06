import type { Metadata } from "next";
import ResumePage from "../resume-page";

export const metadata: Metadata = {
  title: "夏诗淇｜个人简历",
  description: "通过项目学习 AI、产品、数据与创意技术。查看夏诗淇的项目、教育与校园经历，下载中文简历。",
  alternates: { canonical: "/zh/", languages: { "zh-CN": "/zh/", en: "/en/", "x-default": "/zh/" } },
  openGraph: { title: "夏诗淇｜个人简历", description: "教育背景、产品项目与实践经历。", url: "/zh/", locale: "zh_CN" },
};

export default function ChineseResume() {
  return <ResumePage locale="zh" />;
}
