
import Image from "next/image"
import Link from "next/link"
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { inter } from "./fonts"
import { productsQuery } from "../lib/queries";
import {client} from "../lib/sanity";
import { urlFor } from "../lib/image";

export async function OurSpirits(){

    const products = await client.fetch(productsQuery)


return (
<section className={`mb-5 text-black pb-20 
text-sm bg-white/80
  pt-5
w-full`}>


    <div><h2 className={`text-red-800/90 font-bold
    font-serif text-center mb-5`}>OUR SPIRITS</h2>
      <p className={`text-4xl text-black lg:text-6xl
    font-serif text-center`}>Made With Love.</p>
      <p className={`text-4xl text-black lg:text-6xl
    font-serif text-center`}>Enjoyed Together.</p>
      <p className={`text-md lg:text-2xl my-6 
        ${inter.className}
        mx-3 text-center w-200px`}>Explore our 
      collection of crafted spirits, 
      <span className="block">each with it's
      own unique flavour and story</span>
    </p>
    </div>


<div className={`flex gap-6 px-5 lg:px-20 w-full lg:justify-between
overflow-x-auto scroll-smooth ${inter.className}`}>
 
 
 {products.map((product:any,i:number)=>{

if(!product.inStock){
  return
}
if(i>3){
  return;
}
  return (
    <div key={product._id} className="lg:w-[20%] h-100 lg:h-130 flex flex-col justify-end">
    <div className="h-100 w-auto flex justify-center items-end">
        <Image src={urlFor(product.image).width(600).url()}
    width={200}
    height={600} 
    alt={product.name}
    className="object-contain h-50 w-auto lg:h-70 lg:w-auto" />
    
    </div>
    <h3 className="font-bold">{product.name.toUpperCase()}</h3>
  <p className="text-sm lg:text-md">
    {product.description.length>50?product.description.slice(0,49)+'...':product.description}
    </p>
   <Link href={`/products/${product.slug}`} className="group flex items-center mt-4 hover:text-red-800/90">
  LEARN MORE
  <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
</Link>
    </div> 
  )
})}
 
       
</div>
<div className={`flex justify-center my-5`}>
  <Link href="/products"
 className={`p-4
    bg-red-800/90  w-60 text-sm
  text-white active:scale-95
  hover:bg-white hover:text-black
         md:w-60 text-center
            shadow-[0_0_15px_2px_rgba(0,0,0,0.5)]
        transition-all duration-300 ease
        mt-10 md:mt-0`}>VIEW ALL SPIRITS</Link>
        </div>
</section>)
}