'use client'
import { useAppContext } from "../context/userContext"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"


export function CartCounter(){
    const {cart}=useAppContext();
    const totalItems =cart === null? '': cart.reduce((sum, item) => sum + item.quantity, 0);

    return (<div className={`relative`}>
<ShoppingCartIcon className="text-white w-8 h-8" />
{cart?.length!==0 &&<div className={`bg-rose-300 text-black/90
font-bold
text-[10px] w-5 h-5 absolute top-[-6px] right-0
    flex justify-center items-center rounded-[100%]`}>
        <p>{totalItems}</p>
       </div>}
    </div>)
}