import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Virago Spririts",
  description: "Landing Page for a Meadery Website",
   viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className } bg-white h-full antialiased`}
    >
      <body className="min-h-full bg-white">{children}</body>
    </html>
  );
}
