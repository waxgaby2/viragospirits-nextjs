import { BeakerIcon } from '@heroicons/react/24/outline';
import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { inter } from './fonts';
import { workSans } from './fonts';

export function AfterHero(){
    return (
<div className={`flex md:justify-between 
md:leading-2.5 px-5 bg-white/80 w-full
lg:h-[50vh]
flex-col md:flex-row pt-20 mb-0 pb-10
md:px-15 ${inter.className}`}>

<div className="flex m-5 mb-0 flex-col justify-center items-center">
  <BeakerIcon className="w-10 h-10 text-gray-600 mb-4" />
<h3 className="h3 text-center text-gray-600 ">CRAFTED WITH PURPOSE</h3>
<p className={`${workSans.className} text-sm lg:text-lg
 text-center text-gray-600`}>Made with raw Virgina ingredients</p>
</div>
<div className="flex mb-0 m-5 flex-col justify-center items-center">
  
  <ArchiveBoxIcon className="w-10 h-10 text-gray-600  mb-4" />
  <h3 className="
  h3 text-center text-gray-600 ">SMALL BATCH</h3>
  <p className={`${workSans.className} text-sm lg:text-lg
 text-center text-gray-600`}>Thoughfully crafted in small batches for quality</p>  
</div>
<div className="flex m-5 mb-0 flex-col justify-center items-center">
  
  <UserGroupIcon className="w-10 h-10 text-gray-600  mb-4" />
  <h3 className="h3 text-center text-gray-600 ">COMMUNITY DRIVEN</h3> 
  <p className={`${workSans.className} text-sm lg:text-lg
 text-center text-gray-600`}>Built for gathering, celebration and connecting</p>
</div>
</div>
    )
}