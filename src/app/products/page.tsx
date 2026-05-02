import { Footer } from "../ui/footer"
import { Header } from "../ui/header"
import { ProductsHero } from "../ui/hero"
import { Product } from "../ui/products/product"
import { Suspense } from "react"
import { ProductCardSkeleton } from "../ui/products/productCardSkeleton"


export default function Page(){
    return (
        <div>
           <ProductsHero />
             <Suspense       
        fallback={<div className={`text-red-600 flex flex-col
         flex-wrap py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10
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