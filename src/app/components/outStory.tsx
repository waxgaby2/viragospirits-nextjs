'use client'
import Image from "next/image";
import { workSans } from "../ui/fonts";
import Link from "next/link";


export function Story(){
    return (<section className={`
        bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950
        p-6 lg:px-25
    lg:flex lg:justify-between items-center 
    justify-center min-h-screen 
    [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]`}>
<div className="lg:w-[40%]">
    <h2 className="text-4xl font-serif lg:text-5xl">WHO WE ARE</h2>
    <Image src="/images/founders.webp"
    alt="founders picture"
    width={350}
    height={200}
    className="lg:hidden pt-10" />
    <p className={`${workSans.className} text-sm leading-loose mt-5 lg:text-md`}>Virago Spirits is all about character.
         Inspired by the Virago, a heroic woman of great
          strength, courage, determination, and vision, 
          we work to infuse those very characteristics - 
           spirit of Virago - into everything we do and 
           all that we make. Whether to pursue the
            impossible or celebrate life's victories, 
            Virago Spirits promotes strength of 
             and honors those who personify the Spirit
              of Virago.</p>
    <Link href=""
    className={`inline-block lg:font-bold bg-red-800/90
    lg:py-6 lg:px-10 py-4 px-8 mt-7
    hover:bg-black/80`}>LEARN OUR STORY</Link>
</div>

 <Image src="/images/founders.webp"
    alt="founders picture"
    width={600}
    height={300}
    className="hidden object-contain lg:w-[55%] lg:block h-auto" />
    </section>)
}