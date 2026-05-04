import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import { UserProvider } from "./context/userContext";


export const metadata: Metadata = {
  title: "Virago Spririts",
  description: "Landing Page for a Meadery Website",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
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
      <body className="min-h-full bg-white"><UserProvider>{children}</UserProvider></body>
    </html>
  );
}
