import Link from "next/link";
import Image from "next/image";
type Product = {
  id: string
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ product }: { product: Product }) {


  return (
    
    <div className={` m-2 rounded-2xl 
        shadow-[0_0_8px_7px_rgba(255,255,255,0.1)]
       text-bllack/80 active:scale-95
hover:bg-white/80 text-black/90
       hover:shadow-[0_0_10px_7px_rgba(255,255,255,0.3)]
   active:bg-white/70
     overflow-hidden transition-all duration-300 ease cursor-pointer
     bg-white/80 p-5`}>
<Link href={`/products/${product.id}`} className="w-full h-full">
      <div className="w-full h-50 flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={350}
          className="w-full h-full  object-contain hover:scale-105 transition"
        />
      </div>

      <div className="p-4 space-y-2 flex flex-col items-center justify-between">
        <h3 className="text-lg font-semibold text-center ">
          {product.name}
        </h3>

        <p className=" text-sm text-center ">
          Premium quality product
        </p>

        <div className="">
          <span className=" font-bold text-lg">
            ${product.price}
          </span>

        </div>
      </div>
      </Link>
    </div>
    
  );
}