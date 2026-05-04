import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/app/ui/fonts';
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";



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
    <>
           <Header />
      <div className={`min-h-full 
          bg-gradient-to-br from-neutral-900 via-neutral-950 to-black ${inter.className}`}>{children}</div>

           <Footer />
</>
      
  );
}
