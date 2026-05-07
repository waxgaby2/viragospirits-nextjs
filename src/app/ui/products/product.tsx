
import { ProductCard } from "./productCard";
import { productsQuery } from "@/app/lib/queries";
import {client} from "@/app/lib/sanity";

export async function Product(){
   const products = await client.fetch(productsQuery)


    return (
        <div className={` flex flex-col
         flex-wrap py-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10
         px-3 md:px-6`}>  
{products.map((p: any,i:number)=>{
    if(p.inStock===false){
return;}
    return(
      <ProductCard key={p._id} product={p} />
    )
})}
        </div>
    )
}