import products from "@/app/data/products.json";
export const fetchProducts = async () =>{
return products;
}
export const fetchProductById = async (id:string)=>{   
const product = products.find((p) => p.id === id);
   return product;
}