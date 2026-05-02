import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Virago Spririts Products",
  description: "Our Spirits",
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
    
      <div className="min-h-full bg-white">{children}</div>

  );
}
