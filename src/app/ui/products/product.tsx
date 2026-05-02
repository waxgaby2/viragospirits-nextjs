import { fetchProducts } from "@/app/lib/fetch"
import { ProductCard } from "./productCard";
export async function Product(){
      const products = await fetchProducts();
 
    return (
        <div className={`text-red-600 flex flex-col
         flex-wrap my-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10`}>  
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