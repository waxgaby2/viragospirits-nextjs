"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/userContext";
import { fetchProductById } from "@/app/lib/fetch";
import { ProductCard } from "../products/productCard";
import Image from "next/image";
import { Quantity } from "../products/addToCart";
import { inter, oswald } from "../fonts";
import { Remove } from "../products/removeProduct";
import Link from "next/link";
export function ShowCart() {
  const { cart } = useAppContext();
  const [products, setProducts] = useState<any[]>([]);
const[loading,setLoading]=useState<boolean>(true);
  useEffect(() => {
    async function loadProducts() {
      if (!cart) return;

 const results = await Promise.all(
  cart.map(async (p) => {
    const product = await fetchProductById(p.id);
    return {
      ...product,
      quantity: p.quantity,
    };
  })
);
setLoading(false)
      setProducts(results);
    }

    loadProducts();
  }, [cart]);
if(loading){
    return (
        <div className="flex justify-center items-center w-full h-screen">
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
    </div>)
}
if(!cart || cart?.length<1){
     return (
        <div className="flex text-white justify-center items-center w-full h-screen">
 <p>Cart is empty</p>
    </div>) 
}
  return (
    <div className={`${inter.className} lg:pt-25 
    pt-10 text-black justify-center lg:justify-between
     w-full flex flex-col lg:flex-row p-3 lg:p-6 `}>
      
        <div className="w-full hidden  lg:w-[68%] gap-4 lg:flex flex-col">
     <h2 className="font-bold text-2xl text-white/80">Your Carts ({products.length} items)</h2>
      {products.map((product, i) => (
        <div key={i} className={`flex lg:h-50 w-full gap-2
            rounded-lg shadow-[0_0_5px_1px_rgba(0,0,0,0.3)]
            justify-center 
            lg:justify-between flex-col lg:flex-row
             p-3 bg-white/80`}>
         <div className={`m-auto w-[50%] lg:h-auto lg:w-[22%]
          rounded-md flex justify-center items-center`}> 
            <Image  src={product.image}
          alt={product.name}
          width={50}
          height={50}
          className={`h-40 object-contain 
           transition`} />
        </div>
        <div className="m-auto flex flex-col justify-center gap-3 lg:gap-9 lg:w-[22%]">
          <p className="font-bold text-sm lg:text-md">{product.name}</p>  
          <p className="font-bold text-sm">$ {product.price}</p>
        </div>
        <div className="m-auto lg:w-[22%] flex flex-col justify-center items-center">
<Quantity product={product} />
        </div>
        <div className="m-auto w-[22%] flex flex-col justify-center items-center">
            <p>Total</p>
            <p className="font-bold pt-5">$ {(product.price*product.quantity).toFixed(2)}</p>
        </div>
        <div>
            <Remove product={product} />
        </div>
        </div>
      ))}
    </div>

  <div className="w-full lg:hidden gap-1 flex flex-col">
     <h2 className="text-lg mb-5 text-white/80">Your Carts ({products.length} items)</h2>
      {products.map((product, i) => (
        <div key={i} className={`flex w-full
            shadow-[0_0_5px_1px_rgba(0,0,0,0.3)]
            justify-between flex-col
             p-3 bg-white/80`}>
                <div className="flex justify-between">
         <div className={` w-25
          h-25
          rounded-md flex 
          justify-center items-center`}> 
            <Image  src={product.image}
          alt={product.name}
          width={50}
          height={50}
          className={`h-40 object-contain 
           transition`} />
        </div>
        <div className="h-full w-[70%]">
        <div className=" flex flex-col">
          <p className="text-sm ">{product.name}</p>  
          <p className="text-md">${product.price}</p>
        </div>
         <div className=" flex flex-col">
            <p className="text-sm">Total</p>
            <p className="text-md">${(product.price*product.quantity).toFixed(2)}</p>
        </div>
        </div>
        </div>

        <div className="flex justify-between">
 <Remove product={product} />

 <Quantity product={product} />

        </div>
       
       
        </div>
      ))}
    </div>
    


    <div className={`w-full lg:w-[30%] bg-white/80
    h-100 block mt-5 lg:mt-0
 lg:rounded-lg shadow-[0_0_5px_1px_rgba(0,0,0,0.3)]
            p-5`}>
<h3 className="text-lg font-bold">Order Summary</h3>
<div className="pt-10 text-sm flex justify-between">
    <p>
Subtotal ({products.length} items)
    </p>
     <p>
      ${(products.reduce((sum,p)=>p.price*p.quantity+sum,0)).toFixed(2)}  
    </p>
</div>
<div className="pt-5 text-sm flex justify-between">
    <p>
Shipping
    </p>
     <p>
     $50
    </p>
</div><div className="pt-5 text-sm flex justify-between">
    <p>
Tax
    </p>
     <p>
     $10
    </p>
</div>
<div className="w-full bg-black/50 h-[2px] my-10" />
    <div className="flex justify-center items-center">
    <Link href="/cart" className={`bg-black/80
     text-white py-4 px-10 
    rounded m-auto hover:bg-black/90 transition
    duration-300 ease`}>Proceed to payout</Link>
   </div>
    </div>
    </div>
  );
}

type CartMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export function CartMenu({ open,setOpen }: CartMenuProps){
    const { cart } = useAppContext();
  const [products, setProducts] = useState<any[]>([]);
const[loading,setLoading]=useState<boolean>(true);
  useEffect(() => {
    async function loadProducts() {
      if (!cart) return;

 const results = await Promise.all(
  cart.map(async (p) => {
    const product = await fetchProductById(p.id);
    return {
      ...product,
      quantity: p.quantity,
    };
  })
);
setLoading(false)
      setProducts(results);
    }

    loadProducts();
  }, [cart]);

   useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])


  return(
     <>
     {open &&<div
onClick={()=>setOpen(!open)}
        className={`fixed inset-0 z-[100] 
           bg-white/40 backdrop-blur-sm 
          transition-all duration-500 ease-in-out
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />}

    <div className={`bg-white text-black 
      z-102 overflow-auto pb-30 lg:pb-5
    w-[70%] lg:w-[500px] h-screen 
    ${open?'opacity-100 right-0':'right-[-1000px] opacity-0'}
    fixed top-0 transition-all duration-500 ease-in-out`}>
<h2 className={`${oswald.className} pt-5 text-center text-lg lg:text-3xl`}>Your Cart ({cart?.length} item{cart&&cart?.length>1 ?'s':""})</h2>
    <div className={`mt-5`}>
{products.map((product,i)=>{
  return (
    <div key={product.id}
    className={`w-full h-30 flex border-b
    border-black/30 
    transform transition-all duration-500
    bg-gray-100 px-2 lg:p-4
     ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
          `} 
           style={{
              transitionDelay: `${i * 110}ms`,
            }}>
     <div className="h-full w-[15%] flex justify-center items-center">
<Image src={product.image}
     width={50} alt={product.name}
     height={50} 
     className="object-contain pr-1"
     />
     </div>
<div className="h-full w-[50%] flex items-center pr-1">
<p className={`font-extralight
${oswald.className}
`}>{product.name} (x{product.quantity})</p>

</div>
<div className={`h-full w-[35%] flex
 items-center flex-col py-2
 lg:flex-row justify-center
 lg:justify-between pr-1`}>

<p className={`font-extralight
${oswald.className}
`}>${(product.price*product.quantity).toFixed(2)}</p>

<Remove product={product} />
</div>

    </div>
  )
})}
    </div>


<div className={`mt-5 p-2 ${oswald.className}`}>

<div className="text-md lg:text-lg flex justify-between mt-3">
    <p>Total</p>
     <p>
      ${(products.reduce((sum,p)=>p.price*p.quantity+sum,0)).toFixed(2)}  
    </p>
</div>
</div>
     <div className="flex justify-center mt-10 items-center">
    <Link href="/cart" className={`bg-black/80
     text-white py-4 px-10 
     active:scale-95
    rounded m-auto hover:bg-black/90 transition
    duration-300 ease-in-out`}>Proceed to cart</Link>
   </div>
    </div>
   </>
  )
}