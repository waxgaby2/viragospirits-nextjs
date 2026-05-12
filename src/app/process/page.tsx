import Image from "next/image"
export default function Page(){
return (<section className="bg-[#f5f1ea] text-neutral-900">
 
  <div className="relative h-[70vh] overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop"
      alt="Distillery"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
      <div className="max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-200">
          Production Process
        </p>

        <h1 className="text-4xl font-light leading-tight text-white md:text-6xl">
          Character,
          <span className="italic">Distilled</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
          Our production philosophy blends traditional distilling techniques
          with modern creativity, patience, and precision.
        </p>
      </div>
    </div>
  </div>

  <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
    <div>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Distilling
      </p>

      <h2 className="mb-6 text-4xl font-light md:text-5xl">
        Low & Slow
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-neutral-700">
        We distill our spirits using a vintage Charentais-style alembic still,
        allowing for a slower and more deliberate process that develops deeper,
        more expressive flavors.
      </p>

      <div className="space-y-5 text-neutral-700">
        <div className="border-l border-neutral-400 pl-5">
          <h3 className="mb-2 text-lg font-medium">
            Direct Fire Distillation
          </h3>

          <p className="leading-relaxed">
            Direct-fire heating creates richer layers of flavor and complexity,
            similar to the depth achieved through open-fire cooking.
          </p>
        </div>

        <div className="border-l border-neutral-400 pl-5">
          <h3 className="mb-2 text-lg font-medium">
            48-Hour Distillation Cycles
          </h3>

          <p className="leading-relaxed">
            Multiple distillation stages allow us to separate impurities while
            concentrating aroma and character.
          </p>
        </div>

        <div className="border-l border-neutral-400 pl-5">
          <h3 className="mb-2 text-lg font-medium">
            Precision Cooling
          </h3>

          <p className="leading-relaxed">
            Glycol-cooled systems provide temperature control for smoother,
            cleaner, and more aromatic spirits.
          </p>
        </div>
      </div>
    </div>

    <div className="relative">
      <Image
        src="/images/tap.webp"
        alt="Copper still"
        width={400}
        height={700}
        className="lg:h-[650px] lg:w-full md:w-120 w-full m-auto rounded-2xl object-cover shadow-2xl"
      />

      <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-2xl bg-white p-6 shadow-xl md:block">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Crafted With
        </p>

        <h4 className="mt-2 text-3xl font-light">
          Patience
        </h4>
      </div>
    </div>
  </div>

  <div className="bg-[#e8dfd2]">
    <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
      <div className="order-2 lg:order-1">
       
        <Image src="/images/barrels.png"
        alt="Aging barrels"
        width={300}
        height={500}
        className="lg:h-[650px] lg:w-full md:w-120 w-full m-auto rounded-2xl object-cover shadow-2xl"
        />
      </div>

      <div className="order-1 lg:order-2">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-600">
          Aging
        </p>

        <h2 className="mb-6 text-4xl font-light md:text-5xl">
          Time Shapes Flavor
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-neutral-700">
          As spirits mature in barrels, harsh edges soften and new layers of
          aroma and flavor emerge through extraction, esterification, and
          concentration.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/70 p-6 backdrop-blur shadow-xl">
            <h3 className="mb-3 text-lg font-medium">
              Extraction
            </h3>

            <p className="text-sm leading-relaxed text-neutral-700">
              Spirits absorb compounds from oak barrels, influenced by wood,
              climate, and char level.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 p-6 backdrop-blur shadow-xl">
            <h3 className="mb-3 text-lg font-medium">
              Esterification
            </h3>

            <p className="text-sm leading-relaxed text-neutral-700">
              Acids and alcohol interact over time to create floral, fruity, and
              honeyed aromas.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 p-6 backdrop-blur shadow-xl">
            <h3 className="mb-3 text-lg font-medium">
              Concentration
            </h3>

            <p className="text-sm leading-relaxed text-neutral-700">
              Natural evaporation intensifies flavor and creates greater depth
              within the barrel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-6xl px-6 py-24">
    <div className="mb-16 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Finishing
      </p>

      <h2 className="text-4xl font-light md:text-5xl">
        Final Flavor Layers
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
        Select spirits undergo additional finishing in specialty barrels such as
        port, wine, and cognac casks to add subtle complexity before bottling.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop"
          alt="Port barrel"
          className="h-72 w-full object-cover"
        />

        <div className="p-8">
          <h3 className="mb-3 text-2xl font-light">
            Port Casks
          </h3>

          <p className="leading-relaxed text-neutral-700">
            Adds dark fruit richness, sweetness, and velvety texture.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
          alt="Wine barrel"
          className="h-72 w-full object-cover"
        />

        <div className="p-8">
          <h3 className="mb-3 text-2xl font-light">
            Wine Barrels
          </h3>

          <p className="leading-relaxed text-neutral-700">
            Introduces subtle tannins and elegant floral complexity.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1200&auto=format&fit=crop"
          alt="Cognac cask"
          className="h-72 w-full object-cover"
        />

        <div className="p-8">
          <h3 className="mb-3 text-2xl font-light">
            Cognac Casks
          </h3>

          <p className="leading-relaxed text-neutral-700">
            Creates warm notes of oak, dried fruit, cocoa, and spice.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-black px-6 py-28 text-center text-white/70">
    <div className="mx-auto max-w-4xl">
      <p className="text-3xl font-extralight italic leading-relaxed md:text-4xl">
        “Resting months, years, or decades can transform a spirit into
        something remarkable.”
      </p>
    </div>
  </div>
</section>)}