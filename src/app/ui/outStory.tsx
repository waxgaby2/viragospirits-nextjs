'use client'
import Image from "next/image";
import { workSans } from "./fonts";
import Link from "next/link";


export function Story(){
    return (<section
  className={`
    relative flex 
    flex-col justify-center
    overflow-hidden
    bg-gradient-to-br
    from-neutral-800 via-neutral-900 to-neutral-950
    px-6 py-20
    text-white/80
    [clip-path:polygon(0_0,100%_0,100%_92%,0_100%)]
    lg:flex-row lg:items-center
    lg:justify-between lg:px-25
  `}
>
  <div
    className={`
      absolute left-[-10%] top-[10%]
      h-80 w-80 rounded-full
      bg-red-900/20 blur-3xl
    `}
  />

  <div
    className={`
      relative z-10
      lg:w-[40%]
    `}
  >
    <p
      className={`mb-5 text-[11px] uppercase tracking-[0.45em] text-white/40`}
    >
      OUR STORY
    </p>

    <h2
      className={`
        font-serif text-5xl leading-tight tracking-wide text-white lg:text-6xl
      `}
    >
      Who We Are
    </h2>

    <div className={`mt-6 h-[1px] w-24 bg-white/20`} />

    <div
      className={`
        relative mt-10 overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-white/5 p-4
        shadow-[0_20px_50px_rgba(0,0,0,0.45)]
        backdrop-blur-md
        lg:hidden
      `}
    >
      <Image
        src="/images/founders.webp"
        alt="founders picture"
        width={350}
        height={200}
        className={`
          h-auto w-full
          rounded-[1.5rem]
          object-cover
        `}
      />
    </div>

    <p
      className={`
        mt-10 text-sm
        leading-8 text-white/70
        lg:text-base lg:leading-loose
        ${workSans.className}
      `}
    >
      Virago Spirits is all about character.
      Inspired by the Virago, a heroic woman of
      great strength, courage, determination, and
      vision, we work to infuse those very
      characteristics — the spirit of Virago —
      into everything we do and all that we make.
      Whether pursuing the impossible or
      celebrating life’s victories, Virago Spirits
      honors those who embody resilience,
      individuality, and fearless ambition.
    </p>

    <Link
      href="/about"
      className={`
        group mt-10 inline-flex
        items-center justify-center
        overflow-hidden rounded-full
        border border-red-800/70
        bg-red-800/90 px-10
        py-5 text-sm font-semibold
        uppercase tracking-[0.25em]
        text-white shadow-[0_10px_30px_rgba(120,0,0,0.35)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white
        hover:text-black
        active:scale-95
      `}
    >
      Learn Our Story
    </Link>
  </div>

  <div
    className={`
      relative z-10 hidden
      items-center justify-center
      lg:flex lg:w-[52%]
    `}
  >
    <div
      className={`
        relative overflow-hidden
        rounded-[2.5rem]
        border border-white/10
        bg-white/5 p-5
        shadow-[0_25px_60px_rgba(0,0,0,0.5)]
        backdrop-blur-md
      `}
    >
      <div
        className={`
          absolute inset-0 opacity-30
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]
        `}
      />

      <Image
        src="/images/founders.webp"
        alt="founders picture"
        width={600}
        height={300}
        className={`
          relative z-10 h-auto
          w-full rounded-[2rem]
          object-cover
        `}
      />
    </div>
  </div>
</section>)
}