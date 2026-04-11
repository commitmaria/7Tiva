// /blog/detail1/page.tsx
import { Suspense } from "react";
import BlogDetailOne from "./BlogDetailOne";
import { BlogMetadata } from "@/lib/metadata";

export const metadata = BlogMetadata;

export default function BlogDetail1Page() {
  return (
    <Suspense fallback={<div>Loading blog detail...</div>}>
      <BlogDetailOne />
    </Suspense>
  );
}
