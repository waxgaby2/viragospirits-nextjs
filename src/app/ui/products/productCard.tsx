import Link from "next/link";
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ product }: { product: Product }) {


  return (
    <div className={` m-2 rounded-2xl 
        shadow-[0_0_8px_7px_rgba(0,0,0,0.1)]
       text-white
     overflow-hidden hover:shadow-lg transition
     bg-black/80 p-5`}>

      <div className="w-full h-50">
        <img
          src={product.image}
          alt={product.name}
          width={100}
          height={350}
          className="w-full h-full object-contain hover:scale-105 transition"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold  ">
          {product.name}
        </h3>

        <p className=" text-sm">
          Premium quality product
        </p>

        <div className="flex items-center justify-between">
          <span className=" font-bold text-lg">
            ₦{product.price}
          </span>

          <Link href="/" className={`inline-block bg-white text-gray-900 px-4 
          py-2 rounded-lg active:scale-90
          ease
          text-sm hover:bg-gray-300 transition`}>
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}