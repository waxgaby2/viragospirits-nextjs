
import Image from "next/image"
import Link from "next/link"
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { inter } from "./fonts"
import { productsQuery } from "../lib/queries";
import {client} from "../lib/sanity";
import { urlFor } from "../lib/image";

export async function OurSpirits(){

    const products = await client.fetch(productsQuery)


return (<section
  className="
    relative w-full overflow-hidden
    bg-gradient-to-br
    from-white/80 via-white/75 to-white/70
    pb-24 pt-20
    text-black
    backdrop-blur-md
  "
>
  <div
    className="
      absolute right-[-10%] top-[10%]
      h-80 w-80 rounded-full
      bg-red-900/10 blur-3xl
    "
  />

  <div className="relative z-10">
   
    <h2
      className="
        mb-5 text-center
        font-serif text-sm
         uppercase
        tracking-[0.35em]
        text-black/70
      "
    >
      Our Spirits
    </h2>

    <div className="flex flex-col items-center">
      <p
        className="
          font-serif text-4xl
          leading-tight tracking-wide
          text-black lg:text-7xl
        "
      >
        Made With Love.
      </p>

      <p
        className="
          font-serif text-4xl
          leading-tight tracking-wide
          text-black lg:text-7xl
        "
      >
        Enjoyed Together.
      </p>
    </div>
    <div className="mx-auto mt-8 h-[1px] w-24 bg-black/10" />

    <p
      className={`
        mx-auto mt-8 max-w-2xl
        px-4 text-center
        text-sm leading-8
        text-black/60 lg:text-lg
        ${inter.className}
      `}
    >
      Explore our collection of crafted spirits,
      each with its own unique flavor, character,
      and story.
    </p>
  </div>

  <div
    className={`
      relative z-10 mt-16
      flex w-full gap-6
      overflow-x-auto px-5
      scroll-smooth pb-5
      lg:justify-between lg:px-20
      ${inter.className}
    `}
  >
    {products.map((product: any, i: number) => {
      if (!product.inStock) {
        return;
      }

      if (i > 3) {
        return;
      }

      return (
        <div
          key={product._id}
          className="
            group min-w-[280px]
            flex flex-col
            justify-between rounded-[2rem]
            border border-black/5
            bg-white/60 p-6
            shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            backdrop-blur-md
            transition-all duration-500
            hover:-translate-y-3
            hover:bg-white/80
            hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)]
            lg:min-w-0 lg:w-[30%]
          "
        >
          <div
            className="
              relative flex h-[150px]
md:h-[320px]
              items-end justify-center
              overflow-hidden rounded-[1.5rem]
              bg-gradient-to-br
              from-neutral-100 to-white
              p-6
            "
          >
            <div
              className="
                absolute inset-0 opacity-0
                transition duration-700
                group-hover:opacity-100
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_70%)]
              "
            />

            <Image
              src={urlFor(product.image).width(600).url()}
              width={200}
              height={600}
              alt={product.name}
              className="
                relative z-10 h-30
                w-auto object-cover
                transition duration-700
                group-hover:scale-105
                md:h-72
              "
            />
          </div>

          <div className="mt-8 flex flex-1 flex-col">
            <h3
              className="
                text-xl font-bold
                uppercase tracking-wide
                text-black/90
              "
            >
              {product.name}
            </h3>

            <div className="mt-4 h-[1px] w-14 bg-black/10" />

            <p
              className="
                mt-5 text-sm
                leading-7 text-black/60
                lg:text-base
              "
            >
              {product.description.length > 90
                ? product.description.slice(0, 89) +
                  "..."
                : product.description}
            </p>

            <Link
              href={`/products/${product.slug}`}
              className="
                group/link mt-8 flex
                items-center text-sm
                font-semibold uppercase
                tracking-[0.2em]
                text-red-800/90
                transition duration-300
                hover:text-black
              "
            >
              Learn More

              <ArrowLongRightIcon
                className="
                  ml-3 h-5 w-5
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-2
                "
              />
            </Link>
          </div>
        </div>
      );
    })}
  </div>

  
  <div className="relative z-10 mt-16 flex justify-center">
    <Link
      href="/products"
      className="
        rounded-full border
        border-red-800/70
        bg-red-800/90 px-12
        py-5 text-center
        text-sm font-semibold
        uppercase tracking-[0.3em]
        text-white
        shadow-[0_10px_30px_rgba(120,0,0,0.25)]
        transition-all duration-500
        hover:-translate-y-1
        hover:bg-black
        active:scale-95
      "
    >
      View All Spirits
    </Link>
  </div>
</section>)
}