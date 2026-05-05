'use client'
import { useAppContext } from "../context/userContext"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { CartMenu } from "./cart/displayProduct";
import { useState } from "react";

export function CartCounter(){
    const {cart}=useAppContext();
    const totalItems =cart === null? '': cart.reduce((sum, item) => sum + item.quantity, 0);
const [open,setOpen]=useState<boolean>(false)
    return (<div className={`relative`}>
<button type="button" 
aria-label="open cart menu"
onClick={()=>setOpen(prev=>!prev)}>
<ShoppingCartIcon className="text-white/80 w-8 h-8" />
{cart?.length!==0 &&<div className={`bg-red-800/90 text-white/80
font-bold
text-[10px] w-5 h-5 absolute top-[-6px] right-0
    flex justify-center items-center rounded-[100%]`}>
        <p>{totalItems}</p>
       </div>}
</button>
<CartMenu open={open} setOpen={setOpen} />
    </div>)
}