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
  <div
    className="
      rounded-[2rem]
      border border-white/10
      bg-white/5 p-5
      backdrop-blur-md 
        text-neutral-900
      shadow-[0_10px_35px_rgba(0,0,0,0.2)]
    "
  >
    
    <p
      className={`
        mb-4 text-[12px]
        font-semibold uppercase
        tracking-[0.35em]
        text-neutral-900
        ${oswald.className}
      `}
    >
      Quantity
    </p>

  
    <div
      className="
        mb-5 flex items-center
        rounded-full border
        border-white/10
        bg-white/10 p-2
        backdrop-blur-sm
      "
    >
     
      <button
        type="button"
        aria-label="remove one quantity"
        className="
          flex h-11 w-11
          items-center justify-center
          rounded-full
          bg-red-800/90 text-xl
          text-white
          transition-all duration-300
          hover:scale-105
          hover:bg-red-700
          active:scale-95
          active:bg-white
          active:text-black
        "
        onClick={() => {
          setNumber((prev) =>
            prev === 1 ? 1 : prev - 1
          );
        }}
      >
        -
      </button>

      
      <div
        className="
          flex h-11 flex-1
          items-center justify-center
        "
      >
        <p className="text-lg font-semibold">
          {number}
        </p>
      </div>

      <button
        type="button"
        aria-label="add one quantity"
        className={`
          flex h-11 w-11
          items-center justify-center
          rounded-full text-xl
          text-white transition-all
          duration-300 active:scale-95
          ${
            handleDisable(product)
              ? "cursor-not-allowed bg-gray-500"
              : "bg-red-800/90 hover:scale-105 hover:bg-red-700 active:bg-white active:text-black"
          }
        `}
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
        disabled={handleDisable(product)}
      >
        +
      </button>
    </div>

    <button
      className={`
        w-full rounded-full
        px-6 py-4 text-sm
        font-semibold uppercase
        tracking-[0.25em]
        text-white
        transition-all duration-300
        ${
          handleSubmit(product)
            ? "cursor-not-allowed bg-gray-500"
            : "bg-red-800/90 hover:-translate-y-1 hover:bg-white hover:text-black active:scale-95"
        }
      `}
      disabled={handleSubmit(product)}
      onClick={handleAdd}
    >
      Add To Cart
    </button>
  </div>
);
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
    <div className="p-1 w-full h-full flex flex-col">
        
<p className={`text-sm lg:text-[14px] lg:mb-3 uppercase tracking-widest mb-5`}>Quantity</p>
 <div className="flex justify-between rounded-sm">
    <button key={product.slug} type="button" aria-label="remove one quantity"
    className={`w-7 h-7 lg:w-9 lg:h-9 p-3 lg:p-4 rounded flex
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
     className={`w-7 h-7 lg:w-9 lg:h-9 p-3 lg:p-4 rounded flex
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