'use client'
import React from 'react'
import { client } from '../../../sanity/lib/client'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import Request from '../contactpage/Request'
import { PortableTextComponent } from '../PortableTextComponent'


function getAbout(){
   const query = client.fetch(`*[_type == "about" ]`)

  return query
}

const AboutPage = async () => {
  const query = await getAbout()
  
  return (
    <section className=' w-full min-h-[88vh]'>
        <div className=' w-full min-h-[35vh]  S768:min-h-[35vh] bg-[#111144d2] '>
            <div className=' flex items-center justify-center min-h-[35vh] S768:min-h-[35vh] text-white'>

                <h1 className=' text-[4rem] font-semibold'>
                    About Us
                </h1>

            </div>

        </div>
        <article className=' w-[90%] m-auto'>

          <div className=' mt-28 '>
            <div>
              <h2 className=' text-[2.5rem] font-semibold mb-[1rem] text-neutral-400'>
                Welcome
              </h2>
              <h1 className=' text-[2.5rem] font-semibold mb-[1rem]'>
                Aiirolafin Real Estate Company
              </h1>
            </div>
            <div>
              {
                query.map((item, index)=>{
                  const {name, image, desc,content} = item
                 
                  return(
                    <div className=' grid grids-col gap-10'>
                      <div>

                        <PortableText value={content}  components={PortableTextComponent}/>
                        
                        
                      </div>
                      <div>
                        <Image  src={urlForImage(image).url()} width={2000} height={2000} priority alt='Managing Director' className=' w-full object-contain aspect-auto rounded-3xl ' />
                        <div className=' pt-2'>
                          <p className=' text-[1.6rem] font-semibold'>
                            {name}
                          </p>
                          <p className=' w-full text-[1.2rem] font-medium'>
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          </article>
          <div>
            <Request/>
          </div>
      </section>
  )
}

export default AboutPage