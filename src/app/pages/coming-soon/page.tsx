// src/app/coming-soon/page.tsx
import { ComingSoonMetadata } from "@/lib/metadata";
import ComingSoon from "./comingsoon";

export const metadata = ComingSoonMetadata;

export default function ComingSoonPage() {
  return <ComingSoon />;
}
