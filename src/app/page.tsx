import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Story } from "./components/outStory";
import { Tear } from "./components/tear";
import { AfterHero } from "./components/afterHero";
import { OurSpirits } from "./components/ourSpirits";
import { VisitUs } from "./components/visitUsHome";
import { StayInLoop } from "./components/newsletter";
import {Footer} from "./components/footer";
export default function Home() {
  return (
    <div className="flex flex-col bg-white
   
     text-white">
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
