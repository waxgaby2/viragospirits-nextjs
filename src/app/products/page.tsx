import { Footer } from "../ui/footer"
import { Header } from "../ui/header"
import { ProductsHero } from "../ui/hero"
import { Product } from "../ui/products/product"
import { Suspense } from "react"
import { ProductCardSkeleton } from "../ui/products/productCardSkeleton"
import { oswald } from "../ui/fonts"

export default function Page(){
    return (
        <div className="mb-20"> 
        
           <ProductsHero />
           <h2 id="spirits" className={`text-center pt-10
           md:text-3xl mt-10 text-[12px]
           ml-4 lg:ml-10 text-neutral-500
            uppercase tracking-[0.5em]`}>Our Collections</h2>
             <div className="mx-auto mt-6 lg:w-40 md:w-32 mb-20 h-[1px] w-24 bg-gradient-to-r from-transparent via-neutral-800/60 to-transparent" />
             <Suspense       
        fallback={<div className={`text-red-600 flex flex-col
         flex-wrap pb-5 pt-15 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10
         px-3 md:px-6`}>
            {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i}  />
         
        ))}
         </div>}
      >
           <Product />
           </Suspense>
        </div>
    )
} 