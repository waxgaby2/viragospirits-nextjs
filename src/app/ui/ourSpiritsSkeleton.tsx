export default function SpiritsLoading() {
  return (
    <section className="w-full px-5 py-20 lg:px-20">
      <div className="flex gap-6 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="
              min-w-[280px]
              rounded-[2rem]
              border border-black/5
              bg-white/60
              p-6
              animate-pulse
              lg:w-[30%]
            "
          >
            <div className="h-[320px] rounded-[1.5rem] bg-neutral-200" />

            <div className="mt-8 h-6 w-40 rounded bg-neutral-200" />

            <div className="mt-4 h-[1px] w-14 bg-neutral-200" />

            <div className="mt-5 space-y-3">
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-5/6 rounded bg-neutral-200" />
              <div className="h-4 w-4/6 rounded bg-neutral-200" />
            </div>

            <div className="mt-8 h-4 w-32 rounded bg-neutral-200" />
          </div>
        ))}
      </div>
    </section>
  )
}