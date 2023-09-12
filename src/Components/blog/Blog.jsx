import React, { Fragment } from 'react'
import { VscArrowSmallRight } from 'react-icons/vsc'
import { client } from '../../../sanity/lib/client'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'

function getPost(){

   const query = client.fetch(`*[_type == "post" ]`)

    return query
}

const Blog = async () => {
    const query = await getPost()

  return (
        <section className=' w-full min-h-[90vh] pt-10'>

        <article className=' w-[95%] S500:w-[90%]  m-auto mt-16'>
            <div>
                <div  className=' flex flex-col items-start justify-start gap-4 '>
                    <p className=' text-[1.6rem] text-primaryColor font-semibold tracking-widest border-b-2 border-primaryColor'>
                        Blogs
                    </p>

                    <div className=' w-full flex items-center justify-between'>
                        <div className=' pt-5'>
                            <h2 className=' text-[2.6rem] S768:text-[3rem]  S1024:text-[3.4rem] font-bold tracking-wider leading-[2.8rem] S768:leading-[4.8rem] S1024:leading-[5.8rem]h'>
                                Articles related to <br /> Aesthetic home design
                            </h2>

                        </div>

                        <Link href='blogs'>
                            <p className='hidden text-[1.2rem] S768:flex items-end justify-end gap-1 w-full italic pt-10 cursor-pointer test-primaryColor tracking-widest'>
                                View All Blogs <span className=' text-[1.8rem] '>
                                    < VscArrowSmallRight />
                                </span>
                            </p>

                        </Link>

                    </div>

                    <Link href='blogs' className=' w-full flex items-center justify-center'>

                        <p className='flex S768:hidden items-end justify-end gap-1 w-full text-[1.4rem] font-medium pt-6 cursor-pointer test-primaryColor tracking-widest not-italic'>
                            View All Listing <span className=' text[2rem] -translate-y-1'>
                                < VscArrowSmallRight />
                            </span>
                        </p>

                    </Link>

                </div>
                <div className=' flex flex-col  S1024:flex-row gap-16 mt-24'>
                    <div>

                        {
                            query.slice(0, 1).map((item, index )=>{
                                
                                const {image, title, _id, desc, publishedAt} = item;

                                return (

                                
                                    
                                    <Link href={`/blogs/${_id}`} className=' shadow-shadow p-4 rounded-3xl flex flex-col S600:flex-row S900:flex-col items-start justify-start gap-5 h-fit' key={index}>
                                        <Image  src={urlForImage(image).url()} width={2000} height={2000} priority alt='banner' className=" w-full S600:w-[20rem] S600:h-[14rem] S768:w-full S768:h-[15rem] S1024:w-[70rem] S1024:h-[33rem] object-cover rounded-3xl" />
                                        <div >
                                            <p className=' text-[1.4rem]'>
                                                {new Date(publishedAt).toDateString('en-UK',{day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',})}
                                            </p>
                                            <h2 className=' text-[2rem] font-semibold'>
                                                {title}
                                            </h2>
                                            <p className=' text-[1.4rem]'>
                                                {desc}
                                            </p>
                                        </div>
                                    </Link>
 
                                )
                            })
                        }
                    </div>
                    <div className=' flex items-center justify-start gap-16 flex-col '>
                        {
                            query.slice(1, 4).map((img, i)=>{
                                const {image, title, _id, desc, publishedAt} = img;

                                return(
                        <Link href={`/blogs/${_id}`} className=' shadow-shadow p-4 rounded-3xl' key={i}>
                        <div className=' flex flex-col S600:flex-row items-start justify-start gap-5' key={i}>
                            <Image  src={urlForImage(image).url()} width={2000} height={2000} priority alt='banner' className=" w-full S600:w-[20rem] S600:h-[14rem] S768:w-full S768:h-[15rem] S1024:h-[13rem] object-cover rounded-3xl" />
                            <div>
                                <p className=' text-[1.2rem]'>
                                    {new Date(publishedAt).toDateString('en-UK',{day: 'numeric',
                                month: 'long',
                                year: 'numeric',})}
                                </p>
                                <h2 className=' text-[2rem] S768:text-[1.7rem] font-semibold'>
                                    {title}
                                </h2>
                                <p className=' text-[1.3rem] S768:text-[1.1rem]'>
                                    {desc}
                                </p>
                            </div>
                        </div>
                        
                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Blog