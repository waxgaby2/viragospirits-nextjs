import Link from "next/link";
import { inter } from "./fonts";
import { Tear } from "../ui/tear";


export function Hero() {
  return (
 <section
  className="
    relative h-screen
    w-full overflow-hidden
    border-b border-white/10
    bg-black md:pb-10
  "
>
  <div
    className="
      absolute inset-0
      bg-contain bg-center bg-no-repeat
      md:bg-cover md:bg-right
      scale-105
    "
    style={{
      backgroundImage: "url('/images/hero-bottles.png')",
    }}
  />

  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-black via-black/80 to-black/20
    "
  />

  <div
    className="
      absolute left-[-10%] top-[15%]
      h-80 w-80 rounded-full
      bg-red-900/20 blur-3xl
    "
  />

  <div
    className="
      relative z-10 flex
      h-full items-center
      px-6 md:px-12 lg:px-20
    "
  >
    <div
      className="
        flex max-w-3xl
        flex-col text-white
      "
    >
      

      <h1
        className="
          mb-6 flex flex-col
          font-serif text-5xl
          font-thin leading-tight
          tracking-wide
          md:text-7xl
        "
      >
        <span className="drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]">
          Crafted Spirits,
        </span>

        <span className="drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]">
          Refined
          <span className="ml-3 text-red-400/90">
            Taste.
          </span>
        </span>
      </h1>

      <div className="mb-8 h-[1px] w-24 bg-white/20" />

      <p
        className="
          mb-10 max-w-xl
          text-sm leading-8
          text-white/70
          md:text-base
        "
      >
        Premium distillery experience in the heart of
        Virginia where ancient tradition meets modern
        craftsmanship.
      </p>

      <div
        className="
          flex flex-col gap-5
          md:flex-row md:gap-7
        "
      >
        <Link
          href="/"
          className="
            group relative overflow-hidden
            rounded-full
            border border-white/20
            bg-white px-10 py-5
            text-center text-sm
            font-semibold uppercase
            tracking-[0.25em]
            text-black
            shadow-[0_10px_30px_rgba(255,255,255,0.15)]
            transition-all duration-500
            hover:-translate-y-1
            hover:bg-red-800
            hover:text-white
            active:scale-95
            md:w-70
          "
        >
          Plan Your Visit
        </Link>

        <Link
          href="/products"
          className="
            rounded-full
            border border-red-800/70
            bg-red-800/90 px-10
            py-5 text-center
            text-sm font-semibold
            uppercase tracking-[0.25em]
            text-white
            shadow-[0_10px_30px_rgba(120,0,0,0.35)]
            transition-all duration-500
            hover:-translate-y-1
            hover:border-white/20
            hover:bg-white
            hover:text-black
            active:scale-95
            md:w-70
          "
        >
          Explore Spirits
        </Link>
      </div>
    </div>
  </div>

  <div
    className="
      absolute bottom-0 left-0
      h-32 w-full
      bg-gradient-to-t from-black to-transparent
    "
  />
</section>
  );
}


export function ProductsHero() {
  return (
    <section
      className="
        relative h-screen w-full overflow-hidden
        border-b border-white/10
        bg-black
      "
    >
      <div
        className="
          absolute inset-0
          bg-contain bg-center bg-no-repeat
          md:bg-cover md:bg-right
          scale-105
        "
        style={{
          backgroundImage: "url('/images/products/hero.png')",
        }}
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black via-black/80 to-black/20
        "
      />

      <div
        className="
          absolute left-[-10%] top-[20%]
          h-80 w-80 rounded-full
          bg-red-900/20 blur-3xl
        "
      />

      <div
        className="
          relative z-10 flex h-full
          items-center justify-center
          px-6 md:px-12
        "
      >
        <div
          className="
            flex max-w-3xl flex-col
            items-center justify-center
            text-center text-white
          "
        >
        

          <h1
            className="
              mb-6 flex flex-col
              font-serif text-5xl
              font-thin leading-tight
              tracking-wide
              md:text-7xl
            "
          >
            <span className="drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]">
              Craft Spirits
            </span>

            <span
              className="
                text-red-400/90
                drop-shadow-[0_5px_20px_rgba(120,0,0,0.6)]
              "
            >
              Collections
            </span>
          </h1>

          <div className="mb-8 h-[1px] w-24 bg-white/20" />

          <p
            className="
              mb-8 max-w-xl
              text-sm leading-8
              tracking-[0.25em]
              text-white/70
              md:text-base
            "
          >
            Small batch. Bold flavors. Rooted in tradition.
          </p>

      
          <div className="flex flex-col md:flex-row md:gap-7">
            <Link
              href="#spirits"
              className="
                group relative overflow-hidden
                rounded-full
                border border-red-800/70
                bg-red-800/90
                px-10 py-5
                text-sm font-semibold
                uppercase tracking-[0.3em]
                text-white
                shadow-[0_10px_30px_rgba(120,0,0,0.35)]
                transition-all duration-500
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white
                hover:text-black
                active:scale-95
              "
            >
              <span className="relative z-10">
                Shop All
              </span>

              <div
                className="
                  absolute inset-0
                  translate-y-full
                  bg-white transition-transform
                  duration-500
                  group-hover:translate-y-0
                "
              />
            </Link>
          </div>
        </div>
      </div>
\
      <div
        className="
          absolute bottom-0 left-0
          h-32 w-full
          bg-gradient-to-t from-black to-transparent
        "
      />
    </section>
  );
}