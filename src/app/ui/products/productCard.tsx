type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className={` mt-5 rounded-2xl 
        shadow-[0_0_8px_7px_rgba(0,0,0,0.1)]
     overflow-hidden hover:shadow-lg transition
     bg-gray-300 p-8`}>

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
        <h3 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm">
          Premium quality product
        </p>

        <div className="flex items-center justify-between">
          <span className="text-black font-bold text-lg">
            ₦{product.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}