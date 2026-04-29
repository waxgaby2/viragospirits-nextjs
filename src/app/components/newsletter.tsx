'use client'

import { useState } from "react";

export function StayInLoop() {
  const [email, setEmail] = useState("");

  return (
    <section className={`w-full relative mt-20 text-black
     py-24 px-6 overflow-hidden`}>

      <div className="absolute inset-0" />

      <div className={`relative z-10
      mx-auto flex flex-col lg:flex-row
      justify-center items-center lg:justify-evenly
         text-center`}>
<div className={``}>
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Stay in the Loop
        </h2>

        <p className=" mb-10 text-lg">
          Be the first to hear about new releases, exclusive tastings, and curated events from the distillery.
        </p>
</div>
        <div className={`flex items-center max-md:flex-col
        gap-2 justify-center`}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-[80vw] md:w-[350px] px-5 py-4 rounded-md 
            bg-black/80 text-center lg:text-left
            placeholder-white text-white
            shadow-[0_0_4px_2px_rgba(0,0,0,0.5)]
            focus:outline-none focus:border-red-700/80
            transition-all`}
          />

          <button
            className={`px-8 py-4 bg-red-800/90 hover:bg-red-700
            text-white font-semibold rounded-md
        
            shadow-[0_0_10px_2px_rgba(0,0,0,0.5)]
            transition-all duration-300 ease-in-out`}
          >
            Join the Circle
          </button>

        </div>

       

      </div>
    </section>
  );
}