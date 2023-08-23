import React from 'react';
import Image from 'next/image';
import { TbCurrencyNaira } from "react-icons/tb";
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';
import Link from 'next/link';

function getListing(){
    
    
    const query = client.fetch(`*[_type == "listings" ]`)
    
    return query
    
}

const Content = async () => {
    const query = await getListing()

  return (
    <div className=' mt-10 flex flex-col S600:grid S600:grid-cols-2 S1024:grid-cols-3 items-center justify-center gap-8'>

            {
                query.map((item, index)=>{
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
                            <div className=' flex items-center justify-center pl-5 text-[2rem] font-bold pt-4 '>
                                <span className=' text-[2.6rem]'>
                                    <TbCurrencyNaira/>
                                </span>
                                <p>
                                    {price}
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
  )
}

export default Content