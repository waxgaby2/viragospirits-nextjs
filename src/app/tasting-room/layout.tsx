import type { Metadata } from "next";
import "../globals.css";
import { inter } from '@/app/ui/fonts';
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";
import { StayInLoop } from "../ui/newsletter";



export const metadata: Metadata = {
  title: "Virago Tasting Room",
  description:"Step into our Tasting Room and discover a space that blends modern craft with timeless character. Our cocktail bar showcases seasonally inspired creations served in elegant vintage glassware, highlighting the artistry of our rums, gins, brandies, and liqueurs."};
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
      <div className={`min-h-full bg-[#f7f3ee] text-neutral-900  ${inter.className}`}>{children}</div>

           <Footer />
</>
      
  );
}
