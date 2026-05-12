export default function Page(){
    return(
        <section className="w-full bg-[#f7f3ee] text-neutral-900 px-6 py-24">
  <div className="mx-auto max-w-6xl space-y-16">

    {/* Hero */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div className="space-y-6">

        <p className="uppercase tracking-[0.25em] text-xs text-neutral-500">
          Contact Virago Spirits
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Let’s Start
          <span className="block text-neutral-600">
            A Conversation
          </span>
        </h1>

        <p className="text-neutral-600 leading-relaxed max-w-xl">
          Questions about the tasting room, private events, spirit availability,
          or collaborations? Reach out and the Virago team will get back to you.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">

          <a
            href="mailto:info@viragospirits.com"
            className="px-6 py-3 rounded-full bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition"
          >
            Email Us
          </a>

          <a
            href="tel:8043558746"
            className="px-6 py-3 rounded-full border border-neutral-300 text-sm hover:bg-white transition"
          >
            Call Tasting Room
          </a>

        </div>

      </div>

    
      <div className="relative">

        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl relative">

       <iframe
  src="https://www.google.com/maps?q=1727+Rhoadmiller+St,+Richmond,+VA+23220&output=embed"
  className="absolute inset-0 w-full h-full"
  loading="lazy" aria-label="virago spirit map location"
  referrerPolicy="no-referrer-when-downgrade"
/>

          <div className="absolute bottom-6 left-6 right-6 text-neutral-800 space-y-2">

            <p className="uppercase tracking-[0.2em] text-xs ">
              Richmond, Virginia
            </p>

            <h3 className="text-2xl font-medium">
              Visit The Distillery
            </h3>

            
          </div>

        </div>

      </div>

    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-3">
          Address
        </p>

        <h3 className="text-lg font-medium mb-2">
          Virago Spirits
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed">
          1727 Rhoadmiller St.
          <br />
          Richmond, VA 23220
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-3">
          Phone
        </p>

        <h3 className="text-lg font-medium mb-2">
          Tasting Room
        </h3>

        <p className="text-neutral-600 text-sm">
          (804) 355-8746
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
        <p className="uppercase tracking-[0.2em] text-xs text-neutral-500 mb-3">
          Email
        </p>

        <h3 className="text-lg font-medium mb-2">
          General Inquiries
        </h3>

        <p className="text-neutral-600 text-sm break-all">
          info@viragospirits.com
        </p>
      </div>

    </div>

    <div className="rounded-3xl bg-white border border-neutral-200 shadow-sm p-8 md:p-10">

      <div className="max-w-3xl space-y-8">

        <div className="space-y-3">
          <p className="uppercase tracking-[0.2em] text-xs text-neutral-500">
            General Inquiries
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Get In Touch
          </h2>

          <p className="text-neutral-600 max-w-2xl">
            Let us know how we can help — whether it’s reservations,
            wholesale inquiries, collaborations, or event bookings.
          </p>
        </div>

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <label className="text-sm text-neutral-700">
                First Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-neutral-300 bg-[#f7f3ee] px-4 py-3 outline-none focus:border-neutral-500 transition"
                placeholder="John"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-neutral-700">
                Last Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-neutral-300 bg-[#f7f3ee] px-4 py-3 outline-none focus:border-neutral-500 transition"
                placeholder="Doe"
              />
            </div>

          </div>

          <div className="space-y-2">
            <label className="text-sm text-neutral-700">
              Email Address
            </label>

            <input
              type="email"
              className="w-full rounded-xl border border-neutral-300 bg-[#f7f3ee] px-4 py-3 outline-none focus:border-neutral-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-neutral-700">
              Subject
            </label>

            <input
              type="text"
              className="w-full rounded-xl border border-neutral-300 bg-[#f7f3ee] px-4 py-3 outline-none focus:border-neutral-500 transition"
              placeholder="How can we help?"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-neutral-700">
              Message
            </label>

            <textarea
              rows={6}
              className="w-full rounded-xl border border-neutral-300 bg-[#f7f3ee] px-4 py-3 outline-none focus:border-neutral-500 transition resize-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>
</section>
    )
}