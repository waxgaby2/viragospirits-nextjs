import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import { UserProvider } from "./context/userContext";
import { Toaster } from "sonner";

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
<html lang="en" className={`${inter.className} antialiased`}>
  <body className="min-h-screen bg-white">
    <UserProvider>
      {children}
    <Toaster
  position="top-right"
  richColors
  toastOptions={{
    style: {
      background: "rgba(20, 20, 20, 0.85)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(10px)",
      borderRadius: "12px",
      padding: "14px 16px",
      fontSize: "14px",
      fontWeight: 400,
      letterSpacing: "0.2px",
    },
  }}
/>
    </UserProvider>
  </body>
</html>
  );
}
