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

const BlogPage = async () => {
    const query = await getPost()

  return (
        <section className=' w-full min-h-[90vh] pb-28'>

            <div className=' w-full min-h-[30vh] S768:min-h-[35vh]  bg-[#111144d2] '>
                <div className=' flex items-center justify-center min-h-[30vh] S768:min-h-[35vh] text-white'>

                    <h1 className=' text-[4rem] font-semibold'>
                        Blogs
                    </h1>

                </div>

            </div>

        <article className=' w-[95%] S500:w-[90%]  m-auto mt-16'>
            <div>

                <div className=' flex flex-col S768:grid S768:grid-cols-2 S1200:grid-cols-3 items-center justify-center gap-12 mt-24 s'>
                    {
                        query.map((item, index )=>{
                            
                            const {image, title, _id, desc, publishedAt} = item;
                            

                            return (

                                <Fragment Fragment key={index}>
                                
                                <Link href={`/blogs/${_id}`} className=' shadow-shadow p-4 rounded-3xl' key={index}>
                                    <Image  src={urlForImage(image).url()} width={2000} height={2000} priority alt='banner' className=" w-full h-[30rem] object-cover rounded-3xl " />
                                    <div className=' pt-3'>
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
                                
                                
                                </Fragment>

                            )
                        })
                    }
                </div>
            </div>
        </article>
    </section>
  )
}

export default BlogPage