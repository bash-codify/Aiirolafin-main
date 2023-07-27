import React from 'react'
import { VscArrowSmallRight } from 'react-icons/vsc'
import { client } from '../../../sanity/lib/client'
import Content from './Content'


function getProperty(){
    const query = client.fetch(`*[_type == "listings"]`)
    
    return query
}

const Properties = async () => {

    const query = await getProperty();
  return (
    <section className=' w-full min-h-screen'>

        <article className=' w-[95%] S1024:w-[90%] m-auto mt-16'>
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
                            <p className='hidden text-[1.2rem] S768:flex items-end justify-end gap-1 w-full italic pt-10 cursor-pointer test-primaryColor tracking-widest'>
                                View All Listing <span className=' text-[1.8rem] '>
                                    < VscArrowSmallRight />
                                </span>
                            </p>

                        </div>

                    </div>

                    <div className=' w-full flex items-center justify-center'>

                        <p className='flex S768:hidden items-end justify-end gap-1 w-full text-[1.4rem] font-medium pt-6 cursor-pointer test-primaryColor tracking-widest not-italic'>
                            View All Listing <span className=' text[2rem] -translate-y-1'>
                                < VscArrowSmallRight />
                            </span>
                        </p>

                    </div>

                </div>
                <div>
                    <Content/>
                </div>
            </div>

        </article>
    </section>
  )
}

export default Properties