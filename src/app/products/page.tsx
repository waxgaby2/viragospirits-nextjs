import { Footer } from "../ui/footer"
import { Header } from "../ui/header"
import { ProductsHero } from "../ui/hero"
import { Product } from "../ui/products/product"

export default async function Page(){
    return (
        <div>
           <Header />
           <ProductsHero />
           <Product />
           <Footer />
        </div>
    )
} 