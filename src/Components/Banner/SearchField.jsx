
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/contextapi';
import Link from 'next/link';
import Image from 'next/image';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';
import { TbCurrencyNaira } from 'react-icons/tb';
import { urlForImage } from '../../../sanity/lib/image';
import { VscClose } from 'react-icons/vsc';
import { client } from '../../../sanity/lib/client';

function getItems(){
    const listing = client.fetch(`*[_type == "listings"]`)

    return listing
}

const SearchField =  async () => {
  const {query, location} = useGlobalContext()
  const listing = await getItems()

console.log(location);

useEffect(()=>{

  searchbutton ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

})
  return (
    <section className='absolute top-0 left-0 right-0 bottom-0 w-full min-h-screen bg-white z-50 overflow-y-auto pb-28 S600:pb-0'>
      <article className=' w-[90%] S1024:w-[90%] m-auto mt-16'>
        <div className=' flex items-start justify-start -m-7 text-[2.8rem] cursor-pointer text-primaryColor' >
            <VscClose/>
        </div>
        <div className=' mt-16 flex flex-col S600:grid S600:grid-cols-2 S1024:grid-cols-3 items-center justify-center gap-8'>

        {
            listing.filter((item)=> item.location == 'Gbagada' || item.types == 'Apartment' || item.price >= 100000000).map((item, index)=>{
                const {image, types, rooms, location, bathroom, desc, categories, price, _id} = item;

                return(

                <Link href={`/listings/${_id}`} key={index}>
                    

                    < div className='w-full h-fit bg-white p-4 pb-10 rounded-3xl shadow-shadow flex flex-col items-start justify-center gap-2' >

                        <Image  src={urlForImage(image).url()} width={2000} height={2000} priority alt={categories} className=' w-full S600:h-[22.5rem] object-cover rounded-3xl aspect-auto ' />
                        <div className=' flex gap-6 pt-4 item-start justify-start text-[1.2rem] font-semibold tracking-wide'>
                        <p className=' bg-neutral-300/40 py-3 px-5 rounded-3xl '>
                            {categories}
                        </p>
                        <p className=' bg-neutral-300/40 py-3 px-5  rounded-3xl '>
                            {location}
                        </p>
                        <p className=' bg-neutral-300/40 py-3 px-5  rounded-3xl '>
                            {types}
                        </p>
                    
                        </div>
                        <div className=' flex items-center justify-center pl-5 text-[1.6rem] font-bold pt-4 '>
                            <span className=' text-[2rem]'>
                                <TbCurrencyNaira />
                            </span>
                            <p>
                                {price.toLocaleString()}
                            </p>
                        </div>

                        <div className=' pl-5 text-[1.3rem] font-semibold '>
                            {desc}
                        </div>

                        <div className=' flex items-center justify-center gap-4 pl-5 text-[1.2rem] font-semibold pt-6 capitalize'>
                            <div className=' flex items-center justify-center gap-3'>
                                <span className=' flex items-center justify-center text-primaryColor text-[2rem] '>
                                    <MdBedroomParent/>
                                </span>
                                <p>
                                    {rooms}
                                </p>
                            </div>
                            <div className=' flex items-center justify-center gap-3'>
                                <span className=' flex items-center justify-center text-primaryColor text-[2rem]'>
                                    <MdBathroom/>
                                </span>
                                <p>
                                    {bathroom}
                                </p>
                            </div>
                        </div>

                    </div>
                </Link>
                )
            })
        }

      </div>
      </article>
    </section>
  )
}

export default SearchField