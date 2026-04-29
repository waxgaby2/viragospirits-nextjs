import Link from "next/link";
import { inter } from "../ui/fonts";
import { Tear } from "./tear";


export function Hero() {
  return (
    <section className="relative  h-screen bg-black w-full">
    
      <div
        className="absolute inset-0 pointer-events-none bg-contain md:bg-cover bg-center md:bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bottles.png')" }}
      />

    
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-black/70 to-transparent" />

 
      <div className="relative z-10 flex h-full items-center px-6 md:px-12">
        <div className="text-white max-w-3xl flex flex-col">
          <h1 className={`h1 mb-4 
          font-thin md:text-6xl flex
          flex-col
           text-4xl font-serif`}>
            CRAFTED SPIRITS, 
            <span>REFINED <span className="text-red-600/90">TASTE.</span></span>
          </h1>
          <p className={` text-gray-300 mb-6
          md:inline-block md:w-110 text-sm w-75
          md:text-md`}>
          Premium distillery experience in the heart of Virgina where ancient tradition meets mordern crafts
          </p>
           
           <div className={`flex flex-col
           md:flex-row md:gap-7`}><Link href="" className={`py-5 px-8
            border max-md:shadow-[inset_0px_0px_9px_3px_rgba(255,255,255,0.3)]
        md:border-white border-white/60
            md:bg-white md:text-black w-50 text-sm
         md:w-55 text-center hover:text-white
        hover:bg-black/10 font-semibold
        transition-all duration-300 ease`}>PLAN YOUR VISIT</Link>
        <Link href="" className={`py-5 px-8 border
        lg:bg-red-600/90  w-50 text-sm
     max-md:shadow-[inset_0px_0px_9px_3px_rgba(255,255,255,0.3)]
        border-white/60 hover:text-red-600/90
        lg:border-red-600/90  md:w-55 text-center
        hover:bg-black/10 font-semibold
        transition-all duration-300 ease
        mt-7 md:mt-0`}>EXPLORE SPIRITS</Link>
         
        </div>
        </div>
     
</div>

    </section>
  );
}