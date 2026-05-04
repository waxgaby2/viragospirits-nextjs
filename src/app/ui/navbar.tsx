'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import { useEffect, useState } from 'react'

export function NavBar() {
  const [isOpen, setOpen] = useState(false)

  function handleToggle() {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const links = [
    "Spirits",
    "Shop",
    "About Us",
    "Tasting Room",
    "Events",
    "Where to buy",
    "Contact",
  ]

  return (
    <>
      <button type="button"
      aria-label="Toggle Nav Menu"
        onClick={handleToggle}
        className="sticky right-4 top-2 z-[110] lg:hidden text-white/80"
      >
        {isOpen ? (
          <XMarkIcon className="w-7 h-7 text-white/80" />
        ) : (
          <Bars3Icon className="w-7 h-7  text-white/80" />
        )}
      </button>

      {isOpen &&<div
        onClick={handleToggle}
        className={`fixed inset-0 z-[98] lg:hidden bg-black/50 backdrop-blur-sm transition-all duration-500
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />}

      <nav
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 h-full w-[65vw] max-w-sm z-[99]
        bg-gradient-to-b from-zinc-900 via-black to-zinc-900
        shadow-[-10px_0_30px_rgba(0,0,0,0.6)]
        px-6 pt-24 overflow-auto text-white/80
        flex flex-col gap-4 lg:hidden
        transition-all duration-500 ease-in-out
        ${isOpen ? "right-0" : "right-[-500px]"}`}
      >
        {links.map((link, i) => (
          <Link
            key={link}
            href="/"
            onClick={() => setOpen(false)}
            className={`text-lg tracking-widest uppercase
            border-b border-white/10 pb-3
            active:bg-white/40
            transform transition-all duration-500
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
            `}
            style={{
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {link}
          </Link>
        ))}

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="mt-6 text-center py-4 bg-red-800/90 hover:bg-red-800 active:scale-95 transition rounded-md font-semibold"
        >
          PLAN YOUR VISIT
        </Link>
      </nav>
    </>
  )
}
