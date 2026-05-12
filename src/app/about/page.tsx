import Image from "next/image"
import { oswald } from "../ui/fonts"
export default function Page(){
    return (
   <div className="min-h-screen bg-[#f6f1e8] pt-20 text-neutral-800">
  
  <section className="mx-auto max-w-7xl px-4 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          About Virago
        </p>

        <h2 className="font-serif text-4xl leading-tight lg:text-6xl">
          Who We Are
        </h2>

        <div className="h-[1px] w-20 bg-neutral-400"></div>

        <p className="text-base leading-8 text-neutral-700 lg:text-lg">
          Virago Spirits is all about character. Inspired by the Virago,
          a heroic woman of great strength, courage, determination, and vision,
          we work to infuse those very characteristics into everything we do
          and all that we make.
        </p>

        <p className="text-base leading-8 text-neutral-700 lg:text-lg">
          Whether pursuing the impossible or celebrating life’s victories,
          Virago Spirits promotes strength of character and honors those
          who personify the Spirit of Virago.
        </p>
      </div>

      <div className="relative lg:col-span-2">
        <div className="absolute -left-5 -top-5 hidden h-32 w-32 border border-neutral-300 lg:block"></div>

        <Image
          src="/images/founders.webp"
          alt="Virago founders"
          width={1200}
          height={700}
          className="relative h-full w-full rounded-3xl object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>

  <section className="mx-auto mt-28 max-w-7xl px-4 lg:px-8">
    <div className="mb-16 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
        Founders
      </p>

      <h2 className="font-serif text-4xl lg:text-6xl">
        Meet The Team
      </h2>
    </div>

    <div className="lg:grid gap-10 w-full lg:grid-cols-3 flex flex-col justify-center items-center">
     
      <div className="group w-[90%] md:w-100 overflow-hidden rounded-[2rem] bg-white shadow-xl transition duration-500 hover:-translate-y-2">
        <div className="overflow-hidden">
          <Image
            src="/images/founders/barry.webp"
            alt="Barry Haneberg"
            width={500}
            height={700}
            className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-5 p-8 ">
          <div>
            <h3 className="font-serif text-3xl">
              Barry Haneberg
            </h3>

            <div className="mt-3 h-[1px] w-16 bg-neutral-300"></div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Founder & Distiller • Operations & Finance
          </p>

          <a
            href="mailto:barry@viragospirits.com"
            className="inline-block text-sm underline underline-offset-4"
          >
            Barry@ViragoSpirits.com
          </a>

          <p className="leading-8 text-neutral-700">
            Food and spirits foster memories and bring people together in
            the enjoyment of life. After careers in investment banking and
            academic research in Berlin, Barry now balances fatherhood with
            managing distilling operations at Virago Spirits.
          </p>
        </div>
      </div>

      <div className="group w-[90%] md:w-100 overflow-hidden rounded-[2rem] bg-white shadow-xl transition duration-500 hover:-translate-y-2">
        <div className="overflow-hidden">
          <Image
            src="/images/founders/vicki.webp"
            alt="Vicki Haneberg"
            width={500}
            height={700}
            className="h-[450px]  w-full md:w-100 object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-5 p-8">
          <div>
            <h3 className="font-serif text-3xl">
              Vicki Haneberg
            </h3>

            <div className="mt-3 h-[1px] w-16 bg-neutral-300"></div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Founder • Tasting Room & Events Manager
          </p>

          <a
            href="mailto:vicki@viragospirits.com"
            className="inline-block text-sm underline underline-offset-4"
          >
            Vicki@ViragoSpirits.com
          </a>

          <p className="leading-8 text-neutral-700">
            Vicki’s passion for Richmond’s food, beverages, and people
            drives the energy she brings to Virago Spirits. She oversees
            the tasting room, community partnerships, and regional events
            while fostering memorable guest experiences.
          </p>
        </div>
      </div>

      <div className="group w-[90%] md:w-100 overflow-hidden rounded-[2rem] bg-white shadow-xl transition duration-500 hover:-translate-y-2">
        <div className="overflow-hidden">
          <Image
            src="/images/founders/brad.webp"
            alt="Brad Haneberg"
            width={500}
            height={700}
            className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-5 p-8">
          <div>
            <h3 className="font-serif text-3xl">
              Brad Haneberg
            </h3>

            <div className="mt-3 h-[1px] w-16 bg-neutral-300"></div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Founder & Distiller • Legal
          </p>

          <a
            href="mailto:brad@viragospirits.com"
            className="inline-block text-sm underline underline-offset-4"
          >
            Brad@ViragoSpirits.com
          </a>

          <p className="leading-8 text-neutral-700">
            Through years of international travel and legal practice,
            Brad discovered how spirits create fellowship and connection.
            Today, he combines his legal expertise with a passion for
            distilling to help guide Virago Spirits forward.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="relative mt-32 overflow-hidden bg-black py-28 text-white">
    <div className="absolute inset-0 opacity-20">
      <img
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop"
        alt="Background texture"
        className="h-full w-full object-cover"
      />
    </div>

    <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <p className="mb-5 text-sm uppercase tracking-[0.4em] text-neutral-300">
        The Meaning Behind The Name
      </p>

      <h2
        className={`text-4xl font-bold tracking-wide lg:text-6xl ${oswald.className}`}
      >
        SO, WHAT IS A VIRAGO?
      </h2>

      <div className="mx-auto my-10 h-[1px] w-24 bg-neutral-500"></div>

      <div className="space-y-8 text-lg leading-9 text-neutral-300">
        <p>
          A virago represents strength, spirit, and fearless independence.
          Historically, the word described someone bold, courageous, and
          larger than life—an individual willing to challenge expectations
          and carve their own path.
        </p>

        <p>
          At Virago, we embrace this spirit as a celebration of defiance,
          creativity, and authenticity. It’s about honoring those who move
          through the world with conviction, challenge convention, and leave
          a lasting impression.
        </p>
      </div>
    </div>
  </section>
</div>
    )
}