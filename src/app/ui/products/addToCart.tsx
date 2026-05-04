'use client'
import { useState, useEffect } from "react";
import { oswald } from "../fonts";
import { useAppContext } from "@/app/context/userContext";


type CartItem = {
  id: string;
  quantity: number;
};

export function Add({product}:any){
const [number,setNumber]=useState<number>(1);
const [price,setPrice]=useState<number>(0);
const {cart,setCart}=useAppContext();


useEffect(()=>{
setPrice(prev => product.price * number)
},[number,product.price])


function handleAdd(){
  if (!cart) return;

const existing = cart.find(item => item.id === product.id);

if (existing) {
  const updated = cart.map(item =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + number }
      : item
  );
  setCart(updated);
} else {
  setCart([...cart, { id: product.id, quantity: number }]);
}
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
</div>    
    )
}




export function Quantity({product}:any){
const [number,setNumber]=useState<number>(0);
const [price,setPrice]=useState<number>(0);
const {cart,setCart}=useAppContext();



function handleAdd(){
  if (!cart) return;

const existing = cart.find(item => item.id === product.id);

if (existing) {
  const updated = cart.map(item =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  setCart(updated);
} else {
  setCart([...cart, { id: product.id, quantity: number }]);
}
}



function handleSubtract(){
  if (!cart) return;

const existing = cart.find(item => item.id === product.id);

if (existing) {
  const updated = cart.map(item =>
    item.id === product.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  setCart(updated);
} else {
  setCart([...cart, { id: product.id, quantity: number }]);
}
}

    return (
    <div className="p-1 w-full h-full flex flex-col items-center justify-center">
        
<p className={`text-[14px] mb-3  tracking-widest`}>Quantity</p>
 <div className="flex border-2 border-gray-300 justify-between rounded-sm">
    <button type="button" aria-label="remove one quantity"
    className={`w-5 h-5 p-4 border-r-2 flex
    text-black border-gray-300
    justify-center items-center active:scale-95`}
    onClick={()=>{handleSubtract();}}>-</button>
   <div className="flex justify-center w-[40px] items-center">
    <p>{product.quantity}</p></div>
     <button type="button" aria-label="add one quantity"
     className={`w-5 h-5 p-4 border-l-2 text-black
      flex justify-center
      border-gray-300 items-center active:scale-95`}
      onClick={()=>{
       handleAdd();
      }}
      >+</button>
      </div>
    
</div>    
    )
}