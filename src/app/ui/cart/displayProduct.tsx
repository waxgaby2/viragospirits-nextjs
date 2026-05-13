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
  className={`
    ${inter.className}

    relative flex w-full
    flex-col gap-14

    overflow-hidden

    bg-[#f6f1ea]

    px-5 pb-24 pt-10

    text-[#1b1715]

    md:flex-row
    md:justify-between
    md:px-10
    md:pt-24
  `}
>
 
  

  <div
    className={`
      relative z-10
      flex w-full
      flex-col

      lg:w-[68%]
    `}
  >

    <div
      className={`
        flex flex-col gap-5

        border-b border-black/10

        pb-8

        lg:flex-row
        lg:items-end
        lg:justify-between
      `}
    >
      <div>
      
        <h2
          className={`
            mt-3

            text-4xl
            leading-none

            lg:text-6xl

            ${oswald.className}
          `}
        >
          Your Cart
        </h2>

        <p
          className={`
            mt-3
            text-sm
            text-black/50
          `}
        >
          {cart?.length} item
          {cart && cart?.length > 1 ? "s " : " "}
          curated for your collection
        </p>
      </div>

      {cart && cart.length > 0 && (
        <button
          onClick={() => {
            if (!cart) return;

            setCart([]);
            localStorage.removeItem("cart");

            luxuryToast.success("Cart cleared");
          }}
          className={`
            h-12 w-fit

            rounded-full

            border border-red-300

            px-5

            text-xs uppercase
            tracking-[0.3em]

            text-red-500

            transition duration-300

            hover:bg-red-500
            hover:text-white
          `}
        >
          Clear Cart
        </button>
      )}
    </div>

    <div className="mt-4">
      {products.map((product: any) => (
        <div
          key={product._id}
          className={`
            group relative

            flex flex-col gap-6

            border-b border-black/10

            py-8 md:px-5
            transition duration-500

            lg:flex-row
            lg:items-center
          `}
        >
          <div
            className={`
              flex items-center
              justify-center
            `}
          >
            <div
              className={`
                flex h-40 w-40
                items-center justify-center

                rounded-[2rem]

                bg-[#ede6de]

                transition duration-500

                group-hover:scale-[1.02]
              `}
            >
              <Image
                src={urlFor(product.image).width(500).url()}
                alt={product.name}
                width={150}
                height={150}
                className={`
                  h-full w-full
                  object-contain

                  transition duration-700
                  group-hover:scale-105
                `}
              />
            </div>
          </div>

          <div
            className={`
              flex flex-1
              flex-col gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:px-8
            `}
          >
            <div className="max-w-sm">
              <p
                className={`
                  text-2xl leading-tight

                  lg:text-3xl
                  ${oswald.className}
                `}
              >
                {product.name}
              </p>

              <div
                className={`
                  mt-4 flex
                  items-center gap-3
                `}
              >
                <span
                  className={`
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-black/40
                  `}
                >
                  Unit Price
                </span>

                <div
                  className={`
                    h-[1px] w-10
                    bg-black/10
                  `}
                />

                <p
                  className={`
                    text-lg text-red-900
                  `}
                >
                  ${product.price}
                </p>
              </div>
            </div>

            {/* QUANTITY */}
            <div
              className={`
                flex flex-col gap-3
              `}
            >
              <p
                className={`
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-black/40
                `}
              >
                Quantity
              </p>

              <Quantity
                product={product}
                loading={loading}
              />
            </div>

            {/* TOTAL */}
            <div
              className={`
                flex flex-col gap-3
              `}
            >
              <p
                className={`
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-black/40
                `}
              >
                Total
              </p>

              <p
                className={`
                  text-3xl

                  ${oswald.className}
                `}
              >
                $
                {(product.price * product.quantity).toFixed(
                  2
                )}
              </p>
            </div>

            {/* REMOVE */}
            <div
              className={`
                flex justify-start
                lg:justify-end
              `}
            >
              <Remove
                product={product}
                loading={loading}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* SUMMARY */}
  <div
    className={`
      relative z-10

      h-fit w-full

      rounded-[2.5rem]

      border border-black/10

      bg-[#efe7de]

      p-7

      md:sticky
      right-0
      lg:w-[30%]
    `}
  >
   

    <div className="relative z-10">
      {/* HEADER */}
      <div className="border-b border-black/10 pb-6">
        <p
          className={`
            text-[10px]
            uppercase tracking-[0.45em]
            text-red-900
          `}
        >
          Summary
        </p>

        <h3
          className={`
            mt-3
            text-3xl

            ${oswald.className}
          `}
        >
          Order Overview
        </h3>

        <p
          className={`
            mt-3
            text-sm leading-7
            text-black/50
          `}
        >
          Review your order before proceeding to
          checkout.
        </p>
      </div>

      {/* SUMMARY DETAILS */}
      <div
        className={`
          space-y-6
          py-8
        `}
      >
        <div
          className={`
            flex items-center
            justify-between
          `}
        >
          <p className="text-black/50">
            Subtotal ({products.length} items)
          </p>

          <p className="text-lg">
            $
            {products
              .reduce(
                (sum, p) =>
                  p.price * p.quantity + sum,
                0
              )
              .toFixed(2)}
          </p>
        </div>

        <div
          className={`
            flex items-center
            justify-between
          `}
        >
          <p className="text-black/50">
            Shipping
          </p>

          <p className="text-lg">$50</p>
        </div>

        <div
          className={`
            flex items-center
            justify-between
          `}
        >
          <p className="text-black/50">
            Tax
          </p>

          <p className="text-lg">$10</p>
        </div>
      </div>

      {/* TOTAL */}
      <div
        className={`
          border-t border-black/10
          py-8
        `}
      >
        <div
          className={`
            flex items-end
            justify-between
          `}
        >
          <div>
            <p
              className={`
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-black/40
              `}
            >
              Total
            </p>

            <p
              className={`
                mt-3
                text-sm
                text-black/45
              `}
            >
              Includes shipping & taxes
            </p>
          </div>

          <p
            className={`
              text-5xl
              

              ${oswald.className}
            `}
          >
            $
            {(
              products.reduce(
                (sum, p) =>
                  p.price * p.quantity + sum,
                0
              ) + 60
            ).toFixed(2)}
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <Link
        href="/checkout"
        className={`
          flex h-16 w-full
          items-center justify-center

          rounded-full

          bg-[#1b1715]

          text-sm uppercase
          tracking-[0.20em]

          text-white

          transition duration-500

          hover:bg-[#9f6a43]

          active:scale-[0.98]
        `}
      >
        Proceed To Checkout
      </Link>

      <p
        className={`
          mt-5
          text-center text-xs
          leading-6
          text-black/40
        `}
      >
        Secure checkout powered by encrypted payment
        gateways.
      </p>
    </div>
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
      onClick={() => setOpen(false)}
      className={`
        fixed inset-0 z-[100]
        bg-black/60
        backdrop-blur-[3px]
        transition-all duration-500
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    />
  )}
  <div
    className={`
      fixed top-0 z-[102]
      h-screen w-[88%]
      overflow-y-auto

      bg-[#161311]
      text-[#f5eee6]

      shadow-[-20px_0_80px_rgba(0,0,0,0.6)]

      transition-all duration-500 ease-out
overflow-x-hidden
      lg:w-[520px]

      ${
        open
          ? "right-0 opacity-100"
          : "right-[-1000px] opacity-0"
      }
    `}
  >
    <div
      className={`
        absolute left-[-20%] top-[10%]
        h-[350px] w-[350px]
        rounded-full
        bg-red-900/20
        blur-3xl
      `}
    />

    <div
      className={`
        absolute bottom-[10%] right-[-10%]
        h-[250px] w-[250px]
        rounded-full
        bg-amber-700/10
        blur-3xl
      `}
    />

    <div
      className={`
        pointer-events-none
        absolute inset-0
        opacity-[0.04]
        mix-blend-soft-light
        bg-[url('/noise.png')]
      `}
    />

    <div className="relative z-10">
     
      <div
        className={`
          sticky top-0 z-20
          border-b border-white/10
          bg-[#161311]/90
          px-5 py-6
          backdrop-blur-xl
        `}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`
                text-[10px]
                uppercase tracking-[0.4em]
                text-[#c17b47]
              `}
            >
              Virago Spirits
            </p>

            <h2
              className={`
                mt-2
                text-2xl
                tracking-[0.08em]

                lg:text-4xl
                ${oswald.className}
              `}
            >
              Your Cart
            </h2>

            <p className="mt-1 text-sm text-white/40">
              {cart?.length} item
              {cart && cart?.length > 1 ? "s" : ""}
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className={`
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/10

              text-2xl  text-white/60

              transition duration-300
              hover:border-[#c17b47]
              hover:text-[#c17b47]
            `}
          >
            ✕
          </button>
        </div>

        {cart && cart.length > 0 && (
          <button
            onClick={() => {
              if (!cart) return;

              setCart([]);
              localStorage.removeItem("cart");

              luxuryToast.success("Cart cleared");
            }}
            className={`
              mt-5
              text-xs uppercase
              tracking-[0.3em]

              text-red-400

              transition duration-300
              hover:text-red-300
            `}
          >
            Clear Cart
          </button>
        )}
      </div>

      {products.length < 1 && (
        <div
          className={`
            flex min-h-[60vh]
            flex-col items-center
            justify-center
            px-8 text-center
          `}
        >
          <p
            className={`
              text-[10px]
              uppercase tracking-[0.5em]
              text-[#c17b47]
            `}
          >
            Your Collection Awaits
          </p>

          <h3
            className={`
              mt-5
              text-4xl
              leading-tight
              ${oswald.className}
            `}
          >
            Cart Is Empty
          </h3>

          <p
            className={`
              mt-5
              max-w-sm
              text-sm leading-8
              text-white/50
            `}
          >
            Add bottles to begin curating your premium
            spirits collection.
          </p>
        </div>
      )}

      <div className="px-5 pt-4">
        {products.map((product: any, i) => {
          return (
            <div
              key={product._id}
              className={`
                flex min-h-[145px]
                items-center
                border-b border-white/10
                py-5

                transition-all duration-500

                ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${i * 120}ms`,
              }}
            >
            
              <div
                className={`
                  flex w-[28%]
                  items-center justify-center
                `}
              >
                <div
                  className={`
                    rounded-[1.5rem]
                    border border-white/5
                    bg-[#211c19]
                    p-3
                  `}
                >
                  <Image
                    src={urlFor(product.image).width(300).url()}
                    width={75}
                    height={75}
                    alt={product.name}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* INFO */}
              <div
                className={`
                  flex w-[47%]
                  flex-col justify-center
                  px-3
                `}
              >
                <p
                  className={`
                    text-base leading-7
                    text-[#f5eee6]

                    lg:text-lg
                    ${oswald.className}
                  `}
                >
                  {product.name}
                </p>

                <p
                  className={`
                    mt-2
                    text-xs uppercase
                    tracking-[0.25em]
                    text-white/35
                  `}
                >
                  Quantity · {product.quantity}
                </p>
              </div>

              {/* ACTIONS */}
              <div
                className={`
                  flex w-[25%]
                  flex-col items-end
                  justify-between gap-5
                `}
              >
                <p
                  className={`
                    text-lg
                    text-[#c17b47]

                    ${oswald.className}
                  `}
                >
                  $
                  {(product.price * product.quantity).toFixed(2)}
                </p>

                <Remove
                  product={product}
                  loading={loading}
                />
              </div>
            </div>
          );
        })}
      </div>

      {products.length > 0 && (
        <>
          <div
            className={`
              mt-6
              px-5 pt-6
            `}
          >
            <div
              className={`
                flex items-center
                justify-between
              `}
            >
              <p
                className={`
                  text-sm uppercase
                  tracking-[0.3em]
                  text-white/40
                `}
              >
                Total
              </p>

              <p
                className={`
                  text-3xl
                  text-[#f5eee6]

                  ${oswald.className}
                `}
              >
                $
                {(
                  products.reduce(
                    (sum, p) =>
                      p.price * p.quantity + sum,
                    0
                  )
                ).toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-10 px-5 pb-10">
            <Link
              href="/cart"
              className={`
                flex h-16 w-full
                items-center justify-center

                rounded-full

                border border-[#c17b47]
                bg-[#201815]

                text-sm uppercase
                tracking-[0.35em]

                text-[#f5eee6]

                transition duration-500

                hover:bg-[#c17b47]
                hover:text-black

                active:scale-[0.98]
              `}
            >
              Proceed To Cart
            </Link>
          </div>
        </>
      )}
    </div>
  </div>
</>);
}