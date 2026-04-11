import { Suspense } from "react";
import BlogDefault from "./blog";
import { BlogMetadata } from "@/lib/metadata";

export const metadata = BlogMetadata;

export default function BlogDefaultPage() {
  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogDefault />
    </Suspense>
  );
}
