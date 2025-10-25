import { NotFoundMetadata } from "@/lib/metadata";
import PageNotFound from "./notfound";

export const metadata = NotFoundMetadata;

export default function NotFoundPage() {
  return <PageNotFound />;
}
