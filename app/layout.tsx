import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Clone - Next.js",
  description: "A modern YouTube clone built with Next.js and Tailwind CSS",
  keywords: "youtube, clone, nextjs, tailwind, react, video",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-youtube-gray-50 text-youtube-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
