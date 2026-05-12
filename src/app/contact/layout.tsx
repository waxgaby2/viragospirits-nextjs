import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/app/ui/fonts';
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";
import { StayInLoop } from "../ui/newsletter";



export const metadata: Metadata = {
  title: "Contact Us",
  description: "If you trying to make an inquiry, let us know so we can help you",
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
