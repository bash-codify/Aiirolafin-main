import Link from 'next/link';
import React from 'react';
import { MdContactMail} from 'react-icons/md';

const Request = () => {
  return (
    <section className=' w-full min-h-[50vh] S768:min-h-[40vh] bg-neutral-100 mt-20'>
        <article className=' w-[90%] S768:w[80%] S820:w-[75%] S900:w-[70%] S1024:w-[65%] S1200:w-[60%] m-auto'>
            <div className=' flex flex-col items-center justify-center min-h-[50vh] S768:min-h-[40vh] gap-10'>
                <div>
                    <h1 className='text-[3rem] S768:text-[3.2rem] S820:text-[3.4] S900:text-[3.6rem] font-bold text-center '>
                        Any questions? Contact us now to discuss about a Property!
                    </h1>

                </div>
                
                <div className=' w-full S600:w-[80%] S1024:w-[75%] S1200:w-[80%] h-20 bg-primaryColor flex items-center justify-center rounded-2xl'>
                    <Link href='contact'>
                        <button type='button' className=' text-white text-[1.6rem] flex items-center justify-center gap-6 '>
                            <span >
                                <MdContactMail/>
                            </span>
                            Contact Now!
                        </button>
                    
                    </Link>
                </div>
            </div>

        </article>

    </section>
  )
}

export default Request