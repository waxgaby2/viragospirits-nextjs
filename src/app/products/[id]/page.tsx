
import { fetchProductById } from "@/app/lib/fetch";
import { oswald } from "@/app/ui/fonts";
import { Oswald } from "next/font/google";
import { Add } from "@/app/ui/products/addToCart";


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
    <>
    <div className="p-6 pt-10 lg:pt-20 text-white/80 grid md:grid-cols-2 min-h-screen gap-4">
      <div className="w-full h-[400px] lg:w-[35vw]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="space-y-4">
        <h1 className={`text-3xl lg:text-4xl  font-serif mb-8 lg:mb-20`}>
          {product.name}
        </h1>
        <p className="text-sm lg:leading-relaxed">
         {product.description}
        </p>

        <p className="text-2xl font-semibold ">
          ${product.price}
        </p>
<Add product={product} />
        
      </div>
    </div>

    </>
  );
}