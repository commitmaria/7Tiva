// src/app/pages/contact/page.tsx
import { ContactMetadata } from "@/lib/metadata";
import ContactUs from "./contactus";

export const metadata = ContactMetadata;

export default function ContactPage() {
  return <ContactUs />;
}
