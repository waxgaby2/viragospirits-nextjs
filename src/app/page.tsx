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
export default function Home() {
  return (
    <div className="flex flex-col bg-white text-white">
     <Header />
     <Hero />
     <AfterHero />
     <Tear />
     <Story />
     <OurSpirits />
     <VisitUs />
     <StayInLoop />
     
   <Footer />
    </div>
  );
}
