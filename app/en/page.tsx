import type { Metadata } from "next";
import ResumePage from "../resume-page";

export const metadata: Metadata = {
  title: "Ashley Xia | Résumé",
  description: "Geographic Information Science undergraduate at China Agricultural University. Selected product projects, full-stack development, and campus experience. Download Ashley Xia's résumé.",
  alternates: { canonical: "/en/", languages: { "zh-CN": "/zh/", en: "/en/", "x-default": "/zh/" } },
  openGraph: { title: "Ashley Xia | Résumé", description: "Education, selected product projects, and experience.", url: "/en/", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Ashley Xia | Résumé", description: "Education, selected product projects, and experience." },
};

export default function EnglishResume() {
  return <ResumePage locale="en" />;
}
