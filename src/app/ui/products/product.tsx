import { fetchProducts } from "@/app/lib/fetch"
import { ProductCard } from "./productCard";



export async function Product(){
      const products = await fetchProducts();


    return (
        <div className={` flex flex-col
         flex-wrap py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10
         px-3 md:px-6`}>  
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