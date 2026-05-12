import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/app/ui/fonts';
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";
import { StayInLoop } from "../ui/newsletter";



export const metadata: Metadata = {
  title: "About Us",
  description: "Virago Spirits is all about character. Inspired by the Virago, a heroic woman of great strength, courage, determination, and vision, we work to infuse those very characteristics - the spirit of Virago - into everything we do and all that we make. Whether to pursue the impossible or celebrate life's victories, Virago Spirits promotes strength of character and honors those who personify the Spirit of Virago.",
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
    <>
           <Header />
      <div className={`min-h-full bg-[#f7f3ee] text-neutral-900 ${inter.className}`}>{children}</div>

           <Footer />
</>
      
  );
}
