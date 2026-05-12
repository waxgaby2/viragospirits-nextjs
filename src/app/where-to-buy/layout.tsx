import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/app/ui/fonts';
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";
import { StayInLoop } from "../ui/newsletter";



export const metadata: Metadata = {
  title: "Where To Buy | Virago Spirits",
  description:"Find out where to buy our spirits at your own comfort with ease."};
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
