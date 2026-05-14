import { Footer } from "../ui/footer"
import { Header } from "../ui/header"
import { ProductsHero } from "../ui/hero"
import { Product } from "../ui/products/product"
import { Suspense } from "react"
import { ProductCardSkeleton } from "../ui/products/productCardSkeleton"
import { oswald } from "../ui/fonts"

export default function Page(){
    return (
        <div className="my-20"> 
        
           <ProductsHero />
           <h2 id="spirits" className={` text-3xl 
            text-center pt-10
           lg:text-3xl mt-10 
           ml-4 lg:ml-10 text-neutral-500
           text-[10px] uppercase md:tracking-[0.5em]
            tracking-[0.2em]"`}>Virago Spirits Collections</h2>
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