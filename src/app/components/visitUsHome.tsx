import Image from "next/image"
import { inter } from "../ui/fonts"
import { oswald } from "../ui/fonts"
import { MapPinIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';


export function VisitUs(){
return (
<section className={`w-[95vw] m-auto
shadow-[0_0_15px_8px_rgba(0,0,0,0.5)]
py-7 
rounded-3xl
bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950
relative`}>
        <div className={`w-full flex justify-between p-3`}>
        <div className={`lg:w-[50%]  py-5 px-3

    lg:pl-20 lg:py-10`}>
<h2 className="font-bold font-serif">VISIT US</h2>

<h3 className="font-serif text-4xl mt-10 lg:text-6xl">Come For The Mead.</h3>
  <h3 className="font-serif text-4xl lg:text-6xl">Stay For The Experience.</h3>
  <Image src="/images/tastingroom.webp"
       alt="picture of our tasting room"
       width={500}
       height={300}
       className={`
         lg:hidden pb-3 pt-8 m-auto
        shadow-[0px_0px_13px_5px_rgba(0,0,0,0.7)]`} /> 
 
 <p className={`lg:text-lg pt-10 lg:pr-10 ${inter.className}`}>
   Step into our Tasting Room and discover a space that
    blends modern craft with timeless character. Our
     cocktail bar showcases seasonally inspired creations
      served in elegant vintage glassware, highlighting 
      the artistry of our rums, gins, brandies, and 
      liqueurs. With a speakeasy-inspired feel, warm 
      lighting, and a mural celebrating historical 
      Viragos by one of Richmond’s most celebrated 
      artists, the atmosphere invites you to slow down
       and savor every sip. Whether you’re here for a 
       cocktail, a tasting flight, a seasonal release, or 
       simply to unwind with friends, the Tasting Room 
       offers an 
   experience that is equal parts refined and welcoming.
 </p>

        <div className={`lg:w-[50%] lg:pr-10 scale-105 hidden
        absolute lg:flex z-10 -top-15 right-0 
       `}>
       <Image src="/images/tastingroom.webp"
       alt="picture of our tasting room"
       width={500}
       height={300}
       className={`object-contain h-full w-full
        rounded-md
        shadow-[0px_0px_13px_5px_rgba(0,0,0,0.7)]`} /> 
        
        </div>
        <div className={`lg:w-[22%] lg:pr-10 scale-105 hidden
        absolute lg:flex z-10 bottom-98 right-0 
       `}>
       <Image src="/images/tasting-room-5.webp"
       alt="picture of our tasting room"
       width={300}
       height={500}
       className={`object-contain h-full w-full
        rounded-md
        shadow-[0px_0px_13px_5px_rgba(0,0,0,0.7)]`} /> 
        
        </div>
          <div className={`lg:w-[22%] lg:pr-10 scale-105 hidden
        absolute lg:flex z-10 bottom-98 right-90 
       `}>
       <Image src="/images/tasting-room-2.jpg"
       alt="picture of our tasting room"
       width={300}
       height={500}
       className={`object-contain h-full w-full
        rounded-md
        shadow-[0px_0px_13px_5px_rgba(0,0,0,0.7)]`} /> 
        
        </div>
        
     </div>
        </div>
       <Image src="/images/tasting-room-2.jpg"
       alt="picture of our tasting room"
       width={300}
       height={500}
       className={` lg:hidden pb-3 pt-8 m-auto
        shadow-[0px_0px_13px_5px_rgba(0,0,0,0.7)]`} /> 
         <Image src="/images/tasting-room-5.webp"
       alt="picture of our tasting room"
       width={300}
       height={500}
       className={` lg:hidden pb-3 pt-8 m-auto
        shadow-[0px_0px_13px_5px_rgba(0,0,0,0.7)]`} /> 
         <div className={`mt-10 w-full text-red-800/90 
            flex flex-col lg:justify-evenly lg:flex-row justify-center 
            items-center ${oswald.className} tracking-wide`}>
 <div className={` lg:w-[25%] w-[70%] md:w-[50%]
 flex flex-col bg-white p-5 md:h-[350px] h-[250px]
   justify-center items-center rounded-2xl
  shadow-[0_0_15px_8px_rgba(0,0,0,0.5)]`}>
<MapPinIcon className="w-10 h-10 lg:w-15 lg:h-15 animate-[bounce_2s_infinite]" />
<div className="mx-4 mt-5"><p>1727, Rhoadmiller St.</p>
<p>Richmond, Virginna 23220</p></div>
 </div>
  <div className={` lg:w-[25%] w-[70%] mt-10
  md:w-[50%]
 flex flex-col bg-white lg:m-4 p-5 md:h-[350px]
  justify-center items-center rounded-2xl h-[250px]
  shadow-[0_0_15px_8px_rgba(0,0,0,0.5)]`}>  
  <CalendarDaysIcon className="w-10 h-10 lg:w-15 lg:h-15 animate-[bounce_2s_infinite]" />
  <div className="mx-4 mt-5"><p>
WED - FRI | 4PM - 9:30PM</p>
<p>
SAT | 2PM - 9:30PM</p>
<p>
SUN | 2PM - 6:30PM</p></div>
</div>
</div>
        
    </section>
)
}