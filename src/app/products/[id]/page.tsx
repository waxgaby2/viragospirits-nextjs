
import { fetchProductById } from "@/app/lib/fetch";
import { oswald } from "@/app/ui/fonts";
import { Oswald } from "next/font/google";
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await fetchProductById(id);

  if (!product) {
    return (
    <div className="p-6 h-screen w-screen text-black flex justify-center items-center">
        <p>Product not found</p>
        
        </div>);
  }

  return (
    <div className="p-6 pt-10 lg:pt-20 bg-red-950/10 text-black grid md:grid-cols-2 min-h-screen gap-4">
      <div className="w-full h-[400px] lg:w-[35vw]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="space-y-4">
        <h1 className={`text-3xl lg:text-4xl text-black font-serif mb-8 lg:mb-20`}>
          {product.name}
        </h1>
        <p className="text-sm">
          Premium handcrafted spirit with rich flavor and smooth finish.
        </p>

        <p className="text-2xl font-semibold ">
          ${product.price}
        </p>
<p className={`text-[14px] font-bold ${oswald.className} tracking-widest`}>QUANTITY</p>
<div className="flex p-1">
    <button type="button" aria-label="remove one quantity"
    className={`w-10 h-10 p-3 bg-black/80 rounded-lg flex
    text-white 
    justify-center items-center active:scale-95`}>-</button>
   <div className="w-[70%] lg:w-[20%] h-full flex justify-center items-center">
    <p>1</p></div>
     <button type="button" aria-label="add one quantity"
     className={`w-10 h-10 p-3 bg-black/80 rounded-lg text-white
      flex justify-center items-center active:scale-95`}>+</button>

</div>
        <button className="bg-black/80 text-white px-6 py-3 rounded-lg hover:scale-105 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}