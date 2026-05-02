
import Image from "next/image"
import Link from "next/link"
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { inter } from "./fonts";


export function OurSpirits(){
return (
<section className={`mb-5 text-black pb-20 
text-sm
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
 <div className="lg:w-[20%] max-md:min-w-[300px] max-md:max-w-[300px] max-md:flex-shrink-0">
    <div className="h-100 w-auto flex justify-center items-end">
        <Image src="/images/Virago-White+Rum-Bottle.webp"
    width={200}
    height={600} 
    alt="premium white rum"
    className="object-contain h-full w-auto" />
    
    </div>
    <h3 className="font-bold">PREMIUM WHITE RUM</h3>
  <p className="text-sm lg:text-md">
    Lush notes of honeydew and ripened pear perfectly
        balanced with just the right amount of ester-y 
        funk...
    </p>
   <Link href="/" className="group flex items-center mt-4 hover:text-red-800/90">
  LEARN MORE
  <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
</Link>
    </div> 
     <div className="lg:w-[20%] max-md:min-w-[300px] max-md:max-w-[300px] max-md:flex-shrink-0">
    <div className="h-100 w-auto items-end flex justify-center">
        <Image src="/images/Virago-Spirits-Cognac-Cask-Rum.webp" 
     width={200}
    height={600} 
    alt="premium white rum"
    className="object-contain h-full w-auto"  />
  </div>
    <h3 className="font-bold">COGNAC CASK FINISHED RUM</h3>
    <p className="text-sm lg:text-md">
        Lush aromas of apricot preserve, warm toffee, and honeysuckle harmiously
         blend with flavors of aged cognac...
    </p>
   <Link href="/" className="group flex items-center mt-4 hover:text-red-800/90">
  LEARN MORE
  <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
</Link>
    </div> 

     <div className="lg:w-[20%] max-md:min-w-[300px] max-md:max-w-[300px] max-md:flex-shrink-0">
    <div className="h-100 w-auto flex justify-center items-end">
          <Image src="/images/Virago-Modern-Gin-2.webp" 
     width={200}
    height={600} 
    alt="premium white rum"
    className="object-contain h-full w-auto" /></div>
    <h3 className="font-bold">MODERN GIN WITH OOLONG TEA</h3>
<p className="text-sm lg:text-md">
        Carefully distilled from a unique blend of botanicals,
        including juniper, coriander, Szechuan peppercorn...
    </p>
    <Link href="/" className="group flex items-center mt-4 hover:text-red-800/90">
  LEARN MORE
  <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
</Link>
    </div>   
</div>
<div className={`flex justify-center my-5`}>
  <Link href="/"
 className={`py-5 px-8 border
    bg-red-800/90  w-60 text-sm
  border-red-800/90 text-white
  hover:bg-white hover:text-red-800/90 
         md:w-60 text-center
            shadow-[0_0_15px_2px_rgba(0,0,0,0.5)]
        transition-all duration-300 ease
        mt-10 md:mt-0`}>VIEW ALL SPIRITS</Link>
        </div>
</section>)
}