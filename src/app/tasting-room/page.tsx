import Image from "next/image";

export default function Page() {
  return (
    <>
     <section className="w-full bg-[#f7f3ee] text-neutral-900 px-6 py-24">
  <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

    <div className="space-y-6">

      <p className="uppercase tracking-widest text-xs text-neutral-500">
        Craft Distillery • Tasting Room Experience
      </p>

      <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
        A Modern Tasting Room
        <span className="block text-neutral-700">
          Rooted in Craft Spirits
        </span>
      </h1>

      <p className="text-neutral-600 max-w-xl leading-relaxed">
        Explore handcrafted cocktails, small-batch spirits, and curated tasting flights
        in a warm, speakeasy-inspired space designed for slow sipping and conversation.
      </p>

      <div className="flex gap-4 pt-2">
        <button className="px-6 py-3 rounded-full bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition">
          View Menu
        </button>

        <button className="px-6 py-3 rounded-full border border-neutral-300 text-sm hover:bg-white transition">
          Reserve Tasting
        </button>
      </div>

      <div className="flex gap-8 pt-6 text-sm text-neutral-600">
        <div>
          <p className="font-semibold text-neutral-900">15+</p>
          <p>Signature Cocktails</p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">4</p>
          <p>House Spirits</p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">Weekly</p>
          <p>Tastings</p>
        </div>
      </div>

    </div>

  <div className="relative">

  <div className="aspect-[4/5] rounded-3xl border border-neutral-200 shadow-xl overflow-hidden relative">

  
    <Image
      src="/images/tasting-room-5.webp"
      alt="Seasonal Cocktail Flight" height={430} width={300}
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-neutral-900/20" />

    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

    <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">

      <p className="text-xs uppercase tracking-widest text-white/70">
        Featured Experience
      </p>

      <h3 className="text-xl font-medium">
        Seasonal Cocktail Flight
      </h3>

      <p className="text-sm text-white/80">
        A curated tasting of our latest seasonal creations.
      </p>

    </div>

  </div>

</div>

  </div>
</section>
      <section className="w-full bg-[#f7f3ee] text-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-5xl space-y-10">

          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              The Tasting Room
            </h2>
            <p className="text-neutral-700 leading-relaxed max-w-2xl">
              Step into a speakeasy-inspired space blending modern craft with timeless character.
              Our Tasting Room showcases handcrafted cocktails made with house-distilled rum,
              gin, brandy, and liqueurs — all served in elegant vintage glassware.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Craft Cocktails</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Seasonal, ingredient-driven cocktails built around house spirits and creative infusions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Tasting Flights</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Sample curated spirit flights featuring rum, gin, and limited seasonal releases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Atmosphere</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Warm, intimate lighting with vintage glassware and a relaxed speakeasy vibe.
              </p>
            </div>

          </div>

          <div className="pt-6 border-t border-neutral-200">
            <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">
              Tasting Room Hours
            </h4>

            <div className="pt-8 border-t border-neutral-200">

  
  <div className="space-y-3">

    <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition">
      <span className="text-sm font-medium text-neutral-800">Thursday</span>
      <span className="text-sm text-neutral-600">4:00 PM – 9:30 PM</span>
    </div>

    <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition">
      <span className="text-sm font-medium text-neutral-800">Friday – Saturday</span>
      <span className="text-sm text-neutral-600">2:00 PM – 9:30 PM</span>
    </div>

    <div className="flex justify-between items-center py-3 px-4 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition">
      <span className="text-sm font-medium text-neutral-800">Sunday</span>
      <span className="text-sm text-neutral-600">2:00 PM – 6:00 PM</span>
    </div>

  </div>

</div>
          </div>

        </div>
      </section>

      <section className="w-full bg-[#f7f3ee] text-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-12">

          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Current Menu
            </h2>
            <p className="text-neutral-700 max-w-2xl">
              Seasonal cocktails, house classics, and tasting-room exclusives crafted with Virago Spirits.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 text-neutral-800">
              Seasonal Cocktails
            </h3>

            <div className="grid md:grid-cols-2 gap-6">


  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Thyme After Thyme — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Olive oil and lemon peel washed modern gin, Cynar, strawberry thyme syrup, grapefruit bitters, orange essential oil.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Hive Sour — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Port cask finished rum, Aperol, honey, lemon juice, egg white.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Warrior in Flame — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Kali hibiscus gin, verjus, coriander-red pepper syrup, chocolate-mole bitters, flamed orange peel.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Coco Verde — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Four-port rum, cinnamon infused coconut cream, pineapple juice, lime juice, matcha powder, mint, tiki bitters, club soda.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Corsage — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Modern gin, St. Germain, lavender-pea flower syrup, lime juice.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Rum Paloma — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      White rum, grapefruit juice, lime juice, salted vanilla syrup, club soda.
    </p>
  </div>


            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 text-neutral-800">
              Mainstays
            </h3>
<div className="grid md:grid-cols-2 gap-6">

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Rum Old Fashioned — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Port cask finished rum, coffee liqueur, demerara gomme syrup, house blended bitters, orange peel.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Clearly Collins — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Olive oil and lemon peel washed modern gin, acid adjusted vanilla syrup, club soda.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">House Daiquiri — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Four-port rum, 151 rum, lime juice, demerara gomme syrup.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">The Amelia — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Kali hibiscus gin, Luxardo, creme de violette, simple syrup, lemon juice.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Espresso Rumtini — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Four-port rum, 151 rum, coffee liqueur, Afterglow cold brew concentrate, salted vanilla syrup, coffee bitters.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Blanc Martini — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      Modern gin, Dolin Blanc, grapefruit bitters, lemon essential oil.
    </p>
  </div>

</div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 text-neutral-800">
              Classic Cocktails
            </h3>
<div className="grid md:grid-cols-2 gap-6">

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Rickey — $12.50</h4>
    <p className="text-neutral-600 text-sm">
      Spirit of choice, lime, seltzer water.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Dark and Stormy — $12.50</h4>
    <p className="text-neutral-600 text-sm">
      Rum of choice, ginger beer, lime.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Tom Collins — $12.50</h4>
    <p className="text-neutral-600 text-sm">
      Gin of choice, lemon, simple syrup, soda water.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Gin and Tonic — $12.50</h4>
    <p className="text-neutral-600 text-sm">
      Gin of choice, lime, Navy Hill tonic water.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Cuba Libre — $12.50</h4>
    <p className="text-neutral-600 text-sm">
      Four-port rum, Coca-Cola, lime garnish.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Gimlet — $12.50</h4>
    <p className="text-neutral-600 text-sm">
      Gin of choice, simple syrup, lime.
    </p>
  </div>

</div>
           
          </div>

 <div>
            <h3 className="text-xl font-medium mb-4 text-neutral-800">
              Mocktails
            </h3>

           <div className="grid md:grid-cols-2 gap-6">

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Mule Kick — $10.00</h4>
    <p className="text-neutral-600 text-sm">
      Coriander-red pepper syrup, lime juice, non-alcoholic ginger beer.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Orange Dream — $10.00</h4>
    <p className="text-neutral-600 text-sm">
      Orange juice, acid adjusted vanilla syrup, Navy Hill tonic.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Bee on Vacation — $10.00</h4>
    <p className="text-neutral-600 text-sm">
      Coconut water, honey, lemon juice, club soda, orange peel.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Lavvy Lemmy — $10.00</h4>
    <p className="text-neutral-600 text-sm">
      Lavender-pea flower syrup, lemon juice, club soda.
    </p>
  </div>

</div>
          </div>
 <div>
            <h3 className="text-xl font-medium mb-4 text-neutral-800">
              Bottles
            </h3>
<div className="grid md:grid-cols-2 gap-6">

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Four-Port Rum — $36.99</h4>
    <p className="text-neutral-600 text-sm">
      Signature blended rum crafted for cocktails, sipping, and versatility.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Ruby Port Cask-Finished Rum — $42.99</h4>
    <p className="text-neutral-600 text-sm">
      Rum aged with rich ruby port cask character and subtle fruit depth.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Cognac Cask-Finished Rum — $49.99</h4>
    <p className="text-neutral-600 text-sm">
      Premium rum finished in cognac barrels for layered warmth and complexity.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">151 'High Proof' Rum — $36.99</h4>
    <p className="text-neutral-600 text-sm">
      Bold overproof rum with intense character and elevated strength.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Premium White Rum — $21.99</h4>
    <p className="text-neutral-600 text-sm">
      Clean and crisp white rum designed for refreshing cocktails and classics.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Modern Gin with Oolong Tea — $37.99</h4>
    <p className="text-neutral-600 text-sm">
      Contemporary gin infused with delicate oolong tea notes and citrus botanicals.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Kali Hibiscus Gin — $42.99</h4>
    <p className="text-neutral-600 text-sm">
      Floral hibiscus-forward gin with vibrant botanical complexity.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Coffee Liqueur — $27.99</h4>
    <p className="text-neutral-600 text-sm">
      Rich coffee liqueur with roasted depth and smooth sweetness.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Cranberry Liqueur — $27.99</h4>
    <p className="text-neutral-600 text-sm">
      Bright cranberry liqueur balancing tart fruit and subtle sweetness.
    </p>
  </div>

</div>
           
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 text-neutral-800">
              Flight Options
            </h3>
<div className="grid md:grid-cols-3 gap-6">

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Cocktail + Spirit Flight — $25.00</h4>
    <p className="text-neutral-600 text-sm">
      Includes one handcrafted cocktail paired with three curated spirit samples.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Six Spirit Samples — $20.00</h4>
    <p className="text-neutral-600 text-sm">
      Explore a broader tasting flight featuring six house-distilled spirits.
    </p>
  </div>

  <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm">
    <h4 className="font-medium">Four Spirit Samples — $15.00</h4>
    <p className="text-neutral-600 text-sm">
      A curated introduction to four signature spirits from the tasting room.
    </p>
  </div>

</div>
           
          </div>

        </div>
      </section>
    </>
  );
}