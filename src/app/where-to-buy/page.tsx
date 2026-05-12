import Link from "next/link"
import Image from "next/image"
export default function Page(){
    return(
        <section className="w-full bg-[#f7f3ee] text-neutral-900 px-6 py-24">
  <div className="mx-auto max-w-6xl space-y-16">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div className="space-y-6">

        <p className="uppercase tracking-[0.25em] text-xs text-neutral-500">
          Where To Buy
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Find Virago
          <span className="block text-neutral-600">
            Near You
          </span>
        </h1>

        <p className="text-neutral-600 leading-relaxed max-w-xl">
          Discover Virago Spirits online, at the Richmond tasting room,
          or through select retailers and distributors across multiple states.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">

          <Link
            href="/products"
            className="px-6 py-3 rounded-full bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition"
          >
            Shop Online
          </Link>

          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-neutral-300 text-sm hover:bg-white transition"
          >
            Visit Distillery
          </Link>

        </div>

      </div>

      <div className="relative">

        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl relative">

          <img
            src="images/tasting-room-2.jpg"
            alt="Virago Spirits tasting room"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <p className="uppercase tracking-[0.2em] text-xs text-white/70">
              Richmond, Virginia
            </p>

            <h3 className="text-2xl font-medium">
              Virago Tasting Room
            </h3>

            <p className="text-sm text-white/80">
              Craft cocktails, spirit flights, bottle pickups, and private events.
            </p>
          </div>

        </div>

      </div>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-3">
          Online Ordering
        </p>

        <h3 className="text-xl font-medium mb-2">
          Pick-up & Shipping
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed">
          Virginia residents can order bottles, cocktail kits,
          and merchandise online for shipping or local pickup.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-3">
          Virginia ABC
        </p>

        <h3 className="text-xl font-medium mb-2">
          80+ Store Locations
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed">
          Virago Four-Port Rum, Modern Gin, and 151 Rum
          are available throughout Virginia ABC stores.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-3">
          Out-of-State
        </p>

        <h3 className="text-xl font-medium mb-2">
          Retail Distribution
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed">
          Available in Illinois, Georgia, Florida,
          South Carolina, and Delaware through select retailers.
        </p>
      </div>

    </div>

    <div className="grid lg:grid-cols-2 gap-6">

      <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-6">

        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-2">
            Distillery Address
          </p>

          <h3 className="text-2xl font-medium">
            Virago Spirits
          </h3>

          <p className="text-neutral-600 mt-2">
            1727 Rhoadmiller Street
            <br />
            Richmond, Virginia 23220
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-2">
            Contact
          </p>

          <p className="text-neutral-700 text-sm">
            (804) 355-8746
          </p>
        </div>

      </div>

      <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">

        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-6">
          Tasting Room Hours
        </p>

        <div className="space-y-4">

          <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-[#f7f3ee] border border-neutral-200">
            <span className="font-medium">Wednesday</span>
            <span className="text-neutral-600 text-sm">
              10AM – 5PM
            </span>
          </div>

          <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-[#f7f3ee] border border-neutral-200">
            <span className="font-medium">Thursday</span>
            <span className="text-neutral-600 text-sm">
              4PM – 9:30PM
            </span>
          </div>

          <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-[#f7f3ee] border border-neutral-200">
            <span className="font-medium">Friday – Saturday</span>
            <span className="text-neutral-600 text-sm">
              2PM – 9:30PM
            </span>
          </div>

          <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-[#f7f3ee] border border-neutral-200">
            <span className="font-medium">Sunday</span>
            <span className="text-neutral-600 text-sm">
              2PM – 6PM
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    )
}