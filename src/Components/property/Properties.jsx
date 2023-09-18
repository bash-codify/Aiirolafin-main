import React from 'react'
import { VscArrowSmallRight } from 'react-icons/vsc'
import Image from 'next/image';
import { TbCurrencyNaira } from "react-icons/tb";
import { urlForImage } from '../../../sanity/lib/image';
import { MdBathroom, MdBedroomParent } from 'react-icons/md';
import Link from 'next/link';
import { client } from '../../../sanity/lib/client';
import { useGlobalContext } from '../context/contextapi';
import listings from '../../../sanity/listings';

function getListings(){
    const listingProperty = client.fetch(`*[_type == "listings"]`)

    return listingProperty
}


const Properties = async () => {

    const {properties} = useGlobalContext()
    const listingProperty = await getListings()

    console.log(properties);

    
  return (
    <section className=' w-full min-h-screen'>

        <article className=' w-[90%] S1024:w-[90%] m-auto mt-16'>
            <div>
                <div  className=' flex flex-col items-start justify-start gap-4 '>
                    <p className=' text-[1.6rem] text-primaryColor font-semibold tracking-widest border-b-2 border-primaryColor'>
                        Listings
                    </p>

                    <div className=' w-full flex items-center justify-between'>
                        <div className=' pt-5'>
                            <h2 className=' text-[2.6rem] S768:text-[3rem]  S1024:text-[3.4rem] font-bold tracking-wider leading-[2.8rem] S768:leading-[4.8rem] S1024:leading-[5.8rem]h'>
                                Listings in Cities <br /> and Provinces in Nigeria
                            </h2>

                        </div>

                        <div>
                            <Link href='listings'>
                            <p className='hidden text-[1.2rem] S768:flex items-end justify-end gap-1 w-full italic pt-10 cursor-pointer test-primaryColor tracking-widest'>
                                View All Listing <span className=' text-[1.8rem] '>
                                    < VscArrowSmallRight />
                                </span>
                            </p>

                            </Link>

                        </div>

                    </div>

                    <Link href='listings' className=' w-full flex items-center justify-center'>

                        <p className='flex S768:hidden items-end justify-end gap-1 w-full text-[1.4rem] font-medium pt-6 cursor-pointer test-primaryColor tracking-widest not-italic'>
                            View All Listing <span className=' text[2rem] -translate-y-1'>
                                < VscArrowSmallRight />
                            </span>
                        </p>

                    </Link>

                </div>
                <div className=' mt-10 flex flex-col S600:grid S600:grid-cols-2 S1024:grid-cols-3 items-center justify-center gap-8'>

            {
                listingProperty.slice(0, 6).map((item, index)=>{
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
                                    <TbCurrencyNaira/>
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
            </div>

        </article>
    </section>
  )
}

export default Properties