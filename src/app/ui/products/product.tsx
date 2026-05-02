import { fetchProducts } from "@/app/lib/fetch"
import { ProductCard } from "./productCard";
import { ProductCardSkeleton } from "./productCardSkeleton";
export async function Product(){
      const products = await fetchProducts();
      
   if (!products) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }
    return (
        <div className={`text-red-600 flex flex-col
         flex-wrap my-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10
         mx-3 md:mx-6`}>  
{products.map((p: any,i)=>{
    if(p.inStock===false){
return;}
    return(
      <ProductCard key={p.id} product={p} />
    )
})}
        </div>
    )
}