import { productBySlugQuery } from "@/app/lib/queries";
import {client} from "@/app/lib/sanity";
import { oswald } from "@/app/ui/fonts";
import { Add } from "@/app/ui/products/addToCart";
import { urlFor } from "@/app/lib/image";


export  async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await client.fetch(productBySlugQuery, {
    id,
  })

  return {
    title: `${product.name} | Virago Spirits`,
    description: product.shortDescription,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await client.fetch(productBySlugQuery, {
    id,
  })
console.log(product)
  if (!product) {
    return (
    <div className="p-6 h-screen w-screen text-black flex justify-center items-center">
        <p>Product not found</p>
        
        </div>);
  }

 return (
  <>
    <section
      className={` relative overflow-hidden
        bg-[#f7f3ee]
        text-neutral-900`}
   
    >
      <div
        className={`
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(120,20,20,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.12),transparent_35%)]`}
      />

      <div
        className={`pointer-events-none absolute inset-0
          opacity-[0.05]
          mix-blend-multiply
          bg-[url('/noise.png')]`}
        
      />

      <div
        className={`absolute left-1/2 top-24
          -translate-x-1/2
          whitespace-nowrap
          text-[18vw]
          font-black uppercase
          tracking-[-0.08em]
          text-black/[0.03]
          select-none
          hidden lg:block`}
      >
        VIRAGO
      </div>

      <div
        className={`relative z-10
          mx-auto grid
          max-w-7xl
          gap-14
          px-5 pb-20 pt-24
          md:grid-cols-2
          md:items-center
          lg:px-12`}
      >
        <div
          className={`relative flex
            items-center justify-center`}
        >
          <div
            className={`absolute
              h-[320px] w-[320px]
              rounded-full
              bg-red-900/30
              blur-3xl hidden
              lg:block
              lg:h-[500px]
              lg:w-[500px]`}
          />
   <div
            className={`absolute inset-0
             rounded-[2.5rem]
              bg-red-900/30
              blur-3xl lg:hidden
             `}
          />
          <div
            className={`group relative
              flex h-[420px] w-full
              max-w-[500px]
              items-center justify-center
              overflow-hidden
              rounded-[2.5rem]
              border border-white/40
              bg-white/40
              p-8
              shadow-[0_30px_80px_rgba(0,0,0,0.18)]
              backdrop-blur-2xl

              lg:h-[700px]`}
          >
            <div
              className={`absolute inset-0
                opacity-0 transition duration-700
                group-hover:opacity-100
                bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)]
                translate-x-[-100%]
                group-hover:translate-x-[100%]`}
            />

            <img
              src={urlFor(product.image).width(900).url()}
              alt={product.name}
              className={`relative z-10
                h-full w-full
                object-contain
                transition duration-700
                group-hover:scale-[1.04]`}
            />
          </div>
        </div>

        <div
          className="relative flex flex-col justify-center"
        >
          <p
            className="text-[10px]uppercase md:tracking-[0.5em] tracking-[0.2em] text-neutral-500"
          >
            Virago Spirits Collection
          </p>

          <h1
            className={`mt-5
              
              font-serif
              text-4xl
              leading-none
              tracking-tight

              md:text-6xl
              lg:text-7xl`}
          >
            {product.name}
          </h1>

          <div
            className={`mt-8 h-[1px]
              w-24
              bg-gradient-to-r
              from-red-900
              to-transparent`}
          />

          <p
            className="mt-8  text-sm leading-8 text-neutral-700 lg:text-base"
          >
            {product.description}
          </p>

          <div className="mt-12 flex items-end gap-4">
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.35em] text-neutral-500"
              >
                Price
              </p>

              <p
                className={`mt-2
                  text-4xl
                  font-semibold
                  text-red-900

                  md:text-6xl`}
              >
                ${product.price}
              </p>
            </div>

            <div
              className={`mb-2 hidden
                h-10 w-[1px]
                bg-neutral-300
                lg:block`}
            />

            <p
              className={`hidden max-w-[160px]
                text-sm leading-6
                text-neutral-500
                lg:block`}
            >
             {product.tastingNotes}
            </p>
          </div>

          <div className="mt-10">
            <Add product={product} />
          </div>
        </div>
      </div>
      

<section
  className={`
    relative overflow-hidden
    border-t border-neutral-200
    bg-[#f7f3ee]
    px-5 py-24
    text-neutral-900
    lg:px-16
  `}
>
  <div
    className={`
      absolute right-0 top-0
      h-72 w-72 rounded-full hidden lg:block
      bg-red-900/10 blur-3xl
    `}
  />

  <div
    className={`
      relative z-10
      mx-auto flex max-w-7xl
      flex-col gap-16
      lg:flex-row
    `}
  >
    <div
      className={`
        w-full lg:w-[40%]
      `}
    >
      <p
        className={`
          text-[10px]
          uppercase tracking-[0.45em]
          text-neutral-500
        `}
      >
        Customer Experience
      </p>

      <h2
        className={`
          mt-5
          font-serif
          text-4xl
          leading-tight
          lg:text-5xl
        `}
      >
        Reviews &
        <span className={`text-red-900`}>
          {" "}Tasting Notes
        </span>
      </h2>

      <p
        className={`
          mt-6
   
          text-sm leading-8
          text-neutral-600
          lg:text-base
        `}
      >
        Hear what collectors and enthusiasts think about this
        bottle. Share your own tasting experience and impressions.
      </p>

      <div
        className={`
          mt-10 flex items-center gap-6
        `}
      >
        <div>
          <p
            className={`
              text-5xl font-semibold
              text-red-900
            `}
          >
            4.9
          </p>

          <p
            className={`
              mt-2 text-sm
              text-neutral-500
            `}
          >
            Average Rating
          </p>
        </div>

        <div
          className={`
            h-14 w-[1px]
            bg-neutral-300
          `}
        />

        <div>
          <p
            className={`
              text-2xl font-medium
            `}
          >
            120+
          </p>

          <p
            className={`
              mt-2 text-sm
              text-neutral-500
            `}
          >
            Enthusiast Reviews
          </p>
        </div>
      </div>
    </div>

    <div
      className={`
        flex w-full
        flex-col gap-8
        lg:w-[60%]
      `}
    >
      <div
        className={`
          grid gap-6
          md:grid-cols-2
        `}
      >
        {[1, 2].map((item) => (
          <div
            key={item}
            className={`
              relative overflow-hidden
              rounded-[2rem]
              border border-white/40
              bg-white/60
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
            `}
          >
            <div
              className={`
                absolute right-0 top-0
                h-24 w-24 rounded-full hidden lg:block
                bg-red-900/10 blur-2xl
              `}
            />

            <div
              className={`
                relative z-10
              `}
            >
              <div
                className={`
                  flex items-center
                  justify-between
                `}
              >
                <div>
                  <p
                    className={`
                      text-lg font-medium
                    `}
                  >
                    Coming Soon
                  </p>

                  <p
                    className={`
                      mt-1 text-xs uppercase
                      tracking-[0.3em]
                      text-neutral-500
                    `}
                  >
                    Verified Buyer
                  </p>
                </div>

                <p
                  className={`
                    text-sm
                    text-red-900
                  `}
                >
                  ★★★★★
                </p>
              </div>

              <p
                className={`
                  mt-6
                  text-sm leading-7
                  text-neutral-600
                `}
              >
                Reviews will soon be available for this bottle.
                Customers will be able to share tasting notes,
                aroma impressions, finish quality, and pairing
                experiences.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`
          rounded-[2rem]
          border border-white/40
          bg-white/70
          p-6
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
          lg:p-8
        `}
      >
        <div
          className={`
            flex flex-col
            gap-3
            lg:flex-row
            lg:items-center
            lg:justify-between
          `}
        >
          <div>
            <h3
              className={`
                text-2xl font-serif
              `}
            >
              Drop a Review
            </h3>

            <p
              className={`
                mt-2 text-sm
                text-neutral-500
              `}
            >
              Community reviews are launching soon.
            </p>
          </div>

          <span
            className={`
              w-fit rounded-full
              bg-red-900 px-4 py-2
              text-xs uppercase
              tracking-[0.3em]
              text-white
            `}
          >
            Coming Soon
          </span>
        </div>

        <form
          className={`
            mt-10 flex
            flex-col gap-5
          `}
        >
          <input
            type="text"
            placeholder="Your Name"
            disabled
            className={`
              h-14 rounded-2xl
              border border-neutral-200
              bg-white px-5
              text-sm outline-none
              placeholder:text-neutral-400
            `}
          />

      

          <textarea
            rows={5}
            disabled
            placeholder="Share your tasting experience... (Coming Soon)"
            className={`
              rounded-2xl
              border border-neutral-200
              bg-white px-5 py-4
              text-sm outline-none
              placeholder:text-neutral-400
            `}
          />

          <button
            type="button"
            disabled
            className={`
              h-14 rounded-2xl
              bg-neutral-900
              text-sm uppercase
              tracking-[0.3em]
              text-white
              opacity-60
            `}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </section>
  </>
);
}