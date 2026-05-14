import Image from "next/image"
import Link from "next/link"
import { bodoni } from "./fonts"
import { workSans } from "./fonts"

export function Footer(){
    return (<footer
  className="
    relative overflow-hidden border-t border-white/10
    bg-gradient-to-br from-neutral-950 via-black to-neutral-900
    px-4 py-14 text-white lg:px-10 lg:py-20
  "
>
  <div className="absolute inset-0 opacity-20">
    <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-red-900 blur-3xl"></div>
    <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-neutral-700 blur-3xl"></div>
  </div>

  <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 md:flex-row md:justify-between">
    
    <div className={`flex flex-col gap-10 lg:w-[45%] ${workSans.className}`}>
      
      <div className="flex items-center gap-4">
        <Image
          src="/images/logo2.webp"
          alt="Virago Spirits logo"
          width={80}
          height={80}
          className="object-contain"
        />

        <div>
          <h2 className={`text-2xl tracking-wide text-white ${bodoni.className}`}>
            VIRAGO SPIRITS
          </h2>

          <p className="mt-1 text-sm uppercase tracking-[0.3em] text-white/50">
            Character Distilled
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 text-sm tracking-wide">
        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-white/40 uppercase tracking-[0.25em]">
            Explore
          </h3>

          <Link
            href="/about"
            className="transition duration-300 hover:text-red-400"
          >
            About Us
          </Link>
           <Link
            href="/contact"
            className="transition duration-300 hover:text-red-400"
          >
            Contact
          </Link>

          <Link
            href="/process"
            className="transition duration-300 hover:text-red-400"
          >
            Production Process
          </Link>

         
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-white/40 uppercase tracking-[0.25em]">
            Visit
          </h3>

          <Link
            href="/tasting-room"
            className="transition duration-300 hover:text-red-400"
          >
            Tasting Room
          </Link>

         
 <Link
            href="/where-to-buy"
            className="transition duration-300 hover:text-red-400"
          >
            Where To Buy
          </Link>
        
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-between gap-10 lg:w-[45%]">
      
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
          Responsibility
        </p>

        <h2
          className={`text-3xl leading-tight text-white lg:text-6xl ${bodoni.className}`}
        >
          Please Drink Responsibly
        </h2>

        <div className="my-8 h-[1px] w-24 bg-white/20"></div>

        <p
          className={`max-w-2xl text-sm leading-8 text-white/70 lg:text-base ${workSans.className}`}
        >
          The Virago Spirits Board follows both the Distilled Spirits
          Council (DISCUS) and American Craft Spirits Association (ACSA)
          Code of Responsible Practices for Beverage Alcohol Advertising
          and Marketing.
        </p>
      </div>

      <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/40 lg:flex-row lg:items-center lg:justify-between">
        <p>© 2026 Virago Spirits. All rights reserved.</p>

        <div className="flex gap-5">
          <Link
            href="/"
            className="transition duration-300 hover:text-white"
          >
            Privacy
          </Link>

          <Link
            href="/"
            className="transition duration-300 hover:text-white"
          >
            Terms
          </Link>

          <Link
            href="/"
            className="transition duration-300 hover:text-white"
          >
            Instagram
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>)
}