'use client'
import { useState, useEffect } from "react";
import { oswald } from "../fonts";

export function Add({product}:any){
const [number,setNumber]=useState<number>(1);
const [price,setPrice]=useState<number>(0);
useEffect(()=>{
setPrice(prev => product.price * number)
},[number,product.price])


function handleAdd(){

const newProduct={product,price,number}
const fetchProducts = localStorage.getItem("products") || null;
if(fetchProducts===null){
  return;
}
const products=JSON.parse(fetchProducts);
const productExist=products.some((p:any)=>product.id===p.product.id);
if(productExist){
const productFind=products.find((p:any)=> product.id===p.product.id);
const filtered=products.filter((p:any)=>product.id !==p.product.id)
  productFind.price += price;
  productFind.number += number;
const updateProducts=[...filtered,productFind];
localStorage.setItem("products", JSON.stringify(updateProducts));
return;
}
const updatedProducts=[...products,newProduct]
localStorage.setItem("products", JSON.stringify(updatedProducts));
  console.log("Product added:", products);
}

    return (
    <div className=" p-1">
        
<p className={`text-[14px] mb-3 font-bold ${oswald.className} tracking-widest`}>QUANTITY</p>
 <div className="flex mb-3">
    <button type="button" aria-label="remove one quantity"
    className={`w-10 h-10 p-3 bg-black/80 rounded-lg flex
    text-white 
    justify-center items-center active:scale-95`}
    onClick={()=>{setNumber(prev => prev === 1 ? 1 : prev -1
    )}}>-</button>
   <div className="md:w-[70%] w-full lg:w-[20%] h-10 flex justify-center items-center">
    <p>{number}</p></div>
     <button type="button" aria-label="add one quantity"
     className={`w-10 h-10 p-3 bg-black/80 rounded-lg text-white
      flex justify-center items-center active:scale-95`}
      onClick={()=>{setNumber(prev => prev+1)}}
      >+</button>
      </div>
      <button className={`bg-black/80 text-white px-6 py-3 
      active:scale-95 rounded-lg hover:scale-105 transition`}
      onClick={handleAdd}>
          Add to cart
        </button>
<p>{price.toFixed(2)}</p>
</div>    
    )
}