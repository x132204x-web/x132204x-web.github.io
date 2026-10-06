import FullPage from "../../full-page";
import { personalSummary } from "../../full-content";
import { fullMetadata } from "../../full-metadata";

export const metadata = fullMetadata("zh", "夏诗淇｜动手做，继续探索", personalSummary.zh);

export default function Page() {
  return <FullPage locale="zh" />;
}
