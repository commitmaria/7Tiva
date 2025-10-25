// src/app/feedbacks/page.tsx
import { FeedbacksMetadata } from "@/lib/metadata";
import CustomerFeedbacks from "./customerfeedbacks";

export const metadata = FeedbacksMetadata;

export default function CustomerFeedbacksPage() {
  return <CustomerFeedbacks />;
}
