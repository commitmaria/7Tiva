import { LoginMetadata } from "@/lib/metadata";
import Login from "./login"; // your "use client" component

export const metadata = LoginMetadata;

export default function LoginPage() {
  return <Login />;
}
