'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { oswald } from './fonts'

export function NavBar() {
  const [isOpen, setOpen] = useState(false)

  const pathname = usePathname()

  function handleToggle() {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const links = [
    { name: "Spirits", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Tasting Room", link: "/tasting-room" },
    { name: "Production Process", link: "/process" },
    { name: "Where to buy", link: "/where-to-buy" },
    { name: "Contact", link: "/contact" },
  ]

  return (
    <>
      {/* MENU BUTTON */}
      <button
        type="button"
        aria-label="Toggle Nav Menu"
        onClick={handleToggle}
        className="sticky right-4 top-2 z-[80] text-white/80 lg:hidden"
      >
        {isOpen ? (
          <XMarkIcon className="h-7 w-7 text-white/80" />
        ) : (
          <Bars3Icon className="h-7 w-7 text-white/80" />
        )}
      </button>

      {isOpen && (
        <div
          onClick={handleToggle}
          className={`fixed inset-0 z-[78]
          bg-black/50 backdrop-blur-sm
          transition-all duration-300 lg:hidden`}
        />
      )}

      <nav
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 z-[79]
        flex h-full w-[65vw] max-w-sm
        flex-col gap-4 overflow-auto
        bg-gradient-to-b from-zinc-900
        via-black to-zinc-900
        px-6 pt-24 text-white/80
        shadow-[-10px_0_30px_rgba(0,0,0,0.6)]
        transition-all duration-500 ease-in-out
        lg:hidden ${oswald.className}
        ${isOpen ? "right-0" : "right-[-500px]"}`}
      >
        {links.map((nav, i) => {
          const isActive = pathname === nav.link

          return (
            <Link
              key={i}
              href={nav.link}
              onClick={() => setOpen(false)}
              className={`relative border-b
              pb-3 text-lg uppercase
              tracking-widest transition-all
              duration-500
              ${
                isActive
                  ? "border-red-400 text-red-400"
                  : "border-white/10"
              }
              ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {nav.name}

              {isActive && (
                <div
                  className={`absolute right-0 top-1/2
                  h-2 w-2 -translate-y-1/2
                  rounded-full bg-red-400`}
                />
              )}
            </Link>
          )
        })}

        <Link
          href="/tasting-room"
          onClick={() => setOpen(false)}
          className={`mt-6 rounded-md
          bg-red-800/90 py-4 text-center
          text-lg transition
          hover:bg-red-800
          active:scale-95`}
        >
          PLAN YOUR VISIT
        </Link>
      </nav>
    </>
  )
}