import { AboutMetadata } from "@/lib/metadata";
import AboutUs from "./aboutus"; // move the actual component here

export const metadata = AboutMetadata;

export default function AboutPage() {
  return <AboutUs />;
}
