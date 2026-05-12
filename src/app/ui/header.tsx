"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { oswald } from "./fonts";
import { NavBar } from "./navbar";
import { CartCounter } from "./cartCounter";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
     { name: "Home", href: "/" },
    { name: "Spirits", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Tasting Room", href: "/tasting-room" },
    { name: "Production Process", href: "/process" },
    { name: "Where To Buy", href: "/where-to-buy" },
    { name: "Contact", href: "/contact" },
     
  ];

  return (
    <div
      className={`sticky top-0 z-50 flex w-full items-center
      justify-between border-b border-white/10
      bg-gradient-to-br from-neutral-900
      via-neutral-950 to-black p-1 lg:p-4`}
    >
      <Image
        src="/logo/viragologo.webp"
        alt="virago logo"
        width={170}
        height={75}
      />

      <div
        className={`${oswald.className}
        m-auto hidden h-full items-center
        justify-center gap-5 text-[15px]
        font-light uppercase tracking-widest
        text-white/80 lg:flex`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-all
              duration-300 ease-linear
              ${
                isActive
                  ? "text-red-400"
                  : "hover:text-gray-400"
              }`}
            >
              {link.name}

              {isActive && (
                <div
                  className={`absolute left-1/2 top-7
                  h-0.5 w-4 -translate-x-1/2
                   bg-red-400`}
                />
              )}
            </Link>
          );
        })}
      </div>

      <Link
        href="/tasting-room"
        className={`m-auto hidden bg-red-800/90
        px-8 py-3 text-[13px]
        font-semibold text-white/80
        transition-all duration-500
        ease-in-out hover:bg-white/80
        hover:text-black active:scale-95 lg:flex`}
      >
        PLAN YOUR VISIT
      </Link>

      <div className="flex gap-6">
        <CartCounter />
        <NavBar />
      </div>
    </div>
  );
}