// /blog/list/page.tsx
import { Suspense } from "react";
import BlogList from "./BlogList";

export default function BlogListPage() {
  return (
    <Suspense fallback={<div>Loading blog list...</div>}>
      <BlogList />
    </Suspense>
  );
}
