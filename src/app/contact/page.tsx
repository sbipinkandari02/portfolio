import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Bipin Kandari",
  description:
    "Get in touch with Bipin Kandari for React, Next.js, and Node.js development opportunities.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Contact />
    </main>
  );
}
