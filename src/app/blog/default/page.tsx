import { BlogMetadata } from "@/lib/metadata";
import BlogDefault from "./blog";

export const metadata = BlogMetadata;

export default function BlogDefaultPage() {
  return <BlogDefault />;
}
