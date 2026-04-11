// /blog/detail2/page.tsx
import { Suspense } from "react";
import BlogDetailTwo from "./BlogDetailTwo";

export default function BlogDetail2Page() {
  return (
    <Suspense fallback={<div>Loading blog detail...</div>}>
      <BlogDetailTwo />
    </Suspense>
  );
}
