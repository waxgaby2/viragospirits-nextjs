import products from "@/app/data/products.json";
export const fetchProducts = async () =>{
  await new Promise((res) => setTimeout(res, 5000));
return products;
}