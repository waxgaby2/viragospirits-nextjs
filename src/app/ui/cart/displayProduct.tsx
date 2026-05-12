"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/userContext";
import Image from "next/image";
import { Quantity } from "../products/addToCart";
import { inter, oswald } from "../fonts";
import { Remove } from "../products/removeProduct";
import Link from "next/link";
import { cartProduct } from "@/app/lib/queries";
import {client} from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/image";
import { luxuryToast } from "@/app/lib/sonnerToast";


export function ShowCart() {
  const { cart,setCart } = useAppContext();
  const [products, setProducts] = useState<any[]>([]);
const[loading,setLoading]=useState<boolean>(true);
 

useEffect(() => {
  async function loadProducts() {
    if (!cart?.length) {
      setProducts([]);
      setLoading(false);
      return;
    }

    try {
    
      setLoading(true);

      const slugs = cart.map((p) => p.slug);

      const fetchedProducts = await client.fetch(
        cartProduct,
        { slugs }
      );

      const results = fetchedProducts.map((product: any) => {
        const cartItem = cart.find(
          (item) => item.slug === product.slug
        );

        return {
          ...product,
          quantity: cartItem?.quantity || 1,
        };
      });

      setProducts(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadProducts();
}, [cart]);

if(loading && products.length===0){
  return (<div className="flex justify-center items-center w-full h-screen">
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black" />
    </div>)
}



if(!cart || cart?.length<1){
     return (
        <div className="flex text-black justify-center items-center w-full h-screen">
 <p>Cart is empty</p>
    </div>) 
}


  return (
   <div
  className={`${inter.className} relative flex w-full flex-col gap-6   lg:flex-row lg:justify-between lg:px-6 lg:pt-24`}
>
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-200/5 blur-3xl" />

  <div className="z-10 flex w-full flex-col gap-4 lg:w-[68%]">
    
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-xl">
      <h2
        className={`${oswald.className} text-xl tracking-wide lg:text-3xl`}
      >
        Your Cart ({cart?.length} item
        {cart && cart?.length > 1 ? "s" : ""})
      </h2>

      <button
        onClick={() => {
          if (!cart) return;

          if (cart.length > 0) {
            setCart([]);
            localStorage.removeItem("cart");
            luxuryToast.success("Cart cleared");
          }
        }}
        className={`${oswald.className} cursor-pointer rounded-full border border-red-400 bg-red-500/10 px-4 py-2 text-sm text-red-500 transition duration-300 hover:bg-red-500/20 lg:text-base`}
      >
        Clear Cart
      </button>
    </div>

    {products.map((product: any) => (
      <div
        key={product._id}
        className="group mx-3 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-white/20 hover:bg-white/[0.12] lg:flex-row lg:items-center lg:justify-between"
      >
        <div
          className="flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-white/5 lg:h-44 lg:w-[22%]"
        >
          <Image
            src={urlFor(product.image).width(500).url()}
            alt={product.name}
            width={200}
            height={200}
            className="h-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-3 lg:w-[22%]">
          <p className="text-lg font-semibold ">
            {product.name}
          </p>

          <p className="text-sm uppercase tracking-[0.2em] ">
            Unit Price
          </p>

          <p className="text-2xl font-bold text-red-400">
            ${product.price}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:w-[22%] lg:items-center">
        
          <Quantity product={product} loading={loading} />
        </div>

        <div className="flex flex-col items-start gap-3 lg:w-[22%] lg:items-center">
          <p className="text-sm uppercase tracking-[0.2em] ">
            Total
          </p>

          <p className="text-2xl font-bold ">
            ${(product.price * product.quantity).toFixed(2)}
          </p>
        </div>

        <div className="flex justify-end lg:justify-center">
          <Remove product={product} loading={loading} />
        </div>
      </div>
    ))}
  </div>

  <div
    className="z-10 mt-2 h-fit lg:sticky md:right-0 w-full rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl lg:sticky lg:top-24 lg:mt-0 lg:w-[30%]"
  >
    <div className="border-b border-white/10 pb-5">
      <h3
        className={`${oswald.className} text-2xl tracking-wide `}
      >
        Order Summary
      </h3>

      <p className="mt-2 text-sm ">
        Review your order before checkout
      </p>
    </div>

    <div className="space-y-5 py-8 text-sm">
      <div className="flex items-center justify-between ">
        <p>
          Subtotal ({products.length} items)
        </p>

        <p className="font-semibold ">
          $
          {products
            .reduce((sum, p) => p.price * p.quantity + sum, 0)
            .toFixed(2)}
        </p>
      </div>

      <div className="flex items-center justify-between ">
        <p>Shipping</p>

        <p className="font-semibold ">$50</p>
      </div>

      <div className="flex items-center justify-between ">
        <p>Tax</p>

        <p className="font-semibold ">$10</p>
      </div>
    </div>

    <div className="h-px w-full bg-white/10" />

    <div className="my-8 flex items-center justify-between">
      <p className="text-lg font-medium ">Total</p>

      <p className="text-3xl font-bold text-red-400">
        $
        {(
          products.reduce(
            (sum, p) => p.price * p.quantity + sum,
            0
          ) + 60
        ).toFixed(2)}
      </p>
    </div>

    <Link
      href="/cart"
      className={`${oswald.className} flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-neutral-600 to-neutral-900 px-6 py-4 text-lg tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,215,0,0.25)]`}
    >
      Proceed to Checkout
    </Link>

    <p className="mt-4 text-center text-xs ">
      Secure checkout powered by encrypted payment gateways
    </p>
  </div>
</div>);
}

type CartMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export function CartMenu({ open,setOpen }: CartMenuProps){
    const { cart,setCart } = useAppContext();
  const [products, setProducts] = useState<any[]>([]);
const[loading,setLoading]=useState<boolean>(true);
 

useEffect(() => {
  async function loadProducts() {
    if (!cart?.length) {
      setProducts([]);
      setLoading(false);
      return;
    }

    try {
     
      setLoading(true);

      const slugs = cart.map((p) => p.slug);

      const fetchedProducts = await client.fetch(
        cartProduct,
        { slugs }
      );

      const results = fetchedProducts.map((product: any) => {
        const cartItem = cart.find(
          (item) => item.slug === product.slug
        );

        return {
          ...product,
          quantity: cartItem?.quantity || 1,
        };
      });

      setProducts(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadProducts();
}, [cart]);

   useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

return (
  <>
    {open && (
      <div
        onClick={() => setOpen(!open)}
        className={`
          fixed inset-0 z-[100]
          bg-black/30 backdrop-blur-sm
          transition-all duration-500 ease-in-out
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />
    )}

    <div
      className={`
        fixed top-0 z-[102]
        h-screen w-[85%] overflow-auto
        
        bg-white text-black
        shadow-[-10px_0_40px_rgba(0,0,0,0.2)]
        backdrop-blur-xl
        pb-30 transition-all duration-200 ease-in-out
        lg:w-[500px] lg:pb-5
        ${open ? "right-0 opacity-100" : "right-[-1000px] opacity-0"}
      `}
    >
    
      <div
        className={` sticky top-0 z-20
          border-b border-black/10
          px-4 py-5
          backdrop-blur-lg 
        `}
         
      >
        <div className="flex items-center justify-between">
          <h2
            className={`
              text-lg tracking-wide 
              lg:text-3xl
              ${oswald.className}
            `}
          >
            Your Cart ({cart?.length} item
            {cart && cart?.length > 1 ? "s" : ""})
          </h2>

          {cart && cart.length > 0 && (
            <button
              onClick={() => {
                if (!cart) return;

                if (cart.length > 0) {
                  setCart([]);
                  localStorage.removeItem("cart");
                  luxuryToast.success("Cart cleared");
                }
              }}
              className={`
                cursor-pointer 
                tracking-wide rounded-xl
                transition duration-300
                hover:text-red-500
                lg:text-lg
                 border border-red-400
                  bg-red-500/10 px-4 py-2 
                  text-sm text-red-500
                ${oswald.className}
              `}
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>

      <div className="mt-2 px-2 lg:px-3">
        {products.map((product: any, i) => {
          return (
            <div
              key={product._id}
              className={`
                mb-3 flex min-h-[120px]
                items-center rounded-2xl
                border border-black/10
                bg-white
                px-3 py-3
                shadow-[0_5px_20px_rgba(0,0,0,0.08)]
                backdrop-blur-sm
                transition-all duration-500
               
                ${open
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0"}
              `}
              style={{
                transitionDelay: `${i * 110}ms`,
              }}
            >
              <div
                className="
                  flex h-full w-[22%]
                  items-center justify-center
                "
              >
                <div
                  className="
                    rounded-xl bg-white p-2
                    shadow-sm
                  "
                >
                  <Image
                    src={urlFor(product.image).width(300).url()}
                    width={65}
                    alt={product.name}
                    height={65}
                    className="object-contain"
                  />
                </div>
              </div>

              <div
                className="
                  flex w-[48%]
                  flex-col justify-center
                  px-2
                "
              >
                <p
                  className={`
                    text-sm leading-6 text-black
                    lg:text-base
                    ${oswald.className}
                  `}
                >
                  {product.name}
                </p>

                <p className="mt-1 text-xs text-black/50">
                  Quantity: {product.quantity}
                </p>
              </div>

              <div
                className="
                  flex w-[30%]
                  flex-col items-end
                  justify-between gap-3
                "
              >
                <p
                  className={`
                    text-sm text-red-500
                    lg:text-base
                    ${oswald.className}
                  `}
                >
                  $
                  {(product.price * product.quantity).toFixed(2)}
                </p>

                <Remove product={product} loading={loading} />
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`
          mt-8 border-t border-black/10
          px-5 pt-6
          ${oswald.className}
        `}
      >
        <div className="flex items-center justify-between text-lg lg:text-2xl">
          <p className="text-black/60">Total</p>

          <p className="text-black">
            $
            {(
              products.reduce(
                (sum, p) => p.price * p.quantity + sum,
                0
              )
            ).toFixed(2)}
          </p>
        </div>
      </div>

    
      {cart && cart.length > 0 && (
        <div className="mt-10 flex items-center justify-center px-5">
          <Link
            href="/cart"
            className="
              w-full rounded-full
              bg-black px-8 py-4
              text-center text-sm
              font-semibold uppercase
              tracking-[0.25em] text-white
              transition duration-300
              hover:bg-red-800
              active:scale-95
            "
          >
            Proceed To Cart
          </Link>
        </div>
      )}
    </div>
  </>
);
}