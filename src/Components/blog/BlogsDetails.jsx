import React from 'react'
import {PortableText} from '@portabletext/react'
import { PortableTextComponent } from '../PortableTextComponent'
import { VscArrowSmallLeft } from 'react-icons/vsc';
import Link from 'next/link';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';


function getTopPost(){

   const post = client.fetch(`*[_type == "post" ]`)

    return post
}

const BlogsDetails = async ({query}) => {

  const post = await getTopPost()

  return (

    <section className='w-full min-h-[88vh] pb-28'>

      <div className='w-[95%] S768:w-[90%] m-auto'>
        <div className=' flex items-center justify-center w-fit h-14  shadow-shadow ml-9 mt-6'>
          <button className='  p-2' >
            <Link href='blogs' className=' w-fit text-[3rem] flex items-center'>
            <p>
                <VscArrowSmallLeft/>
            </p>
            <p className=' text-[1.6rem]'>
              Back
            </p>
            
            </Link>
          </button>
        </div>

      </div>

      <article className=' w-[95%] S768:w-[90%] m-auto  '>

        <div className=' w-full grid S768:grid-cols-2 gap-16 mt-24'>

          <div className=' mt-10 S768:mt-16'>
            {

              [query].map((item, index)=>{

                const { desc, publishedAt, body } = item;

                return(

                  <div className=' flex flex-col items-start justify-start gap-10' key={index}>

                    <div className=' flex flex-col items-start justify-start gap-4'>
                      <h1 className=' w-full text-[2rem] font-bold'>
                        {desc}
                      </h1>
                      <p className=' text-[1.2rem] font-semibold'>
                          {new Date(publishedAt).toDateString('en-UK',{day: 'numeric',
                          month: 'long',
                          year: 'numeric',})}
                      </p>
                    </div>
                    <div>
                      <PortableText value={body}  components={PortableTextComponent}/>
                    </div>
                  </div>

                )
              })
            }
          </div>

          <div className=' flex flex-col items-center justify-start gap-16'>

            {
              post.slice(0, 6).map((img, i)=> {
                const {image, title, _id, desc, publishedAt} = img;

                  return(

                    <Link href={`/blogs/${_id}`} className=' shadow-shadow p-4 rounded-3xl'>

                      <div className=' flex flex-col S600:flex-row  S768:flex-col S1024:flex-row items-start justify-start gap-5' key={i}>

                        <Image  src={urlForImage(image).url()} width={2000} height={2000} priority alt='banner' className=" w-full S600:w-[20rem] S600:h-[14rem] S768:w-full S768:h-[15rem] S1024:w-[20rem] S1024:h-[13rem] object-cover rounded-3xl" />
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
      </article>
    </section>
  )
}

export default BlogsDetails