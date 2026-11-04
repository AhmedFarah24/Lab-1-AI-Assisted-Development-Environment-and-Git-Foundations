import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neighborhood Listing Platform",
  description: "A student-built neighborhood listing platform concept.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
