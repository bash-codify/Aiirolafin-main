import React from 'react'
import { VscArrowSmallRight } from 'react-icons/vsc'
import { client } from '../../../sanity/lib/client'


function getProperty(){
    const query = client.fetch(`*[_type == "listings"]`)
    
    return query
}

const Properties = async () => {

    const query = await getProperty();
  return (
    <section className=' w-full min-h-screen'>

        <article className=' w-w90 m-auto mt-16'>
            <div>
                <div  className=' flex flex-col items-start justify-start gap-4'>
                    <p className=' text-lg text-primaryColor font-medium tracking-widest'>
                        Listings
                    </p>

                    <div className=' w-full flex items-center justify-between'>
                        <div>
                            <h2 className=' text-2xl S768:text-3xl S1024:text-4xl font-bold tracking-wider leading-[2.8rem] S768:leading-[3.6rem] S1024:leading-[3.8rem]'>
                                Listings in Cities <br /> and Provinces in Nigeria
                            </h2>

                        </div>

                        <div>
                            <p className='hidden S768:flex items-end justify-end gap-1 w-full text-[.9rem] font-medium italic pt-14 cursor-pointer test-primaryColor tracking-widest'>
                                View All Listing <span className=' text-base'>
                                    < VscArrowSmallRight />
                                </span>
                            </p>

                        </div>

                    </div>

                    <div className=' w-full flex items-center justify-center'>

                        <p className='flex S768:hidden items-end justify-end gap-1 w-full text-[.9rem] font-medium pt-6 cursor-pointer test-primaryColor tracking-widest not-italic'>
                            View All Listing <span className=' text-2xl flex items-center justify-center'>
                                < VscArrowSmallRight />
                            </span>
                        </p>

                    </div>

                </div>
            </div>

        </article>
    </section>
  )
}

export default Properties