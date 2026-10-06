import type { Metadata } from "next";
import ResumePage from "../resume-page";

export const metadata: Metadata = {
  title: "Ashley Xia | Résumé",
  description: "Student builder exploring AI, product, data, and creative technology. Ashley Xia’s projects, education, and campus experience.",
  alternates: { canonical: "/en/", languages: { "zh-CN": "/zh/", en: "/en/", "x-default": "/zh/" } },
  openGraph: { title: "Ashley Xia | Résumé", description: "Education, selected product projects, and experience.", url: "/en/", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Ashley Xia | Résumé", description: "Education, selected product projects, and experience." },
};

export default function EnglishResume() {
  return <ResumePage locale="en" />;
}
