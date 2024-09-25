import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comic Com",
  description: "Comic e-commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
