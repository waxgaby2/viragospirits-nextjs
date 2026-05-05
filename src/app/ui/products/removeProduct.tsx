'use client'
import { TrashIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/userContext";
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};


export function Remove({ product }: { product: Product }){
      const { cart,setCart } = useAppContext();

function handleRemove(item: Product){
const filter = cart?.filter(p => p.id !== product.id) || [];
setCart(filter);
}
    return (<div className={`flex
     h-full lg:justify-center
     lg:items-center `}>
<button type="button" aria-label="delete product from cart"
className="cursor-pointer m-6 ml-0 mb-0"
onClick={()=>handleRemove((product))}>
<TrashIcon className={`w-6 h-6 lg:w-7 lg:h-7
 active:scale-95 text-red-800/90
 hover:text-gray-400 transition`} />
</button>
    </div>)
}