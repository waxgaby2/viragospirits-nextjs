import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/app/lib/image";



type Product = {
  _id: string
  name: string;
  price: number;
  image: string;
  slug:{current:string}
};

export function ProductCard({ product }: { product: Product }) {


  return (
   <div
  className="
    group m-2 overflow-hidden
    rounded-[2rem]
    border border-white/10
    bg-white/70 p-5
    text-black/90
    shadow-[0_10px_35px_rgba(0,0,0,0.12)]
    backdrop-blur-md
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:bg-white/80
    hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]
    active:scale-[0.98]
    cursor-pointer
  "
>
  <Link
    href={`/products/${product.slug}`}
    className="flex h-full w-full flex-col"
  >
   
    <div
      className="
        relative flex h-56 w-full
        items-center justify-center
        overflow-hidden rounded-[1.5rem]
   
      "
    >
      <div
        className="
          absolute inset-0 opacity-0
          transition duration-500
          group-hover:opacity-100
        
        "
      />

      <Image
        src={urlFor(product.image).width(600).url()}
        width={400}
        height={400}
        alt={product.name}
        className="
          relative z-10 h-full w-full
          object-contain
          transition duration-700
          group-hover:scale-105
        "
      />
    </div>

    <div
      className="
        flex flex-1 flex-col
        items-center justify-between
        space-y-3 px-2 pb-2 pt-6
      "
    >
      <div className="text-center">
        <h3 className="text-xl font-semibold tracking-wide">
          {product.name}
        </h3>

        <div className="mx-auto mt-3 h-[1px] w-12 bg-black/10"></div>
      </div>

      <p className="text-center text-sm leading-7 text-black/60">
        Premium quality product
      </p>

      <div
        className="
          mt-2 rounded-full
          bg-black px-6 py-2
          text-white shadow-lg
          transition duration-300
          group-hover:bg-red-800
        "
      >
        <span className="text-lg font-bold">
          ${product.price}
        </span>
      </div>
    </div>
  </Link>
</div>)
}