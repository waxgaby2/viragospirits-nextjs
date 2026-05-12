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

  if (!product) {
    return (
    <div className="p-6 h-screen w-screen text-black flex justify-center items-center">
        <p>Product not found</p>
        
        </div>);
  }

  return (
  <>
  <div
    className="
      relative min-h-screen overflow-hidden
     bg-[#f7f3ee] text-neutral-900 px-6 pb-20 pt-10
       lg:px-16 lg:pt-24
    "
  >
    <div
      className="
        absolute left-[-10%] top-[10%]
        h-80 w-80 rounded-full
        bg-red-900/20 blur-3xl hidden lg:block
      "
    />

    <div
      className="
        relative z-10 grid
        min-h-[80vh] gap-10
        md:grid-cols-2 md:gap-16
      "
    >
      <div
        className="
          flex items-center justify-center
        "
      >
        <div
          className="
            group relative flex
            h-[400px] w-full
            items-center justify-center
            overflow-hidden rounded-[2rem]
            border border-white/10
            bg-white p-8
            backdrop-blur-md 
            shadow-[0_20px_50px_rgba(0,0,0,0.45)]
            lg:h-[650px] lg:w-[35vw]
          "
        >
          <div
            className="
              absolute inset-0 opacity-0
              transition duration-700
              group-hover:opacity-100
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]
            "
          />

          <img
            src={urlFor(product.image).width(600).url()}
            alt={product.name}
            className="
              relative z-10 h-full w-full
              object-contain transition
              duration-700 group-hover:scale-105
            "
          />
        </div>
      </div>

      <div
        className="
          flex flex-col justify-center
          space-y-6
        "
      >
        <p
          className="
            text-[11px] uppercase
            tracking-[0.45em]
           
          "
        >
          Virago Spirits Collection
        </p>

        <h1
          className="
            font-serif text-4xl
            leading-tight tracking-wide
             lg:mb-6
            lg:text-6xl
          "
        >
          {product.name}
        </h1>

        <div className="h-[1px] w-24 bg-white/20" />

        <p
          className="
            max-w-2xl text-sm
            leading-8 
            lg:text-base
          "
        >
          {product.description}
        </p>

        {/* PRICE */}
        <div className="pt-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Price
          </p>

          <p
            className="
              mt-2 text-4xl
              font-semibold text-red-400
              lg:text-5xl
            "
          >
            ${product.price}
          </p>
        </div>

      
        <div className="pt-6">
          <Add product={product} />
        </div>
      </div>
    </div>
  </div>
</>
  );
}