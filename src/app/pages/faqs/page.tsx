// src/app/faqs/page.tsx
import { FAQsMetadata } from "@/lib/metadata";
import Faqs from "./faqs";

export const metadata = FAQsMetadata;

export default function FaqsPage() {
  return <Faqs />;
}
