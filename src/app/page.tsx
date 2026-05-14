import Image from "next/image";
import { Header } from "./ui/header";
import { Hero } from "./ui/hero";
import { Story } from "./ui/outStory";
import { Tear } from "./ui/tear";
import { AfterHero } from "./ui/afterHero";
import { OurSpirits } from "./ui/ourSpirits";
import { VisitUs } from "./ui/visitUsHome";
import { StayInLoop } from "./ui/newsletter";
import {Footer} from "./ui/footer";
import { Suspense } from "react";
import SpiritsLoading from "./ui/ourSpiritsSkeleton";
export default function Home() {
  return (
    <div className="flex flex-col bg-white text-white">
     <Header />
     <Hero />
     <AfterHero />
     <Tear />
     <Story />
      <Suspense fallback={<SpiritsLoading />}>
      <OurSpirits />
    </Suspense>
     <VisitUs />
     <StayInLoop /> 
   <Footer />
    </div>
  );
}
