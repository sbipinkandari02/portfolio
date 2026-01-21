import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: "Bipin Kandari | React & Node.js Developer",
  description:
    "Portfolio of Bipin Kandari, a React, Next.js & Node.js developer with 4+ years of experience building scalable web applications.",
  keywords: [
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Frontend Developer India",
  ],
  authors: [{ name: "Bipin Kandari" }],
  creator: "Bipin Kandari",
  openGraph: {
    title: "Bipin Kandari | React & Node.js Developer",
    description:
      "Experienced MERN Stack Developer specializing in React, Next.js, Node.js & MongoDB.",
    url: "https://your-domain.com",
    siteName: "Bipin Kandari Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Custom Cursor */}
        <Cursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
