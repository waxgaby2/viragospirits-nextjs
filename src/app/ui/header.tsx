import Image from "next/image"
import Link from "next/link"
import { oswald } from "./fonts"
import { NavBar } from "./navbar"
import { CartCounter } from "./cartCounter"

export function Header(){
    return (<div className={`p-1 lg:p-4 w-full
         bg-red-800/90
    flex items-center 
justify-between sticky top-0 z-50`}>
<Image src="/logo/viragologo.webp"
alt="virago logo"
width={170}
height={75}
className="" />
<div className={`${oswald.className} uppercase tracking-widest
 text-[15px] m-auto
 h-[100%] font-[500]
 text-white gap-4 hidden lg:flex
 justify-center items-center`}>
<Link href="/spirits"
className={`hover:text-gray-400
transition-all duration-300
ease-linear`}>Spirits</Link>

<Link href="/"
className={`hover:text-gray-400
transition-all duration-300
ease-linear`}>Shop</Link>

<Link href="/"
className={`hover:text-gray-400
transition-all duration-300
ease-linear`}>About Us</Link>

<Link href="/"
className={`hover:text-gray-400
transition-all duration-300
ease-linear`}>Tasting Room</Link>

<Link href="/"
className={`hover:text-gray-400
transition-all duration-300
ease-linear`}>Events</Link>

<Link href="/"
className={`hover:text-gray-400
transition-all duration-300
ease-linear`}>Where to buy</Link>

<Link href="/"
className={`hover:text-gray-400
transition-all duration-300
ease-linear`}>Contact</Link>

</div>
<Link href="/"
className={`m-auto py-3 px-8 hidden lg:flex
hover:bg-white hover:text-red-800/90 
traansition-all text-[13px]
duration-500 ease-in-out bg-black text-white
font-semibold`}>PLAN YOUR VISIT</Link>
<div className="flex gap-6">
<Link href="/cart">
<CartCounter />
</Link>
<NavBar />
</div>
    </div>)
}
