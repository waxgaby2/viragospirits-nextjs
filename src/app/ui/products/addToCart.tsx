'use client'
import { useState, useEffect } from "react";
import { oswald } from "../fonts";
import { useAppContext } from "@/app/context/userContext";
import { luxuryToast } from "@/app/lib/sonnerToast";
import Spinner from "../loader/spinner";



type CartItem = {
  product:{
  slug: string;
  price: number;
  quantity: number;},
  loading:boolean
};

export function Add({product}:any){
const [number,setNumber]=useState<number>(1);
const [price,setPrice]=useState<number>(0);
const {cart,setCart}=useAppContext();

useEffect(()=>{
setPrice(prev => product.price * number)
},[number,product.price])

useEffect(()=>{
   if (!cart) return;

const existing = cart.find(item => item.slug === product.slug);
if(existing){
  setNumber(prev => existing.quantity)
}else{
  setNumber(1);
}
},[cart])

function handleAdd(){
  if (!cart) return;

const existing = cart.find(item => item.slug === product.slug);

if (existing) {
  const updated = cart.map(item =>
    item.slug === product.slug
      ? { ...item, quantity: item.quantity + number }
      : item
  );
  setCart(updated);
} else {
  setCart([...cart, { slug: product.slug, quantity: number }]);
}
luxuryToast.success("Added to cart")
}

function handleSubmit(product:any){
    if (!cart) return;

const existing = cart.find(item => item.slug === product.slug);

if(existing){
  return existing.quantity + number >10;
}
else if(number>10){
  return true;
}
}
function handleDisable(product:any){
    if (!cart) return;

const existing = cart.find(item => item.slug === product.slug);

if(existing){
  return existing.quantity + number >9;
}
else if(number>9){
  return true;
}
}

function handleQuantity(product:any){
   if (!cart) return number;
const existing = cart.find(item => item.slug === product.slug);
if(existing){
  return  existing.quantity
}else{
  return number;
}
}



    return (
    <div className=" p-1">
        
<p className={`text-[14px] mb-3 font-bold ${oswald.className} tracking-widest`}>QUANTITY</p>
 <div className="flex mb-3">
    <button type="button" aria-label="remove one quantity"
    className={`w-10 h-10 p-3 bg-red-800/90 rounded-lg flex
    text-white active:bg-white
      active:text-black hover:scale-105 transition
      duration-300 ease active:shadow-[0_0_2px_2px_rgba(255,255,255,0.2)]
    justify-center items-center active:scale-95`}
    onClick={()=>{setNumber(prev => prev === 1 ? 1 : prev -1
    )}}>-</button>
   <div className="md:w-[70%] w-full lg:w-[20%] h-10 flex justify-center items-center">
    <p>{number}</p></div>
     <button type="button" aria-label="add one quantity"
     className={`w-10 h-10 p-3  rounded-lg text-white
      flex justify-center items-center 
     hover:scale-105 transition
      duration-300 ease ${handleDisable(product)?"cursor-not-allowed bg-gray-400":"bg-red-800/90 active:scale-95 active:bg-white active:shadow-[0_0_2px_2px_rgba(255,255,255,0.2)] active:text-black"}`}
      onClick={()=>{setNumber(prev => prev+1)}}
      disabled={handleDisable(product)}
      >+</button>
      </div>
      <button className={` text-white px-6 py-3 
       rounded-lg  hover:scale-105 transition
      
      duration-300 ease ${handleSubmit(product)?"cursor-not-allowed bg-gray-400":"acive:shadow-[0_0_2px_2px_rgba(255,255,255,0.2)] bg-red-800/90 active:scale-95 active:bg-whitactive:text-black"}`}
      disabled={handleSubmit(product)}
      onClick={handleAdd}>
          Add to cart
        </button>
</div>    
    )
}




export function Quantity({product,loading}:CartItem){
const [number,setNumber]=useState<number>(0);
const [price,setPrice]=useState<number>(0);
const {cart,setCart}=useAppContext();
const [item, setItem] = useState<{
  slug: string,
  type: "add" | "subtract"
} | null>(null)


function handleAdd(){
  if (!cart) return;
setItem({slug:product.slug,type:"add"});
const existing = cart.find(item => item.slug === product.slug);

if (existing) {
  const updated = cart.map(item =>
    item.slug === product.slug
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  setCart(updated);
} else {
  setCart([...cart, { slug: product.slug, quantity: number }]);
}
}



function handleSubtract(){
  if (!cart) return;
setItem({slug:product.slug,type:"subtract"});
const existing = cart.find(item => item.slug === product.slug);

if (existing) {
  const updated = cart.map(item =>
    item.slug === product.slug
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  setCart(updated);
} else {
  setCart([...cart, { slug: product.slug, quantity: number }]);
}
}


function handleDisable(product:any){
    if (!cart) return;

const existing = cart.find(item => item.slug === product.slug);

if(existing){
  return existing.quantity>9;
}
}

useEffect(()=>{
  if(loading===false){
  setItem(null);
}
},[loading])




    return (
    <div className="p-1 w-full h-full flex flex-col items-center justify-center">
        
<p className={`text-sm lg:text-[14px] lg:mb-3 tracking-widest`}>Quantity</p>
 <div className="flex justify-between rounded-sm">
    <button key={product.slug} type="button" aria-label="remove one quantity"
    className={`w-3 h-3 lg:w-5 lg:h-5 p-3 lg:p-4 rounded flex
    text-white 
    bg-black/70 hover:bg-black/80
    cursor-pointer border border-black/70
   active:bg-white active:text-black/70
      transition-all duration-100 ease
    justify-center items-center`}
    onClick={()=>{
      if(product.quantity===1) return;
      handleSubtract();}}>
          {item?.slug=== product.slug&&item?.type==="subtract" && loading ? (
    <Spinner />
  ) : (
    "-"
  )}
      </button>
   <div className="flex justify-center w-[100px] items-center">
    <p>{product.quantity}</p></div>
     <button type="button" aria-label="add one quantity"
     className={`w-3 h-3 lg:w-5 lg:h-5 p-3 lg:p-4 rounded flex
    text-white 
    cursor-pointer border border-black/70
 
      transition-all duration-100 ease
    justify-center items-center 
    ${handleDisable(product)? 'cursor-not-allowed bg-gray-400':"  hover:bg-black/80 bg-black/70  active:bg-white active:text-black/70"}`}
      onClick={()=>{
       handleAdd();
      }}
      disabled={handleDisable(product)}
      >
  {item?.slug=== product.slug&&item?.type==="add" && loading ? (
    <Spinner />
  ) : (
    "+"
  )}

      </button>
      </div>
    
</div>    
    )
}