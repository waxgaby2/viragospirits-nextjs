import Image from "next/image"
import Link from "next/link"
import { bodoni } from "./fonts"
import { workSans } from "./fonts"

export function Footer(){
    return (<footer className={`w-full flex items-center 
        bg-gradient-to-br from-neutral-900 via-neutral-950 to-black
        justify-center text-white
         px-3 py-6 lg:p-10`}>

<div className="flex flex-col text-[16px] tracking-widest w-full lg:flex-row justify-center  items-center lg:justify-evenly">

<div className={`flex lg:w-[40%] w-full flex-col
${workSans.className} mx-5
mt-5 `}>

    <div className="flex justify-center items-center">
  <Image src="/images/logo2.webp" alt="virago logo"
width={150} height={150}
className={`
mx-auto lg:mx-0
`} />
</div>
<div className="flex flex-row justify-between md:justify-evenly w-full">
<div className="flex flex-col mt-5 gap-1 lg:gap-2 ">
<Link href="/" 
className="hover:text-red-500 transition-colors duration-300">About us</Link>

<Link href="/"
className="hover:text-red-500 transition-colors duration-300">Shop</Link>

<Link href="/">Where to buy</Link>
</div>
<div className="flex flex-col lg:mt-5 gap-1 lg:gap-2 ">
<Link href="/"
className="hover:text-red-500 transition-colors duration-300">
Tasting Room</Link>

<Link href="/" 
className="hover:text-red-500 transition-colors duration-300">Events</Link>

<Link href="/"
className="hover:text-red-500 transition-colors duration-300">Spirits</Link>

<Link href="/"
className="hover:text-red-500 transition-colors duration-300">Contact</Link>
</div>
</div>
</div>
<div className="w-full mt-10 lg:mt-0 max-lg:text-center lg:w-[45%]">
    <h2 className={`text-md lg:text-5xl lg:mb-10 ${bodoni.className}`}>Please Drink Responsibly</h2>
<p className={`text-sm text-white ${workSans.className}`}>The Virago Spirits Board follows both 
    the Distilled Spirits Council (DISCUS) and 
    American Craft Spirits Association (ACSA) Code
     of Responsible Practices for Beverage Alcohol 
     Advertising and Marketing.
</p>
</div>
</div>
    </footer>)
}