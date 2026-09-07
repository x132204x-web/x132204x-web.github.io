import FullLegacyRedirect from "../full-legacy-redirect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "个人手记｜夏诗淇",
  alternates: { canonical: "/zh/full/" },
};

export default function MorePage() {
  return <FullLegacyRedirect kind="more" />;
}
