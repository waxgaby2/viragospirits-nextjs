import { Footer } from "../ui/footer"
import { Header } from "../ui/header"
import { ProductsHero } from "../ui/hero"
import { Product } from "../ui/products/product"
import { Suspense } from "react"
import { ProductCardSkeleton } from "../ui/products/productCardSkeleton"
import { oswald } from "../ui/fonts"

export default function Page(){
    return (
        <div>
        
           <ProductsHero />
           <h2 id="spirits" className={`font-serif text-2xl 
           text-white/80
           lg:text-3xl mt-10 tracking-wider
           ml-4 lg:ml-10`}>Our Spirits</h2>
             <Suspense       
        fallback={<div className={`text-red-600 flex flex-col
         flex-wrap py-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10
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