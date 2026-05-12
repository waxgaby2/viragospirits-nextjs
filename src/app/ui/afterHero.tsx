import { BeakerIcon } from '@heroicons/react/24/outline';
import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { inter } from './fonts';
import { workSans } from './fonts';

export function AfterHero(){
    return (<div
  className={`
    relative flex w-full
    flex-col overflow-hidden
    border-y border-white/10
    bg-gradient-to-br
    from-white/75 via-white/70 to-white/60
    px-5 pb-14 pt-20
    backdrop-blur-md
    md:flex-row md:justify-between
    md:px-15 lg:min-h-[50vh]
    ${inter.className}
  `}
>
  {/* SOFT GLOW */}
  <div
    className="
      absolute left-[-10%] top-[-20%]
      h-60 w-60 rounded-full
      bg-red-900/10 blur-3xl
    "
  />

  {/* ITEM 1 */}
  <div
    className="
      group relative z-10
      m-5 mb-0 flex
      flex-col items-center
      justify-center rounded-[2rem]
      border border-black/5
      bg-white/40 px-6 py-10
      text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      backdrop-blur-sm transition-all
      duration-500 hover:-translate-y-2
      hover:bg-white/60
      md:w-[30%]
    "
  >
    <div
      className="
        mb-5 rounded-full
        bg-black/5 p-5
        transition duration-500
        group-hover:bg-red-800/10
      "
    >
      <BeakerIcon
        className="
          h-10 w-10 text-gray-700
          transition duration-500
          group-hover:text-red-800
        "
      />
    </div>

    <h3
      className="
        h3 mb-4 tracking-wide
        text-gray-800
      "
    >
      CRAFTED WITH PURPOSE
    </h3>

    <div className="mb-5 h-[1px] w-14 bg-black/10" />

    <p
      className={`
        text-sm leading-7
        text-gray-600 lg:text-lg
        ${workSans.className}
      `}
    >
      Made with raw Virginia ingredients
    </p>
  </div>

  {/* ITEM 2 */}
  <div
    className="
      group relative z-10
      m-5 mb-0 flex
      flex-col items-center
      justify-center rounded-[2rem]
      border border-black/5
      bg-white/40 px-6 py-10
      text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      backdrop-blur-sm transition-all
      duration-500 hover:-translate-y-2
      hover:bg-white/60
      md:w-[30%]
    "
  >
    <div
      className="
        mb-5 rounded-full
        bg-black/5 p-5
        transition duration-500
        group-hover:bg-red-800/10
      "
    >
      <ArchiveBoxIcon
        className="
          h-10 w-10 text-gray-700
          transition duration-500
          group-hover:text-red-800
        "
      />
    </div>

    <h3
      className="
        h3 mb-4 tracking-wide
        text-gray-800
      "
    >
      SMALL BATCH
    </h3>

    <div className="mb-5 h-[1px] w-14 bg-black/10" />

    <p
      className={`
        text-sm leading-7
        text-gray-600 lg:text-lg
        ${workSans.className}
      `}
    >
      Thoughtfully crafted in small batches for
      exceptional quality
    </p>
  </div>

  {/* ITEM 3 */}
  <div
    className="
      group relative z-10
      m-5 mb-0 flex
      flex-col items-center
      justify-center rounded-[2rem]
      border border-black/5
      bg-white/40 px-6 py-10
      text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      backdrop-blur-sm transition-all
      duration-500 hover:-translate-y-2
      hover:bg-white/60
      md:w-[30%]
    "
  >
    <div
      className="
        mb-5 rounded-full
        bg-black/5 p-5
        transition duration-500
        group-hover:bg-red-800/10
      "
    >
      <UserGroupIcon
        className="
          h-10 w-10 text-gray-700
          transition duration-500
          group-hover:text-red-800
        "
      />
    </div>

    <h3
      className="
        h3 mb-4 tracking-wide
        text-gray-800
      "
    >
      COMMUNITY DRIVEN
    </h3>

    <div className="mb-5 h-[1px] w-14 bg-black/10" />

    <p
      className={`
        text-sm leading-7
        text-gray-600 lg:text-lg
        ${workSans.className}
      `}
    >
      Built for gathering, celebration, and meaningful
      connection
    </p>
  </div>
</div>
    )
}