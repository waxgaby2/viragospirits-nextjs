import Image from "next/image"
import Link from "next/link"
import { bodoni } from "./fonts"
import { workSans } from "./fonts"

export function Footer(){
    return (<footer className={`w-full flex items-center 
        bg-gradient-to-br from-neutral-900 via-neutral-950 to-black
        justify-center text-white/80
            border-t border-white/50
         px-3 py-6 lg:p-10`}>

<div className="flex flex-col text-[12px] tracking-wider w-full lg:flex-row justify-center  items-center lg:justify-evenly">

<div className={`flex lg:w-[40%] w-full flex-col
${workSans.className} mx-5
mt-5 `}>

    <div className="flex justify-center items-center">
  <Image src="/images/logo2.webp" alt="virago logo"
width={70} height={70}
className={`
mx-auto lg:mx-0
`} />
</div>
<div className="flex flex-row justify-between md:justify-evenly w-full">
<div className="flex flex-col mt-5  ">
<Link href="/" 
className="hover:text-red-500 transition-colors duration-300">About us</Link>

<Link href="/products"
className="hover:text-red-500 transition-colors duration-300">Spirits</Link>

<Link href="/">Where to buy</Link>
</div>
<div className="flex flex-col lg:mt-5">
<Link href="/"
className="hover:text-red-500 transition-colors duration-300">
Tasting Room</Link>

<Link href="/" 
className="hover:text-red-500 transition-colors duration-300">Events</Link>

<Link href="/"
className="hover:text-red-500 transition-colors duration-300">Contact</Link>
</div>
</div>
</div>
<div className="w-full mt-10 lg:mt-0 max-lg:text-center lg:w-[45%]">
    <h2 className={`text[sm] lg:text-5xl lg:mb-10 ${bodoni.className}`}>Please Drink Responsibly</h2>
<p className={`text-[12px] text-white/80 ${workSans.className}`}>The Virago Spirits Board follows both 
    the Distilled Spirits Council (DISCUS) and 
    American Craft Spirits Association (ACSA) Code
     of Responsible Practices for Beverage Alcohol 
     Advertising and Marketing.
</p>
</div>
</div>
    </footer>)
}