import React from 'react'
import Content from './Content'
import listing from '../../assets/listings.jpg'
import Image from 'next/image'

const ListingPage = () => {
  return (
    <section className=' w-full min-h-[88vh] mt-[12vh]'>
        <div className=' w-full min-h-[40vh] flex items-center justify-center relative'>
            <Image src={listing} alt='listing' className=' w-full h-[40vh] object-cover ' />

            <div className=' absolute top-0 z-40 flex items-center justify-center h-[40vh] '>
            <h1 className=' text-white text-[5rem]'>
                Our Listings
            </h1>

            </div>
        </div>
        <article className=' w-[95%] S1024:w-[90%] m-auto'>

            <div className=' mt-28'>

                <Content/>

            </div>

        </article>

    </section>
  )
}

export default ListingPage