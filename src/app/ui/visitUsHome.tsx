import Image from "next/image"
import { inter } from "./fonts"
import { oswald } from "./fonts"
import { MapPinIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';


export function VisitUs(){
return (
<section
  className="
    relative mx-auto w-[95%] max-w-7xl overflow-hidden
    rounded-[2.5rem] border border-white/10
    bg-gradient-to-br from-neutral-900 via-black to-neutral-950
    py-16 text-white shadow-[0_0_40px_rgba(0,0,0,0.45)]
    lg:py-24
  "
>
  <div className="absolute inset-0 opacity-20">
    <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-red-900 blur-3xl"></div>
    <div className="absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-neutral-700 blur-3xl"></div>
  </div>

  <div className="relative z-10 grid gap-20 px-5 lg:grid-cols-2 lg:px-16">
    
    <div className="flex flex-col justify-center">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
        Visit Us
      </p>

      <h2 className="font-serif text-4xl leading-tight lg:text-6xl">
        Come For The Mead.
      </h2>

      <h2 className="font-serif text-4xl leading-tight text-red-400/90 lg:text-6xl">
        Stay For The Experience.
      </h2>

      <div className="my-8 h-[1px] w-24 bg-white/20"></div>

      <Image
        src="/images/tastingroom.webp"
        alt="Virago tasting room"
        width={700}
        height={500}
        className="
          mb-10 rounded-3xl object-cover shadow-2xl
          lg:hidden m-auto
        "
      />

      <p
        className={`max-w-2xl text-sm leading-8 text-white/70 lg:text-base ${inter.className}`}
      >
        Step into our Tasting Room and discover a space that blends
        modern craft with timeless character. Our cocktail bar showcases
        seasonally inspired creations served in elegant vintage
        glassware, highlighting the artistry of our rums, gins,
        brandies, and liqueurs.
      </p>

      <p
        className={`mt-6 max-w-2xl text-sm leading-8 text-white/70 lg:text-base ${inter.className}`}
      >
        With a speakeasy-inspired atmosphere, warm lighting, and a
        mural celebrating historical Viragos, the experience invites
        you to slow down, savor every sip, and enjoy unforgettable
        moments with friends and family.
      </p>
    </div>

    <div className="relative hidden w-100% lg:block">
      
      <div className="absolute right-0 top-10  w-full">
        <Image
          src="/images/tastingroom.webp"
          alt="Virago tasting room"
          width={700}
          height={500}
          className="w-full h-auto
           
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          "
        />
      </div>

      <div className="absolute bottom-16 left-0 w-[45%]">
        <Image
          src="/images/tasting-room-2.jpg"
          alt="Cocktail interior"
          width={350}
          height={500}
          className="
            rounded-[1.5rem] object-cover
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          "
        />
      </div>
      <div className="absolute bottom-0 right-8 w-[45%]">
        <Image
          src="/images/tasting-room-5.webp"
          alt="Virago seating area"
          width={350}
          height={500}
          className="
            rounded-[1.5rem] object-cover
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          "
        />
      </div>
    </div>
  </div>

  <div className="relative z-10 mt-10 flex flex-col justify-center items-center gap-6 px-5 lg:hidden">
    <Image
      src="/images/tasting-room-2.jpg"
      alt="Cocktail interior"
      width={500}
      height={600}
      className="rounded-3xl object-cover shadow-2xl"
    />

    <Image
      src="/images/tasting-room-5.webp"
      alt="Virago seating area"
      width={500}
      height={600}
      className="rounded-3xl object-cover shadow-2xl"
    />
  </div>

  <div
    className={`
      relative z-10 mt-24 grid gap-8
      px-5 lg:grid-cols-2 lg:px-16
      ${oswald.className}
    `}
  >
    <div
      className="
        group flex flex-col items-center justify-center
        rounded-[2rem] border border-white/10
        bg-white/5 p-10 text-center
        backdrop-blur-md transition duration-500
        hover:-translate-y-2 hover:bg-white/10
      "
    >
      <MapPinIcon
        className="animate-bounce
          h-12 w-12 text-red-400
          transition duration-500 group-hover:scale-110
          lg:h-16 lg:w-16
        "
      />

      <div className="mt-6 space-y-2 text-lg tracking-wide text-white/80">
        <p>1727 Rhoadmiller St.</p>
        <p>Richmond, Virginia 23220</p>
      </div>
    </div>

    <div
      className="
        group flex flex-col items-center justify-center
        rounded-[2rem] border border-white/10
        bg-white/5 p-10 text-center
        backdrop-blur-md transition duration-500
        hover:-translate-y-2 hover:bg-white/10
      "
    >
      <CalendarDaysIcon
        className=" animate-bounce
          h-12 w-12 text-red-400
          transition duration-500 group-hover:scale-110
          lg:h-16 lg:w-16
        "
      />

      <div className="mt-6 space-y-2 text-lg tracking-wide text-white/80">
        <p>WED – FRI | 4PM – 9:30PM</p>
        <p>SAT | 2PM – 9:30PM</p>
        <p>SUN | 2PM – 6:30PM</p>
      </div>
    </div>
  </div>
</section>
)
}