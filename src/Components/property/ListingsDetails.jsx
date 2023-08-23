import React from 'react'
import {PortableText} from '@portabletext/react'
import { PortableTextComponent } from '../PortableTextComponent'
import { VscArrowSmallLeft } from 'react-icons/vsc';
import Link from 'next/link';

const ListingsDetails = ({query}) => {

  return (

    <section className='w-full min-h-[88vh] pb-28'>

      <div className='w-[99%] S768:w-[90%] m-auto'>
        <div className=' flex items-center justify-center w-fit h-14  shadow-shadow ml-9 mt-6'>
          <button className='  p-2' >
            <Link href='listings' className=' w-fit text-[3rem] flex items-center'>
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

           
        <article className=' w-[90%] S768:w-[70%] S900:w-[65%] S1024:w-[50%] m-auto'>
         <div className=' mt-10 S768:mt-16'>
          {
            [query].map((item, index)=>{
              const { content } = item;
              return(
               
                <div className=' grid gap-6' key={index}>

                  <div>
                     <PortableText value={content}  components={PortableTextComponent}/>
                  </div>

                </div>

              )
            })
          }
         </div>
        </article>
    </section>
  )
}

export default ListingsDetails