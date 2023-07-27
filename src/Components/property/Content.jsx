import React from 'react';
import Image from 'next/image';
import { TbCurrencyNaira } from "react-icons/tb";
import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';

function getListing(){
    
    
    const query = client.fetch(`*[_type == "listings" ]`)
    
    return query
    
}

const Content = async () => {
    const query = await getListing()

  return (
    <div className=' mt-10 flex flex-col S768:grid S768:grid-cols-2 S1200:grid-cols-3 items-center justify-center gap-12'>

            {
                query.slice(0, 6).map((item, index)=>{
                    const {image, types, rooms, location, bathroom, desc, categories, id, price} = item;

                    return(

                    < div className='w-full h-fit bg-white p-4 pb-10 rounded-3xl shadow-shadow flex flex-col items-start justify-center gap-2' key={index}>

                        <Image  src={urlForImage(image).url()} width={2000} height={2000} priority alt={categories} className=' w-full h-fit object-cover rounded-2xl aspect-auto ' />
                        <div className=' flex gap-6 pt-4 item-start justify-start text-[1.4rem] font-semibold tracking-wide'>
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
                        <div className=' flex items-center justify-center pl-5 text-[2.6rem] font-bold pt-9 '>
                            <span className=' text-[3rem]'>
                                <TbCurrencyNaira/>
                            </span>
                            <p>
                                {price}
                            </p>
                        </div>

                        <div className=' pl-5 text-[1.4rem] font-semibold '>
                            {desc}
                        </div>

                        <div className=' flex items-center justify-center gap-4 pl-5 text-[1.5rem] font-medium pt-10 capitalize'>
                            <div className=' flex items-center justify-center gap-3'>
                                <span className=' flex items-center justify-center w-14 h-14 rounded-full bg-[#1111441e] text-primaryColor text-[2rem] '>
                                    <MdBedroomParent/>
                                </span>
                                <p>
                                    {rooms}
                                </p>
                            </div>
                            <div className=' flex items-center justify-center gap-3'>
                                <span className=' flex items-center justify-center w-14 h-14 rounded-full bg-[#1111441e] text-primaryColor text-[2rem]'>
                                    <MdBathroom/>
                                </span>
                                <p>
                                    {bathroom}
                                </p>
                            </div>
                        </div>

                    </div>
                    )
                })
            }

    </div>
  )
}

export default Content