import FullPage from "../../full-page";
import { personalSummary } from "../../full-content";
import { fullMetadata } from "../../full-metadata";

export const metadata = fullMetadata("en", "Ashley Xia | Work & notes", personalSummary.en);

export default function Page() {
  return <FullPage locale="en" />;
}
